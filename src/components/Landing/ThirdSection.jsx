import React from 'react'
import Card from './Card'
import {Folder , Star , Vector } from '../Landing/index'

function ThirdSection() {
  return (
    <div className='py-11 mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
       <h1 className='text-[#116A7B] my-10 lg:my-7 font-bold lg:text-4xl text-center  lg:mt-14'>What are the benefits of <br /> CvMAKER?</h1>
       <div className='flex my-7 gap-y-11 sm:gap-x-5 lg:gap-x-6 flex-col md:flex-row lg:flex-row justify-between  items-center  lg:mt-[7rem]'>
       <Card svg={Star} title="Professional Resume Builder
" description=" Our resume builder is packed with expert tips to show you how to make each part of your resume." />
       <Card svg={Vector} title="Fast and Easy to Use Generator
" description="Drag and drop ready-made content tailored to your resume in a click and enjoy a flexible text editor." />
       <Card svg={Folder} title="Hundreds of Free Samples Templates
" description="Explore top resume examples and cover letter examples for all jobs and industries to get a job in no time." />
       </div>
    </div>
  )
}
export default ThirdSection
