from services.ticket_classifier import classify_ticket
from services.ticket_router import route_ticket
from services.ticket_summaizer import summarize_ticket
from services.resolution_generator import generate_resolution

from rag.retriever import retrieve
from vectorstore.ticket_store import search_similar_ticket
from repositories.ticket_repository import save_resolved_ticket
from vectorstore.ticket_store import add_ticket
from datetime import datetime


def process_ticket(ticket):

    # Step 1
    classification = classify_ticket(ticket)

    # Step 2
    assigned_team = route_ticket(classification["category"])

    # Step 3
    summary = summarize_ticket(ticket)

    # Step 4
    knowledge = retrieve(ticket)

    # Step 5
    similar_ticket = search_similar_ticket(ticket)

    if similar_ticket is None:
        similar_ticket = {
            "ticket": "No similar ticket found",
            "resolution": "No previous resolution available"
        }

    # Step 6
    suggested_resolution = generate_resolution(
        ticket,
        knowledge,
        similar_ticket
    )

    return {
        "category": classification["category"],
        "priority": classification["priority"],
        "assigned_team": assigned_team,
        "summary": summary,
        "knowledge": knowledge,
        "similar_ticket": similar_ticket,
        "suggested_resolution": suggested_resolution
    }

    ticket_document = {
    "ticket": ticket,
    "category": category,
    "priority": priority,
    "assigned_team": assigned_team,
    "summary": summary,
    "resolution": suggested_resolution,
    "created_at": datetime.now().isoformat()
     }

    save_resolved_ticket(ticket_document)

    add_ticket(ticket , suggested_resolution)