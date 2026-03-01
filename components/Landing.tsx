import Image from "next/image";
import blob from "../public/blobCafe.svg"
import cafe from "../public/cafe.svg"

export default function Landing() {
  return (
    <>
      <nav className="text-center fixed underline-offset-1 bg-linear-to-bl from-(--background) to-(--background/0) w-full backdrop-blur-sm">
        *café
      </nav>
      <main className="">
        <div id="hero" className="flex flex-wrap items-center justify-center flex-col">
          <Image
            src={cafe}
            alt="CAFE"
            className="mt-[5rem]"
            />
          <p className="text-center mt-[2rem] ">&#91; <span className="text-(--pink)">c</span> = centralizing, <span className="text-(--pink)">a</span> = actions, <span className="text-(--pink)">f</span> = for, <span className="text-(--pink)">é</span> = everyone &#93;</p>
          <p className="text-(--pink) text-center">the ability to receive proper care for strokes is a privilege many can not afford --- we bridge this gap through education.</p>
        </div>
      </main>
    </>
  )
}