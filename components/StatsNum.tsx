'use client';

import { motion } from "framer-motion"

export default function StatsNum() {
    return (
        <>
        <div className="flex flex-wrap">
            <motion.h2
                initial={{opacity: 0, x:-5, y: 0}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.5, delay:1.5}}
                viewport={{once:true}}>
            <div className="flex flex-col md:flex-row md:pl-[4rem] items-center md:items-baseline gap:[8px] md:gap-[16px] leading-none w-[100%] pb-[2rem] md:pb-0">
                <p className="text-[4rem] md:text-[10rem] font-serif">+80%</p>
                <p className="text=[16px] md:text-[20px] text-center md:text-left text-(--pink)">of neurological deaths occur in low-middle-income countries</p>
            </div>
            </motion.h2>
            <motion.h2
                initial={{opacity: 0, x:-5, y: 0}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.5, delay:2}}
                viewport={{once:true}}>
            <div className="flex flex-col md:flex-row md:pl-[12rem] items-center md:items-baseline gap:[8px] md:gap-[16px] leading-none w-[100%] pb-[2rem] md:pb-0">
                <p className="text-[4rem] md:text-[10rem] font-serif">+50%</p>
                <p className="text=[16px] md:text-[20px] text-center md:text-left text-(--pink)">is the projected stroke mortality rate from 2020 to 2025</p>
            </div>
            </motion.h2>
            <motion.h2
                initial={{opacity: 0, x:-5, y: 0}}
                whileInView={{opacity: 1, x:0, y:0, rotate:0}}
                transition={{duration:1.5, delay:2.5}}
                viewport={{once:true}}>
            <div className="flex flex-col md:flex-row md:pl-[18rem] items-center md:items-baseline gap:[8px] md:gap-[16px] leading-none w-[100%] pb-[2rem] md:pb-0">
                <p className="text-[4rem] md:text-[10rem] font-serif">~38%</p>
                <p className="text=[16px] md:text-[20px] text-center md:text-left text-(--pink)">people only were aware of all major stroke symptoms</p>
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