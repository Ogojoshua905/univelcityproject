

export default function ContactForm() {
  return (
    <form className="lg:max-w-md my-auto mx-auto leading-10">
       <h2 className="text-3xl font-semibold mb-6 mt-10">Connect with Us</h2>
            <div>
              <div className="mb-2">
            <input type="text" id="name" name="name" placeholder="Your Name" className=" block w-full border-b-2 shadow-sm focus:outline-none" required /> <br />
              </div>

              <div className=" mb-4">
            <input type="email" id="email" name="email" placeholder="Your Email" className="block w-full border-b-2 focus:outline-none" required /><br />
              </div>

              <div className=" mb-2">
            <input type="text" id="subject" name="subject" placeholder="Subject" className="mt-1 block sm:w-auto lg:w-full border-b-2 focus:outline-none" required /><br />
              </div>

              <div>
            <textarea className="mt-1 block w-full border-b-2 shadow-sm focus:outline-none" required name="message" id="message" cols="5" rows="4" placeholder="Type Your Message"></textarea><br />
              </div>

            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2">Submit</button>
    </div>
    </form>
  ) 
}
 