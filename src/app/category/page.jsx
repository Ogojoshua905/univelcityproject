import Image from "next/image";
import Link from "next/link";

export const articles = [
    {
      id: 1,
      title: "Exploring the Latest Advancements in Mobile Technology",
      category: "Mobile-Tech",
      author: "John Smith",
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
      description: [
        "Covering the competitive gaming scene.",
        "From major tournaments to emerging esports stars, esports has become a global phenomenon.",
        "This article provides in-depth coverage of the esports industry, discussing player salaries, sponsorship deals, and the growing popularity of competitive gaming.",
        "Whether you're a hardcore esports fan or a newcomer to the scene, this article offers valuable insights into this exciting world."
      ],
      date: "2024-03-28"
    },
    // {
    //   id: 7,
    //   title: "Bringing You the Latest News, Analysis, and Highlights from the World of Sports",
    //   category: "Sports",
    //   author: "Andrew Wilson",
    //   description: [
    //     "Bringing you the latest news, analysis, and highlights from the world of sports.",
    //     "From football to basketball to soccer, sports fans have plenty to cheer about.",
    //     "This article covers the biggest stories and matchups in the sports world, offering expert analysis and commentary.",
    //     "Whether you're a die-hard fan or a casual observer, you'll find something to enjoy in this article."
    //   ],
    //   date: "2024-03-28"
    // },
    // {
    //   id: 8,
    //   title: "Informing Readers about Cyber Threats and Best Practices for Online Safety",
    //   category: "Cyber-Technology",
    //   author: "Rachel Turner",
    //   description: [
    //     "Informing readers about cyber threats and best practices for online safety.",
    //     "With cyber attacks on the rise, it's more important than ever to protect yourself online.",
    //     "This article highlights common security threats, such as phishing scams and malware, and offers practical tips for safeguarding your personal information.",
    //     "Whether you're a novice or an expert, you'll find valuable advice in this article."
    //   ],
    //   date: "2024-03-28"
    // },
    // {
    //   id: 9,
    //   title: "Exploring Cutting-Edge Innovations in Cyber Technology",
    //   category: "Cyber-Technology",
    //   author: "Kevin Harris",
    //   description: [
    //     "Exploring cutting-edge innovations in cyber technology.",
    //     "From AI-driven cybersecurity solutions to blockchain developments, the tech landscape is constantly evolving.",
    //     "This article delves into the latest advancements in cyber technology, discussing their potential impact on industries such as finance, healthcare, and transportation.",
    //     "Whether you're a tech enthusiast or a curious observer, you'll find this article both informative and engaging."
    //   ],
    //   date: "2024-03-28"
    // },
  ];
  
  console.log(articles);
  
export default function Category() {
  return (
    <div>
      <div>
          <h2></h2>
          <Image src="" />
      </div>

    <div className="grid md:grid-cols-3 gap-4">
    {articles.map(article => (
      <div key={article.id} className="border border-black dark:border-white rounded-md">
        <Link href={`/blog/${article.title.split(' ').join('-')}`} title={article.title}>
          <section className={`bg-cover h-40`} style={{backgroundImage: `url(/media/${article.category}.jpg)`}}>
            
          </section>
          <h2 className="text-2xl">{article.title}</h2>
          <p>{article.description}</p>
        </Link>
      </div>
    ))}
  </div>
    </div>
  )
}
