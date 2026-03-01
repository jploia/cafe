'use client';

import { useState, useEffect } from 'react';

import Image from "next/image";
import down from "../public/down.svg"
import Landing from "@/components/Landing"
import Stats from "@/components/Stats"
import Try from "@/components/Try"
import F from "@/components/F"
import A from "@/components/A"
import S from "@/components/S"
import T from "@/components/T"
import Fast from "@/components/Fast"
import Memory from "@/components/Memory"
import Socio from "@/components/Socio"
import Impact from "@/components/Impact"
import Call from "@/components/Call"

// import React, { useState } from "react";

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight-1) {
      setShowArrow(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    // prevent mem leak
    window.removeEventListener('scroll', handleScroll);
  };
},[]);
  
  return (
    <>
      <Landing />
      <Stats />
      <Try />
      <F />
      <A />
      <S />
      <T />
      <Fast />
      <Memory />
      <Socio />
      <Impact />
      <Call />
      {showArrow && (
      <div id='down' className="fixed items-center justify-center flex-col bottom-4 left-1/2 drop-shadow-lg">
        <div className="bg-(--foreground) outline-1 outline-(--background) rounded-full">
          <Image
            src={down}
            alt="Down Arrow Icon"
            className="p-[2px]"
            />
        </div>
      </div>
      )
      }
    </>
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
