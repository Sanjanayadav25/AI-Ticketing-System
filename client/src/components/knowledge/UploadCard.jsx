import { useState } from "react";
import { Upload, FileText } from "lucide-react";

function UploadCard({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);

    try {
      await onUpload(selectedFile);
      setSelectedFile(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Upload className="text-indigo-600" size={24} />
        Upload Knowledge PDF
      </h2>

      <p className="text-slate-500 mt-2">
        Upload company documents that the AI can search.
      </p>

      {/* File Picker */}

      <label className="mt-8 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl h-44 cursor-pointer hover:border-indigo-500 transition">
        <div className="text-center">
          <FileText
            className="mx-auto text-indigo-600"
            size={45}
          />

          <p className="mt-3 font-medium">
            {selectedFile
              ? selectedFile.name
              : "Choose a PDF"}
          </p>

          <p className="text-sm text-slate-400 mt-1">
            PDF files only
          </p>
        </div>

        <input
          type="file"
          accept=".pdf"
          hidden
          onChange={(e) =>
            setSelectedFile(e.target.files[0])
          }
        />
      </label>

      <button
        disabled={!selectedFile || uploading}
        onClick={handleUpload}
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-semibold py-3 rounded-xl transition"
      >
        {uploading ? "Uploading..." : "Upload PDF"}
      </button>
    </div>
  );
}

export default UploadCard;