'use client';

import StatsNum from "@/components/StatsNum"
import { motion } from "framer-motion"

export default function Stats(){
    return(
        <>
        <motion.h2
            initial={{opacity: 0, x:5, y: 20}}
            whileInView={{opacity: 1, x:0, y:0, rotate:0}}
            transition={{duration:1.2, delay:.4}}
            viewport={{once:true}}>
                <div id="stats" className="flex flex-row-reverse mt-[20rem] mb-[4rem] mr-[2.5rem] md:mr-[4rem] md:mb-0">
                    <h1 className="text-right max-w-[50vw] text-[80px] md:text-[64px] leading-none"><span className="text-(--pink)">Strokes are the</span> LEADING <span className="text-(--pink)">cause of death for Americans.</span></h1>
                </div>
            </motion.h2>
            <StatsNum />
        </>
    )
}