import Head from 'next/head'
import { Experience, Footer, Hero, Navbar, Others, Projects, Skills } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>KM Nehal - Portfolio</title>
        <meta name="description" content="Portfolio of Kaies Mahmud Nehal. Create with Nextjs react framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' font-light'>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Others/>
        <Footer/>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </>
  )
}
