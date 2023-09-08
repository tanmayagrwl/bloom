import React from "react"
import Link from "next/link"

function Checkout() {
  return (
    <div className="flex flex-col items-center pt-10 bg-[#F3F9F5] h-screen w-full font-sans text-[#002140] font-semibold text-3xl">
      <div>Order placed</div>
      <Link href="/">
        <div className="hover:underline">Return to Home</div>
      </Link>
    </div>
  )
}

export default Checkout
