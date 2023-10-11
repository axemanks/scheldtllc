"use client";

import Head from "next/head";
import { useEffect, useState } from "react";



export default function Home({ data }: { data: { time: string } }) {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
      fetch('/api/time')
      .then(res => res.json())
      .then(json => setTime(new Date(json.time)));
  }, []);


  return (
      <div className="container">
          <Head>
              <title>Scheldt LLC</title>
              <meta name="description" content="Demo app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="text-center ">
              <h1 className="text-4xl">
              Welcome to Scheldt LLC!
              </h1>
              <br />
              <p>This is a demo for azure deployment</p>
              <br />
              <p>The time is: {time?.toString()}</p>
              </main>

              </div>
  );
}