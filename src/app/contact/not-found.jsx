"use client"
import Link from 'next/link';
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

export default function notFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <span className="text-8xl text-red-700 mb-4">
        <MdCancel />
      </span>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops! Can't find the contact page.</h2>
      <p className="text-xl text-gray-600 mb-6">Looks like you've lost your way to our contact info.</p>
      <p className="text-xl text-gray-600 mb-8">Let's navigate you elsewhere:</p>
      <Link href="/">
        <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Back to Contact
        </span>
      </Link>
    </motion.div>
  );
}
