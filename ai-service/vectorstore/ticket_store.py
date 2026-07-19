import faiss
import numpy as np
from embeddings.embedding_model import get_embedding

ticket_index = None
ticket_database = []

def add_ticket(ticket , resolution):
    global ticket_index
    global ticket_database

    embedding = get_embedding([ticket])
    embedding = np.array(embedding).astype("float32")

    if ticket_index is None :
     
       dimension = embedding.shape[1]
       ticket_index = faiss.IndexFlatL2(dimension)

    ticket_index.add(embedding)

    ticket_database.append({
          "ticket": ticket,
          "resolution": resolution
          })

def search_similar_ticket(ticket):

    if ticket_index is None:
        return None

    embedding = get_embedding([ticket])
    embedding = np.array(embedding).astype("float32")

    distances, indices = ticket_index.search(embedding, 1)
    

    return ticket_database[indices[0][0]]
