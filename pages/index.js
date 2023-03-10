import Head from "next/head";
import Image from "next/image";
import Card from "../public/card2.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>DigiCard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="col-span-2">
          <h1 className="text-2xl">Welcome to tweet delete</h1>
          <h2 className="text-3xl">
            the premier place to delete unwanted tweets
          </h2>
        </div>
        <div>
          <Image src={Card} className='' />
        </div>
      </main>
    </>
  );
}
