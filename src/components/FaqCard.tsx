'use client'

import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

interface FAQCarProps {
    question: string
    answer: string
}

const FaqCard = ({question, answer}: FAQCarProps) => {

    const [isDescOpen, setIsDescOpen] = useState(false)

    const toggle = () => {
        setIsDescOpen(prev => !prev)
    }

    return (
        <div className='w-full bg-transparent py-6 px-4 border border-transparent border-b-primary flex flex-col gap-2 cursor-pointer hover:bg-white/60'
        onClick={toggle}
        >
            <div className='flex items-start gap-2'>
                <button className='text-orange mt-[2px] font-bold text-lg'>
                    {isDescOpen ? <FaMinus /> : <FaPlus />}
                </button>

                <h4 className='text-sm sm:text-base font-semibold text-title'>
                    {question}
                </h4>
            </div>

            {isDescOpen && <div className='ml-6 px-4 border border-transparent border-l-gray-400'>
                <p className='font-lato text-sm tracking-wide text-justify text-primary/80 font-medium'>
                    {answer}
                </p>
            </div>}
        </div>
    )
}

export default FaqCard