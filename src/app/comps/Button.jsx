

export default function Button({status}) {
  return (
    <button className="bg-slate-600 hover:animate-bounce text-white rounded-md p-2">{status}</button>
  )
}
