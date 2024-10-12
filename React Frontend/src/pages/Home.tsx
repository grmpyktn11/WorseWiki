import { useState } from 'react'
import Logo from '../images/logo2.gif'

const Home = () => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Search for: ' + query);
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      {/* Logo and other slogans */}
			<img src={Logo} alt="worse_wiki" className="w-64"/>
      <div className="absolute text-black font-bold text-l">
        <div className="absolute w-96 bottom-40 right-36 chat chat-end animate-fly-1">
          <div className="chat-bubble">Ever doubt Wikipedia? Stop doubting!</div>
        </div>
        <div className="absolute w-96 bottom-4 right-52 chat chat-end animate-fly-3">
          <div className="chat-bubble">What kind of nonsense is this</div>
        </div>
        <div className="absolute w-96 bottom-36 left-36 chat chat-start animate-fly-4">
          <div className="chat-bubble">#1 wiki fact checker, according to dentist</div>
        </div>
        <div className="absolute w-96 left-52 chat chat-start animate-fly-2">
          <div className="chat-bubble">Totally No Cap</div>
        </div>
      </div>


      {/* Input */}
			<form onSubmit={handleSubmit}>
				<label className="input input-bordered flex items-center gap-2 bg-neutral-100 mt-24 w-96">
          <input 
            type="text" 
            className="grow" 
            placeholder="Start typing..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
          </svg>
				</label>
      </form>
    </div>
  )
}

export default Home