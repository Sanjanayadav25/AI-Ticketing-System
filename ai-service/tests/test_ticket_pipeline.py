from services.ticket_pipeline import process_ticket



ticket = """
My laptop screen keeps flickering after installing Windows update.

I have an important client meeting in one hour.

Please fix this urgently.
"""

result = process_ticket(ticket)
print(result)