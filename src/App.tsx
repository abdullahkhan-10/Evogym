import { useState } from "react"
import Navbar from "./components/Navbar"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { allPages } from "./share/enumType"



function App() {
  
  const [selectedPage, setSelectedPage] = useState<allPages>(allPages.Home)

  return (
    <div className="app ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
