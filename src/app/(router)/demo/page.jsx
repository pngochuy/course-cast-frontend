// pages/page.jsx
import Head from 'next/head';
import Quiz from './_components/Quiz';

const Page = () => {
  return (
    <>
      <Head>
        <title>Quiz Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#f3f7ec] to-[#bce2e7]">
        <Quiz />
      </div>
    </>
  );
};

export default Page;
