import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { allPages } from "./share/enumType"
import Home from "./components/Home"
import Benefits from "./components/Benefits"
import OurClasses from "./components/OurClasses"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"



function App() {
  
  const [selectedPage, setSelectedPage] = useState<allPages>(allPages.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect ( () =>{
    const handleScroll = () =>{
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(allPages.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className="app bg-gray-200 ">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage}/>

      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
