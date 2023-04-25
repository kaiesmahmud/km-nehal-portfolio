'use client'
import Link from "next/link"
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {SiHackerrank, SiGmail} from 'react-icons/si'
import {HiBars3BottomRight} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className=" bg-black/20 backdrop-blur-2xl sticky top-0">
      <nav className="flex justify-between items-center px-3 md:px-5 lg:px-7 py-3">
        <Link href={'/'} className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">Nehal-Portfolio</Link>
        <div className="md:hidden text-2xl cursor-pointer" onClick={()=>setOpen(!open)}>
          {
            !open ? 
            <HiBars3BottomRight/>
            :
            <RxCross1/>
          }
        </div>
        <div className="hidden  md:grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 items-center md:text-lg lg:text-xl text-center font-normal">
          <Link href={'/#projects'} className="p-2 md:p-3 lg:p-4  hover:bg-slate-800 rounded hover:text-white transition-colors ease-in">Projects</Link>
          <Link href={'/#experience'} className="p-2 md:p-3 lg:p-4  hover:bg-slate-800 rounded hover:text-white transition-colors ease-in">Experience</Link>
          <Link href={'/#contact'} className="p-2 md:p-3 lg:p-4  rounded hover:bg-slate-800 hover:text-white transition-colors ease-in">Contact</Link>
        </div>
        <div className="hidden md:flex gap-2 md:gap-4 lg:gap-6 justify-end items-center text-lg md:text-xl lg:text-3xl">
          <Link href={'https://github.com/kaiesmahmud'}>
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
        </div>
      </nav>
      {
        open && 
        <div className=" min-h-[92vh] max-h-[96vh] sticky md:hidden">
          <div className="grid grid-cols-1 gap-10  items-center md:text-lg lg:text-xl text-center font-normal" onClick={()=>setOpen(!open)}>
            <Link href={'/#projects'} className="p-2 hover:bg-slate-800  hover:text-white transition-colors ease-in">Projects</Link>
            <Link href={'/#experience'} className="p-2 hover:bg-slate-800  hover:text-white transition-colors ease-in">Experience</Link>
            <Link href={'/#contact'} className="p-2  hover:bg-slate-800 hover:text-white transition-colors ease-in">Contact</Link>
            <div className="flex gap-10 justify-center items-center text-lg p-2">
              <Link href={'https://github.com/kaiesmahmud'}>
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
            </div>
          </div>
        </div>
      }
    </header>
  )
}

export default Navbar