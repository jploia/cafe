'use client';

import Image from 'next/image'
import mugBrain from "../public/mugBrain.png"
import { motion } from 'framer-motion'

export default function Call(){
    return(
        <>
        <div className="flex mx-[64px] mb-[10rem] gap-36 justify-center items-center">
            <div className="w-[50%] flex justify-center flex-col items-center mt-[20rem] mb-[6rem]">
                <h1 className="font-serif text-[64px] mb-8">&#91; culture to care &#60;3 &#93;</h1>
                <p className="text-(--pink) leading-none text-center text-[32px] mb-4">"<span className="text-(--foreground)">culturally appropriate</span> primary and secondary <span className="text-(--foreground)">prevention</span> strategies should be developed to <span className="text-(--foreground)">mitigate these disparities</span>"</p>
                <p className="text-(--pink) text-[12px]">--- the World Stroke Organization-Lancet Neurology Commission</p>
                <p className="mt-16 text-center font-serif text-(--pink)">by directly asking you to think about what songs, dances, and jokes are relevant to you or your loved one, you can find symptoms in a way that is culturally relevant</p>
            </div>
            <a target="_blank" href="https://dfamerica.org/memory-cafe-directory/">
            <motion.div className="flex flex-col cursor-pointer justify-center items-center mt-[8rem]"
                whileHover={{scale: 1.05, rotate: 5}}
                >
                <Image
                    src={mugBrain}
                    width={300}
                    height={300}
                    alt="Cup of coffee"
                    className=""
                />
                <p className="mt-2">--- find a memory cafe!</p>
            </motion.div>
            </a>
        </div>
        <p className="text-(--pink) text-center mb-2"> - this website is red for the color of stroke awareness &#60;3 </p>
        </>
    )
}