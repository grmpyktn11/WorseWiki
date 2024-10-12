import SearchForm from '../components/SearchForm'
import Logo from '../images/logo2.gif'

const Home = () => {

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      {/* Main Title */}
      <div className="text-black text-5xl font-bold mb-24">
        WiKey
      </div>

      {/* Logo and other slogans */}
			<img src={Logo} alt="worse_wiki" className="w-64"/>
      <div className="absolute text-black font-bold text-l">
        <div className="absolute w-96 bottom-24 right-36 chat chat-end animate-fly-1">
          <div className="chat-bubble chat-bubble-accent">Ever doubt Wikipedia? Stop doubting!</div>
        </div>
        <div className="absolute w-96 right-52 chat chat-end animate-fly-3">
          <div className="chat-bubble chat-bubble-accent">What kind of nonsense is this</div>
        </div>
        <div className="absolute w-96 bottom-12 left-36 chat chat-start animate-fly-4">
          <div className="chat-bubble chat-bubble-accent">#1 wiki fact checker, according to dentist</div>
        </div>
        <div className="absolute w-96 top-16 left-52 chat chat-start animate-fly-2">
          <div className="chat-bubble chat-bubble-accent">Totally No Cap</div>
        </div>
      </div>


      {/* Input */}
      <div className="mt-12"><SearchForm /></div>
    </div>
  )
}

export default Home