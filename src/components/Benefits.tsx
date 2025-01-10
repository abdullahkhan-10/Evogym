import { motion } from "motion/react";
import { allPages, BenefitType } from "../share/enumType"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import HText from "./HText";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "./ActionButton";
import BenefitPageImage from "../assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem veniam blanditiis ex tempore laboriosam illum. sit amet."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Quidem veniam blanditiis ex tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. laboriosam illum. sit amet."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "consectetur adipisicing elit. Lorem ipsum dolor sit amet, . Quidem veniam blanditiis ex tempore laboriosam illum. sit amet."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1},
}

type Props = {
  setSelectedPage: ( value: allPages) => void;
}

const Benefits = ({ setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
       onViewportEnter={ () => setSelectedPage(allPages.Benefits)}
      >

        {/* Header  */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial = "hidden"
          whileInView= "visible"
          viewport={ { once: true, amount: 0.5}}
          transition={ { duration: 0.5 }}
          variants={ {
            hidden: {opacity: 0, x: -50},
            visible: { opacity: 1, x: 0}
          }}
         >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>

        {/* Benefits  */}
        <motion.div 
          className="md:flex items-center justify-between gap-8"
          initial = "hidden"
          whileInView= "visible"
          viewport={ {once: true, amount: 0.5}}
          variants={container}
         >
          {
            benefits.map( (benefit, index) => (
              <motion.div
                key={index}
                className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
                variants={childVariant}
               >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {benefit.icon}
                  </div>
                </div>

                <h4 className="font-bold">{benefit.title}</h4>
                <p className="my-3">{benefit.description}</p>

                <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
                onClick={ () => setSelectedPage(allPages.ContactUs)}
                href={`#${allPages.ContactUs}`}
                >
                  <p>Learn More</p>
                </AnchorLink>
              </motion.div>
            ))
          }
        </motion.div>

        {/* Graphics and Description  */}
        <div className="md:flex items-center justify-between gap-20 mt-16 md:mt-28">
          {/* Graphic  */}
          <img
            src={BenefitPageImage}
            alt="Benefits-image" 
            className="mx-auto"
           />

          {/* description  */}
          <div>
            {/* title  */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                 initial = "hidden"
                 whileInView= "visible"
                 viewport={{ once: true, amount: 0.5}}
                 transition={ { duration: 0.5}}
                 variants={ {
                  hidden: { opacity: 0, x: 50},
                  visible: { opacity: 1, x: 0}
                 }}
                 >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* text  */}
            <motion.div
             initial = "hidden"
             whileInView= "visible"
             viewport={{ once: true, amount: 0.5}}
             transition={ {delay: 0.2, duration: 0.5}}
             variants={ {
              hidden: { opacity: 0, x: 50},
              visible: { opacity: 1, x: 0}
             }}
            >
              <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolore, sequi perspiciatis odio delectus harum amet dolorum ea nihil repellendus maxime eius aperiam quia impedit corporis magnam, laborum commodi consequuntur. Qui dolore, sequi perspiciatis odio delectus harum amet dolorum?</p>
              <p className="mb-5">Fugit quaerat alias nisi at animi doloribus fugiat inventore obcaecati. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo debitis quisquam sed esse repudiandae facere tempore! Fugit quaerat alias nisi at animi doloribus fugiat inventore obcaecati aperiam qui commodi cum illum, perferendis hic modi maxime.</p>
            </motion.div>

            {/* button  */}
            <div className="relative mt-16">
              <div className="before:absolute before:bottom-[-20] before:right-40 before:z-[-1] before:content-sparkles">
                <motion.div
                  initial = "hidden"
                  whileInView= "visible"
                  viewport={{ once: true, amount: 0.5}}
                  transition={ {delay: 0.2, duration: 0.5}}
                  variants={ {
                   hidden: { opacity: 0, x: 50},
                   visible: { opacity: 1, x: 0}
                  }}
                 >
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits