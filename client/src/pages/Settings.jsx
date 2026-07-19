import { useEffect, useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";

import ToggleSetting from "../components/settings/ToggleSetting";
import InfoRow from "../components/settings/InfoRow";

function Settings() {
  const [stats, setStats] = useState({
    knowledge_files: 0,
    knowledge_chunks: 0,
  });

  const [aiSuggestions, setAiSuggestions] = useState(true);
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(true);
  const [saveAnalytics, setSaveAnalytics] = useState(true);

  const loadStats = async () => {
    try {
      const response = await api.get("/stats");
      setStats(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load system information.");
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-slate-700 text-2xl mt-2">
          Configure your AI Ticketing System
        </p>
      </div>

      {/* AI Configuration */}

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">AI Configuration</h2>

        <ToggleSetting
          title="Enable AI Suggestions"
          description="Allow the AI model to generate ticket resolutions."
          enabled={aiSuggestions}
          onToggle={() => setAiSuggestions(!aiSuggestions)}
        />

        <ToggleSetting
          title="Enable Knowledge Retrieval"
          description="Retrieve relevant information from uploaded PDFs."
          enabled={knowledgeRetrieval}
          onToggle={() => setKnowledgeRetrieval(!knowledgeRetrieval)}
        />

        <ToggleSetting
          title="Save Ticket Analytics"
          description="Store analyzed ticket statistics."
          enabled={saveAnalytics}
          onToggle={() => setSaveAnalytics(!saveAnalytics)}
        />
      </div>

      {/* System Information */}

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">About System</h2>

        <InfoRow label="LLM Provider" value="Groq" />

        <InfoRow label="LLM Model" value="Llama 3.1 8B Instant" />

        <InfoRow label="Embedding Model" value="all-MiniLM-L6-v2" />

        <InfoRow
          label="AI Pipeline"
          value="RAG (Retrieval-Augmented Generation)"
        />

        <InfoRow label="Vector Store" value="FAISS" />

        <InfoRow label="Knowledge Files" value={stats.knowledge_files} />

        <InfoRow label="Knowledge Chunks" value={stats.knowledge_chunks} />

        <InfoRow label="Frontend" value="React + Tailwind CSS" />

        <InfoRow label="Backend" value="FastAPI" />
      </div>
    </div>
  );
}

export default Settings;
