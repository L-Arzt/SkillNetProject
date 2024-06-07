import { PrismaClient } from "@prisma/client"

export async function PATCH(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient
    const resp = await prisma.course.update({
        data: {
            name: data.name,
            topic: data.topic,
            description: data.description,
            author: data.author,
            peopleMax: parseInt(data.maxPeople),
            price: parseInt(data.price),
            
        },
        where: {
            id: parseInt(data.id)
        }
    })

    if (resp) {
        return Response.json({
            result: "OK"
        })
    } else {
        return Response.json({
            result: "fail"
        })
    }

}