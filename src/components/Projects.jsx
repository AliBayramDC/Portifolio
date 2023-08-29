import React from 'react';
import Passionist from '../assets/passionist.png';
import Little from '../assets/little.png';
import Devco from '../assets/Devco.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#DDD0C8] text-[#323232]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold text-[#5c6199]'>My Projects</p>
          <p className='py-6'>Check out my projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='shadow-lg shadow-[#5c6199] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div' style={{ backgroundImage: `url(${Passionist})` }}>
            <div className='opacity-0 group-hover:opacity-100 '>
              <div className='text-center flex flex-col items-center'>
                <span className='text-2xl font-semi-bold tracking-wider text-[#fff]'>
                  React JS Ecommerce Web App
                </span>
                <div className='pt-8 text-center'>
                  {/* <a href='/' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a> */}
                  <a href='https://github.com/AliBayramDC/Passionist' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-lg shadow-[#5c6199] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${Little})` }}>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-center flex flex-col items-center'>
                <span className='text-2xl font-semi-bold tracking-wider text-[#fff]'>
                  React JS Restaurant Web App
                </span>
                <div className='pt-8 text-center'>
                  {/* <a href='/' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a> */}
                  <a href='https://github.com/AliBayramDC/Litttle_Lemon' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-lg shadow-[#5c6199] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${Devco})` }}>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-center flex flex-col items-center'>
                <span className='text-2xl font-semi-bold tracking-wider text-[#fff]'>
                  Website
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://www.devco.az/' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  {/* <a href='https://github.com/AliBayramDC/Litttle_Lemon' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
