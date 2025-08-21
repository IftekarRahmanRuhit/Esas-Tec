import React from 'react'
import PortfolioPageBanner from '../components/PortfolioPageComponents/PortfolioPageBanner'
import PortfolioCard from '../components/PortfolioPageComponents/PortfolioCard'

export default function PortfolioPage() {
  return (
    <div className='min-h-screen'>
    <PortfolioPageBanner />
    <PortfolioCard />
    </div>
  )
}

