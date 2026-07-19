from database.mongodb import db

ticket_collection = db["tickets"]


def insert_ticket(ticket , resolution):

    existing_ticket = ticket_collection.find_one(
        {"ticket": ticket}
    )

    if existing_ticket:
        print(f"Ticket already exists: {ticket}")
        return

    ticket_collection.insert_one({
        "ticket":ticket,
        "resolution": resolution
    })

    print(f"Inserted: {ticket}")


def get_all_tickets():
    return list(
        ticket_collection.find(
            {},
            {
                "_id": 0
            }
        )
    )

def get_total_tickets():

    return ticket_collection.count_documents({})

def save_resolved_ticket(ticket_document):

    existing = ticket_collection.find_one(
        {"ticket": ticket_document["ticket"]}
    )

    if existing:
        print("Ticket already exists.")
        return

    ticket_collection.insert_one(ticket_document)

    print("New resolved ticket saved.")

 