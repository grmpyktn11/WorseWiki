import SearchForm from '../components/SearchForm'
import Logo from '../images/logo2.gif'
import Wiiki from '../images/wiiki.png'

const Home = () => {

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      {/* Main Title */}
      <img src={Wiiki} alt="Wiiki_title" className="w-64"/>

      {/* Logo and other slogans */}
			<img src={Logo} alt="Wiiki_logo" className="w-64"/>
      <div className='justify-center'>
        <div className="absolute text-black font-bold text-l">
          <div className="absolute w-96 bottom-36 right-36 chat chat-end animate-fly-1">
            <div className="chat-bubble chat-bubble-accent">Ever doubt Wikipedia? Stop doubting!</div>
          </div>
          <div className="absolute w-96 bottom-4 right-48 chat chat-end animate-fly-3">
            <div className="chat-bubble chat-bubble-accent">What kind of nonsense is this</div>
          </div>
          <div className="absolute w-96 bottom-36 left-36 chat chat-start animate-fly-4">
            <div className="chat-bubble chat-bubble-accent">#1 wiki fact checker, according to dentist</div>
          </div>
          <div className="absolute w-96 bottom-8 left-52 chat chat-start animate-fly-2">
            <div className="chat-bubble chat-bubble-accent">Totally No Cap</div>
          </div>
        </div>
      </div>


      {/* Input */}
      <div className="mt-12"><SearchForm /></div>
    </div>
  )
}

export default Home