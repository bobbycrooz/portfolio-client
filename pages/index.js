import Head from 'next/head';
import Next from 'next/link';












export default function Home() {
  return (
    <div className="flex flex-col items-center justify-centerpy-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

      <div className="bg-gradient-to-r from-grad-one to-grad-two p-1">
       <div className="bg-primary">
        <h1 className="text-textLow hover:text-glow-full p-2 text-6xl font-bold">
        About Us
      </h1>
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Next href="/about">
            <a className="text-glow-full">my portfolio</a>
          </Next>
        </h1>

        <button className="btn">name</button>
       </div>

      </div>

      </main>
    </div>
  );
}
