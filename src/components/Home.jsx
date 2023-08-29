import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full  h-screen bg-[#DDD0C8]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#323232]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#5c6199]'>Ali Bayram</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#323232]'>I am a Front-end Developer.</h2>
        <p className='text-[#323232] py-4 max-w-[700px]'>I'm the Front-end Developer who shapes the digital face of websites. I transform designs into interactive realities, carefully refining layout, style, and functionality. My focus on user experience ensures smooth navigation and responsiveness, as I continuously explore new tools to keep web interfaces both beautiful and intuitive.</p>
        <div>
  <Link
    to="projects" // Replace with the ID of your "Projects" section
    smooth={true}
    offset={50}
    duration={500}
  >
    <button className='text-[#323232] border-[#323232] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5c6199] hover:text-[#fff] hover:border-[#5c6199]'>
      View my Projects <HiArrowNarrowDown className='ml-2'/>
    </button>
  </Link>
</div>
      </div>
    </div>
  )
}

export default Home