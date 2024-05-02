"use client"

import { MdAddLocationAlt } from "react-icons/md";
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

        <section className=" grid md:grid-cols-2 mt-28 pl-28 pr-28 mb-32">
            <div>
                <h2 className=" text-8xl pb-12">Let's Get Connected!</h2>
                <p className=" text-[20px] mb-14 leading-loose">Whether you have questions about our blog, categories, or authors,<br /> feel free to reach out using the form and other contact information <br /> provided on this page.</p>

                <div className="mb-4 ">

                  <Link className="flex mb-10" href="mailto:joshuaexcellency@gmail.com.com">
                    <FaEnvelope className="hover:text-white p-2 rounded-full border"/><span className=" font-medium hover:text-pink-500">Email</span>
                    </Link>
                  

                
                <Link className="flex mb-10" href="tel:(+234) 9160310791"><FaPhoneAlt className="hover:text-white p-2 rounded-full border" />Phone</Link>
                

                
                 <Link className="flex" href="https://maps.app.goo.gl/eEt7CQvc5nUmHULo7">
                  <MdAddLocationAlt />Map
                 </Link>
                

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
