function Feed(props) {
  return (
    <div className="pt-10">
            <div className="max-w-md mx-auto bg-white  shadow-2xl overflow-hidden md:max-w-4xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                    </div>
                    <div className="p-8">
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.title}</a>
                        <p className="mt-2 text-slate-500">{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Feed