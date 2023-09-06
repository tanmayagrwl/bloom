import React from "react"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import cart from "@/assets/cart.png"
export const Navbar = () => {
  return (
    <div className="flex w-full h-24 bg-[#DEEAD8] justify-between ">
      <Image src={logo} alt="logo" className="w-[20%]" />
      <div className="w-40 justify-end gap-4 h-full flex items-center mr-10">
        <Image src={cart} alt="logo" className="h-[40%] w-[40%] " />
        <p>sum</p>
      </div>
    </div>
  )
}
