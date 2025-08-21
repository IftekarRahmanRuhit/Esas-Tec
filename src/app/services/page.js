import React from 'react'
import ServicesPageBanner from '../components/ServicesPageComponents/ServicesPageBanner'
import ServicesCard from '../components/ServicesPageComponents/ServicesCard'
import ProcessSection from '../components/ServicesPageComponents/ProcessSection'
import WhyChooseUs from '../components/ServicesPageComponents/WhyChooseUs'

export default function ServicesPage() {
  return (
    <div className='min-h-screen'>
      <ServicesPageBanner />
      <ServicesCard />
      <ProcessSection />
      <WhyChooseUs />
    </div>
  )
}
