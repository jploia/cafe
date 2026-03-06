'use client';

import Image from 'next/image'
import mugBrain from "../public/mugBrain.png"
import { motion } from 'framer-motion'

export default function Call(){
    return(
        <>
        <div className="flex flex-col items-center gap-4 ">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col gap-4 md:gap-0 justify-center items-center md:w-[50vw]">
                    <h1 className="font-serif text-[64px] text-center mb-0 md:mb-8">&#91; culture to care &#60;3 &#93;</h1>
                    <div className="md:max-w-[40vw] flex justify-center flex-col items-center mb-0 md:mb-[6rem]">
                        <p className="text-(--pink) leading-none text-center text-[20px] md:text-[32px] mb-4">"<span className="text-(--foreground)">culturally appropriate</span> primary and secondary <span className="text-(--foreground)">prevention</span> strategies should be developed to <span className="text-(--foreground)">mitigate these disparities</span>"</p>
                        <p className="text-(--pink) text-center md:text-left text-[12px]">--- the World Stroke Organization-Lancet Neurology Commission</p>
                        <p className="mt-8 md:mt-16 leading-none text-center font-serif text-[16px] md:text-[20px] text-(--pink)">by directly asking you to think about what songs, dances, and jokes are relevant to you or your loved one, you can find symptoms in a way that is culturally relevant</p>
                    </div>
                </div>
                <a target="_blank" href="https://dfamerica.org/memory-cafe-directory/" className="flex justify-center">
                    <motion.div className="flex flex-col cursor-pointer text-center items-center"
                        whileHover={{scale: 1.05, rotate: 5}}
                        >
                        <div className="max-h-[100px] md:max-h-[300px] max-w-[100px] md:max-w-[300px]">
                            <Image
                                src={mugBrain}
                                width={300}
                                height={300}
                                alt="Cup of coffee"
                            />
                        </div>
                        <p className="text-[12px] md:text-[16px] mt-0 md:mt-2">--- click to find a memory cafe!</p>
                    </motion.div>
                </a>
            </div>
            <p className="text-(--pink) leading-none text-center mb-2"> - this website is red for the color of stroke awareness &#60;3 </p>
        </div>
        </>
    )
}