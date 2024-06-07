'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


import { useState } from "react"
import AddRoomForm from "../rooms/AddRoomForm"
import DeleteRoomButton from "../rooms/DeleteRoomButton"
import Link from "next/link"


export default function RoomsAdmin({ course }) {

    const [Course, setCourse] = useState(course)

    return (
        <>

            <div className="flex justify-end p-10">
                <Dialog>
                    <DialogTrigger asChild className="mb-10">
                        <Button>Добавить курс</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-center mb-5">Добавить курс</DialogTitle>
                            <DialogDescription>
                                <AddRoomForm setCourse={setCourse} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            <Table>

                <TableHeader>

                    <TableRow >

                        <TableHead>ID</TableHead>
                        <TableHead>Курс</TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead>Тема</TableHead>
                        <TableHead>Описание</TableHead>
                        <TableHead>Автор</TableHead>
                        <TableHead>Max 👨</TableHead>
                        <TableHead>Цена</TableHead>

                    </TableRow>

                </TableHeader>


                <TableBody>

                    {
                        Course.map((onecourse) => (
                            <TableRow key={onecourse.id}>
                                <TableCell>{onecourse.id}</TableCell>
                                <TableCell>{onecourse.name}</TableCell>
                                <TableCell>{onecourse.topic}</TableCell>
                                <TableCell>{onecourse.description}</TableCell>
                                <TableCell>{onecourse.author}</TableCell>
                                <TableCell>{onecourse.peopleMax}</TableCell>
                                <TableCell>{onecourse.price}</TableCell>
                                <TableCell className="flex justify-between">

                                    <DeleteRoomButton id={onecourse.id} />
                                    <Link href={`/admin/course/${onecourse.id}`} className="p-2 border">Изменить комнату</Link>

                                </TableCell>
                            </TableRow>
                        ))
                    }


                </TableBody>

            </Table>
        </>
    )
}