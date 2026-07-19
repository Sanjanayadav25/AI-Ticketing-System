import os
from utils.pdf_loader import extract_text_from_pdf
from rag.chunker import chunk_text
from embeddings.embedding_model import get_embedding
from vectorstore.faiss_store import create_index , get_chunks , get_index , rebuild_index
from repositories.knowledge_repository import save_chunks , get_all_chunks


import os

def process_pdf(pdf_path):

    text = extract_text_from_pdf(pdf_path)

    chunks = chunk_text(text)

    filename = os.path.basename(pdf_path)

    save_chunks(filename, chunks)

     # Load every chunk stored in MongoDB
    documents = get_all_chunks()

    texts = []

    for document in documents:
        texts.append(document["text"])

    # Generate embeddings for every chunk
    embeddings = get_embedding(texts)

    # Rebuild FAISS from scratch
    rebuild_index(embeddings, texts)

    index = get_index()

    print("Total index:", index.ntotal)
    print("Total chunks:", len(get_chunks()))

    return chunks