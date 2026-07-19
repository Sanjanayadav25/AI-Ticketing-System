import json 
from llm.groq_provider import GroqProvider

Provider = GroqProvider()

def classify_ticket(ticket_description:str):
   
    prompt = f"""
     You are an AI Ticket Classifier.

     Analyze the ticket.

     Return ONLY a JSON object.

     Do not explain.
     Do not use markdown.
     Do not write anything before or after the JSON.

     Ticket:
    {ticket_description}

    Return format:

    {{
      "category": "Hardware",
      "priority": "High"
    }}
     """  
     
    response = Provider.generate(prompt)  
    return json.loads(response)