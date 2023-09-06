import Image from "next/image"
import logo from "/public/assets/logo.svg"
import E1 from "/public/assets/E1.png"
import E2 from "/public/assets/E2.png"
import { useRouter } from "next/navigation"
import Link from "next/link"

function Landing() {
  return (
    <div className="bg-[#F3F9F5] h-full w-full max-h-screen">
      <div className="w-auto h-auto flex items-start justify-start bg-[#F3F9F5]  mb-10 sm:mb-10 md:mb-20">
        <Image src={E1} alt="E1" className="w-80 sm:w-80 md:w-96 " />
      </div>

      <div className="flex flex-col w-screen z-10 h-auto items-center justify-center mb-44">
        <div className="flex flex-col sm:flex-col md:flex-row  justify-center items-center">
          <Image src={logo} alt="logo" className="w-[20%]" />
          <div className="font-bold text-3xl sm:text-3xl md:text-5xl ml-10 sm:ml-10 md:ml-0 font-sans text-[#002140]">
            Bloom- Buy Blooming Pots
          </div>
        </div>
        <div>
          <Link href="/listing">
            <button className="rounded-full mt-6  border-4 border-[#002140] bg-[#DEEAD8] active:bg-[#aece9e] hover:bg-[#cbedba] px-4 py-2 outline-none  w-[25vh] font-bold font-sans text-[#002140] text-xl">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-end justify-end w-full">
        <Image src={E2} alt="E2" className="w-80 sm:w-80 md:w-96  " />
      </div>
    </div>
  )
}

export default Landing
