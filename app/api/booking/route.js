import { PrismaClient } from '@prisma/client'
import React from 'react'

export async function POST(request) {
    const { roomId, fio, phone, email, passport, guests, range, totalSum } = Object.fromEntries(await request.formData())
    const { from, to } = JSON.parse(range)
    console.log(data)

    const prisma = new PrismaClient()
    const resp = await prisma.booking.create({
        data: {
            fio: fio,
            phone: phone,
            passport: passport,
            guests: parseInt(guests),
            email: email,
            dateFrom: from,
            dateTo: to,
            roomsId: roomId,
            totalSum: 5000
        }
    })

    return Response.json({
        result: 'OK'
    })
}
