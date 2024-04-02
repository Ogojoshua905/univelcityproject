import React from "react";
import { motion } from "framer-motion";

 function page() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}>
      Hello World
    </motion.div>
  )
}

export default page;