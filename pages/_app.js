import React, { useEffect } from 'react';
import '../styles/global.scss';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 1);
    console.log('i scrolled');
  }, [pathname]);

  return (
    <main className="text-secondary w-full h-full" id="main">
      <Head>
        <meta name="theme-color" content="#040404" />
      </Head>

      <Head>
        <title>welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title />
      <div className="app h-full  bg-body p-4">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}

export default MyApp;
