import Image from "next/image";
import blob from "../public/blobCafe.svg"
import cafe from "../public/cafe.svg"
import down from "../public/down.svg"
// import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-center sticky underline underline-offset-1 bg-background">
        *café
      </nav>
      <main className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center mt-[20px]">
          <Image
            src={blob}
            alt="CAFE"
            className="mt-[5rem]"
            />
          <h1 className="text-center text-cyan-400 absolute top-1/2 mix-blend-difference">&#91; understanding how to navigate and identify strokes &#93;</h1>
        </div>
        <div>
          <Image
            src={cafe}
            alt="CAFE"
            />
        </div>
      </main>
      <footer className="absolute items-center justify-center flex-col bottom-4 left-1/2">
        <Image
          src={down}
          alt="Down Arrow Icon"
          className="mt-[2rem]"
          />
        </footer>

    </div>
    // <div className="flex min-h-screen items-center justify-center">
    //   <nav className="flex justify-center">
    //     <h1>*cafe</h1>
    //   </nav>
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
    //     {/* <h1 className="font-[malevice]">hello</h1> */}
    //   </main>
    // </div>
  );
}
