import Image from 'next/image';
import React from 'react';
//icons
import {BsPersonWorkspace} from 'react-icons/bs'
import {TbCertificate} from 'react-icons/tb'
const Experience = () => {
    const experiences =[
        {
            id:1,
            name:'Full Stack Developer',
            company:"DevdeerTech Digital Business Solution",
            time:"From July, 2022 to 2023"
        },
        {
            id:2,
            name:'Marketing Coordinator & Web Developer',
            company:"Digitex Crew Agency",
            time:"From January, 2022 to  april, 2022"
        },
        {
            id:3,
            name:'Lead Generation and Data Entry Expert',
            company:"Contract Base Work",
            time:"From January, 2021 to  july, 2021"
        },
    ]
    const certificates = [
        {
            id:1,
            name:"Responsive Web Design",
            date:'11/10/2021',
            img: '/certificates/fcc-responsive-certificate.jpg'
        },
        {
            id:2,
            name:"JavaScript Algorithms & Data Structures",
            date:'28/12/2021',
            img: '/certificates/js-fcc-certificate.jpg'
        },
        {
            id:3,
            name:"React + Redux",
            date:'6/4/2022',
            img: '/certificates/react-sololearn-certificate.png'
        },
        {
            id:4,
            name:"Responsive Web Design",
            date:'17/4/2022',
            img: '/certificates/responsive-sololearn-certificate.png'
        },
        {
            id:5,
            name:"JavaScript",
            date:'4/4/2022',
            img: '/certificates/sololearn-js-certificate.png'
        },
    ]
    return (
        <div className=' font-light max-w-[3000px] min-h-[90vh] pt-[11vh] mb-10'>
            <h1 className='text-3xl px-5 font-extralight'>Working Experience:</h1>
            <section className='flex flex-wrap gap-10 p-5 text-black'>
                {
                    experiences.map(exp=>(
                        <div key={exp.id} className='w-[100%] lg:w-[45%] border rounded-lg  p-5 bg-slate-900/10'>
                            <div className=' flex justify-start gap-5 items-start'>
                                <BsPersonWorkspace className='text-4xl p-1 rounded-full w-[10%]'/>
                                <div className='flex flex-col gap-2 w-[80%] border-l-2 border-purple-500 pl-5'>
                                    <h2 className='text-lg font-extralight'>{exp.name}</h2>
                                    <h2 className=' text-opacity-80'>{exp.company}</h2>
                                    <h3 className='text-xs text-opacity-50'>{exp.time}</h3>
                                </div>
                            </div>
                        </div> 
                    ))
                }               
            </section>
            <h1 className='text-3xl px-5 font-extralight'>Certification:</h1>
            <section className='flex flex-wrap gap-10 p-5 '>
                {
                    certificates.map(i=>(
                        <div key={i.id} className='w-[100%] lg:w-[30%] border rounded-lg p-2 bg-slate-900/20 '>
                            <div className=' overflow-hidden rounded-lg'>
                                <Image height={400} width={600} src={i.img} alt={i.name} className='w-[100%] hover:scale-110 transition-all duration-300 rounded-lg'/>
                            </div>
                            <div className=' flex justify-start gap-5 items-start pt-2 p-5'>
                                <TbCertificate className='text-4xl p-1 '/>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-lg font-extralight'>{i.name}</h2>
                                    <h3 className='text-xs text-opacity-30 opacity-30'>{i.date}</h3>
                                </div>
                            </div>
                        </div> 
                    ))
                }               
            </section>
        </div>
    );
};

export default Experience;