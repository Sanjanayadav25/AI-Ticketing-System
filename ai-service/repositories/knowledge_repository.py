from database.mongodb import db

knowledge_collection = db["knowledge_chunks"]


def save_chunks(filename ,chunks):

     # Remove old chunks of this PDF if they already exist
    knowledge_collection.delete_many({
        "filename": filename
    })

    documents = []

    for i , chunk in enumerate(chunks):
        documents.append({
            "filename":filename,
            "chunk_number":i,
              "text": chunk
        })

    knowledge_collection.insert_many(documents)

    print(f"{filename}:{len(documents)} chunks saved in MongoDB")

def get_all_chunks():

    return list(
        knowledge_collection.find(
            {},
            {
                "_id": 0
            }
        )
    )

def get_total_chunks():
    return knowledge_collection.count_documents({})

def get_all_files():

    documents = get_all_chunks()

    files = {}

    for document in documents:

        filename = document["filename"]

        if filename not in files:
            files[filename] = 0

        files[filename] += 1

    result = []

    for filename, count in files.items():

        result.append({
            "filename": filename,
            "chunks": count
        })

    return result

def delete_file(filename):

    knowledge_collection.delete_many(
        {
            "filename": filename
        }
    )

    print(f"{filename} deleted from MongoDB")   
     
def delete_all_chunks():

    result = knowledge_collection.delete_many({})

    print(f"{result.deleted_count} chunks deleted.")     