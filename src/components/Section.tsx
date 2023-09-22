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
                        <div className="flex flex-row pt-10 justify-end">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fecoyouthcampaign.com%2F&amp;src=sdkpreparse"  className="pr-3 fb-xfbml-parse-ignore">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  className="fill-pcolor hover:fill-green" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg>
                        </a>
                        <a href="mailto:?subject=Eco%20Youth%20Campaign&body=https%3A%2F%2Fecoyouthcampaign.com%2F" className="pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"  className="fill-pcolor hover:fill-green" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                        </a>
                        <a onClick={() => {navigator.clipboard.writeText(props.url);alert(props.copytext)}} className="pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="fill-pcolor hover:fill-green" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section