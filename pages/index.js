import Head from 'next/head'
import { Contact, Education, Hero,  Skills } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>KM Nehal - Portfolio</title>
        <meta name="description" content="Portfolio of Kaies Mahmud Nehal. Create with Nextjs react framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' font-light max-w-[3000px]'>
        <Hero/>
        <Skills/>
        <Education/>
        <Contact/>
      </main>
    </>
  )
}
