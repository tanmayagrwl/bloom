import React from "react"
import data from "./Items.json"
import Image from "next/image"
import plant4 from "/public/assets/plant4.png"

function List(props) {
  return (
    <div className="pt-10 sm:pt-10 lg:pt-0 flex flex-col gap-14 sm:gap-14 lg:gap-0 sm:flex-col lg:flex-row w-full justify-around h-full min-h-screen bg-[#F3F9F5] pb-10 sm:pb-10 lg:pb-0">
      {data.map((item) => (
        <div
          key={item.Pid}
          className="flex w-auto h-auto items-center justify-center"
        >
          <div className="p-10 w-auto sm:w-auto lg:w-[15vw] rounded-xl bg-[#bbd8ad] flex flex-col items-center justify-center ">
            <Image
              src={`/assets/plant${item.Pid}.png`}
              alt="logo"
              height={100}
              width={100}
            />
            <div className="w-full flex justify-center pt-10 font-bold font-sans text-xl text-[#002140]">
              {item.name}
            </div>
            <div className="w-full flex justify-center pt-2 font-semibold font-sans text-md text-[#002140]">
              $ {item.price}.00
            </div>
            <div className=" flex justify-center pt-2 font-semibold font-sans text-md text-[#ffffff] items-center gap-4 bg-[#228f22] rounded-full pb-2 mt-4 w-32">
              <button className="bg-[#228f22] rounded-full px-2 hover:bg-[#1b791b] active:bg-[#166916]">
                -
              </button>
              <p>1</p>
              <button className="bg-[#228f22] hover:bg-[#1b791b] active:bg-[#166916] rounded-full px-2">
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
