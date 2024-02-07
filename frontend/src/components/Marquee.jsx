import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap gap-10 overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear,", repeat: Infinity, duration: 5 }}
          className="text-[17vw] uppercase font-bold leading-none  pt-10  mb-10 "
        >
          We are Ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear,", repeat: Infinity, duration: 5 }}
          className="text-[17vw] uppercase font-bold leading-none  pt-10  mb-10"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
