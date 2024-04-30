"use client"

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../comps/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



export default function page() {
    const controls = useAnimation();
    const containerRef = useRef(null);

    useEffect(() => {
        controls.start("visible");
    }, [controls]);
    

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="text-5xl"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
      
        <h1 className="justify-center text-center mt-7 text-7xl">Elevate Your Digital Journey: Explore with Us Today</h1>

        <section className="justify-center object-center items-center mt-6 ml-11 mr-11">
            <Image className="w-[1500px]  h-[500px]" src="/media/chatting.jpg" height="300" width="1000" alt="People Discussing"/>
        </section>

        <section className=" grid grid-cols-2 mt-5 pl-28 pr-28">
            <div>
                <h2 className=" text-8xl">Let's Get Connected!</h2>
                <p className=" text-[20px] mb-14">Whether you have questions about our blog, categories, or authors,<br /> feel free to reach out using the form and other contact information <br /> provided on this page.</p>

                <div className="mb-4">
                  <div className=" inline-flex">
                  <Link href="mailto:joshuaexcellency@gmail.com.com">
                    <FaEnvelope className="hover:text-white p-2 border-red-500 hover:border-red-400 hover:bg-red-400 rounded-full border"/>Mail@GamingNow
                    </Link>
                  </div>

                <div className=" flex">
                <Link href="tel:(+234) 9160310791"><FaPhoneAlt /></Link>
                </div>

                <div>
                  
                </div>

              </div>
                </div>

            <div className=" border-4 pl-12 border-black dark:border-white leading-[100px]">
               <ContactForm />
            </div>
        </section>
      </motion.div>
    </AnimatePresence>
  )
}
