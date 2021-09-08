import Head from 'next/head';
import Link from 'next/link';

import { HiDocumentDownload } from 'react-icons/hi';
import Button from '../components/Button';
import Glow from '../components/Glow';

export default function Home() {
  return (
    <div className="welcome w-full  text-xl ">
      <Head>
        <title>welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" mt-4">
        <p className="hi font-medium text-2xl">hi 👋,</p>
        <div className="intro flex items-center  mt-2  space-x-4">
          <h1 className="name text-5xl font-extrabold">I'm</h1>{' '}
          <Glow text="Idris" size="58px" />,
        </div>
        <p className="info text-2xl text-textRead  w-full mt-5 font-joe">
          A <u>FullStack</u> JavaScript Web Developer (Frontend-Heavy),
          <br />
          I implement great responsive
          <br />
          and interactive Web Apps,
        </p>
        <p className="more text-textRead "> more about me here</p>
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

            <div className="resume w-8 h-btn-h flex items-center justify-center  ml-5">
              <Link href="/about">
                <a className="">
                  <HiDocumentDownload fontSize="30" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
