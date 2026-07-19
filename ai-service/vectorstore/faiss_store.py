import faiss
import numpy as np

index = None
all_chunks = []

def create_index(embeddings , chunks):
    global index
    global all_chunks

    embeddings = np.array(embeddings).astype("float32")
    dimension = embeddings.shape[1]
    
    if index is None:
       index = faiss.IndexFlatL2(dimension)

    index.add(embeddings)
    all_chunks.extend(chunks)
    return index

def get_index():
    return index

def get_chunks():
    return all_chunks

def clear_index():
    global index
    global all_chunks

    total_vectors = 0

    if index is not None:
        total_vectors = index.ntotal

    index = None
    all_chunks = []

    print(f"Cleared {total_vectors} vectors from FAISS.")

def rebuild_index(embeddings, chunks):
    global index
    global all_chunks

    embeddings = np.array(embeddings).astype("float32")

    dimension = embeddings.shape[1]

    # Create a brand-new FAISS index
    index = faiss.IndexFlatL2(dimension)

    # Add all embeddings
    index.add(embeddings)

    # Replace old chunks with new ones
    all_chunks = list(chunks)

    return index    