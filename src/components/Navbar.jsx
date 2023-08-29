import React, {useState} from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'
// import resume from '../assets/Ali Bayram.webp'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#DDD0C8] text-[#323232]'>
        <div>
            <img src={Logo} alt="logo" style={{width: '100px'}}/>
        </div>
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} offset={50} duration={500} className="hover:text-[#959ad4] transition-colors duration-300">
                Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} offset={50} duration={500} className="hover:text-[#959ad4] transition-colors duration-300">
                About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} offset={50} duration={500} className="hover:text-[#959ad4] transition-colors duration-300">
                Skills
                </Link>
                </li>
                <li>
                <Link to="projects" smooth={true} offset={50} duration={500} className="hover:text-[#959ad4] transition-colors duration-300">
                Projects
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} offset={50} duration={500} className="hover:text-[#959ad4] transition-colors duration-300">
                Contact
                </Link>
                </li>
            </ul>
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#DDD0C8] text-[#323232] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={500}>
                Projects
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                Contact
                </Link></li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#323232]' href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#323232]' href='https://github.com/AliBayramDC' target='_blank' rel='noopener noreferrer'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#323232]' href='mailto:ali.abbayram@gmail.com'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#323232]' href='https://raw.githubusercontent.com/AliBayramDC/Passionist/master/AliBayram.pdf' download='AliBayram.pdf'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>    
        
    </div>
  )
}

export default Navbar