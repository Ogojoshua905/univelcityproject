"use client"

import { MdAddLocationAlt } from "react-icons/md";
import { AnimatePresence, delay, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../comps/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const fadeInVariants = {
  initial:{
    opacity: 0,
    y: 100,
  },

  animate:  {
    opacity: 1,
    y: 0,
    transition:{
      delay: 0.05
    }
  },
};


export default function page() {
    const controls = useAnimation();
    const containerRef = useRef(null);

    useEffect(() => {
        controls.start("visible");
    }, [controls]);
    

  return (
    <AnimatePresence>
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
      >
      
        <motion.h1
        className="justify-center text-center mt-7 text-7xl">Elevate Your Digital Journey: Explore with Us Today</motion.h1>

        <section className="justify-center object-center items-center md:mt-6  md:ml-11 md:mr-11">
            <Image className="ssm:w-auto object-center sm:h-auto md:w-[170vh] rounded-lg md:h-[70vh] sm:bg-contain lg:bg-cover md:px-12 md:mx-auto py-9" src="/media/chatting.jpg" height="300" width="1000" alt="People Discussing"/>
        </section>

        <section className="grid md:grid-cols-2 sm:grid-cols-1 mt-28 lg:px-28 md:px-14 md:mb-32">
            <div className=" text-xl">
                <h2 className=" sm:text-4xl md:text-8xl pb-12">Let&apos;s Get Connected!</h2>
                <p className=" text-[20px] mb-14 md:leading-loose">Whether you have questions about our blog, categories, or authors,<br /> feel free to reach out using the form and other contact information <br /> provided on this page.</p>

                <div className="mb-4 lg:block sm:flex text-4xl">

                  <Link className="flex mb-10" href="mailto:joshuaexcellency@gmail.com.com">
                    <FaEnvelope className="hover:text-white p-2 rounded-full border"/><span className=" font-medium hover:bg-purple-500">Email</span>
                    </Link>
                  

                
                <Link className="flex mb-10" href="tel:(+234) 9160310791"><FaPhoneAlt className="hover:text-white p-2 rounded-full border" />Phone</Link>
                

                
                 <Link className="flex" href="https://maps.app.goo.gl/eEt7CQvc5nUmHULo7">
                  <MdAddLocationAlt />Map
                 </Link>
                

              </div>
                </div>

            <div className=" border-4 pl-12 border-black dark:border-white sm:leading-8 md:leading-[100px]">
               <ContactForm />
            </div>
        </section>
      </motion.div>
    </AnimatePresence>
  )
}
