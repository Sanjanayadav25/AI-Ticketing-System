import {
    CheckCircle2,
    Database,
    Bot,
} from "lucide-react";

function SystemStatus() {
    return (
        <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

            <h2 className="text-2xl font-bold mb-6">
                System Status
            </h2>

            <div className="space-y-6">

                <div className="flex items-center gap-4">

                    <Database className="text-green-600" />

                    <span>MongoDB Connected</span>

                </div>

                <div className="flex items-center gap-4">

                    <Bot className="text-indigo-600" />

                    <span>Groq AI Running</span>

                </div>

                <div className="flex items-center gap-4">

                    <CheckCircle2 className="text-green-600" />

                    <span>FAISS Ready</span>

                </div>

            </div>

        </div>
    );
}

export default SystemStatus;