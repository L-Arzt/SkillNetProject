import { PrismaClient } from "@prisma/client"

export async function PUT(request){
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient
    const resp = await prisma.course.create({
        data:{
            name: data.name,
            topic: data.topic,
            description: data.description,
            author: data.author,
            peopleMax: parseInt(data.maxPeople),
            price: parseInt(data.price),
            
        }
    })

    return Response.json({
        result: "OK"
    })

}