def build_prompt(context ,query):
    return f"""
    You are a helpful AI assistant.

    Context:
  {context}

  Question:
  {query}

 Answer based only on the provided context.
 """