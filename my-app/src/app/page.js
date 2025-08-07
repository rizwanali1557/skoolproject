import React from 'react'
import NavbarWeb from './components/NavbarComponents/NavbarWeb'
import HeroSection from './components/HeroSectionComponent/HeroSection'
import TabsData from './components/TabsComponents/TabsData'
import "./globals.css"
function page() {
  return (
    <div>
      <NavbarWeb/>
      {/* <HeroSection/> */}
      <TabsData/>
    </div>
  )
}

export default page