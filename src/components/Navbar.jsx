import React from "react"
import Image from "next/image"
import logo from "/public/assets/logo.svg"
import cart from "/public/assets/cart.png"
export const Navbar = () => {
  return (
    <div className="flex w-full h-24 bg-[#DEEAD8] justify-between ">
      <div className="flex items-center h-full">
        <Image src={logo} alt="logo" className="w-[20%]" />
        <div className="text-[#002140] font-bold text-2xl ">Bloom</div>
      </div>
      <div className="w-40 justify-end gap-4 h-full flex items-center mr-10">
        <Image src={cart} alt="logo" className="h-[40%] w-[40%] " />
        <p className="text-[#002140] font-bold "> sum</p>
      </div>
    </div>
  )
}
