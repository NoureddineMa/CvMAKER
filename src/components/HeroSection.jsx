import React from 'react'
import TypoGraphy from './TypoGraphy'
import TeamBuilding  from '../assets/TeamBuilding.png'


const HeroSection = () => {
    return (
        <div className='flex flex-col sm:flex-col lg:flex-row lg:justify-between md:flex-col  mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
            <TypoGraphy />
            <img src={TeamBuilding} className='mt-[80px] hidden lg:block' alt="team building" />
        </div>
    )
}
export default HeroSection
