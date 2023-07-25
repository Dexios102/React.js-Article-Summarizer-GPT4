import  logo  from '../assets/logo.png';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center flex-row w-full pt-3 mb-10'>
        <div className='flex jutify-center items-center'>
        <img src={logo} alt="home-logo"
        className='w-24 object-contain' />
        <div className='text-black text-3xl font-extrabold'>Sumrz.AI</div>
        </div>
        <button type="button" onClick={() => window.open('https://github.com/Dexios102')}
        className='black_btn'>
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Advance Summarizer with <br className='max-md:hidden'/>
        <span className="green_gradient">
            OpenAI GPT-4
        </span>
      </h1>

      <h2 className="desc">
       Introducing our AI Article Summarizer:
       Empowering readers with concise insights through advanced machine learning algorithms.
      </h2>
    </header>
  )
}

export default Hero