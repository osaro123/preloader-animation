"use client"
import React from 'react'
import {motion} from "framer-motion"
import { slideUp, textAnimation } from './anim'

const text = "Developer, Designer, Hustler"

const Preloader = () => {
  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className='h-screen flex justify-center bg-[#000] text-white w-full fixed top-0 left-0 z-[99] items-center'>
      <h1 className='text-4xl font-semibold'>
        {text.split(" ").map((t,i) => (
            <span className='relative inline-flex overflow-hidden' key={i}>
                <motion.span variants={textAnimation} initial="initial" animate={"animate"} custom={i} className=''>{t + "\u00A0"}</motion.span>
            </span>
        ))}
      </h1>
    </motion.div>
  )
}

export default Preloader