

function Hero() {
  return (
    <div className="bg-green-400 py-20">
      <div className='flex flex-col justify-start md:justify-center md:flex-row '>
      <img className='mx-auto md:mx-0' src="/logo.png" height={250} width={250}></img>
      <div className='flex flex-col text-textcolor text-4xl p-10 font-bold mx-auto md:mx-0'>
        <h1 className='py-1'>ECOLOGY</h1>
        <h1 className='py-1'>DEMOCRACY</h1>
        <h1 className='py-1'>CAMPAIGN</h1>
      </div>
      </div>
    </div>
  )
}

export default Hero