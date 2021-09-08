import React, { useEffect } from 'react';
import '../styles/global.scss';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 0);
  }, [pathname]);

  return (
    <main className="text-secondary w-full bg-body  min-h-screen" id="main">
      <Header />
      <Title />
      <div className="app  p-4 overflow-y-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}

export default MyApp;
