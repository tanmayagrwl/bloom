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

// {
//   "Pid": 2,
//   "image": "/../assets/plant2.png",
//   "name": "Plant B",
//   "desc": "Lorem",
//   "price": 20
// },
// {
//   "Pid": 3,
//   "image": "/../assets/plant3.png",
//   "name": "Plant C",
//   "desc": "Lorem",
//   "price": 30
// },
// {
//   "Pid": 4,
//   "image": "/../assets/plant4.png",
//   "name": "Plant D",
//   "desc": "Lorem",
//   "price": 40
// },
// {
//   "Pid": 5,
//   "image": "/../assets/plant5.png",
//   "name": "Plant E",
//   "desc": "Lorem",
//   "price": 50
// }
