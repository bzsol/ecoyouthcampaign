function Section(props) {
    var array = props.photo;
    return (
        <div className="pt-10">
            <div className="max-w-md mx-auto bg-white  shadow-2xl overflow-hidden md:max-w-4xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className=" hidden h-48 w-full object-cover md:h-full md:w-72" src="https://www.indy100.com/media-library/alien-corpses-shown-at-mexico-congress.jpg?id=39537362&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C1" alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-pcolor font-semibold">{props.date}</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.title}</a>
                        <p className="mt-2 text-slate-500">{props.text}</p>
                        {array.map((item) => {
                            return (
                                <div className="aspect-w-16 aspect-h-9 pt-8">
                                    <img className="w-full rounded-md" src={item.src} alt={item.alt} />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section