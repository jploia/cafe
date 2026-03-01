import Image from "next/image";
import down from "../public/down.svg"

export default function Try(){
    return(
        <>
        <div className="text-right flex flex-col gap-8 my-[15rem]">
            <div id="stats" className="flex mr-[64px] flex-col text-right">
                <h1 className="text-right text-[10rem] leading-none text-(--pink)">Can <span className="text-(--foreground)">you</span> identify a stroke?</h1>
                <p>imagine looking over a loved one</p>
            </div>
            {/* <div className="justify-center rounded-full bg-(--foreground) inline-flex ">
                <p className="font-serif px-8 text-[72px] leading-none text-(--background)">--&#62;</p>
            </div> */}
        </div>
        </>
    )
}