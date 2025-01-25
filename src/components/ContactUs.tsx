import { motion } from "motion/react";
import { allPages } from "../share/enumType"
import { useForm } from "react-hook-form";
import HText from "./HText";
import ContactUsGraphic from "../assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: allPages) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm()

  const handleSubmit = async(e: any) =>{
    const isValid = await trigger();

    if(!isValid){
      e.preventDefault()
    }
  }


  return (
    <section id="contactus" className="mx-auto w-[83%] pt-24 pb-32">
      <motion.div onViewportEnter={ () => setSelectedPage(allPages.ContactUs)}>
        {/* Header */}
        <motion.div 
         className="w-[60%]"
         initial = "hidden"
         whileInView= "visible"
         viewport={ {once: true, amount: 0.5}}
         transition={ {duration: 0.5}}
         variants={ {
          hidden: {opacity: 0, x: -50},
          visible: {opacity: 1, x: 0}
         }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam? Minus deserunt dolores dolor adipisci, labore pariatur eligendi quo quia architecto iusto! Assumenda nam iure, consequatur laudantium praesentium ducimus quibusdam.</p>
        </motion.div>

        {/* Form and image */}
        <div className="md:flex justify-center gap-8 mt-10">
          <motion.div
           className="mt-10 basis-[60%] md:mt-0"
           initial = "hidden"
           whileInView= "visible"
           viewport={ {once: true, amount: 0.5}}
           transition={ {duration: 0.5}}
           variants={ {
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
           }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              method="POST"
              action="https://formsubmit.co/e0eda5539db312d0d79682422b21be2d"
            >
              {/* name  */}
              <input 
                type="text"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 chars."}
                </p>
              )}

              {/* email  */}
              <input 
                type="email"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              {/* message  */}
              <textarea 
                rows = {4}
                cols={50}
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 chars."}
                </p>
              )}

              {/* button  */}
              <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
            </form>
          </motion.div>

          {/* Graphic  */}
          <motion.div
           className="relative mt-16 basis-[40%] md:mt-0"
           initial = "hidden"
           whileInView= "visible"
           viewport={ {once: true, amount: 0.5}}
           transition={ {duration: 0.5}}
           variants={ {
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
           }}
          >
            <div>
              <img className="w-full" src={ContactUsGraphic} alt= "contact-graphic" />
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

export default ContactUs