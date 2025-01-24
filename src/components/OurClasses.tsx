import { motion } from "motion/react";
import { allPages, ClassType } from "../share/enumType"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import HText from "./HText";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti",
        image: image2
    },
    {
        name: "Ab Core Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti",
        image: image5
    },
    {
        name: "Training Classes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti",
        image: image6
    },
]
type Props = {
    setSelectedPage: (value: allPages) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourClasse" className="w-full bg-primary-100 py-40">
        <motion.div
          onViewportEnter = { () => setSelectedPage(allPages.OurClasse)}
        >
            <motion.div
             className="mx-auto w-[83%]"
             initial = "hidden"
             whileInView = "visible" 
             viewport={ {once: true, amount: 0.5}}
             transition={ { duration: 0.5}}
             variants={ {
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
             }}
            >
                <div className="md:w-[60%]">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eius, doloremque dicta omnis corrupti odit distinctio magni officia architecto fuga. Quidem eius, doloremque dicta omnis corrupti odit ?</p>
                </div>
            </motion.div>

            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {
                        classes.map( (item: ClassType, index) =>(
                            <li key={index} className="relative mx-4 inline-block h-[380px] w-[450px]">
                                <div className="absolute p-5 z-30 h-[380px] w-[450px] flex flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 cursor-pointer">
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                </div>

                                <img src={item.image} alt="Image" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses