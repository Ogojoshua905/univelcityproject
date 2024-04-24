import React, { Children, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"



export default function Intro() {
  return (
    <div>
      <motion.div
      variants={{
        hidden: {opacity: 0, y: 75}
      }}>
        {Children}
      </motion.div>
    </div>
  )
}
