

function Footer() {
  return (
    <div className="footer pt-60 bottom w-full mx-auto ">
      <footer className=" dark:bg-green ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center ">
        <img className='mx-auto md:mx-10' src="/logo1.png" height={250} width={250}></img>
        <img className='mx-auto md:mx-10' src="/logo2.png" height={250} width={250}></img>
        <img className='mx-auto md:mx-5' src="/logo3.png" height={250} width={250}></img>
          <span className="font-bold text-textcolor">&copy; {new Date().getFullYear()} Eco Youth Camp </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer