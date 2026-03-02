import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <>
        {/* <a href="#hero">
            <nav className="text-center fixed underline-offset-1 bg-linear-to-bl from-(--background) to-(--background/0) w-full backdrop-blur-sm">
            *café
            </nav>
        </a> */}
        <a href="#hero">
            <motion.button
            whileHover={{scale: 1.2}}
            className="z-10 text-center fixed inset-x-0 mx-auto underline underline-offset-1 bg-linear-to-bl from-(--background) to-(--background/0) backdrop-blur-sm pt-1">
                *café
            </motion.button>
        </a>
        </>
    )
}