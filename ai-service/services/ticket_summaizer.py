from llm.groq_provider import GroqProvider

Provider = GroqProvider()

def summarize_ticket(ticket_description):
    prompt = f""" 
You are a AI Ticket Summarizer
Summarize the following support ticket in one concise sentence.

Return only the summary.

Ticket:
{ticket_description}

"""
    return Provider.generate(prompt).strip()