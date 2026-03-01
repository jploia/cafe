'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeIn } from 'framer-motion';

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
    } else {
      setShowArrow(true);
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
    <div className="overflow-hidden">
        <Landing />

      <Stats />

      <motion.h1
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:0.5, delay: 1}}
        viewport={{once:true}}>
        <Try />
      </motion.h1>
      

      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:1.6}}
        viewport={{once:true}}>
        <F />
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:1.6}}
        viewport={{once:true}}>
        <A />
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:1.6}}
        viewport={{once:true}}>
        <S />
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:1.6}}
        viewport={{once:true}}>
        <T />
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:1.5}}
        viewport={{once:true}}>
        <Fast />
      </motion.div>
      <Memory />
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:.5}}
        viewport={{once:true}}>
        <Socio />
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:.5}}
        viewport={{once:true}}>
        <Impact />
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:1, delay:2.5}}
        viewport={{once:true}}>
        <Call />
      </motion.div>
      
      <AnimatePresence>
        {showArrow && (
        <motion.div
          id='down'
          className="fixed items-center justify-center flex-col bottom-4 left-1/2 drop-shadow-lg"
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ ease: "easeIn", duration: 0.4 }}
        >
          <div className="bg-(--foreground) outline-1 outline-(--background) rounded-full">
            <Image
              src={down}
              alt="Down Arrow Icon"
              className="p-[2px]"
              />
          </div>
        </motion.div>
        )
        }
      </AnimatePresence>
    </div>
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
