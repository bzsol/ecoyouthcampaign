import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

function Home() {
    return (
        <div id="main" className="App">
            <div className="flex flex-col">
                <Hero></Hero>
                <Navbar></Navbar>
                <Section></Section>
                <Section></Section>
            </div>
        </div>
    )
}

export default Home;