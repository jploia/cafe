'use-client';

import { motion } from 'framer-motion'

import Image from 'next/image'
import bald from "../public/bald.png"
import flowers from "../public/flowers.png"

export default function A(){
    return(
        <>
        <div className="flex justify-center flex-col items-center my-[8rem]">
            <h1 className="font-serif text-[64px] mb-8">&#91; a = arm weakness &#93;</h1>
            <div className="text-center text-[20px]">
                <p className="text-(--pink) pb-8">do your favorite dance together</p>
                <p className="text-(--pink) pb-8">watch the arms &#40;〜^∇^&#41;〜</p>
                <p className="text-(--foreground)">did their arms show any weakness? one weaker than another?</p>
            </div>
            <div className="mt-16 flex gap-64">
            
            <motion.div
                whileHover={{rotate:-5}}>
                <Image
                    src={flowers}
                    alt="Two pink flowers"
                    width={300}
                    height={300}
                    className=""
                />
            </motion.div>
            <motion.div
                whileHover={{rotate:5}}>
                <Image
                    src={bald}
                    alt="Black man with left face droop"
                    width={300}
                    height={300}
                    className=""
                />
            </motion.div>
            </div>
        </div>
        </>
    )
}