'use client'
import Image from 'next/image'

import Person from './img/Vector3.png'
import MailBox from './img/Mailbox2.png'
import PersonImg from './img/Vector3.png'
import background from '../components/img/background.png'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
export default function Form() {
    const router = useRouter()
    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            const resp = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    role: formData.get('role')
                })
            })

            if (resp.ok) {

                const data = await resp.json()
                console.log(data);
                const login = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    redirect: false
                })

                if (login?.error) {

                } else if (!login?.error) {
                    router.push('/')
                    router.refresh()
                }
            }

        }
        catch (e) {
            console.log(e)
        }
    }
    return (

        <section className=''>
            <div className='fixed h-[100vh] w-[100vw] overflow-hidden z-[-10]'>
                <Image
                    alt="Travel"
                    src={background} // Путь к изображению в папке "public"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <form onSubmit={submitHandler} className="p-[200px] flex flex-col justifu-center items-center w-1/2 mx-auto">
                <div className='text-lg'>
                    <div className="flex justify-center items-center">
                        Регистрация
                    </div>
                </div>
                <input type="email" name="email" className="bg-inherit border-b-2 p-3 my-3 " placeholder="Email" />

                <input type="password" name="password" className="bg-inherit border-b-2 p-3 my-3 " placeholder="Пароль" />
                <h3 className="text-lg flex justifu-center items-center">Выберите ваш тип:</h3>
                <select name='role' className="bg-inherit border-b-2 p-3 my-3">

                    <option value="student">Ученик</option>
                    <option value="teacher">Учитель</option>
                </select>
                <button className="py-2 px-4 bg-gradient-to-r from-sky-500 to-indigo-500 w-fit mx-auto rounded-md">Зарегистрироваться</button>
            </form>
        </section>
    )
}
