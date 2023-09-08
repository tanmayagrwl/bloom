"use client"
import React from "react"
import data from "./Items.json"
import { useSnapshot, proxy } from "valtio"
import { state } from "@/components/State"
function Cart() {
  const snap = useSnapshot(state)

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.Pid}
          className="flex w-auto h-auto items-center justify-center gap-20"
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
      ))}
    </div>
  )
}

export default Cart
