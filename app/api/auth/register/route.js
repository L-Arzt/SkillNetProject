import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

export async function POST(request) {
    const { email, password, role } = await request.json()
    console.log({ email, password, role })
    const prisma = new PrismaClient()
    const hashedPass = await hash(password, 10)
    const resp = await prisma.users.create({
        data: {
            email: email,
            password: hashedPass,
            role: role
        }
    })
    if (resp) {
        return Response.json({
            message: 'ok',
            email: resp.email,
            password: password
        })
    } else {
        return Response.json({ message: 'fail' })
    }

}