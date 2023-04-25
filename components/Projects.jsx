import Image from "next/image"
import dummmy from './../assets/nehal-website-redesign.jpg'
import Link from "next/link"

const Card = ({project}) =>(
      <div className="bg-white/80 rounded shadow overflow-hidden">
        <Image src={project.img || dummmy} alt={project.name} width={400} height={200}/>
        <div className="p-2 md:p-4 lg:p-5 flex flex-col gap-2">
          <p className="font-bold text-sm md:text-base lg:text-lg">{project.name}</p>
          <div className="flex text-xs flex-wrap gap-1">
            {
              project.techs.map(i => (<div key={i} className="bg-slate-600 text-white p-1 rounded px-2 text-xs">{i}</div>))
            }
          </div>
          <p className="text-xs md:text-sm lg:text-base">{project.description}</p>
          <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-10 text-center pt-5 text-xs md:text-sm lg:text-base">
            {
              project.github &&
              <Link href={project.github} className=" px-5 py-2 bg-slate-800 rounded text-white font-normal">Github</Link>
            }
            {
              project.live && 
              <Link href={project.live} className=" px-3 py-2 bg-green-500 rounded text-white font-normal" >Live</Link>
            }
          </div>
        </div>
      </div>
)

const Projects = () => {
  const htmlProjects = [
    {
      name:'First Website',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/My-first-portfolio/',
      github:'https://github.com/kaiesmahmud/My-first-portfolio',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
    {
      name:'Hot Gadget E-com Practice',
      description: "I learn and create my first static html,css, bootstrap e-commerce website in 2021",
      live: 'https://kaiesmahmud.github.io/demo-e-commerce-2/#product',
      github:'https://github.com/kaiesmahmud/demo-e-commerce-2',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
    {
      name:'First Static E-commerce Website',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/first-e-commerce/',
      github:'https://github.com/kaiesmahmud/first-e-commerce',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:['']
    },
    {
      name:'HTML-Css Custom Loader',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/loading-animation-effects/',
      github:'https://github.com/kaiesmahmud/loading-animation-effects',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
    {
      name:'Auto Typing Animation HTML-CSS',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/my-short-intro-with-typing-animation/',
      github:'https://github.com/kaiesmahmud/my-short-intro-with-typing-animation',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
  ]
  const jsProjects = [
    {
      name:'Simple Calculator',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/calculator-using-simple-js/',
      github:'https://github.com/kaiesmahmud/calculator-using-simple-js',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
    {
      name:'Clock ',
      description: "I learn and create my first static html,css, bootstrap e-commerce website in 2021",
      live: 'https://kaiesmahmud.github.io/Clock/',
      github:'https://github.com/kaiesmahmud/Clock',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
    {
      name:'Github Finder',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/Github-Finder/',
      github:'https://github.com/kaiesmahmud/Github-Finder',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:['']
    },
    {
      name:'Tic-Tac-Toe Game',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/tic-tac-toe-game-js/',
      github:'https://github.com/kaiesmahmud/tic-tac-toe-game-js',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
    {
      name:'Drone ',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/Drone/',
      github:'https://github.com/kaiesmahmud/Drone',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:''
    },
  ]
  return (
    <section id="projects" className=" min-h-[90vh] pt-[11vh]">
      <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold">My Projects</h1>
      {/* -------------------REACT PROJECTS  ---------------------------- */}
      <div className="px-5 md:px-10">
        <h2 className="my-5 p-1 font-semibold text-lg md:text-xl lg:text-2xl border-l-8 border-sky-500">REACT :</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10 ">
          {
            htmlProjects.map((project,index)=>
            <Card project={project} key={index} />
            )
          }
        </div>
      </div>
      {/* -------------------jAVASCRIPT PROJECTS  ---------------------------- */}
      <div className="px-5 md:px-10">
        <h2 className="my-5 p-1 font-semibold text-lg md:text-xl lg:text-2xl border-l-8 border-yellow-400"> JAVASCRIPT :</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10 ">
          {
            jsProjects.map((project,index)=>
              <Card project={project} key={index} />
            )
          }
        </div>
      </div>

      {/* -------------------HTML-CSS PROJECTS  ---------------------------- */}
      <div className="px-5 md:px-10">
        <h2 className="my-5 p-1 font-semibold text-lg md:text-xl lg:text-2xl border-l-8 border-red-500">HTML :</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-10 ">
          {
            htmlProjects.map((project,index)=>
            <Card project={project} key={index} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Projects