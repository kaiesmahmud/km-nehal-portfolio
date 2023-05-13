import Link from 'next/link'
import {BsGithub,BsLinkedin,BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'
import {SiHackerrank, SiGmail} from 'react-icons/si'
import {FaTelegram} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='min-h-[90vh] py-20' id='contact'>
      <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Hire Me ?</h2>
      <div className='p-10 md:p-16 lg:p-20 xl:p-32'>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 items-center ">
          <div className='flex items-center justify-center text-center'>
            <Link href={'https://github.com/kaiesmahmud'} target='blank' className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <BsGithub className='text-lg md:text-xl lg:text-3xl'/>
              github.com/kaiesmahmud
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link href={'https://www.hackerrank.com/kaiesmahmud?hr_r=1'} target='blank' className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <SiHackerrank className='text-green-500 text-lg md:text-xl lg:text-3xl' />
              hackerrank.com/kaiesmahmud
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link href={'mailto:kaiesmahmud@gmail.com'} target='blank' className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <SiGmail className='text-red-500 text-lg md:text-xl lg:text-3xl'/>
              kaiesmahmud@gmail.com
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link href={'https://www.linkedin.com/in/kaies-mahmud-nehal/'} target='blank' className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <BsLinkedin className='text-blue-500  text-lg md:text-xl lg:text-3xl'/>
              linkedin.com/in/kaies-mahmud-nehal
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link href={'https://www.facebook.com/kaiesmahmud.nehal'} target='blank' className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <BsFacebook className='text-sky-500 text-lg md:text-xl lg:text-3xl'/>
              facebook.com/kaiesmahmud.nehal
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link target='blank' href={'https://instagram.com/kaiesmahmudnehal'} className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <BsInstagram className='text-pink-500 text-lg md:text-xl lg:text-3xl'/>
              instagram.com/kaiesmahmudnehal
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link target='blank' href={'https://t.me/Nehal_js_dev'} className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <FaTelegram className='text-cyan-500 text-lg md:text-xl lg:text-3xl'/>
              Telegram/kaiesmahmudnehal
            </Link>
          </div>
          <div className='flex items-center justify-center text-center'>
            <Link target='blank' href={'https://wa.me/+8801867074943'} className='bg-slate-100 hover:bg-white transition-colors ease-in p-5 gap-5 shadow-lg rounded-lg flex justify-start items-center'>
              <BsWhatsapp className='text-green-500 text-lg md:text-xl lg:text-3xl'/>
              WhatsApp/kaiesmahmud
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact