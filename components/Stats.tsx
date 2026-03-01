import StatsNum from "@/components/StatsNum"

export default function Stats(){
    return(
        <>
            <div id="stats" className="flex mt-[15rem] w-[50%] ml-[45%]">
            <h1 className="text-right text-[64px] leading-none"><span className="text-(--pink)">Strokes are the</span> LEADING <span className="text-(--pink)">cause of death for Americans.</span></h1>
            </div>
            <StatsNum />
        </>
    )
}