import {AiFillHtml5} from 'react-icons/ai'
import {CgCPlusPlus} from 'react-icons/cg'
import {HiOutlineRocketLaunch} from 'react-icons/hi2'
import {FaUserShield} from 'react-icons/fa'
import {TbBrandNextjs,TbFileCertificate} from 'react-icons/tb'
import {SiJavascript,SiReact} from 'react-icons/si'
import {BsGithub,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs'
import {SiHackerrank, SiGmail} from 'react-icons/si'

import Link from 'next/link'


const Hero = () => {
  return (
    <section className=" min-h-[90vh] relative p-5 md:p-7 lg:p-10">
      <div className="gradient-01 z-[-2]" />
      <div className="gradient-02 z-[-2]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="bg-teal-500/50 shadow hover:shadow-lg backdrop-blur-2xl   px-3 md:px-4 lg:px-5 xl:px-6 py-10 rounded flex flex-col items-center justify-center gap-3 md:gap-5 lg:gap-6 xl:gap-7">
          <img src="https://i.ibb.co/SdG0Syc/Nehal.jpg" alt="kaies mahmud nehal" className=" w-32 md:w-40 lg:w-52  rounded-full" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Kaies Mahmud Nehal</h1>
          <p className="px-2 md:px-4 lg:px-5 pt-2 text-xs md:text-sm lg:text-base xl:text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium laboriosam distinctio consequatur nemo animi autem debitis quis adipisci! Deserunt sint cupiditate porro quam earum cumque, sed eaque voluptates architecto!</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-3 text-xs md:text-sm lg:text-base ">
          <Link href={'/#projects'} className="bg-sky-500/50 col-span-3 shadow hover:shadow-lg rounded p-3 flex flex-col items-center
           justify-center gap-5 md:gap-8 lg:gap-10 py-5">
            <h2 className="text-lg md:text-xl font-bold">My Projects</h2>
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              <div className="flex flex-col items-center justify-center">
                <CgCPlusPlus className='text-3xl md:text-4xl lg:text-5xl text-red-500'/>
                C++
              </div>
              <div className="flex flex-col items-center justify-center">
                <AiFillHtml5 className='text-3xl md:text-4xl lg:text-5xl text-red-500'/>
                HTML
              </div>
              <div className="flex flex-col items-center justify-center">
                <SiJavascript className='text-3xl md:text-4xl lg:text-5xl text-yellow-400'/>
                JavaScript
              </div>
              <div className="flex flex-col items-center justify-center">
                <SiReact className='text-3xl md:text-4xl lg:text-5xl text-blue-600'/>
                React
              </div>
              <div className="flex flex-col items-center justify-center">
                <TbBrandNextjs className='text-3xl md:text-4xl lg:text-5xl text-black'/>
                Nextjs
              </div>
            </div>
          </Link>
          <Link href={'/#skill'} className="shadow hover:shadow-lg rounded p-3 bg-green-500/50 flex flex-col gap-3 items-center justify-center">
            <HiOutlineRocketLaunch className='text-3xl'/>
            My Skills
          </Link>
          <Link href={'/#education'} className="shadow hover:shadow-lg rounded p-3 bg-blue-500/50 flex flex-col gap-3 items-center justify-center">
            <TbFileCertificate className='text-3xl'/>
            My Education
          </Link>
          <Link href={'/#experience'} className=" row-span-2 shadow hover:shadow-lg rounded p-3 bg-purple-500/50 flex flex-col gap-3 items-center justify-center" >
            <FaUserShield className='text-3xl '/>
            My Experience
          </Link>
          <div className=' col-span-2 shadow hover:shadow-lg rounded p-3 bg-red-500/50 flex flex-col items-center justify-center'>
            <div className="grid grid-cols-6 gap-5 md:gap-10 items-center text-lg md:text-xl lg:text-3xl">
              <Link href={'https://github.com/kaiesmahmud'} className='text-center'>
                <BsGithub/>
              </Link>
              <Link href={'https://github.com/kaiesmahmud'}>
                <SiHackerrank className='' />
              </Link>
              <Link href={'https://github.com/kaiesmahmud'}>
                <SiGmail/>
              </Link>
              <Link href={'https://github.com/kaiesmahmud'}>
                <BsLinkedin/>
              </Link>
              <Link href={'https://github.com/kaiesmahmud'}>
                <BsFacebook/>
              </Link>
              <Link href={'https://github.com/kaiesmahmud'}>
                <BsInstagram/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero