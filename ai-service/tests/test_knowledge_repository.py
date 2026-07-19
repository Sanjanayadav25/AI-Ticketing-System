from repositories.knowledge_repository import (
    save_chunks,
    get_all_chunks
)

chunks = [
    "This is chunk one.",
    "This is chunk two.",
    "This is chunk three."
]

save_chunks(
    "Demo.pdf",
    chunks
)

print(get_all_chunks())