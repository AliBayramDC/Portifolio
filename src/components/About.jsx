import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#DDD0C8] text-[#323232]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-5 pl-4'>
                    <p className='text-4xl font-bold text-[#5c6199]'>About</p>
                </div>
            </div>
            <div className='max-w-[800px] w-full tracking-wide px-4'>
                
                <div>
                    <p>Hey there! I'm Ali, a creative front-end dev who loves turning designs into user-friendly websites. I'm all about blending aesthetics with seamless functionality. Accessibility matters to me, and I'm always staying updated with the latest libraries. Let's chat, whether it's a project or just connecting!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About