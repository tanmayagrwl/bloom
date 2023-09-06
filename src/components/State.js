import { proxy } from "valtio"

const state = proxy({
  count1: 0,
  count2: 0,
  count3: 0,
  count4: 0,
  count5: 0,
  count6: 0,
  sum: 0,
})

export { state }
