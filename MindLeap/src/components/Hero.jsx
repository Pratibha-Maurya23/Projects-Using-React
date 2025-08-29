import heroImg from "../assets/hero.webp";
import { MdArrowCircleRight } from "react-icons/md";
import { motion } from "framer-motion";
import {fadeIn} from '../utils/animationVarient.js'

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center p-8 overflow-y-hidden gap-12 h-full'>
        {/* Left side */}
        <motion.div 
        variants={fadeIn("down",0.2)}
        initial="hidden"
        animate="show"
        viewport={{once: false, amount:0.7}}
        className='md:w-1/2  '>
          <h1 className=" text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">Start Your Journey to mental wellness</h1>
          <p className="text-lg mb-12 md:pr-8">We lower our stress levels, we get to know our pain , we connect better, we improve our focus, ander're kinder to ourselves. Let us talk you though the basic in our new mindful guide on how to meditate.</p>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
              <MdArrowCircleRight />
            </a>
          </button>
        </motion.div>

        {/* right side */}
        <motion.div 
        variants={fadeIn("left",0.2)}
        initial="hidden"
        animate="show"
        viewport={{once: false, amount:0.7}}
        className='md:w-2/7 h-full'>
          <img src={heroImg} alt="HeroImg" className="w-full object-cover" />
        </motion.div>
      </div>
      
    </section>
  )
}

export default Hero
