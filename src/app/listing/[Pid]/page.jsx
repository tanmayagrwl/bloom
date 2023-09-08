"use client"
import React from "react"
import data from "@/components/Items.json"
import { Navbar } from "@/components/Navbar"
import Image from "next/image"
import { useSnapshot, proxy } from "valtio"
import { state } from "@/components/State"

function Details({ params }) {
  // Loop through the data array to find a matching object
  for (const item of data) {
    if (item.Pid == params.Pid) {
      const snap = useSnapshot(state)

      return (
        <div>
          <Navbar />
          <div className="bg-[#F3F9F5] w-full h-screen flex items-center justify-center">
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
              <div className="w-full flex justify-center pt-2 font-normal font-sans text-md text-[#002140]">
                {item.desc}
              </div>
              <div className="w-full flex justify-center pt-10 font-semibold font-sans text-md text-[#002140]">
                $ {item.price}.00
              </div>
              <div className=" flex justify-center pt-2 font-semibold font-sans text-md text-[#ffffff] items-center gap-4 bg-[#228f22] rounded-full pb-2 mt-4 w-32">
                <button
                  className="bg-[#228f22] rounded-full px-2 hover:bg-[#1b791b] active:bg-[#166916]"
                  onClick={() => {
                    if (item.Pid == 1 && state.count1 > 0) {
                      state.count1 -= 1
                      state.sum -= 1
                    } else if (item.Pid == 2 && state.count2 > 0) {
                      state.count2 -= 1
                      state.sum -= 1
                    } else if (item.Pid == 3 && state.count3 > 0) {
                      state.count3 -= 1
                      state.sum -= 1
                    } else if (item.Pid == 4 && state.count4 > 0) {
                      state.count4 -= 1
                      state.sum -= 1
                    } else if (item.Pid == 5 && state.count5 > 0) {
                      state.count5 -= 1
                      state.sum -= 1
                    }
                  }}
                >
                  -
                </button>
                <p>
                  {item.Pid === 1
                    ? state.count1
                    : item.Pid === 2
                    ? state.count2
                    : item.Pid === 3
                    ? state.count3
                    : item.Pid === 4
                    ? state.count4
                    : item.Pid === 5
                    ? state.count5
                    : null}
                </p>

                <button
                  className="bg-[#228f22] hover:bg-[#1b791b] active:bg-[#166916] rounded-full px-2"
                  onClick={() => {
                    if (item.Pid == 1) {
                      state.count1 += 1
                      state.sum += 1
                    } else if (item.Pid == 2) {
                      state.count2 += 1
                      state.sum += 1
                    } else if (item.Pid == 3) {
                      state.count3 += 1
                      state.sum += 1
                    } else if (item.Pid == 4) {
                      state.count4 += 1
                      state.sum += 1
                    } else if (item.Pid == 5) {
                      state.count5 += 1
                      state.sum += 1
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Details
