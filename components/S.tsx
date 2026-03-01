'use client';

import glasses from "../public/glasses.png"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function S(){
    return(
        <>
        <div className="flex justify-center flex-col items-center my-[5rem]">
            <h1 className="font-serif text-[64px] mb-8">&#91; s = slurred speech &#93;</h1>
            <div className="text-center text-[20px]">
                <p className="text-(--pink) pb-8">play your or your loved one’s favorite song</p>
                <p className="text-(--pink) pb-8">sing the chorus ♫⋆｡♪ ₊˚</p>
                <p className="text-(--foreground)">were they able to clearly say each word?</p>
            </div>

            <motion.div
                whileHover={{rotate:-5}}>
                <Image
                    src={glasses}
                    alt="White man with left drooped face"
                    width={300}
                    height={300}
                    className="mt-8 rotate-y-180"
                    />
            </motion.div>
        </div>
        </>
    )
}