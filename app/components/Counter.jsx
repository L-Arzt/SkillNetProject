'use client'

import { Button } from "@/components/ui/button"




export default function Counter({ maxGuest, setGuests, guests }) {


  let max_guest = 300
  if (maxGuest) {
    max_guest = maxGuest
  }

  return (

    <div>
      <div className="flex items-center justify-center gap-x-5">

        <Button
          className=" text-white px-5 text-3xl bg-gradient-to-r from-sky-500 to-indigo-500  rounded-xl drop-shadow-lg"
          type="button"
          onClick={() => {
            if (guests > 1)
              setGuests(guests - 10)
          }}>-</Button>

        <span>{guests}</span>

        <Button
          className=" text-white px-5 text-3xl py-3 bg-gradient-to-r from-sky-500 to-indigo-500  rounded-xl drop-shadow-lg"
          type="button"
          onClick={() => {
            if (guests < max_guest)
              setGuests(guests + 10)
          }}>+</Button>
      </div>

    </div>

  )
}
