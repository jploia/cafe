export default function Memory(){
    return(
        <>
            <div id="stats" className="flex mt-[15rem] w-[50%] ml-[45%] mb-16">
            <h1 className="text-right text-[64px] leading-none"><span className="text-(--pink)">If you or a loved one has </span>suffered a stroke<span className="text-(--pink)">... consider:</span></h1>
            </div>
            <div className="flex flex-col ml-[64px]">
                <h1 className="font-serif text-[64px] mb-16">&#91; memory caf<span className="font-sans">é</span>s &#93;</h1>
            </div>
            <div className="mx-[64px] flex gap-16">
                <div className="w-[400px] h-[300px] bg-[blue]">
                    image goes here lol
                </div>
                <div className="text-[24px] text-(--pink) flex flex-col justify-center leading-none">
                    <p className="pb-8">*a location offering a safe gathering for those suffering from Alzheimer’s disease --- we extend this to those who have suffered stroke</p>
                    <p className="pb-8">*provides peer support, social connection, and cognitive stimulation</p>
                    <p>*there is no one set model for a memory café, so be creative!</p>
                </div>
            </div>
        </>
    )
}