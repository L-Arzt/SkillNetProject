'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Image from 'next/image'
import background from '../components/img/background.png'


export default function Form() {
    const [error, setError] = useState('')
    const router = useRouter()

    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const resp = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (resp?.error) {
            setError(true)
        } else if (!resp?.error) {
            router.push('/')
            router.refresh()
        }
        console.log({ resp })
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
            <form onSubmit={submitHandler} className="p-5 flex flex-wrap flex-col w-[20%] mx-auto py-[20%] h-[90vh]  ">

                <section className='flex justify-center items-center flex-col'>
                    <p className='flex justify-center items-center'>Вход</p>
                    <input name='email' type="email" className="bg-inherit border-b-2 p-3 my-3 " placeholder="Email" />
                    <input name='password' type="password" className="bg-inherit border-b-2 p-3 my-3 " placeholder="Пароль" />
                    <button className="py-2 px-4 bg-gradient-to-r from-sky-500 to-indigo-500 w-fit mx-auto rounded-md">Войти</button>
                    {
                        error && <p className='font-bold text-red-500'>Неправильные данные!</p>
                    }
                </section>

            </form>
        </section>
    )
}
