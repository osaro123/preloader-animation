"use client"
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  })
  return (
    <div className=''>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader/>}
      </AnimatePresence>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home