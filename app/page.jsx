import React from 'react'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Benefits from '@/components/Benefits'
import  Category  from '@/components/Category'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Latest from '@/components/Latest'


const page = () => {
  return (
    <div className='w-full max-w-[1280] mx-auto overflow-hidden bg-white'>
      <Banner/>
      <Header/>
      <Hero/>
      <Latest/>
      <Category/>
      <Benefits/>
      <About/>
      <Cta/>
      <Footer/>
    <div className='h-[7680]'></div>
    </div>
  )
}

export default page