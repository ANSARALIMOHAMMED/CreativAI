import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>CreativAI</title>
      </Head>
      <main className="p-10">
        <h1 className="text-4xl font-bold">Welcome to CreativAI</h1>
        <p className="mt-4">Your powerful AI assistant for backend and creative tasks.</p>
      </main>
    </>
  );
}
