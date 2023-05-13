import Image from "next/image"
import dummmy from './../assets/nehal-website-redesign.jpg'
import Link from "next/link"

const Card = ({project}) =>(
      <div className="bg-white/80 rounded shadow overflow-hidden pt-5 bg-slate-100">
        <Image src={project.imagesUrl || dummmy} alt={project.name} width={700} height={500}/>
        <div className="p-2 md:p-4 lg:p-5 flex flex-col gap-2">
          <p className="font-semibold text-sm md:text-base lg:text-lg">{project.name}</p>
          <div className="flex text-xs flex-wrap gap-1">
            {
              project.techs.map(i => (<div key={i} className="bg-slate-600 text-white p-1 rounded px-2 text-xs">{i}</div>))
            }
          </div>
          {/* <p className="text-xs md:text-sm lg:text-base">{project.description}</p> */}
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
      imagesUrl:'/projects/first-website.jpg'
    },
    {
      name:'Hot Gadget E-com Practice',
      description: "I learn and create my first static html,css, bootstrap e-commerce website in 2021",
      live: 'https://kaiesmahmud.github.io/demo-e-commerce-2/#product',
      github:'https://github.com/kaiesmahmud/demo-e-commerce-2',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/e-com-2.jpg'
    },
    {
      name:'First Static E-commerce Website',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/first-e-commerce/',
      github:'https://github.com/kaiesmahmud/first-e-commerce',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/e-com.jpg'
    },
    {
      name:'HTML-Css Custom Loader',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/loading-animation-effects/',
      github:'https://github.com/kaiesmahmud/loading-animation-effects',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/loader.jpg'
    },
    {
      name:'Auto Typing Animation HTML-CSS',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/my-short-intro-with-typing-animation/',
      github:'https://github.com/kaiesmahmud/my-short-intro-with-typing-animation',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/auto-typing.jpg'
    },
    {
      name:'Survey Form Design | FCC | HTML-CSS',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://codepen.io/KaiesMahmud/full/wveNyQV?editors=1100',
      github:'/',
      techs:['HTML', 'Css', 'BootStrap 5','FCC'],
      imagesUrl:'/projects/survey.jpg'
    },
    {
      name:'Documentation page | FCC | HTML-CSS',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://codepen.io/KaiesMahmud/full/jOLEPPE',
      github:'/',
      techs:['HTML', 'Css', 'BootStrap 5','FCC'],
      imagesUrl:'/projects/documentation.jpg'
    },
  ]
  const jsProjects = [
    {
      name:'Simple Calculator',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/calculator-using-simple-js/',
      github:'https://github.com/kaiesmahmud/calculator-using-simple-js',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/simple-calculator.jpg'
    },
    {
      name:'Clock ',
      description: "I learn and create my first static html,css, bootstrap e-commerce website in 2021",
      live: 'https://kaiesmahmud.github.io/Clock/',
      github:'https://github.com/kaiesmahmud/Clock',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/clock.jpg'
    },
    {
      name:'Github Finder',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://kaiesmahmud.github.io/Github-Finder/',
      github:'https://github.com/kaiesmahmud/Github-Finder',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/github-finder.jpg'
    },
    {
      name:'Tic-Tac-Toe Game',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/tic-tac-toe-game-js/',
      github:'https://github.com/kaiesmahmud/tic-tac-toe-game-js',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/tic-tac-game.jpg'
    },
    {
      name:'Drone ',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://kaiesmahmud.github.io/Drone/',
      github:'https://github.com/kaiesmahmud/Drone',
      techs:['HTML', 'Css', 'BootStrap 5',],
      imagesUrl:'/projects/drone.jpg'
    },
  ]
  const reactProjects = [
    {
      name:'DevdeerTech | Nextjs',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://devdeer.tech/',
      github:'/',
      techs:['HTML', 'Css', 'React','Nextjs','TailwindCss', 'Swiper.js', 'Grid','Flex','Mobile Responsive','Chat Widget','Github','React-icons','Framer motion',],
      imagesUrl:'/projects/devdeer-home.jpg'
    },
    {
      name:'Events App | Nextjs ',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://n-events-app-nextjs.vercel.app/',
      github:'https://github.com/kaiesmahmud/Events-App-Nextjs',
      techs:['HTML', 'Css','JavaScript','Nextjs','React','TailwindCss', 'Material-UI','RapidAPI',"API Integration",'Grid','Flex','Mobile Responsive','Github','React-icons','Filter-Search'],
      imagesUrl:'/projects/events.jpg'
    },

    {
      name:'Fitness | Vitejs | React',
      description: "I learn and create my first static html,css, bootstrap website in 2021",
      live: 'https://fitness-app-vitejs.vercel.app/exercise/0002',
      github:'https://github.com/kaiesmahmud/Fitness-app-vitejs',
      techs:['HTML', 'Css', 'JavaScript','React', 'Vitejs','TailwindCss', 'Material-UI','RapidAPI',"API Integration",'Grid','Flex','Github','React-icons','Pagination','Fetch Related topic'],
      imagesUrl:'/projects/fitness.jpg'
    },
    {
      name:'Restaurent App | React | Vitejs',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://res2rent-vitejs-nehal.vercel.app/',
      github:'https://github.com/kaiesmahmud/Restaurent-Vitejs',
      techs:['HTML', 'Css', 'JavaScript','Vitejs','React','TailwindCss', 'Material-UI','RapidAPI',"API Integration",'Grid','Flex','Mobile Responsive','Github','React-icons'],
      imagesUrl:'/projects/restaurent.jpg'
    },
    {
      name:'RealState App | Nextjs ',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://realstate-nextjs-nehal.vercel.app/',
      github:'https://github.com/kaiesmahmud/Realstate-Nextjs',
      techs:['HTML', 'Css','JavaScript','Nextjs','React','TailwindCss', 'Material-UI','RapidAPI',"API Integration",'Grid','Flex','Mobile Responsive','Github','React-icons','Filter-Search'],
      imagesUrl:'/projects/realstate.jpg'
    },
    {
      name:'News App | Nextjs ',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://news-app-nextjs-nehal.vercel.app/',
      github:'https://github.com/kaiesmahmud/NewsApp-react-nextjs',
      techs:['HTML', 'Css', 'JavaScript','Nextjs','React','TailwindCss','NewsAPI',"API Integration",'Grid','Flex','Mobile Responsive','Github','React-icons','Lodash','Pagination','Framer-motion'],
      imagesUrl: "https://i.ibb.co/R0QD2TK/news-app.jpg" ,

    },
    {
      name:'E-Green | E-commerce | Vitejs ',
      description: "I learn and create my first static html,css, bootstrap e-commerce website in 2021",
      live: 'https://egreen-vitejs-ecommerce.vercel.app/',
      github:'https://github.com/kaiesmahmud/E-Green-vitejs-ecommerce',
      techs:['HTML', 'Css', 'React','Vitejs', 'TailwindCss', "API",'Swiper.js', 'Grid','Flex','Mobile Responsive','Github','React-icons'],
      imagesUrl:'/projects/e-green.jpg'
    },

    {
      name:'Portfolio App | vitejs ',
      description:"I learn and create my first static html,css, bootstrap website in 2021",
      live:'https://sohel-seo-specialist.netlify.app/',
      github:'https://github.com/kaiesmahmud/sohel-portfolio',
      techs:['HTML', 'Css','JavaScript','Vitejs','React','TailwindCss',,'Grid','Flex','Mobile Responsive','Github','React-icons'],
      imagesUrl:'/projects/portfolio.jpg'
    },
  ]
  return (
    <section id="projects" className=" min-h-[90vh] pt-[11vh]">
      <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold">My Projects</h1>
      {/* -------------------REACT PROJECTS  ---------------------------- */}
      <div className="px-5 md:px-10 pt-10">
        <h2 className="my-5 p-1 font-semibold text-lg md:text-xl lg:text-2xl border-l-8 border-sky-500">REACT :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 md:gap-5 lg:gap-10 ">
          {
            reactProjects.map((project,index)=>
            <Card project={project} key={index} />
            )
          }
        </div>
      </div>
      {/* -------------------jAVASCRIPT PROJECTS  ---------------------------- */}
      <div className="px-5 md:px-10 pt-10">
        <h2 className="my-5 p-1 font-semibold text-lg md:text-xl lg:text-2xl border-l-8 border-yellow-400"> JAVASCRIPT :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 ">
          {
            jsProjects.map((project,index)=>
              <Card project={project} key={index} />
            )
          }
        </div>
      </div>

      {/* -------------------HTML-CSS PROJECTS  ---------------------------- */}
      <div className="px-5 md:px-10 pt-10">
        <h2 className="my-5 p-1 font-semibold text-lg md:text-xl lg:text-2xl border-l-8 border-red-500">HTML-CSS :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 ">
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