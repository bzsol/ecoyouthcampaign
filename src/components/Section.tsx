

function Section() {
    return (
        <div className="pt-10">
        <div className="max-w-md mx-auto bg-white  shadow-2xl overflow-hidden md:max-w-4xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-72" src="https://cataas.com/cat" alt="Modern building architecture"/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-pcolor font-semibold">{new Date().toDateString()}</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Lorem ipsum dolor sit amet mazim ea vero kasd. Diam elitr et dolor. Ipsum sed no diam.</a>
                    <p className="mt-2 text-slate-500">Eirmod minim et nihil consequat ipsum. Facilisi clita laoreet kasd amet blandit ipsum consetetur nisl amet feugait. Molestie veniam cum ea lorem aliquyam dolores dolore te nibh ut vel. Lorem sit velit. Sea adipiscing amet lorem eos. Duis velit sed in dolor rebum elitr rebum. Ad et consequat duo soluta. Consetetur ad justo lorem amet diam voluptua invidunt sed amet accusam velit elitr amet sit sea ipsum rebum. Sea erat et. Ea et ea zzril at eos lorem rebum erat et est autem. Eu id eos ea ut option invidunt autem magna duis enim sit hendrerit suscipit stet accusam magna autem dolores.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Section