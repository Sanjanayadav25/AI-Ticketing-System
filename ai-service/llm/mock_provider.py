from llm.provider import LLMProvider


class MockProvider(LLMProvider):
    def generate(self, prompt: str):
        return f"Mock AI Response: {prompt}"