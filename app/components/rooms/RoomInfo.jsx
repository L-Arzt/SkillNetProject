'use client'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import BookingForm from './BookingForm'






export default function RoomInfo({ id, name, peopleMax, price, address, description, maxPeople }) {


    return (
        <div>
            <div>
                <BookingForm roomId={id} price={price} maxGuests={maxPeople} />
            </div>

        </div>
    )
}

