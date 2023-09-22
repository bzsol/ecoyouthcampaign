function Feed(props) {
    return (
        <div className="pt-10">
            <div className="max-w-md mx-auto bg-white  shadow-2xl overflow-hidden md:max-w-4xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                    </div>
                    <div className="p-10">
                        <a href="#" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">{props.title}</a>
                        <p className="pt-5 mt-2 text-slate-500">{props.first_paragraph}</p>
                        <p className="pt-5 mt-2 text-slate-500">{props.second_paragraph}</p>
                        <p className="pt-5 mt-2 text-slate-500">{props.third_paragraph}</p>
                        <p className="pt-5 mt-2 text-slate-500">{props.fourth_paragraph}</p>
                        <p className="pt-5 mt-2 text-slate-500">{props.fifth_paragraph}</p>
                        <p className="pt-5 mt-2 text-slate-500">{props.sixth_paragraph}</p>
                        <p className="pt-5 mt-2 text-slate-500">{props.seventh_paragraph}</p>
                        <p className="block pt-5 mt-1 text-lg leading-tight font-medium text-black">{props.goal}</p>
                        <ul className="pt-5 list-disc mx-10">
                        {props.ulist.map((item) => (
                            <li className="text-slate-500">{item}</li>
                         ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed