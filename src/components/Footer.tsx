

function Footer() {
  return (
    <div className="pt-20">
        <footer className="dark:bg-green ">
    <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-end ">
        <span className="font-bold text-textcolor">&copy; All rights reserved | {new Date().getFullYear()}</span>
    </div>
</footer>
    </div>
  )
}

export default Footer