
import RoomInfo from '@/app/components/rooms/RoomInfo'
import { Calendar } from '@/components/ui/calendar'
import getRoomsById from '@/lib/getRoomsById'
import React from 'react'

export default async function RoomInfoPage({ params: { id } }) {
    const onecourse = await getRoomsById(id)

    return (
        <div>
            <RoomInfo key={onecourse.id}
             id={onecourse.id} 
             name={onecourse.name} 
             topic={onecourse.topic}
             description={onecourse.description} 
             author={onecourse.author} 
             peopleMax={onecourse.peopleMax}
             price={onecourse.price} />


        </div>
    )
}



