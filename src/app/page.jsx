"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import Button from "./comps/Button"
import ShiftingCountdown from "./comps/ShiftingCountdown";

// Note when Using the Arrays Your commas may cause some error

export const articles = [
{
id: 1,
title: "Exploring the Latest Advancements in Mobile Technology",
category: "Mobile-Tech",
author: "John-Smith",
authBio:"John Smith is a technology enthusiast with a passion for exploring the latest advancements in mobile technology. With years of experience in the industry, he enjoys sharing his insights and knowledge through writing",
quote: "Stay ahead of the curve with insights into mobile tech innovations.",
authdescription: "Embark on a journey through the ever-evolving landscape of mobile technology with John Smith. As a dedicated enthusiast, John navigates the intricate pathways of innovation, driven by an insatiable curiosity. From dissecting the latest smartphone features to exploring emerging trends, John's passion for mobile tech knows no bounds. Join him as he unravels the complexities of this dynamic industry, sharing insights, and discoveries along the way.",
authIntro:"Embark on a journey through the ever-evolving world of technology with me, John Smith. As a tech enthusiast and avid explorer of innovation, I'm here to unravel the latest advancements in mobile technology and share insights that shape our digital landscape.",
authSpec: "Technology Enthusiast",
introduction: "Stay ahead of the curve with insights into mobile tech innovations and their impact on our lives, from foldable screens to 5G connectivity.",
description: [
"Mobile technology is constantly evolving, and it's essential to stay informed about the latest advancements. From foldable screens to 5G connectivity, the mobile tech landscape is changing rapidly. In this article, we'll delve into the cutting-edge innovations driving the mobile industry forward, offering insights into what the future holds for mobile devices. We'll explore the latest advancements in smartphone technology, including improved camera capabilities, enhanced battery life, and sleeker designs. Additionally, we'll discuss the impact of mobile technology on our daily lives, from how we communicate and work to how we entertain ourselves. Whether you're a tech enthusiast or simply curious about the latest mobile trends, this article has something for everyone."
],
niche: "Mobile-Tech",
date: "2024-03-28"
}, {
id: 2,
title: "Reviewing the Hottest Mobile Games of the Season",
category: "Mobile-Gaming",
authdescription: "Step into the immersive world of mobile gaming alongside Emily Johnson. With a fervent love for gaming, Emily explores diverse game genres and experiences, from captivating RPGs to adrenaline-pumping action games. As a seasoned player, she delves into gameplay mechanics, analyzes player feedback, and shares her recommendations to enhance your gaming journey. Let Emily be your guide as you embark on thrilling adventures in the realm of mobile gaming.",
authBio: "Emily Johnson is a dedicated gamer who loves diving into the world of mobile gaming. As a seasoned player, she enjoys exploring a wide range of game genres and sharing her experiences with fellow enthusiasts.",
author: "Emily-Johnson",
quote: "Dive into the world of mobile gaming and discover top titles.",
authSpec:"Tech Writer",
authIntro:"Join me, Emily Johnson, on an adventure into the vibrant realm of mobile gaming. With a passion for immersive experiences and a keen eye for standout titles, I'm here to guide you through the thrilling world of mobile games and uncover hidden gems that captivate gamers of all kinds.",
introduction: "Discover the top mobile games of the season, from addictive puzzles to immersive RPGs, and find out what makes them so engaging.",
description: [
"Mobile gaming has become an integral part of our entertainment landscape, offering a wide range of genres and gameplay experiences. In this article, we'll review the hottest mobile games of the season, from addictive puzzles like Tetris and Candy Crush to immersive RPGs like Final Fantasy and Pokémon. We'll explore what makes these games so engaging, including their mechanics, graphics, and player feedback. Whether you're a casual gamer or a hardcore enthusiast, you'll find something to enjoy in this article."
],
date: "2024-03-28",
niche: "Mobile Games"
}, {
id: 3,
title: "Diving Deep into the World of Battle Royale Games",
category: "Battle-Royale-Games",
author: "Michael-Brown",
authSpec: "Gaming Expert",
authBio: "Michael Brown is a passionate gamer and technology enthusiast with a keen interest in battle royale games. With years of experience in competitive gaming, Michael brings a unique perspective to the world of esports.",
authdescription: "Immerse yourself in the adrenaline-fueled world of battle royale gaming with Michael Brown. As a seasoned strategist, Michael delves into the tactics, updates, and communities shaping this competitive landscape. From Fortnite to PUBG, Michael offers valuable insights and tips to help you dominate the battlefield. Whether you're a seasoned veteran or a newcomer, Michael's expertise will empower you to rise victorious in the world of battle royales.",
authIntro: "Welcome, fellow gamers, to the battlegrounds of the digital arena! I'm Michael Brown, your guide to the heart-pounding world of battle royale games. Join me as we dive deep into strategies, analyze updates, and dominate the battlefield in games like Fortnite and PUBG.",
introduction: "Explore the thrilling world of battle royale games, from Fortnite to PUBG, and uncover their secrets to success.",
quote: "Master the art of battle royale gaming and conquer the competition.",
description: [
"Battle royale games have taken the gaming world by storm, offering a unique blend of strategy, skill, and luck. In this article, we'll dive deep into the world of battle royale games, exploring their history, mechanics, and player psychology. We'll analyze the most popular titles, including Fortnite, PUBG, and Call of Duty: Warzone, and discuss their secrets to success. Whether you're a seasoned gamer or a newcomer to the genre, you'll find valuable insights and tips in this article."
],
date: "2024-03-28",
niche: "FPS Shooter Specialist"
}, {
id: 4,
title: "Keeping Up with the Latest Samsung Devices",
category: "Samsung",
author: "Jessica-Martinez",
quote: "Experience innovation with Samsung's latest devices.",
authSpec: "Tech Journalist",
authdescription: "Stay up to date with the latest innovations in Samsung devices with Jessica Martinez. From smartphones to smartwatches, Jessica explores the features and capabilities of Samsung's cutting-edge products. With in-depth reviews and comparisons, Jessica helps consumers navigate the ever-changing world of consumer electronics. Whether you're considering a purchase or simply curious about the latest tech trends, Jessica has you covered.",
authBio: "Jessica Martinez is a tech enthusiast with a passion for exploring the latest innovations in consumer electronics. With a background in product reviews and comparisons, Jessica provides valuable insights to help consumers make informed purchasing decisions.",
authIntro: "Hola! I'm Jessica Martinez, your tech companion on a journey through the innovative universe of Samsung devices. From smartphones to smartwatches, join me as we explore the latest features, delve into in-depth reviews, and navigate the exciting world of Samsung technology.",
introduction: "Get the latest scoop on Samsung's cutting-edge devices, from smartphones to smartwatches and beyond, and discover their innovative features.",
description: [
"Samsung is a leading player in the tech industry, constantly pushing the boundaries of innovation and design. In this article, we'll explore the latest Samsung devices, from smartphones like the Galaxy S and Note series to smartwatches like the Galaxy Watch. We'll delve into their features, specifications, and pricing, helping you make informed purchasing decisions. Whether you're a loyal Samsung fan or simply curious about their latest offerings, this article has something for everyone."
],
date: "2024-03-28",
niche: "Samsung devices"
}, 
{
id: 5,
title: "Unveiling the Newest Features and Updates of the iPhone",
category: "iPhone",
author: "David-Anderson",
authSpec: "Apple Afficionado",
authBio: "David Anderson is a technology journalist with a focus on Apple products and services. With a background in software development, David provides insightful analysis and commentary on the latest advancements in the Apple ecosystem.",
authdescription: "Unveil the newest features and updates of the iPhone with David Anderson. As Apple's flagship product, the iPhone sets the standard for smartphones worldwide. From camera advancements to software updates, David discusses the latest advancements in iPhone technology. Whether you're a devoted Apple fan or a curious observer, David's insights and analysis will enrich your understanding of the iPhone ecosystem.",
authIntro: "Greetings, Apple aficionados! I'm David Anderson, your go-to guide for all things iPhone. Join me as we uncover the newest features, unravel software updates, and delve into the unparalleled world of Apple innovation, one iPhone at a time.",
quote: "Stay ahead with the latest updates from the world of iPhone.",
introduction: "Uncover the latest advancements in iPhone technology, from camera improvements to software updates, and discover how they enhance your user experience.",
description: [
"The iPhone is one of the most popular smartphones on the market, known for its sleek design, user-friendly interface, and innovative features. In this article, we'll explore the newest features and updates of the iPhone, from camera improvements like Night mode and Portrait mode to software updates like iOS 17. We'll discuss how these advancements enhance your user experience, from improved performance and security to new apps and functionality. Whether you're an iPhone enthusiast or simply curious about the latest updates, this article has something for everyone."
],
date: "2024-03-28",
niche: "iPhone"
},
{
  id: 6,
  title: "Covering the Competitive Gaming Scene",
  category: "eSports",
  author: "Sophia-Clark",
  authSpec: "e-Sports Journalist",
  authIntro: "Greetings, esports enthusiasts! I'm Sophia Clark, your trusted source for all things competitive gaming. Join me as we journey through the electrifying world of esports, covering major tournaments, emerging stars, and the pulse-pounding excitement of competitive gaming.",
  authBio: "Sophia Clark is a passionate advocate for esports and competitive gaming. With a background in journalism and event management, Sophia brings a unique perspective to the world of esports coverage.",
  introduction: "Dive into the exciting world of competitive gaming, from major tournaments to emerging esports stars, and discover the latest trends and developments.",
  authdescription: "Delve into the exhilarating world of esports with Sophia Clark. As a fervent advocate for competitive gaming, Sophia offers in-depth coverage of major tournaments, emerging stars, and industry trends. From player profiles to event highlights, Sophia's expertise and passion for esports shine through in her engaging content. Whether you're a seasoned esports fan or new to the scene, Sophia's insights will enrich your gaming experience.",
  quote: "Experience the thrill of competitive gaming with Sophia Clark.",
  description: [
  "Competitive gaming, or esports, has become a global phenomenon, with millions of fans tuning in to watch top players and teams battle it out in popular games like League of Legends, Dota 2, and Overwatch. In this article, we'll cover the latest developments in the competitive gaming scene, from major tournaments like the League of Legends World Championship and the Fortnite World Cup to emerging esports stars and teams. We'll also explore the latest trends in esports, including the rise of new games and genres, the growth of esports betting, and the increasing importance of mental health and wellness for professional gamers. Whether you're a hardcore gamer or just curious about the world of competitive gaming, this article has something for everyone."
  ],
  date: "2024-03-28",
  niche: "eSports"
},
{
  id: 7,
  title: "Bringing You the Latest News and Highlights from the World of Sports",
  category: "Sports",
  author: "Andrew-Wilson",
  introduction: "Stay updated on the world of sports with expert analysis, highlights, and news from top leagues and events, from football to basketball and beyond.",
  description: [
  "Sports are a universal language, transcending borders and cultures. In this article, we'll bring you the latest news, analysis, and highlights from the world of sports, covering top leagues and events like the NFL, NBA, MLB, and more. Our expert analysts will provide in-depth commentary on the latest developments, from player injuries to championship wins. Whether you're a die-hard fan or a casual observer, you'll find something to enjoy in this article."
  ],
  date: "2024-03-28"
  },
  {
    id: 8,
    title: "Informing Readers about Cyber Threats and Best Practices for Online Safety",
    category: "Cyber-Security",
    author: "Rachel-Turner",
    introduction: "Protect yourself online with essential cybersecurity insights, tips, and best practices for a safer digital experience, from password management to malware protection.",
    description: [
    "Cybersecurity is a critical concern in today's digital age, as threats like hacking, phishing, and malware become increasingly sophisticated. In this article, we'll inform readers about the latest cyber threats and provide best practices for online safety, from password management and two-factor authentication to malware protection and software updates. Whether you're a tech novice or an experienced user, you'll find valuable advice in this article."
    ],
    date: "2024-03-28"
    },

    {
      id: 9,
      title: "Exploring Cutting-Edge Innovations in Cyber Technology",
      category: "Cyber-Technology",
      author: "Kevin-Harris",
      introduction: "Discover the latest advancements in cyber technology, from AI-driven solutions to blockchain developments, and learn how they're transforming industries and revolutionizing the digital landscape.",
      description: [
      "Cyber technology is constantly evolving, with innovations like artificial intelligence, blockchain, and the Internet of Things (IoT) transforming industries and revolutionizing the digital landscape. In this article, we'll explore the latest advancements in cyber technology, discussing their potential impact on fields like healthcare, finance, and transportation. Whether you're a tech enthusiast or a curious observer, you'll find something fascinating in this article."
      ],
      date: "2024-03-28"
      },

      {
        id: 10,
        title: "Comparing the Latest Mobile Devices",
        category: "Mobile-Tech",
        author: "Laura-Thompson",
        introduction: "Find the perfect smartphone with our comprehensive comparison guide, covering performance, camera quality, battery life, and more, from top brands like Apple and Samsung.",
        description: [
        "With so many mobile devices on the market, choosing the right one can be overwhelming. In this article, we'll compare the latest smartphones in terms of performance, camera quality, battery life, and more, helping you make an informed purchasing decision. We'll analyze top brands like Apple and Samsung, discussing their unique features, specifications, and pricing. Whether you're due for an upgrade or simply curious about the latest mobile tech, this article has something for everyone."
        ],
        date: "2024-03-28"
        },

        {
          id: 11,
          title: "Exploring the Latest iPhone Models and Their Features",
          category: "iPhone",
          author: "Sophia-Johnson",
          introduction: "Stay updated on the newest iPhone releases, featuring in-depth explorations of design, performance, camera capabilities, and software enhancements, from the iPhone 15 to the latest Pro models.",
          description: [
          "Apple's iPhone is one of the most popular smartphones on the market, known for its sleek design, user-friendly interface, and innovative features. In this article, we'll explore the latest iPhone models, discussing their design, performance, camera capabilities, and software enhancements. We'll analyze the newest releases, from the iPhone 15 to the latest Pro models, and provide insights into their features, specifications, and pricing. Whether you're an iPhone enthusiast or simply curious about the latest updates, this article has something for everyone."
          ],
          date: "2024-03-28"
          },

          {
            id: 12,
            title: "The Role of Artificial Intelligence in Content Marketing",
            category: "Marketing",
            author: "ByteProwler",
            authSpec: "Tech Hippie",
            introduction: "Delve into the intersection of artificial intelligence and content marketing strategies, exploring AI-powered tools and algorithms that drive engagement and conversions.",
            description: [
            "Artificial intelligence (AI) is revolutionizing content marketing, enabling brands to deliver personalized and targeted experiences to their audience. In this article, we'll explore the role of AI in content marketing, discussing AI-powered tools and algorithms that drive engagement and conversions. We'll analyze the benefits and challenges of implementing AI in content marketing, from improved efficiency to ethical considerations. Additionally, we'll examine how AI is transforming content creation, distribution, and measurement, and provide insights into how businesses can leverage AI to enhance their content marketing efforts. Whether you're a marketer, content creator, or business owner, you'll find valuable information in this article."
          ],
          date: "2024-04-01"
          },

          {
            id: 13,
            title: "The Future of E-Commerce Trends and Innovations",
            category: "E-Commerce",
            author: "Jessica-Martinez",
            introduction: "Get ahead of the curve with insights into emerging trends and innovations in the e-commerce industry, from AI-powered shopping to virtual try-on experiences.",
            description: [
            "E-commerce is constantly evolving, driven by advancements in technology and shifting consumer preferences. In this article, we'll explore the future of e-commerce, discussing emerging trends and innovations like AI-powered shopping, virtual try-on experiences, and social commerce. We'll analyze the impact of these developments on the industry and provide insights into how businesses can stay ahead of the curve. Whether you're an e-commerce enthusiast or a business owner, you'll find valuable information in this article."
            ],
            date: "2024-04-06"
            },

            {
              id: 14,
              title: "The Rise of Sustainable Fashion Balancing Style and Ethics",
              category: "Fashion",
              author: "Sophie-Williams",
              introduction: "Explore the growing trend of sustainable fashion, examining ethical sourcing, eco-friendly production practices, and the impact of consumer choices.",
              description: [
              "Sustainable fashion is becoming increasingly important, as consumers become more aware of the environmental and social impact of their clothing choices. In this article, we'll explore the rise of sustainable fashion, discussing ethical sourcing, eco-friendly production practices, and the role of consumer choices. We'll analyze the benefits and challenges of sustainable fashion, from reduced waste to higher costs, and provide insights into how the industry is evolving. Whether you're a fashion enthusiast or a conscious consumer, you'll find something valuable in this article."
              ],
              date: "2024-04-07"
              },

              {
                id: 15,
                title: "The Art of Influencer Marketing Strategies for Success",
                category: "Marketing",
                author: "Rachel-Turner",
                introduction: "Learn how to harness the power of influencer marketing with strategies for identifying the right influencers, measuring ROI, and building brand awareness.",
                description: [
                "Influencer marketing has become a key component of modern advertising, offering brands a unique opportunity to connect with their target audience. In this article, we'll explore the art of influencer marketing, discussing strategies for identifying the right influencers, measuring ROI, and building brand awareness. We'll analyze the benefits and challenges of influencer marketing, from increased reach to authenticity concerns, and provide insights into how businesses can maximize their influencer marketing efforts. Whether you're a marketer or a business owner, you'll find valuable advice in this article."
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
  const EJ = articles.find(game => game.author == 'Emily-Johnson')
  const Samsung = articles.find(game => game.category == 'Samsung')
  const MG = articles.find(game => game.category == 'Mobile-Gaming')
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
            <Link href="/">{MG.title}</Link>
            </div>
          </motion.h2>
          <motion.p initial={{
            opacity: 0, y:-100}} animate={{ opacity:1, y:0}} transition={{duration: 0.4, ease: "easeOut"}}><q>Embark on thrilling adventures, compete in epic battles, and forge unforgettable memories as you navigate through a myriad of gaming landscapes</q></motion.p>
        </motion.div>

        <motion.div variants={gridSquareVariants}
         >
          <Image className=" border-black object-contain hover:scale-95 transition ease-in-out duration-500" src='https://images.pexels.com/photos/9072385/pexels-photo-9072385.jpeg?auto=compress&cs=tinysrgb&w=400' alt="Gamer" width='500' height='100'/>
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
            <Link href={`/category/${iPhone.category}`}>
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white rounded-lg bg-gradient-to-tr from-black to-blue-700 hover:from-blue-900 hover:to-black focus:outline-none focus:ring-2 focus:ring-offset-2">{iPhone.category}</button></Link>
              <Link href={`/category/${Samsung.category}`}><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all hover:cursor-pointer">{iPhone.title}</p></Link>
              <p className=" text-xl pb-16">{iPhone.introduction}</p>
              <p className=" mt-[2px] text-2xl">{new Date(iPhone.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
            </div>

            <div className=" col-span-1 row-span-1 col-start-2 pt-10 px-4 border-2  border-black dark:border-red-700 border-l-0  border-t-0" key={Samsung.id}>
            <Link href={`/category/${Samsung.category}`}>
            <button type="submit" className="w-full mb-4 py-2 px-4 border border-transparent shadow-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-tr from-green-500 to-green-700 hover:from-green-600 hover:to-green-800">{Samsung.category}</button></Link>
              <Link href={`/category/${Samsung.category}`}><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all hover:cursor-pointer">{Samsung.title}</p></Link>
              <p className=" text-xl pb-16">{Samsung.introduction}</p>
              <p className=" mt-[2px] text-2xl">{new Date(Samsung.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
            </div>

            <div className=" col-span-2 w-auto row-span-2 col-start-3">
              <img src="/media/Talking.jpg" className="h-[700px] border-b-2 border-black"/>
            </div>
            {
              <div className=" col-span-1 row-span-1 p-4 border-2 border-black border-l-0 dark:border-red-700 border-t-0" key={eSports.id}>
                 <Link href={`/category/${eSports.category}`}>
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-white focus:outline-none focus:ring-2 focus:ring-offset-2">{eSports.category}</button></Link>
              <Link href={`/category/${eSports.category}`}><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all hover:cursor-pointer">{eSports.title}</p></Link>
              <p className=" text-xl pb-16">{eSports.introduction}</p>
              <p className=" mt-[2px] text-2xl">{new Date(eSports.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
              </div>
            }

            {
             <div className = "col-span-1 row-span-1 pt-10 px-4 border-2  border-black dark:border-red-800 border-l-0  border-t-0" key={BRG.id}>
               <Link href={`/category/${BRG.category}`}>
            <button type="submit" className="w-full py-2 mb-4 px-4 border border-transparent shadow-sm text-white bg-blue-600 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-white focus:outline-none focus:ring-2 focus:ring-offset-2">{BRG.category}</button></Link>
              <Link href={`/category/${BRG.category}`}><p className="text-3xl font-bold hover:text-purple-500 hover:transition-all hover:cursor-pointer">{BRG.title}</p></Link>
              <p className=" text-xl pb-16">{BRG.introduction}</p>
              <p className=" mt-[2px] text-2xl">{new Date(BRG.date).toLocaleDateString('en',{weekday: "long", year: 'numeric',month:'long', day  :'numeric'})}</p>
           </div>
            }
            
      </div>

      <div className="py-2 mb-4 md:px-48 w-full mt-10 sm:mx-auto">
        <h2 className="w-full border-black bg-purple-700 p-5">Latest Blog </h2>
      </div>

<div>
  <ShiftingCountdown />
</div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
  <div className="lg:col-span-2 sm:col-span-1 row-start-1 row-span-1 px-24">
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

  <div className="md:col-span-1 md:row-start-1 md:row-span-1 px-16 py-16 border-l-2 border-black">
    <div className="border-b-2 border-black">
      <h1 className="text-3xl mb-10">Welcome</h1>
      <div className="rounded-full overflow-hidden w-36 h-36 border-white border-4 hover:border-purple-600">
        <img className="w-full h-full object-cover" src="/media/Emily-Johnson.jpg" alt="Emily" />
      </div>
      <div className="my-8 leading-relaxed">
        <h2 className="font-bold">Hello I am Emily Johnson</h2>
        <p className="leading-normal">{EJ.authIntro}</p>
      </div>
    </div>

    {/* Categories Checkbox */}
    <div>
   <h1 className="text-3xl mb-10">Categories</h1>
    </div>
  </div>
</div>


    </motion.div>
    </AnimatePresence>
  )
}
