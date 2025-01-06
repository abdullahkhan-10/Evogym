import logo from "../assets/Logo.png"
import Link from "./Link"
import { allPages } from "../share/enumType"
import useMediaQuery from "../hook/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "./ActionButton";

type Props = {
    selectedPage: allPages;
    setSelectedPage: (value: allPages) => void;
    isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:960px)")
    const [isMenuToggle, setIMenuToggle] = useState<boolean>(false)

    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    
  return (
    <nav>
        <div className={` ${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className="mx-auto w-[83%]">
                <div className=" flex items-center justify-between w-full gap-16">
                    {/* left side */}
                    <img src={logo} alt="logo" />

                    {/* right side */}
                    {isAboveMediumScreen
                     ? (<div className="flex items-center justify-between w-full">
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
                                <ActionButton  setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                       </div> )
                     :  ( <button 
                           className="rounded-full bg-secondary-500 p-2"
                           onClick={ () => setIMenuToggle(!isMenuToggle)}
                           >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                          </button>
                       )
                    }
                    
                </div>
            </div>
        </div>

        {/* Mobile menu modal */}
        {
            !isAboveMediumScreen && isMenuToggle && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* close icon  */}
                    <div className="flex justify-end p-12">
                        <button onClick={ () => setIMenuToggle(!isMenuToggle)}>
                            <XMarkIcon className="w-6 h-6 text-gray-400"/>
                        </button>
                    </div>

                    <div className="flex flex-col ml-[33%] gap-10 text-2xl">
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

                </div>
            )
        }
    </nav>
  )
}

export default Navbar