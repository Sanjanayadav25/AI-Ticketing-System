import {motion } from "framer-motion"

function ResultCard({ title, value}) {

    return (
         <motion.div
            variants={{

                hidden: {
                    opacity: 0,
                    y: 20,
                },

                visible: {
                    opacity: 1,
                    y: 0,
                },

            }}

            transition={{
                duration: 0.7,
            }}
         className="bg-gray-200 rounded-2xl shadow-md  border-slate-300 border-2  mt-2 p-6">

            <h3 className="text-slate-500">

                {title}

            </h3>

            <p className="text-xl font-bold mt-3">

                {value}

            </p>

        </motion.div>

    );

}

export default ResultCard;