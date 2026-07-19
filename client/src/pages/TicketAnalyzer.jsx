import { useState } from "react";
import { motion } from "framer-motion";
import api from "../api/api";

import ResultCard from "../components/ticket/ResultCard";
import LoadingSpinner from "../components/common/LoadingSpinner";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function TicketAnalyzer() {
  const [ticket, setTicket] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!ticket.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await api.post("/process-ticket", {
        ticket,
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold">AI Ticket Analyzer</h1>

        <p className="text-slate-500 mt-2">
          Analyze employee support tickets using AI
        </p>
      </div>

      {/* Ticket Input */}

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <label className="font-semibold text-lg">
          Ticket Description
        </label>

        <textarea
          rows={8}
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
          placeholder="Describe the employee issue..."
          className="w-full mt-4 border rounded-xl p-5 resize-none outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-xl text-white font-semibold"
        >
          {loading ? "Analyzing..." : "Analyze Ticket"}
        </button>

        {loading && <LoadingSpinner />}
      </div>

      {/* Result */}

      {result && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* ==================== ANALYSIS ==================== */}

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Ticket Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ResultCard
                title="Category"
                value={result.category}
              />

              <ResultCard
                title="Priority"
                value={result.priority}
              />
            </div>

            {/* Assigned Team */}

            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md border p-6 mt-6"
            >
              <h3 className="text-slate-500 font-semibold">
                Assigned Team
              </h3>

              <p className="text-xl font-bold mt-3">
                {result.assigned_team}
              </p>
            </motion.div>

            {/* Summary */}

            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md border p-6 mt-6"
            >
              <h3 className="text-slate-500 font-semibold">
                Ticket Summary
              </h3>

              <p className="mt-3 text-slate-700 leading-7">
                {result.summary}
              </p>
            </motion.div>
          </div>

          {/* ==================== AI ASSISTANCE ==================== */}

          <div>
            <h2 className="text-3xl font-bold mb-6">
              AI Assistance
            </h2>

            {/* Knowledge */}

            <motion.div
              variants={cardVariants}
              className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6"
            >
              <h3 className="text-indigo-700 font-bold text-lg">
                Knowledge Base Match
              </h3>

              <p className="mt-4 text-slate-700 leading-7">
                {result.knowledge}
              </p>
            </motion.div>

            {/* Previous Ticket */}

            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md border p-6 mt-6"
            >
              <h3 className="font-bold text-lg">
                Similar Previous Ticket
              </h3>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-slate-500 font-medium">
                    Previous Ticket
                  </p>

                  <p className="mt-1">
                    {result.similar_ticket.ticket}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 font-medium">
                    Previous Resolution
                  </p>

                  <p className="mt-1">
                    {result.similar_ticket.resolution}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Resolution */}

            <motion.div
              variants={cardVariants}
              className="bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-3xl shadow-xl p-8 mt-6"
            >
              <h2 className="text-2xl font-bold mb-5">
                AI Suggested Resolution
              </h2>

              <p className="leading-8 whitespace-pre-line">
                {result.suggested_resolution}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default TicketAnalyzer;