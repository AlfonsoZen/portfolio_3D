import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", .1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a dedicated Computer Engineering student currently in my 5th semester at UNAM, I am passionate about pursuing opportunities that allow me to apply my theoretical knowledge in a real-world setting. I possess a strong sense of responsibility, resilience, and determination to excel in the field of full-stack development. In my college journey, I have honed valuable skills in solving advanced math problems, optimizing solutions, and mastering data structures and algorithms.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map( (services, index) => (
          <ServiceCard key={services.title} index={index} {...services}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
// export default About;