'use client';

import Image from "next/image"
import mug from "../public/mug.png"
import { motion } from "framer-motion"

export default function Memory(){
    return(
        <>
            <motion.h2
                initial={{opacity: 0, x:1500, y: 20, rotate:15}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.2, delay:.2}}
                viewport={{once:true}}>
                <div id="stats" className="flex mt-[15rem] w-[50%] ml-[45%] mb-16">
                    <h1 className="text-right text-[64px] leading-none"><span className="text-(--pink)">If you or a loved one has </span>suffered a stroke<span className="text-(--pink)">... consider:</span></h1>
                </div>
            </motion.h2>
            <motion.h2
                initial={{opacity: 0, x:-500, y: 10, rotate:-15}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.2, delay:2}}
                viewport={{once:true}}>
            <div className="flex flex-col ml-[64px]">
                <h1 className="font-serif text-[64px] mb-16">&#91; memory caf<span className="font-sans">é</span>s &#93;</h1>
            </div>
            </motion.h2>
            <motion.h2
                initial={{opacity: 0, x:-500, y: 10, rotate:-15}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.2, delay:2.5}}
                viewport={{once:true}}>
            <div className="mx-[64px] flex gap-16">
                <motion.div
                    whileHover={{rotate:-5}}>
                    <Image
                        src={mug}
                        width={400}
                        height={400}
                        alt="Cup of coffee"
                        className=""
                    />
                </motion.div>
                <div className="text-[24px] text-(--pink) flex flex-col justify-center leading-none">
                    <p className="pb-8">*a location offering a safe gathering for those suffering from Alzheimer’s disease --- we extend this to those who have suffered stroke</p>
                    <p className="pb-8">*provides peer support, social connection, and cognitive stimulation</p>
                    <p>*there is no one set model for a memory café, so be creative!</p>
                </div>
            </div>
            </motion.h2>
        </>
    )
}