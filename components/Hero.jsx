import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {HiOutlineRocketLaunch} from 'react-icons/hi2'
import {FaUserShield} from 'react-icons/fa'
import {TbFileCertificate,TbSocial} from 'react-icons/tb'

import Link from 'next/link'
import Image from 'next/image'

import nehal from './../assets/nehal.jpg'

const Hero = () => {
  return (
    <section className=" min-h-[90vh] relative p-5 md:p-7 lg:p-10 flex items-center justify-center">
      <div className="gradient-01 z-[-2]" />
      <div className="gradient-02 z-[-2]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="bg-teal-500/50 shadow hover:shadow-lg backdrop-blur-2xl
          px-3 md:px-4 lg:px-5 xl:px-6 py-10 rounded flex flex-col items-center justify-center gap-3 md:gap-5 lg:gap-6 xl:gap-7">
          <Image src={nehal} alt='kaies Mahmud Nehal' width={300} height={300} className=" w-32 md:w-40 lg:w-52  rounded-full"/>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Kaies Mahmud Nehal</h1>
          <p className="px-2 md:px-4 lg:px-5 pt-2 text-xs md:text-sm lg:text-base xl:text-lg text-center"> Passionate and highly skilled Full Stack Developer with 3 years of industry experience, specializing in JavaScript, TypeScript, React, Next.js, and Node.js. Seeking a remote position that allows me to leverage my expertise in building cutting-edge web applications. I am motivated to stay at the forefront of technological advancements and keen on expanding my knowledge base. With a proven track record of delivering robust and efficient software solutions, I aim to contribute to a forward-thinking organization that values innovation, collaboration, and growth.</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-3 text-xs md:text-sm lg:text-base ">
          <div className='col-span-3'>
            <Link href={'/projects'} className="shadow h-full hover:shadow-lg rounded p-3 bg-sky-500/50 hover:bg-slate-800 hover:text-sky-400 transition-colors ease-in  flex flex-col gap-3 items-center justify-center">
              <AiOutlineFundProjectionScreen className='text-3xl' />
              <h2 className="text-lg md:text-xl ">My Projects</h2>
            </Link>
          </div>
          <div>
            <Link href={'/#skill'} className="hover:bg-slate-800 hover:text-sky-400 transition-colors ease-in shadow h-full hover:shadow-lg rounded p-3 bg-green-500/50 flex flex-col gap-3 items-center justify-center">
              <HiOutlineRocketLaunch className='text-3xl'/>
              My Skills
            </Link>
          </div>
          <div >
            <Link href={'/#education'} className=" hover:bg-slate-800 hover:text-sky-400 transition-colors ease-in shadow h-full hover:shadow-lg rounded p-3 bg-blue-500/50 flex flex-col gap-3 items-center justify-center">
              <TbFileCertificate className='text-3xl'/>
              My Education
            </Link>
          </div>
          <div className='row-span-2'>
            <Link href={'/experience'} className="hover:bg-slate-800 hover:text-sky-400 transition-colors ease-in shadow h-full hover:shadow-lg rounded p-3 bg-purple-500/50 flex flex-col gap-3 items-center justify-center" >
              <FaUserShield className='text-3xl '/>
              My Experience
            </Link>
          </div>
          <div className=' col-span-2 rounded'>
            <Link href={'/#contact'} className="hover:bg-slate-800 hover:text-sky-400 transition-colors ease-in shadow h-full hover:shadow-lg rounded p-3 bg-white/10 flex flex-col gap-3 items-center justify-center" >
              <TbSocial className='text-3xl '/>
                Social Links
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero