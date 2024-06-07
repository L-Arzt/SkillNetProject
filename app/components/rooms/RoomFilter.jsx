'use client'

import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'
import Counter from '../Counter'



export default function RoomFilter({ minPrice, maxPrice, setCourse }) {

    async function submitHandler(e) {
        e.preventDefault()
        const resp = await fetch('/api/rooms/getRooms', {
            method: 'POST',
            body: JSON.stringify({
                price: price,
                guests: guests
            })
        })
        const result = await resp.json()
        console.log(result);
        setCourse(result)

    }
    const [price, setPrice] = useState(maxPrice)
    const [guests, setGuests] = useState(1)

    return (
        <section className=' w-full pt-[8%]'>
            <form onSubmit={submitHandler} className=' flex justify-around w-full items-center '>

                <div className=" flex flex-col  ">
                    <p className='text-xl '>Покупателей</p>
                    <Counter setGuests={setGuests} guests={guests} />
                </div>
                <div className=" w-1/3 flex items-center justify-center flex-col">
                    <p className='font-bold mb-5'> Цена &lt; чем - {price}$</p>

                    <Slider
                        onValueChange={(e) => { setPrice(e[0]) }}
                        defaultValue={[maxPrice]}
                        max={maxPrice}
                        min={minPrice}
                        step={1} />
                    <p className='mt-5'>от {minPrice}$ до {maxPrice}$</p>
                </div>
                <div className='flex self-end w-20'>
                    <button className=' text-white px-8 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-xl drop-shadow-lg'>Искать</button>
                </div>
            </form>
        </section>
    )
}




