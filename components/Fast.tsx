export default function Fast(){
    return(
        <>
        <div className="flex flex-col items-center my-[20rem]">
            <div className="flex flex-col items-center">
                <h1 className="font-serif text-[64px] mb-8 md:mb-16 text-center">&#91; FAST helps identify strokes &#93;</h1>
            </div>
            <div className="flex flex-col gap-8 md:gap-4">
                <div className="flex text-left items-center md:items-baseline gap-[16px] leading-none">
                    <p className="text-[6rem] text-(--pink) font-serif">F*</p>
                    <p className="text-[1rem] md:text-[1.5rem]">facial drooping, weakness, and unevenness is a significant symptom and key indicator of a stroke</p>
                </div>
                <div className="flex items-center md:items-baseline text-left gap-[16px] leading-none">
                    <p className="text-[6rem] text-(--pink) font-serif">A*</p>
                    <p className="text-[1rem] md:text-[1.5rem]">arm &#40;or leg weakness&#41; in one arm or leg compared to the other may indicate a stroke</p>
                </div>
                <div className="flex items-center md:items-baseline text-left gap-[16px] leading-none">
                    <p className="text-[6rem] text-(--pink) font-serif">S*</p>
                    <p className="text-[1rem] md:text-[1.5rem]">slurred or incoherent speech are a key sign and may indicate a stroke is occurring</p>
                </div>
                <div className="flex items-center md:items-baseline text-left gap-[16px] leading-none">
                    <p className="text-[6rem] text-(--pink) font-serif">T*</p>
                    <p className="text-[1rem] md:text-[1.5rem]">the quicker you act, the better the outcomes: know to reach help as soon as you notice symptoms</p>
                </div>
            </div>
        </div>
        </>
    )
}