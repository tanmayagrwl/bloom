"use client"
import React from "react"
import Image from "next/image"
import logo from "/public/assets/logo.svg"
import cart from "/public/assets/cart.png"
import Link from "next/link"
import { useSnapshot, proxy } from "valtio"
import { state } from "@/components/State"
import List from "./List"

export const Navbar = () => {
  const snap = useSnapshot(state)
  return (
    <div className="flex w-full h-24 bg-[#DEEAD8] justify-between ">
      <Link href="/listing">
        <div className="flex items-center h-full">
          <Image src={logo} alt="logo" className="w-[20%]" />
          <div className="text-[#002140] font-bold text-2xl ">Bloom</div>
        </div>
      </Link>
      <Link href="/bill">
        <div className="w-40 justify-end gap-4 h-full flex items-center mr-10">
          <Image src={cart} alt="logo" className="h-[40%] w-[40%] " />
          <p className="text-[#002140] font-bold font-sans"> {state.sum}</p>
        </div>
      </Link>
    </div>
  )
}
