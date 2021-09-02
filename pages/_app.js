import '../styles/global.scss'
import 'tailwindcss/tailwind.css';


function MyApp({ Component, pageProps }) {
  return (
    <main className="bg-gradient-to-r from-grad-one to-grad-two p-1 text-secondary w-full  min-h-screen " id="main">
    <div className="inner w-full h-full">
      <Component {...pageProps} />
    </div>
    </main>
  );
}

export default MyApp;
