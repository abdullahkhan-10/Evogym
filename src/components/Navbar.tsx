import logo from "../assets/Logo.png"
import Link from "./Link"
import { allPages } from "../share/enumType"

type Props = {
    selectedPage: allPages;
    setSelectedPage: (value: allPages) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    
  return (
    <nav>
        <div className="fixed top-0 z-30 w-full py-6">
            <div className="mx-auto w-[83%] bg-green-500">
                <div className=" flex items-center justify-between w-full gap-16">
                    {/* left side */}
                    <img src={logo} alt="logo" />

                    {/* right side */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-between gap-8 text-sm">
                            <Link 
                             page="Home"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link 
                             page="Benefits"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link 
                             page="Our Classes"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                            <Link 
                             page="Contact us"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}
                            />
                        </div>

                        <div className="flex items-center justify-between gap-8">
                            <p>Sign out</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar