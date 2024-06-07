'use client'

import UpdateRoom from '@/app/components/admin/UpdateRoom'
import getRoomsById from '@/lib/getRoomsById'
import React from 'react'

export default async function UpdatePage({ params: { id } }) {
    const room = await getRoomsById(id)
    return (
        <div>
            <UpdateRoom key={room.id} id={room.id} name={room.name} peopleMax={room.peopleMax} price={room.price} description={room.description} address={room.address} />
        </div>
    )
}
