"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Button from "./comps/Button"



export const articles = [
  {
    id: 1,
    title: "Exploring the Latest Advancements in Mobile Technology",
    category: "Mobile-Tech",
    author: "John Smith",
    introduction: "Stay ahead of the curve with insights into mobile tech innovations.",
    description: [
      "Exploring the latest advancements in mobile technology.",
      "From foldable screens to 5G connectivity, the mobile tech landscape is constantly evolving.",
      "With each new release, smartphones become more powerful and versatile, reshaping how we communicate, work, and entertain ourselves.",
      "This article delves into the cutting-edge innovations driving the mobile industry forward, offering insights into what the future holds for mobile devices.","Comparing the latest mobile devices in terms of performance, camera quality, and battery life.",
      "With so many options on the market, choosing the right smartphone can be overwhelming.",
      "This article provides side-by-side comparisons of popular devices, helping readers make informed purchasing decisions.",
      "Whether you're interested in flagship models or budget-friendly options, you'll find valuable insights in this article."
    ],
    date: "2024-03-28"
  },
  {
    id: 2,
    title: "Reviewing the Hottest Mobile Games of the Season",
    category: "Mobile-Gaming",
    author: "Emily Johnson",
    introduction: "Dive into the world of mobile gaming and discover top titles.",
    description: [
      "Reviewing the hottest mobile games of the season.",
      "From addictive puzzle games to immersive RPGs, the world of mobile gaming offers something for everyone.",
      "This article highlights standout titles, discussing gameplay mechanics, graphics, and player feedback.",
      "Whether you're a casual gamer or a hardcore enthusiast, you'll find recommendations and insights to enhance your gaming experience."
    ],
    date: "2024-03-28"
  },
  {
    id: 3,
    title: "Diving Deep into the World of Battle Royale Games",
    category: "Battle-Royale-Games",
    author: "Michael Brown",
    introduction: "Immerse yourself in the adrenaline-fueled world of battle royale gaming.",

    description: [
      "Diving deep into the world of battle royale games.",
      "Analyzing strategies, updates, and player communities, this article offers a comprehensive look at the popular gaming genre.",
      "From Fortnite to PUBG, battle royale games have captured the attention of millions worldwide.",
      "Whether you're a seasoned veteran or a newcomer, you'll find valuable tips and insights to help you dominate the battlefield."
    ],
    date: "2024-03-28"
  },
  {
    id: 4,
    title: "Keeping Up with the Latest Samsung Devices",
    category: "Samsung",
    author: "Jessica Martinez",
    introduction: "Discover the latest innovations in Samsung's cutting-edge devices.",
    description: [
      "Keeping up with the latest Samsung devices.",
      "From smartphones to tablets to smartwatches, Samsung continues to innovate in the tech industry.",
      "This article explores the features and capabilities of the newest Samsung products, providing in-depth reviews and comparisons.",
      "Whether you're considering a purchase or simply curious about the latest tech trends, this article has you covered."
    ],
    date: "2024-03-28"
  },
  {
    id: 5,
    title: "Unveiling the Newest Features and Updates of the iPhone",
    category: "iPhone",
    author: "David Anderson",
    introduction: "Discover what's next in the world of iPhones.",
    description: [
      "Unveiling the newest features and updates of the iPhone.",
      "As Apple's flagship product, the iPhone sets the standard for smartphones worldwide.",
      "This article discusses the latest advancements in iPhone technology, from camera improvements to software updates.",
      "Whether you're a devoted Apple fan or a curious observer, you'll find valuable insights and analysis in this article."
    ],
    date: "2024-03-28"
  },
  {
    id: 6,
    title: "Covering the Competitive Gaming Scene",
    category: "eSports",
    author: "Sophia Clark",
    introduction: "Get an insider's look into the world of competitive gaming.",
    description: [
      "Covering the competitive gaming scene.",
      "From major tournaments to emerging esports stars, esports has become a global phenomenon.",
      "This article provides in-depth coverage of the esports industry, discussing player salaries, sponsorship deals, and the growing popularity of competitive gaming.",
      "Whether you're a hardcore esports fan or a newcomer to the scene, this article offers valuable insights into this exciting world."
    ],
    date: "2024-03-28"
  },

      {
        id: 7,
        title: "Bringing You the Latest News, Analysis, and Highlights from the World of Sports",
        category: "Sports",
        author: "Andrew Wilson",
        introduction: "Stay updated on the world of sports with expert analysis and highlights.",
        description: [
          "From football to basketball to soccer, sports fans have plenty to cheer about.",
          "This article covers the biggest stories and matchups in the sports world, offering expert analysis and commentary.",
          "Whether you're a die-hard fan or a casual observer, you'll find something to enjoy in this article."
        ],
        date: "2024-03-28"
      },
      {
        id: 8,
        title: "Informing Readers about Cyber Threats and Best Practices for Online Safety",
        category: "Cyber-Security",
        author: "Rachel Turner",
        introduction: "Protect yourself online with essential cybersecurity insights.",
        description: [
          "With cyber attacks on the rise, it's more important than ever to protect yourself online.",
          "This article highlights common security threats, such as phishing scams and malware, and offers practical tips for safeguarding your personal information.",
          "Whether you're a novice or an expert, you'll find valuable advice in this article."
        ],
        date: "2024-03-28"
      },
      {
        id: 9,
        title: "Exploring Cutting-Edge Innovations in Cyber Technology",
        category: "Cyber-Technology",
        author: "Kevin Harris",
        introduction: "Stay ahead of the curve with insights into cyber technology innovations.",
        description: [
          "From AI-driven cybersecurity solutions to blockchain developments, the tech landscape is constantly evolving.",
          "This article delves into the latest advancements in cyber technology, discussing their potential impact on industries such as finance, healthcare, and transportation.",
          "Whether you're a tech enthusiast or a curious observer, you'll find this article both informative and engaging."
        ],
        date: "2024-03-28"
      },
      {
        id: 13,
        title: "The Future of E-Commerce: Trends and Innovations",
        category: "E-Commerce",
        author: "Jessica Martinez",
        introduction: "Get ahead of the curve with insights into the future of e-commerce.",
        description: [
          "E-commerce is constantly evolving, driven by advancements in technology and shifting consumer preferences.",
          "This article explores emerging trends and innovations in the e-commerce industry, from AI-powered shopping assistants to virtual try-on experiences.",
          "Whether you're a retailer or a consumer, stay informed about the latest developments shaping the future of online shopping."
        ],
        date: "2024-04-06"
      },
      {
        id: 14,
        title: "The Rise of Sustainable Fashion: Balancing Style and Ethics",
        category: "Fashion",
        author: "Sophie Williams",
        introduction: "Explore the growing trend of sustainable fashion and its impact on the industry.",
        description: [
          "Sustainable fashion is gaining momentum as consumers become more conscious of the environmental and social impact of their clothing choices.",
          "This article examines the principles of sustainable fashion, from ethical sourcing to eco-friendly production practices.",
          "Whether you're a fashion enthusiast or an industry insider, discover how sustainability is reshaping the future of fashion."
        ],
        date: "2024-04-07"
      },
      {
        id: 10,
        title: "Comparing the Latest Mobile Devices in Terms of Performance, Camera Quality, and Battery Life",
        category: "Mobile-Tech",
        author: "Laura Thompson",
        introduction: "Find the perfect smartphone with our comprehensive comparison guide.",
        description: [
          "With so many options on the market, choosing the right smartphone can be overwhelming.",
          "This article provides side-by-side comparisons of popular devices, helping readers make informed purchasing decisions.",
          "Whether you're interested in flagship models or budget-friendly options, you'll find valuable insights in this article."
        ],
        date: "2024-03-28"
      },
      {
        id: 11,
        title: "Exploring the Latest iPhone Models and Their Features",
        category: "iPhone",
        author: "Sophia Johnson",
        introduction: "Stay updated on the newest iPhone releases and innovations.",
        description: [
          "As one of the leading smartphone brands, Apple constantly introduces new iPhone models with exciting features and improvements.",
          "This article provides an in-depth exploration of the latest iPhone releases, discussing their design, performance, camera capabilities, and software enhancements.",
          "Whether you're considering upgrading to a new iPhone or simply curious about the latest advancements in mobile technology, this article offers valuable insights to help you stay informed."
        ],
        date: "2024-03-28"
      },
      {
        id: 12,
        title: "The Role of Artificial Intelligence in Content Marketing",
        category: "Marketing",
        author: "John Smith",
        introduction: "Delve into the intersection of artificial intelligence and content marketing strategies.",
        description: [
          "Artificial intelligence (AI) is revolutionizing content marketing, enabling brands to deliver personalized and targeted experiences to their audience.",
          "This article explores how AI-powered tools and algorithms are reshaping content creation, distribution, and optimization.",
          "Whether you're a content marketer or a technology enthusiast, uncover the potential of AI to drive growth and innovation in the field of marketing."
        ],
        date: "2024-04-05"
      },
      {
        id: 15,
        title: "The Art of Influencer Marketing: Strategies for Success",
        category: "Marketing",
        author: "Rachel Turner",
        introduction: "Learn how to harness the power of influencer marketing to reach your target audience.",
        description: [
          "Influencer marketing has become a cornerstone of modern advertising, offering brands a unique opportunity to connect with consumers through trusted voices.",
          "This article explores best practices and strategies for running successful influencer marketing campaigns, from identifying the right influencers to measuring ROI.",
          "Whether you're a marketer or a business owner, unlock the potential of influencer marketing to elevate your brand and drive sales."
        ],
        date: "2024-04-08"
      }
    ];
    
    console.log(articles);
    
    const gridContainerVariants = {
        hidden:{opacity:0},
        show: {opacity: 1,
        transition:{
          staggerChildren: 0.25,
        },},
        }
    
        const gridSquareVariants = {
          hidden: {opacity: 0}, show: {opacity: 1}
        }
export default function Home() {

  const iPhone = articles.find(game => game.category == 'iPhone')
  const Samsung = articles.find(game => game.category == 'Samsung')
  const eSports = articles.find(game => game.category == 'eSports')
  const BRG = articles.find(game => game.category == 'Battle-Royale-Games')

  return (
    <AnimatePresence>
    <motion.div>

      <h1 className="text-6xl justify-center text-center mt-8">Master Your Game: Level Up and Conquer!</h1>

      <motion.div
       variants={gridContainerVariants}
       initial="hidden"
        animate="show"
        className="grid lg:grid-cols-3 gap-5 mt-8 text-white rounded-2xl">

        <motion.div variants={gridSquareVariants} className="border border-black bg-gradient-to-tl from-purple-400 to-purple-900">

        <div
         
        className="flex">

          <motion.h2
           initial={{ opacity: 0, x:100}} 
          animate={{ opacity: 1, x:0 }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2 }} className=" pr-4">
            Agency
          </motion.h2>

          <motion.li
             initial={{ opacity: 0, x:-100}} 
             animate={{ opacity: 1, x:0 }}
             transition={{duration: 1, ease: "easeOut", delay: 0.2 }}
          >February 7 2013</motion.li>
        </div>

          <motion.h2 initial={{ opacity: 0, y:100}} 
          animate={{ opacity: 1, y:0 }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2 }} className="text-2xl hover:text-purple-800">


            <div>
            <Link href="/">Unleash <br />  Your Creativity, <br />
          Your Potential.</Link>
            </div>
          </motion.h2>
          <motion.p initial={{
            opacity: 0, y:-100}} animate={{ opacity:1, y:0}} transition={{duration: 0.4, ease: "easeOut"}}><q>Embark on thrilling adventures, compete in epic battles, and forge unforgettable memories as you navigate through a myriad of gaming landscapes</q></motion.p>
        </motion.div>

        <motion.div variants={gridSquareVariants}
         >
          <Image className=" border-black object-fill transform hover:scale-95 transition ease-in-out duration-500" src='https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400' alt="don't care" width='500' height='100'/>
        </motion.div>

        <motion.div
         variants={gridSquareVariants} className="  border bg-gradient-to-br from-red-500 via-indigo-500 to-blue-500  text-white">
          <div className=" leading-8 ml-8 mb-8">

            <p>
<q>
 Step into the virtual realm, where every click unlocks captivating narratives and thought-provoking challenges. Welcome to a world where imagination meets skill, and every game is an adventure waiting to be explored. Embrace the thrill,  ignite your passion, and embark on a gaming odyssey that knows no bounds.
</q>
</p>
            <Button status="Start Reading"></Button>
          </div>
        </motion.div>
      </motion.div>

      <div className="md:grid md:grid-col-4 grid-rows-[repeat(5)] mt-10 leading-loose max-w-max ml-6 border-t-2 dark:border-red-700 border-black">
            <div className=" col-span-1 crow-span-1 col-start-1 pt-10 px-4 border-2  border-black border-l-0 dark:border-red-700  border-t-0" key={iPhone.id}>
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 hover:bg-gradient-to-br from-black to-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"><Link href="/">{iPhone.category}</Link></button>
              <p className="text-3xl font-bold hover:text-purple-500 hover:transition-all">{iPhone.title}</p>
              <p className=" text-xl pb-16"> {iPhone.description[1]}</p>
              <p className=" mt-[2px] text-2xl">{new Date(iPhone.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
            </div>

            <div className=" col-span-1 row-span-1 col-start-2 pt-10 px-4 border-2  border-black dark:border-red-700 border-l-0  border-t-0" key={Samsung.id}>
            <Link href="/">
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-white focus:outline-none focus:ring-2 focus:ring-offset-2">{Samsung.category}</button></Link>
              <Link href="/"><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all hover:cursor-pointer">{Samsung.title}</p></Link>
              <p className=" text-xl pb-16">{Samsung.introduction}</p>
              <p className=" mt-[2px] text-2xl">{new Date(Samsung.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
            </div>

            <div className=" col-span-2 w-auto row-span-2 col-start-3">
              <img src="/media/Talking.jpg" className="h-[700px] border-b-2 border-black"/>
            </div>
            {
              <div className=" col-span-1 row-span-1 p-4 border-2 border-black border-l-0 dark:border-red-700 border-t-0" key={eSports.id}>
                <Link href="/">
                <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white rounded-lg bg-blue-600 hover:bg-gradient-to-br from-blue-500 via-yellow-500 to-black focus:outline-none focus:ring-2 focus:ring-offset-2">{eSports.category}</button></Link>
                <p className=" text-3xl font-bold capitalize hover:text-purple-500 hover:transition-all"><Link href="/">{eSports.title}</Link></p>
                <p className=" text-xl pb-16">{eSports.description[1]}</p>
                <p className=" mt-[2px] text-2xl">{new Date(eSports.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>

              </div>
            }

            {
             <div className = "col-span-1 row-span-1 pt-10 px-4 border-2  border-black dark:border-red-800 border-l-0  border-t-0" key={BRG.id}>
              <Link href="/">
             <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2">{BRG.category}</button></Link>
            <Link href="/"><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all">{BRG.title}</p></Link>
             <p className=" text-xl pb-16"> {BRG.description[1]}</p>
             <p className=" mt-[2px] text-2xl">{new Date(BRG.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
           </div>
            }
            
      </div>

      <div className="py-2 mb-4 px-4 mt-10 pr-48 pl-48">
        <h2 className="w-full border-black bg-purple-700 p-5">Latest Blog </h2>
      </div>


      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 dark:border-red-700">
  <div className="col-span-2 row-start-1 row-span-1 pl-24 pr-16 border-r-2 dark:border-red-700">
    <div className="mt-8 mb-6">
      <img className="w-full h-full" src="https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400" alt="don't care" />
    </div>
    
    <div className="flex space-x-2">
      <Link href="/">
        <button type="submit" className="py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-white focus:outline-none focus:ring-2 focus:ring-offset-2">{Samsung.category}</button>
      </Link>
      <p className="mt-[2px] text-2xl">{new Date(eSports.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
    </div>

    <h1 className="text-xl">Unleash Your Creativity, Your Potential</h1>
    <p>Embark on thrilling adventures, compete in epic battles, and forge unforgettable memories as you navigate through a myriad of gaming landscapes</p>
  </div>

  <div className="col-span-1 row-start-1 row-span-1 pl-16">
      <h1 className=" text-3xl mb-10">Welcome</h1>
    <div className="rounded-full overflow-hidden w-36 h-36 border-white border-4 hover:border-purple-600">
      <img className="w-full h-full object-cover" src="/media/Emily.jpg" alt="Emily" />
    </div>


  </div>
</div>


    </motion.div>
    </AnimatePresence>
  )
}
