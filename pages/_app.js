import '../styles/global.scss';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Title from '../components/Title';


function MyApp({ Component, pageProps }) {
  return (
    <main className="text-secondary w-full bg-body  min-h-screen" id="main">
      <Header />
      <Title/>
      <div className="app  p-4  ">
      <Component {...pageProps} />
      </div>
    </main>
  );
}


export default MyApp;
