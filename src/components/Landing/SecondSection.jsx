import React from 'react'
import Feedback from '../../assets/Images/feedback.png'
import Feedback2 from '../../assets/Images/feedback2.png'
import FeedBack3 from '../../assets/Images/feedback3.png'

function SecondSection() {
  return (
    <div className='bg-gradient-to-r from-[#297584]  to-[#08866F] mt-11 md:mt-7 lg:mt-[7rem] flex flex-col  items-center py-11'>
            <h1 className='text-white my-3  font-bold lg:text-4xl text-center'>See why users trust <br /> CvMAKER</h1>
            <div className='flex flex-col  md:flex-col lg:flex-col xl:flex-row my-9 lg:gap-8 gap-4'>
                <img src={Feedback} alt="feedback" />
                <img src={Feedback2} alt="feedback" />
                <img src={FeedBack3} alt="feedback" />
            </div>
    </div>
  )
}

export default SecondSection
