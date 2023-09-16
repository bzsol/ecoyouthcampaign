import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


function Gallery() {
    return (
        <div id="main" className="App">
          <div className="flex flex-col">
            <Hero></Hero>
            <Navbar></Navbar>
          </div>
        </div>
      )
}

export default Gallery