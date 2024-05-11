

export default function ContactForm() {
  return (
    <form className="lg:max-w-md sm:w-auto sm:my-auto sm:mx-auto sm:leading-loose lg:leading-10">
       <h2 className="text-3xl font-semibold mb-6 mt-10">Connect with Us</h2>
            <div>
              <div className="lg:mb-2 sm:my-auto">
            <input type="text" id="name" name="name" placeholder="Your Name" className=" block sm:w-auto lg:w-full border-b-2 shadow-sm focus:outline-none" required /> <br />
              </div>

              <div className=" lg:mb-2 sm:my-auto">
            <input type="email" id="email" name="email" placeholder="Your Email" className="block lg:w-full sm:w-auto border-b-2 focus:outline-none" required /><br />
              </div>

              <div className=" mb-2 sm:my-auto">
            <input type="text" id="subject" name="subject" placeholder="Subject" className="mt-1 block sm:w-auto lg:w-full border-b-2 focus:outline-none" required /><br />
              </div>

              <div className=" sm:my-auto">
            <textarea className="mt-1 block w-full  border-b-2 shadow-sm focus:outline-none" required name="message" id="message" cols="5" rows="4" placeholder="Type Your Message"></textarea><br />
              </div>

            <button type="submit" className=" my-4 sm:mx-4 w-full sm:items-center py-2 mx-auto border border-transparent shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2">Submit</button>
    </div>
    </form>
  ) 
}
 