import Hero from "./components/Hero";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";
import List from "./components/List";
import Vision from "./components/Vision";

export default function Home() {
  return (
  <div className="h-screen w-screen">
   <Vision/>
   <Hero/>
   <Iphone/>
   <Watch/>
   <List/>
  </div>
  )
}
