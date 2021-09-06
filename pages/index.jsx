import Head from 'next/head';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { HiDocumentDownload } from 'react-icons/hi';
import Button from '../components/Button';
import Glow from '../components/Glow';

export default function Home() {
  return (
    <div className="welcome w-full h-full flex flex-col justify-between text-xl mt-4">
      <Head>
        <title>welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="welcome mt-4">
        <p className="hi font-medium">hi 👋,</p>
        <h1 className="name text-6xl font-extrabold mt-1 ">
          {' '}
          <small>I'm</small> <Glow text="Idris," />
        </h1>
        <p className="info text-2xl   w-full mt-5 font-joe">
          A FullStack JavaScript Web Developer (Frontend-Heavy), <br />
          I implement great responsive
          <br />
          and interactive Web Apps,
        </p>
        <p className="more"> more about me here</p>
        <p className="stack text-lg mt-3 text-textLow">
          ReactJs | NextJs | NodeJs
        </p>

        <div className="cto_cont  mt-4">
          <div className="cto  p-2 flex items-center">
            <Link href="/about">
              <Button className="button_one" w="140.5px" h="44px">
                Explore
              </Button>
            </Link>

            <div className="resume   w-8 h-btn-h flex items-center justify-center  ml-5">
              <Link href="/about">
                <a className="">
                  <HiDocumentDownload fontSize="30" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="social_icon flex mb-4 space-x-4 p-2 items-center justify-center ">
        <div className="icon p-1">
          <FaGithub />
        </div>
        <div className="icon p-1">
          <SiLinkedin />
        </div>
        <div className="icon p-1">
          <AiFillTwitterCircle />
        </div>
      </div>
    </div>
  );
}
