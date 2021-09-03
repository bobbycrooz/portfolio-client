import Head from 'next/head';
import Link from 'next/link';
import {FaGithub} from 'react-icons/fa'
import {SiLinkedin} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Home() {
  return (
    <div className="welcome w-full h-full   flex flex-col justify-between text-xl mt-4">
      <Head>
        <title>welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="welcome  mt-4">
        <h4 className="hi ">hi 👋,</h4>
        <h1 className="name text-5xl font-bold mt-2"> <small>I'm</small> Idris,</h1>
        <p className="info  w-full mt-3">
           FullStack JavaScript Web Developer
          (Frontend-Heavy),
        </p>
        <p className="stack">
          ReactJs | NextJs | NodeJs
        </p>
        
        <p className="know">
        kindky read more about me here 
        </p>
        
        <div className="cto  mt-4 p-2 flex items-center">
          <Link href="/about">
            <a className="btn" >
            Explore
            </a>
          </Link>
          
          <div className="resume my-0 ml-3">
          <Link href="/about">
            <a className="btn" >
            Resume
            </a>
          </Link>
          </div>
          
        </div>
        
        
      </main>
      <div className="social_icon flex mb-4 space-x-4 p-2 items-center justify-center ">
        <div className="icon p-1">
        <FaGithub/>
        </div>
        <div className="icon p-1">
        <SiLinkedin/>
        </div>
        <div className="icon p-1">
        <AiFillTwitterCircle/>
        </div>
        </div>
    </div>
  );
}
