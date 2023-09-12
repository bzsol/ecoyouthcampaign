import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Hero></Hero>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>

  )
}