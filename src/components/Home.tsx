import { allPages } from "../share/enumType"
import useMediaQuery from "../hook/useMediaQuery"
import ActionButton from "./ActionButton"

import HomePageText from "../assets/HomePageText.png"
import HomePageGraphic from "../assets/HomePageGraphic.png"
import SponsorRedBull from "../assets/SponsorRedBull.png"
import SponsorForbes from "../assets/SponsorForbes.png"
import SponsorFortune from "../assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "motion/react"




type Props = {
    setSelectedPage: (value: allPages) => void;
}

const Home = ({ setSelectedPage}: Props) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:960px)")
  return (
    <section 
     id="home"
     className="bg-gray-20 py-30 gap-16 md:h-full border-2"
    >
        {/* image and main header  */}
        <motion.div 
          className="md:flex mx-auto w-[83%] items-center justify-center md:h-[83%]"
          onViewportEnter={ () => setSelectedPage(allPages.Home)}
        >
            {/* main header  */}
            <div className="mt-24 z-10 md:basis-3/5">
                {/* heading  */}
                <motion.div 
                  className="md:mt-20"
                  initial= "hidden"
                  whileInView= "visible"
                  viewport={ { once: true, amount: 0.5}}
                  transition={ { duration: 0.5}}
                  variants={ {
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0},
                  }}
                >
                    <img src={HomePageText} alt="Home-page-text" />

                    <p className="mt-8 text-sm md:text-start">
                        Unriveled Gym, Unparalleled Training Fitness Classes. World class studio to get the body shapes that you dream of. Get your dream body now.
                    </p>
                </motion.div>

                {/* action  */}
                <motion.div 
                  className="mt-8 flex items-center gap-8"
                  initial= "hidden"
                  whileInView= "visible"
                  viewport={ { once: true, amount: 0.5}}
                  transition={ { delay: 0.2, duration: 0.5}}
                  variants={ {
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0},
                  }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>

                    <AnchorLink
                     className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                     onClick={ () => setSelectedPage(allPages.ContactUs)}
                     href={ `#${allPages.ContactUs}`}
                    >
                        <p>Learn More</p> 
                    </AnchorLink>
                </motion.div>
            </div>

            {/* image  */}
            <div className="flex basis-[35%] justify-center md:ml-40 md:mt-20 md justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </motion.div>

        {/* sponsors  */}

        {
            isAboveMediumScreen && (
                <div className="h-[120px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center gap-16">
                            <img src={SponsorRedBull} alt="Redbull-sponsor" />
                            <img src={SponsorForbes} alt="Forbs-sponsor" />
                            <img src={SponsorFortune} alt="Fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default Home