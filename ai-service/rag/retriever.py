import numpy as np

from embeddings.embedding_model import get_embedding
from vectorstore.faiss_store import get_index , get_chunks

def retrieve(query):
    index = get_index()

    if index is None:
      return ""
    
    query_embedding = get_embedding([query])
    query_embedding = np.array(query_embedding).astype("float32")

    
    distances , indices = index.search(query_embedding , 1)

    chunks = get_chunks()

    return chunks[indices[0][0]]