from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import UploadFile,File
import startup

from llm.groq_provider import GroqProvider
from rag.retriever import retrieve
from prompts.rag_prompt import build_prompt
from utils.upload_handler import process_pdf
from services.ticket_pipeline import process_ticket
from vectorstore.faiss_store import clear_index, rebuild_index
from repositories.knowledge_repository import get_all_files , delete_file, get_all_chunks, delete_all_chunks, get_total_chunks
from embeddings.embedding_model import get_embedding
from repositories.ticket_repository import get_all_tickets, get_total_tickets
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

provider = GroqProvider()


class ChatRequest(BaseModel):
    message: str

class TicketRequest(BaseModel):
    ticket : str    






@app.post("/chat")
def chat(request: ChatRequest):
    try:
      
       context = retrieve(request.message)

       prompt = build_prompt(context, request.message)
       response = provider.generate(prompt)

       return {
        "user_message": request.message,
        "retrieved_context": context,
        "ai_response": response,
       } 
    
    except Exception as e:
         raise HTTPException(
            status_code=500,
            detail=str(e)
        )
       

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    try:

        file_path = f"uploads/{file.filename}"

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        chunks = process_pdf(file_path)

        return {
            "message": "PDF processed successfully",
            "chunks_created": len(chunks)
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    


@app.post("/process-ticket")
def process_ticket_api(request: TicketRequest):

    try:

        return process_ticket(request.ticket)

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@app.post("/clear-knowledge")
def clear_knowledge():

    try:

        delete_all_chunks()

        clear_index()

        return {
            "message": "Knowledge Base Cleared Successfully"
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@app.get("/knowledge-files")
def knowledge_files():

    try:

        return get_all_files()

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.delete("/knowledge/{filename}")
def delete_knowledge(filename):
    try:

      # Delete PDF chunks from MongoDB
      delete_file(filename)

      # Load remaining chunks
      documents = get_all_chunks()

      texts = []

      for document in documents:
          texts.append(document["text"])

          if texts:

            embeddings = get_embedding(texts)

            rebuild_index(
             embeddings,
            texts
            )

            print("Knowledge FAISS rebuilt.")

          else:

             clear_index()

             print("Knowledge Base is now empty.")

      return {
        "message": f"{filename} deleted successfully."
      }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@app.get("/tickets")
def get_tickets():

    try:

        return get_all_tickets()

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )   

@app.get("/stats")
def get_stats():

    try:

        files = get_all_files()

        return {
            "knowledge_files": len(files),
            "knowledge_chunks": get_total_chunks(),
            "tickets": get_total_tickets()
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )