'use client';

import Image from "next/image"
import flowers from "../public/flowers.png"
import { motion } from 'framer-motion'

export default function Socio(){
    return(
        <>
        <div className="text-right flex flex-row-reverse">
            <div className="flex">
                <motion.div
                    className=""
                    whileHover={{rotate:5}}
                >
                    <Image
                        alt="Two pink flowers"
                        width={300}
                        height={300}
                        src={flowers}
                        className=""
                    />
                </motion.div>
                <div id="stats" className="flex max-w-[50vw] flex-col text-right">
                    <h1 className="text-right text-[64px] leading-none text-(--pink) mb-8">caf<span className="font-sans">é</span> follows the <span className="text-(--foreground)">socioecological model</span></h1>
                    <p className="text-(--pink) text-[20px] mb-4">“model that conceptualises health in the context of the complex interplay between individual, family, community, and societal factors”</p>
                    <p className="text-(--pink) text-[12px]">--- the World Stroke Organization-Lancet Neurology Commission</p>
                </div>
            </div>
            {/* <div className="justify-center rounded-full bg-(--foreground) inline-flex ">
                <p className="font-serif px-8 text-[72px] leading-none text-(--background)">--&#62;</p>
            </div> */}
        </div>
        </>
    )
}