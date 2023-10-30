import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Error from "./Pages/Error";
import Home from './Pages/Home';
import News from "./Pages/News";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import FirstWorkshop from "./Pages/FirstWorkshop";
import SecondWorkshop from "./Pages/SecondWorkshop";
import ThirdWorkshop from "./Pages/ThirdWorkshop";
import FourthWorkshop from "./Pages/FourthWorkshop";
import FifthWorkshop from "./Pages/FifthWorkshop";
import SixthWorkshop from "./Pages/SixthWorkshop";
import SeventhWorkshop from "./Pages/SeventhWorkshop";
// import i18n (needs to be bundled ;))
import './i18n';



export default function App() {
  return (
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/seventh-workshop" element={<SeventhWorkshop/>} />
        <Route path="/sixth-workshop" element={<SixthWorkshop/>} />
        <Route path="/fifth-workshop" element={<FifthWorkshop/>} />
        <Route path="/fourth-workshop" element={<FourthWorkshop/>} />
        <Route path="/first-workshop" element={<FirstWorkshop/>} />
        <Route path="/second-workshop" element={<SecondWorkshop/>} />
        <Route path="/third-workshop" element={<ThirdWorkshop/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
    </div>
  )
}