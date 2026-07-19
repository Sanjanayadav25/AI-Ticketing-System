import { motion } from "framer-motion";

function LoadingSpinner() {

    return (

        <div className="flex flex-col items-center py-16">

            <motion.div

                animate={{
                    rotate: 360,
                }}

                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                }}

                className="w-14 h-14 rounded-full border-4 border-indigo-600 border-t-transparent"

            />

            <p className="mt-6 text-slate-500">

                AI is analyzing the ticket...

            </p>

        </div>

    );

}

export default LoadingSpinner;