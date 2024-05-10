import React from 'react'
import JavaScript from '../assets/javascript.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactJS from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import GitHub from '../assets/git.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#DDD0C8] text-[#323232]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold text-[#5c6199]'>Skills</p>
                <p className='py-4'>These are the skills I know</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon' />
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='html icon' />
                    <p className='py-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='html icon' />
                    <p className='py-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJS} alt='html icon' />
                    <p className='py-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Tailwind} alt='html icon' />
                    <p className='py-8'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='html icon' />
                    <p className='py-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#5c6199] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='html icon' />
                    <p className='py-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
