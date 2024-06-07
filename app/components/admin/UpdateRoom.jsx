'use client'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'







export default function UpdateRoom({ id, name, peopleMax, price, topic, description, author }) {

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/admin/rooms/update', {
            method: 'PATCH',
            body: formData
        })

        const result = await resp.json()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container flex flex-col gap-y-5">
                <input type="text" name='id' defaultValue={id} hidden />
                <Input name="name" required type="text" placeholder="Название курса" defaultValue={name} />
                <Input name="topic" required type="text" placeholder="Тема" defaultValue={topic} />
                <Input name="description" required type="text" placeholder="Описание" defaultValue={description} />
                <Input name="author" required type="text" placeholder="Автор" defaultValue={author} />
                <Input name="peopleMax" required type="number" placeholder="Колличество покупателей" defaultValue={peopleMax} />
                <Input name="price" required type="number" placeholder="Цена" defaultValue={price} />
                <Textarea name="description" required placeholder="Введите описание курса" defaultValue={description} />
                <div className="text-center">
                    <Button>Обновить курс</Button>
                </div>
            </form>
        </div>
    )
}

