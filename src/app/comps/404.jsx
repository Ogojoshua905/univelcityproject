import Link from "next/link"

export default function Error404() {

const Error404 = 'Not-Found'

  return (
    <div className="not-found">
        <h1>Ooops</h1>
        <h2>That Page Cannot be Found.</h2>
        <p>Go Back tot THE <Link href="/">Homepage</Link></p>
      
    </div>
  )
}
