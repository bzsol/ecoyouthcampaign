import logo from '../assets/logo.png'

function Hero() {
  return (
    <div className="bg-green-400 py-20">
      <div className='flex sm:flex-row flex-col sm:justify-center'>
      <img className='mx-20' src={logo} height={250} width={250}></img>
      <div className='flex flex-col text-textcolor text-4xl p-10 font-bold mx-14'>
        <h1 className='py-1'>ECOLOGY</h1>
        <h1 className='py-1'>DEMOCRACY</h1>
        <h1 className='py-1'>CAMPAIGN</h1>
      </div>
      </div>
    </div>
  )
}

export default Hero