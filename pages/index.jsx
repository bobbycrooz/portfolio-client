import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiDocumentDownload } from 'react-icons/hi';
import Button from '../components/Button';
import Glow from '../components/Glow';

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="welcome_home w-full text-xl ">
      <Head>
        <title>welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" mt-8">
        <p className="readable-def">Hi 👋,</p>
        <div className="intro flex items-center  mt-2  space-x-4">
          <h1 className="name text-5xl font-bold">I'm</h1>{' '}
          <Glow text="Idris" size="60px" />,
        </div>
        <div className="mt-4 text-left w-full">
          <p className="info readable-def">
            A FullStack JavaScript Web Developer (Frontend-Heavy), I implement
            great responsive and interactive Web Apps,
          </p>
        </div>

        <p className="stack text-xl mt-3 text-textLow">
          ReactJs | NextJs | NodeJs
        </p>

        <div className="cto_cont  mt-4">
          <div className="cto  p-2 flex items-center">
            <Link href="/about">
              <Button
                click={() => push('/Contact')}
                className="button_one"
                w="100.5px"
                h="40px"
              >
                Hire
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
