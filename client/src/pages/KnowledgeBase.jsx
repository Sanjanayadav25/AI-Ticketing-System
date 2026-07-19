import api from "../api/api";
import toast from "react-hot-toast";
import UploadCard from "../components/knowledge/UploadCard";
import { useState, useEffect } from "react";
import FileCard from "../components/knowledge/FileCard";

function KnowledgeBase() {
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    try {
      const response = await api.get("/knowledge-files");
      setFiles(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load files.");
    }
  };

  const uploadPDF = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("PDF uploaded successfully!");
      await loadFiles();
    } catch (error) {
      console.error(error);
      toast.error("Upload failed.");
    }
  };

  const deleteFile = async (filename) => {
    const confirmDelete = window.confirm(`Delete "${filename}"?`);

    if (!confirmDelete) return;

    try {
      await api.delete(`/knowledge/${filename}`);

      toast.success("Document deleted!");

      await loadFiles();
    } catch (error) {
      console.error(error);

      toast.error("Delete failed.");
    }
  };

  const clearKnowledgeBase = async () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the entire knowledge base?",
    );

    if (!confirmClear) return;

    try {
      await api.post("/clear-knowledge");

      toast.success("Knowledge Base cleared!");

      await loadFiles();
    } catch (error) {
      console.error(error);

      toast.error("Failed to clear knowledge base.");
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="space-y-8">
      <UploadCard onUpload={uploadPDF} />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Uploaded Documents</h2>

          <p className="text-slate-500">{files.length} Files</p>
        </div>

        {files.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-md">
            <p className="text-slate-500">
              No knowledge documents uploaded yet.
            </p>
          </div>
        ) : (
          files.map((file) => (
            <FileCard key={file.filename} file={file} onDelete={deleteFile} />
          ))
        )}
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={clearKnowledgeBase}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition font-semibold"
        >
          Clear Knowledge Base
        </button>
      </div>
    </div>
  );
}

export default KnowledgeBase;
