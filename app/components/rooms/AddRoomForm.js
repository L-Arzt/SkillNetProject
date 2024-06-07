'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"




export default function AddRoomForm({ setCourse }) {


  async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const resp = await fetch('/api/admin/rooms/create', {
      method: 'PUT',
      body: formData
    })

    const result = await resp.json()


    if (resp.ok) {
      setCourse((prev) => ([
        ...prev,
        result
      ]))
    }
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">


      <Input name="name" required type="text" placeholder="Название курса" />
      <Input name="maxPeople" required type="number" placeholder="Количество покупателей" />
      <Input name="topic" required type="text" placeholder="Тема" />
      
      <Input name="author" required type="text" placeholder="Автор" />
      <Input name="price" required type="number" placeholder="Цена" />
      <Textarea name="description" required placeholder="Введите описание Курса" />
      <div className="text-center">
        <Button>Добавить курс</Button>
      </div>
    </form>
  )
}