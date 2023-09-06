import React from "react"
import { Navbar } from "@/components/Navbar"
import List from "@/components/List"
import items from "@/components/Items.json"
function Listing() {
  return (
    <div>
      <Navbar />
      <List />
    </div>
  )
}

export default Listing
