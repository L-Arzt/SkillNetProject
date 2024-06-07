

import Link from 'next/link'
import React from 'react'




export default function RoomCard({ id, name, peopleMax, price, description, topic, author }) {


    return (
        <div className='flex flex-col justify-around border rounded-xl w-80 h-[350px] p-5 bg-slate-100 relative drop-shadow-lg'>

            <p className='font-bold flex justify-center mb-5'>{name}</p>


            <p className='text-slate-700/50'>Тема: {topic}</p>
            <p className='text-slate-700/50'>Автор: {author}</p>
            <p className='text-slate-700/50'>Описание: {description}</p>
            <p className='text-slate-700/50'>Колличество покупателей: {peopleMax}</p>
            <p className='font-bold mb-5 '>Цена: {price}$</p>


            <Link className='flex text-white justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-xl drop-shadow-lg' href={`/hotel/${id}`}>Купить курс</Link>

        </div>
    )
}

