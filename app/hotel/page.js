import React from 'react'
import { PrismaClient } from '@prisma/client'
import RoomListFilter from '../components/rooms/RoomListFilter'

const client = new PrismaClient()
async function getCourse() {

    return await client.course.findMany({
        select: {
            id: true,
            name: true,
            topic: true,
            description: true,
            author: true,
            peopleMax: true,
            price: true

        }
    })
}

async function getMaxMinPrice() {
    const minMax = await client.course.aggregate({
        _min: { price: true },
        _max: { price: true }
    })
    return minMax

}
export default async function HotelRooms({ searchParams }) {
    console.log({ searchParams });
    const course = await getCourse()
    const minMax = await getMaxMinPrice()

    return (

        <div>
            <RoomListFilter course={course} minMax={minMax} courseType={searchParams.course} />
        </div>
    )
}

