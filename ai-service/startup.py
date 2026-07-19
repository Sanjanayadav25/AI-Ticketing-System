from repositories.ticket_repository import get_all_tickets
from vectorstore.ticket_store import add_ticket
from repositories.knowledge_repository import get_all_chunks
from embeddings.embedding_model import get_embedding
from vectorstore.faiss_store import rebuild_index

print("Loading historical tickets from MongoDB...")

tickets = get_all_tickets()

for ticket in tickets:
  add_ticket(
    ticket["ticket"],
    ticket["resolution"]
)

print(f"{len(tickets)} total tickets loaded into FAISS!")

print("Loading knowledge base...")

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

    print(f"{len(texts)} knowledge chunks loaded into FAISS.")

else:

    print("No knowledge chunks found in MongoDB.")