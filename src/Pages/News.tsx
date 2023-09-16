import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function News() {
  return (
    <div id="main" className="App">
      <div className="flex flex-col">
        <Hero></Hero>
        <Navbar></Navbar>
      </div>
    </div>
  )
}

export default News