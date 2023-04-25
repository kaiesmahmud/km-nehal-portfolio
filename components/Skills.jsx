import {
  SiCplusplus,SiCss3,SiBootstrap,SiJquery,SiJavascript,SiReact,
  SiReactrouter,SiTailwindcss,SiFramer,SiTypescript,SiGit,SiGithub,
  SiExpress,SiMongodb,SiMui,

} from 'react-icons/si'
import {AiFillHtml5,AiOutlineApi} from 'react-icons/ai'
import {TbBrandNextjs,TbBrandPrisma} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'

const Skills = () => {
  const skillDetails = [
    'Proficiency in HTML5, CSS3, and JavaScript',
    'Knowledge of web development frameworks  ReactJS, NextJS',
    'Understanding of server-side development using NodeJS and ExpressJS.',
    'Familiarity with database systems MongoDB, GraphQL',
    'Knowledge of Git and version control',
    'Understanding of RESTful API design and implementation',
    'Ability to write clean, maintainable, and scalable code',
    'Familiarity with serverless architectures and cloud-based services',
    'Familiarity working with AWS',
    'Ability to work with third-party APIs and integrations',
    'Knowledge of authentication and authorization ',
    'Experience in testing frameworks such as Jest',
    'Familiarity with CI/CD pipelines and deployment automation',
    'Knowledge of SEO best practices',
    'Ability to troubleshoot and debug web applications',
   ' Experience working with GraphQL APIs',
    'Knowledge of server-side & client-side rendering techniques',
    'Familiarity with frontend design frameworks Tailwindcss, MaterialUI, AntDesign',
    'Experience working with websockets and real-time communication',
    'Knowledge of performance optimization techniques',
    'Ability to work independently and collaboratively in a remote team environment',
    'Attention to detail and ability to deliver high-quality work',
    'Ability to learn quickly and adapt to new technologies',
    'Strong problem-solving skills and ability to think creatively to solve complex technical challenges',
  ]
  return (
    <section id="skill" className=" min-h-[90vh] pt-[10vh]">
      <h1 className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">My Skills</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2  p-5 lg:p-10 gap-2 '>
        <div className='grid grid-cols-4  gap-2 text-xs md:text-sm lg:text-base'>
          <div className='bg-white/90  rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiCplusplus className='text-xl md:text-2xl lg:text-3xl text-[#00599C]'/>
              <p className='font-semibold'>C++</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90  rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center  gap-2'>
            <AiFillHtml5 className='text-xl md:text-2xl lg:text-3xl text-[#E34F26]'/>
              <p className='font-semibold'>HTML</p>
              <p className='block'> Intermidiate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center  gap-2'>
            <SiCss3 className='text-xl md:text-2xl lg:text-3xl text-sky-500'/>
              <p className='font-semibold'>CSS</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center  gap-2'>
            <SiBootstrap className='text-xl md:text-2xl lg:text-3xl text-[#6F42C1]'/>
              <p className='font-semibold'>Bootstrap</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center  gap-2'>
            <SiJquery className='text-xl md:text-2xl lg:text-3xl'/>
              <p className='font-semibold'>JQuery</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col justify-center  items-center gap-2'>
            <SiJavascript className='text-xl md:text-2xl lg:text-3xl text-yellow-500'/>
              <p className='font-semibold'>javascript</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col justify-center items-center gap-2'>
            <SiReact className='text-xl md:text-2xl lg:text-3xl text-sky-500'/>
              <p className='font-semibold'>React</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center  gap-2'>
            <SiReactrouter className='text-xl md:text-2xl lg:text-3xl text-red-500'/>
              <p className='font-semibold'>React-Router</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded  shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <TbBrandNextjs className='text-xl md:text-2xl lg:text-3xl'/>
              <p className='font-semibold'>Nexjs</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiTailwindcss className='text-xl md:text-2xl lg:text-3xl text-teal-500'/>
              <p className='font-semibold' >TailwindCss</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90  rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiFramer className='text-xl md:text-2xl lg:text-3xl'/>
              <p className='font-semibold'>Framer Motion</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiTypescript className='text-xl md:text-2xl lg:text-3xl text-sky-600'/>
              <p className='font-semibold'>TypeScript</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiGit className='text-xl md:text-2xl lg:text-3xl text-red-500'/>
              <p className='font-semibold'>Git</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col justify-center items-center gap-2'>
            <SiGithub className='text-xl md:text-2xl lg:text-3xl'/>
              <p className='font-semibold'>GitHub</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiMongodb className='text-xl md:text-2xl lg:text-3xl text-green-500'/>
              <p className='font-semibold'>MongoDB</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <FaNodeJs className='text-xl md:text-2xl lg:text-3xl text-teal-500'/>
              <p className='font-semibold'>Nodejs</p>
              <p className='block'> Intermediate</p>
          </div>
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <SiExpress className='text-xl md:text-2xl lg:text-3xl'/>
              <p className='font-semibold'>Expressjs</p>
              <p className='block'> Intermediate</p>
          </div>
          
          <div className='bg-white/90 rounded shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center  gap-2'>
            <SiMui className='text-xl md:text-2xl lg:text-3xl'/>
              <p className='font-semibold'>MUI</p>
              <p className='block'> Basic</p>
          </div>
          <div className='bg-white/90 rounded  shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <AiOutlineApi className='text-xl md:text-2xl lg:text-3xl text-slate-500'/>
              <p className='font-semibold'>API</p>
              <p className='block'> Intermidiate</p>
          </div>
          <div className='bg-white/90 rounded  shadow p-2 md:p-3 lg:p-5 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center gap-2'>
            <TbBrandPrisma className='text-xl md:text-2xl lg:text-3xl text-sky-500'/>
              <p className='font-semibold'>Prisma</p>
              <p className='block'> basic</p>
          </div>
        </div>
        <div className='bg-white/90 rounded p-5 shadow text-xs md:text-sm lg:text-base'>
          
          <ul>
          {
            skillDetails.map(i =>
              <li key={i} className='p-1 font-normal'>- {i}</li>
            )
          }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills