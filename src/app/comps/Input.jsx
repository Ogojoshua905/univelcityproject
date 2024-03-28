

export default function Input({type, usern, place, userid, }) {
  return (
    <input type={type} name={usern} placeholder={place} id={userid} className="no-underline text-2xl h-16 text-black border-solid hover:shadow-2xl border-2 rounded-full" />
  )
}
