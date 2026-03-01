'use client';

import { motion } from "framer-motion"

export default function StatsNum() {
    return (
        <>
        <div className="ml-[64px] flex flex-wrap justify-center">
            <motion.h2
                initial={{opacity: 0, x:-500, y: 10, rotate:-15}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.5, delay:1.5}}
                viewport={{once:true}}>
            <div className="flex items-baseline gap-[16px] leading-none w-[100%]">
                <p className="text-[10rem] font-serif">+80%</p>
                <p className="text-[20px] text-(--pink)">of neurological deaths occur in low-middle-income countries with major access to treatment gaps</p>
            </div>
            </motion.h2>
            <motion.h2
                initial={{opacity: 0, x:-500, y: 10, rotate:-15}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.5, delay:2}}
                viewport={{once:true}}>
            <div className="flex items-baseline gap-[16px] leading-none w-[100%]">
                <p className="text-[10rem] font-serif">+50%</p>
                <p className="text-[20px] text-(--pink)">is the projected stroke mortality rate from 2020 to 2025</p>
            </div>
            </motion.h2>
            <motion.h2
                initial={{opacity: 0, x:-500, y: 10, rotate:-15}}
                whileInView={{opacity: 1, x:100, y:0, rotate:0}}
                transition={{duration:1.5, delay:2.5}}
                viewport={{once:true}}>
            <div className="flex items-baseline gap-[16px] leading-none w-[100%]">
                <p className="text-[10rem] font-serif">~38%</p>
                <p className="text-[20px] text-(--pink)">people only were aware of all major stroke symptoms</p>
            </div>
            </motion.h2>
            {/* <div className="flex items-baseline gap-[16px] leading-none">
                <p className="text-[10rem] font-serif">80%</p>
                <p className="text-[20px] text-(--pink)">of neurological deaths occur in low-middle-income countries with major access to treatment gaps</p>
            </div> */}
        </div>
        </>
    )

}