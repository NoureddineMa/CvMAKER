import React from 'react'

function Card({ svg , title , description}) {
    return (
        <div className='flex flex-row align-top  w-76  gap-7  py-6 px-4 rounded-lg '>
            <div>
            <img width={80}  src={svg} alt="image for description" />
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-[#116A7B] font-semibold text-xl'>{title}</span>
                <p className='text-base'>{description}</p>
            </div>
        </div>
    )
}

export default Card
