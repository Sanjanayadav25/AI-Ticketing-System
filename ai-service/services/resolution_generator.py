from llm.groq_provider import GroqProvider

provider = GroqProvider()

def generate_resolution(ticket, knowledge, similar_ticket):
       prompt = f"""
    You are an expert IT Support Engineer.

     Current Ticket:
     {ticket}

     Company Knowledge:
     {knowledge}

     Similar Solved Ticket:
     {similar_ticket["ticket"]}

     Previous Resolution:
     {similar_ticket["resolution"]}

     Using BOTH the company knowledge and the previous resolution,
     suggest the best resolution for the current ticket.

     Keep it practical and concise.
     """

       return provider.generate(prompt)