import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div id="main" className="App">
            <div className="flex flex-col">
                <Hero></Hero>
                <Navbar></Navbar>
            </div>
        </div>
    )
}

export default Home;