import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Error from "./Pages/Error";
import Home from './Pages/Home';

export default function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Home/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  )
}