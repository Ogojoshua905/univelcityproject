

export default function Input({type, usern, place, userid, }) {
  return (
    <input type={type} name={usern} placeholder={place} id={userid} className="mt-1 block w-full  focus:outline-none" required  />
  )
}
