"use client"
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Input from "../comps/Input";




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

        <section className=" grid grid-cols-2">
            <div>
                <h2 className=" text-9xl">Let's Get Connected!</h2>
                <p className=" text-sm">Whether you have questions about our blog, categories, or authors, feel free to reach out using the form and other contact information provided on this page.</p>
            </div>

            <div className=" border-4  border-black">
                <h2>Connect with Us Today</h2>

                <div className=" inline-block">
                <Input className="inline-block w-auto" type="text" place="Your Name" /> <br />
                <Input className="inline-block w-auto" type="text" place="Your Email" /><br />
                <Input type="Number" place="Your Phone Number"/>
                <Input />
                </div>
            </div>
        </section>
      </motion.div>
    </AnimatePresence>
  )
}
