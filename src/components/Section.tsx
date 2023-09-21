function Section(props) {
    var array = props.photo;
    return (
        <div className="pt-10">
            <div className="max-w-md mx-auto bg-white  shadow-2xl overflow-hidden md:max-w-4xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-pcolor font-semibold">{props.date}</div>
                        <a href={props.url} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.title}</a>
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