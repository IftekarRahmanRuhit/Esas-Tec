import React from 'react'
import PortfolioPageBanner from '../components/PortfolioPageComponents/PortfolioPageBanner'
import PortfolioCard from '../components/PortfolioPageComponents/PortfolioCard'

export const metadata = {
  title: "Esas Tec | Portfolio",
  description: "Discover our impressive portfolio of successful projects, showcasing our expertise in web development, mobile applications, and digital solutions.",
};

export default function PortfolioPage() {
  return (
    <div className='min-h-screen'>
    <PortfolioPageBanner />
    <PortfolioCard />
    </div>
  )
}

