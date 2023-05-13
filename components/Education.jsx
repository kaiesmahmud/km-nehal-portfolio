import {TbFileCertificate}from 'react-icons/tb'
import {SiTemporal}from 'react-icons/si'
import {HiLanguage}from 'react-icons/hi2'

const Education = () => {
  const education = [
    {
        id:1,
        name:'BSc in Computer Science & Engineering',
        institute:'City University',
        time:'November, 2021 to November, 2024',
        cgpa:'CGPA: 3.50 (out of 4.00)'            
    },
    {
        id:2,
        name:'HSC in Science',
        institute:'Savar Govt College',
        time:'August, 2018 to November, 2020',
        cgpa:'CGPA: 4.67 (out of 5.00)'            
    },
    {
        id:3,
        name:'SSC in Science',
        institute:'Gokulnagar High School',
        time:'January, 2016 to January, 2018',
        cgpa:'CGPA: 4.61 (out of 5.00)'            
    },
]
  return (
    <section id='education'>
            {/* -----------------------Programming Language Section---------------------------------------- */}
            <section className='pt-20 text-xs lg:text-base pb-10'>
                <h1 className='text-3xl font-extralight text-center pb-10 '>Programming Language</h1>
                <div className='flex items-center justify-center flex-wrap gap-6 py-10 p-3'>
                {
                  ['C','C++', 'Java','JavaScript','React Library', 'Nextjs React Framework','TypeScript'].map(item=>(
                    <h4 key={item} className='bg-sky-100 shadow border rounded px-2 py-1 tracking-wide'>{item}</h4>
                  ))
                }
                </div>
            </section>
            {/* --------------------------------------------Educational Qualification--------------------------------------------- */}
            <section>
                <h1 className='text-3xl font-extralight text-center mb-20'>Educational Qualification</h1>
                <div className='flex flex-wrap items-center justify-center gap-8 p-5'>
                        {
                            education.map(ob=>( 
                            <div key={ob.id} className='flex  items-center border 
                             shadow-lg bg-white hover:bg-shadow-xl  rounded w-[500px] select-none'>
                                    <div className='text-3xl lg:text-7xl  text-center p-6 lg:p-10'>
                                        <TbFileCertificate/>
                                    </div>
                                    <div className='p-5'>
                                        <h2 className='text-xl lg:text-2xl font-extralight'>{ob.name}</h2>
                                        <h3 className='text-base lg:text-xl font-extralight opacity-50'>{ob.institute}</h3>
                                        <h4 className='font-light opacity-50 text-sm'>{ob.time}</h4>
                                        <h4 className='font-bold opacity-50 text-xs lg:text-sm'>{ob.cgpa}</h4>
                                    </div>
                                </div>
                            ))
                        }                    
                </div>
            </section>
            <div className='flex flex-col lg:flex-row justify-center items-center my-20'>
                {/* -----------------------Language Section---------------------------------------- */}
                <section className='pt-20 text-xs lg:text-base w-full lg:w-[40%]'>
                    <h1 className='text-3xl font-extralight text-center pb-10 '>Language</h1>
                    <div className='flex items-center justify-center gap-6 font-normal'>
                    {
                        ['English','Bangla'].map(i=>
                            <div key={i} className='shadow-lg bg-sky-100 hover:bg-white rounded p-16 flex flex-col items-center justify-center gap-5'>
                                <HiLanguage className='text-xl md:text-2xl lg:text-3xl xl:text-4xl '/>
                                <h4 className=' '>{i}</h4>
                            </div>
                            )
                        }
                    </div>
                </section>
                {/* -----------------------Hobby Section---------------------------------------- */}
                <section className='pt-20 text-xs lg:text-base w-full lg:w-[60%]'>
                    <h1 className='text-3xl font-extralight text-center pb-10 '>Hobby</h1>
                    <div className='flex items-center justify-center flex-wrap gap-6 '>
                        {
                            ['Programming','Travelling','Peting Animal'].map(i=>
                                <div key={i} className='shadow-lg bg-slate-100 hover:bg-white rounded p-16 flex flex-col items-center justify-center gap-5'>
                                     <SiTemporal className='text-xl md:text-2xl lg:text-3xl xl:text-4xl '/>
                                    <h4>{i}</h4>
                                </div>
                                )
                            }
                    </div>
                </section>
            </div>

    </section>
  )
}

export default Education