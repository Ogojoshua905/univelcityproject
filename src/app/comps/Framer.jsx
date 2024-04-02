import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Framer({children}) {

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
        },
        exit: {
            opacity: 1
        }
    }

    const slide = {
        initial: {
            top: "100vh"
        },
        enter: {
            top:"100vh"
        },
        exit: {
            top:"100vh"
        } 
    }

  return (
    <div className="inner">
        
        <motion.div {...anim(opacity)} className="props">
        {children}
        </motion.div>
        
    </div>
  )
}
