import React from "react";
import { motion } from "framer-motion";
const Transition = () => {
  return (
    <>
      <motion.div
        className="in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.45, 1] }}
      />
      <motion.div
        className="out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.45, 1] }}
      />
    </>
  );
};

export default Transition;
