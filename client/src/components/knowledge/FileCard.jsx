import { FileText, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

function FileCard({ file, onDelete }) {
  return (
    <motion.div
        whileHover={{
        y: -4,
        scale: 1.01,
     }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-4">
        <FileText className="text-indigo-600" size={34} />

        <div>
          <h3 className="font-semibold text-lg">{file.filename}</h3>

          <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
            Indexed
          </span>

          <p className="text-slate-500 text-sm">{file.chunks} Chunks indexed</p>
        </div>
      </div>

      <motion.button
          whileHover={{
        scale: 1.15,
        }}

        whileTap={{
        scale: 0.9,
       }}
        onClick={() => onDelete(file.filename)}
        className="text-red-500 hover:bg-red-100 p-3 rounded-xl transition"
      >
        <Trash2 size={22} />
      </motion.button>
    </motion.div>
  );
}

export default FileCard;
