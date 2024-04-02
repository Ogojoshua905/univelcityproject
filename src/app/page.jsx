import Image from "next/image"

export default function Home() {
  return (
    <div>
      <h1 className="text-[40px] justify-center text-center mt-8">Master Your Game: Level Up and Conquer!</h1>

      <div className="grid lg:grid-cols-3 gap-5 mt-8 text-white rounded-2xl">
        <div className="border border-black bg-blue-950">
          <h2 className="text-2xl ">Unleash <br />  Your Creativity, <br />
           Your Potential.</h2>
          <p><q>Embark on thrilling adventures, compete in epic battles, and forge unforgettable memories as you navigate through a myriad of gaming landscapes</q></p>
        </div>

        <div className=" border-black object-fill transform hover:scale-95 transition ease-in-out duration-500 relative">
          <Image className="hover:scale-95" src='https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400' width='500' height='100'/>
        </div>

        <div className="  border border-black bg-violet-700 text-white">
            <p>
"Step into the virtual realm, where every click unlocks captivating narratives and thought-provoking challenges. Welcome to a world where imagination meets skill, and every game is an adventure waiting to be explored. Embrace the thrill,  ignite your passion, and embark on a gaming odyssey that knows no bounds."</p>
        </div>
      </div>
    </div>
  )
}
