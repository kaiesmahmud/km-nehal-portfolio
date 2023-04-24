import Link from "next/link"
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {SiHackerrank, SiGmail} from 'react-icons/si'
import {HiBars3BottomRight} from 'react-icons/hi2'
import {RxCross1} from 'react-icons/rx'

const Navbar = () => {
  return (
    <header className=" bg-black/20 backdrop-blur-2xl sticky t-0">
      <nav className="flex justify-between items-center px-3 md:px-5 lg:px-7 py-3">
        <Link href={'/'} className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold">Nehal</Link>
        <div className="md:hidden text-2xl">
          <HiBars3BottomRight/>
          <RxCross1/>
        </div>
        <div className="hidden  md:grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 items-center md:text-lg lg:text-xl text-center font-normal">
          <Link href={'/#projects'} className="p-2 md:p-3 lg:p-4  hover:bg-slate-800 rounded hover:text-white transition-colors ease-in">Projects</Link>
          <Link href={'/#experience'} className="p-2 md:p-3 lg:p-4  hover:bg-slate-800 rounded hover:text-white transition-colors ease-in">Experience</Link>
          <Link href={'/#contact'} className="p-2 md:p-3 lg:p-4  rounded hover:bg-slate-800 hover:text-white transition-colors ease-in">Contact</Link>
        </div>
        <div className="hidden md:flex gap-2 md:gap-4 lg:gap-6 justify-end items-center text-lg md:text-xl lg:text-3xl">
          <BsGithub/>
          <SiHackerrank className='' />
          <SiGmail/>
          <BsLinkedin/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar