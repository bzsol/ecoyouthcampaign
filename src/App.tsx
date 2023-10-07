import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Error from "./Pages/Error";
import Home from './Pages/Home';
import News from "./Pages/News";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import FirstWorkshop from "./Pages/FirstWorkshop";
import SecondWorkshop from "./Pages/SecondWorkshop";
import ThirdWorkshop from "./Pages/ThirdWorkshop";
// import i18n (needs to be bundled ;))
import './i18n';
import { Helmet } from 'react-helmet';



export default function App() {
  return (
      <div>
      <Helmet>
        <title>Eco Youth Campaign</title>
        <meta name="description" content="Programunkban szeretnénk elérni, hogy 3 város fiataljai összefogjanak és egy olyan online és offline kampányt indítsanak el a környezetvédelem és egyúttal demokratikus helyi közélet érdekében, mely alapján alapvető szemléletváltást tudunk elérni." />
        <meta name="theme-color" content="#008f68" />
        <meta name="robots" content="noimageindex"/>
        <meta charSet="utf-8" />
        <meta name="keywords"content="Eco Youth Campaign,ecoyouthcampaign,nyíregyháza,eco youth campaign"></meta>
      </Helmet>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
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