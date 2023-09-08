"use client"
import React, { useState } from "react"
import data from "./Items.json"
import { useSnapshot, proxy } from "valtio"
import { state } from "@/components/State"
import Link from "next/link"
function Cart() {
  const snap = useSnapshot(state)

  const displayBlock = "block"
  const displayHidden = "hidden"
  const sumDisplay =
    state.count1 === 0 &&
    state.count2 === 0 &&
    state.count3 === 0 &&
    state.count4 === 0 &&
    state.count5 === 0
      ? displayHidden
      : displayBlock

  const empDisplay =
    state.count1 === 0 &&
    state.count2 === 0 &&
    state.count3 === 0 &&
    state.count4 === 0 &&
    state.count5 === 0
      ? displayBlock
      : displayHidden

  return (
    <div className="bg-[#F3F9F5] h-screen">
      <div className="flex items-center w-full justify-center h-auto pt-10 pb-5 text-4xl font-sans text-[#002140] font-semibold">
        Cart
      </div>
      {data.map((item) => {
        const display =
          (item.Pid === 1 && state.count1 === 0) ||
          (item.Pid === 2 && state.count2 === 0) ||
          (item.Pid === 3 && state.count3 === 0) ||
          (item.Pid === 4 && state.count4 === 0) ||
          (item.Pid === 5 && state.count5 === 0)
            ? displayHidden
            : displayBlock

        return (
          <div key={item.Pid} className="text">
            <div
              className={`flex w-auto h-auto items-center justify-center gap-20 ${display} pt-5 text-[#002140] font-sans font-semibold`}
            >
              <div>{item.name}</div>
              <div>
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
              </div>
              <div>
                <p>
                  $
                  {item.Pid === 1
                    ? state.count1 * 10
                    : item.Pid === 2
                    ? state.count2 * 20
                    : item.Pid === 3
                    ? state.count3 * 30
                    : item.Pid === 4
                    ? state.count4 * 40
                    : item.Pid === 5
                    ? state.count5 * 50
                    : null}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      <div
        className={`flex flex-col gap-10 w-full items-center justify-center ${sumDisplay} pt-10 font-semibold font-sans text-[#002140]`}
      >
        <div>
          Total: ${" "}
          {state.count1 * 10 +
            state.count2 * 20 +
            state.count3 * 30 +
            state.count4 * 40 +
            state.count5 * 50}
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/listing">
            <button className="rounded-full mt-6  border-4 border-[#002140] bg-[#DEEAD8] active:bg-[#aece9e] hover:bg-[#cbedba] px-4 py-2 outline-none  w-[15vh] font-bold font-sans text-[#002140] text-md">
              Shop more?
            </button>
          </Link>
          <Link href="/Chout">
            <button
              className="rounded-full mt-6  border-4 border-[#002140] bg-[#DEEAD8] active:bg-[#aece9e] hover:bg-[#cbedba] px-4 py-2 outline-none  w-[15vh] font-bold font-sans text-[#002140] text-md"
              onClick={() => {
                state.count1 = 0
                state.count2 = 0
                state.count3 = 0
                state.count4 = 0
                state.count5 = 0
                state.sum = 0
              }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`flex flex-col w-full pt-20 text-[#002140] font-sans text-2xl font-normal items-center justify-center ${empDisplay}`}
      >
        Your Cart is Empty
        <div className="hover:underline">
          <Link href="/listing"> Shop now</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
