import React from 'react'
import Feedback from '../assets/feedback.png'
import Feedback2 from '../assets/feedback2.png'
import FeedBack3 from '../assets/feedback3.png'

function SecondSection() {
  return (
    <div className='bg-[#2F8899] mt-11 md:mt-7 lg:mt-[7rem] h-[13rem] flex flex-col  items-center relative'>
            <h1 className='text-white mt-10 font-bold lg:text-4xl text-center  lg:mt-14'>See why users trust <br /> CvMAKER</h1>
            <div className='flex flex-col md:flex-col lg:flex-row lg:gap-8 gap-4 absolute top-[160px]'>
                <img src={Feedback} alt="feedback" />
                <img src={Feedback2} alt="feedback" />
            </div>
    </div>
  )
}

export default SecondSection
