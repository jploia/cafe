'use client';

import StatsNum from "@/components/StatsNum"
import { motion } from "framer-motion"

export default function Stats(){
    return(
        <>
        <motion.h2
            initial={{opacity: 0, x:1500, y: 20, rotate:15}}
            whileInView={{opacity: 1, x:0, y:0, rotate:0}}
            transition={{duration:1.2, delay:.1}}
            viewport={{once:true}}>
                <div id="stats" className="flex mt-[15rem] w-[50%] ml-[45%]">
                <h1 className="text-right text-[64px] leading-none"><span className="text-(--pink)">Strokes are the</span> LEADING <span className="text-(--pink)">cause of death for Americans.</span></h1>
                </div>
            </motion.h2>
            <StatsNum />
        </>
    )
}