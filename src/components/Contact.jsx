import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#DDD0C8] text-[#323232] flex justify-center items-center p-4'>
        <form method="POST" action='https://getform.io/f/495fe694-c943-4062-be9d-365bcae3901e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-[#5c6199]'>Contact</p>
                <p className='py-4'>Collabrate with me</p>
            </div>
            <input className='text-[#555]' type='text' placeholder='Name' name='name' />
            <input className='text-[#555] my-4 p-2' type='email' placeholder='Email' name='email' />
            <textarea className='text-[#555] p-2' name='mesage' rows='10' placeholder='Message'></textarea>
            <button className='border-[#323232] border-2 hover:bg-[#5c6199] hover:text-[#fff] hover:border-[#5c6199] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact