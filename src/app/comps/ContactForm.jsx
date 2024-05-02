

export default function ContactForm() {
  return (
    <div>
       <h2 className=" mt-20 text-6xl justify-center mb-10">Connect with Us</h2>
            <div>
            <input type="text" id="name" name="name" placeholder="Your Name" className="border-b-2 mb-4 dark:border-white border-black focus:border-gray-900 focus:outline-none md:h-[100px] md:w-[450px]" /> <br />
            <input type="email" id="email" name="email" placeholder="Your Email" className="border-b-2 mb-4 dark:border-white border-black focus:border-gray-900 focus:outline-none md:h-[80px] md:w-[450px]" /><br />
            <input type="text" id="subject" name="subject" placeholder="Subject" className="border-b-2 mb-4 dark:border-white border-black focus:border-gray-900 focus:outline-none h-[100px] md:w-[450px]" /><br />
            <textarea className="border-b-2 mb-4 border-black dark:border-white focus:outline-none resize h-[150px] md:w-[400px]" name="message" id="message" cols="10" rows="4" placeholder="Type Your Message"></textarea><br />
            <button type="submit" className=" bg-slate-700 text-white text-center h-[80px] md:w-[250px] rounded-sm hover:bg-purple-700">Submit</button>
    </div>
    </div>
  ) 
}
