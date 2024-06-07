'use client'
import React, { useEffect, useState } from 'react'

import RoomFilter from './RoomFilter'
import RoomCard from './RoomCard'
import Link from 'next/link'

export default function RoomListFilter({ course, minMax, courseType }) {
    const [Course, setCourse] = useState(course)
    const categories = ["it", 'Аналитика', 'Бизнес', 'Маркетинг', 'Дизайн']

    const [activeIndex, setActiveIndex] = useState(0)
    const onClickActive = (index) => { setActiveIndex(index) }


    useEffect(() => {
        if (!!courseType) {
            setActiveIndex(courseType)
        }
    }, [])


    return (

        <div>
            <div>
                <RoomFilter setCourse={setCourse} minPrice={minMax._min.price} maxPrice={minMax._max.price} />
            </div>
            <div className='flex items-center justify-center p-5 mt-10'>
                <ul className='flex'>
                    <li onClick={() => onClickActive(0)} className={`${activeIndex === 0 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Все</li>
                    <li onClick={() => onClickActive(1)} className={`${activeIndex === 1 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Дизайн</li>
                    <li onClick={() => onClickActive(2)} className={`${activeIndex === 2 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Маркетинг</li>
                    <li onClick={() => onClickActive(3)} className={`${activeIndex === 3 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Бизнес</li>
                    <li onClick={() => onClickActive(4)} className={`${activeIndex === 4 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>IT</li>
                    <li onClick={() => onClickActive(5)} className={`${activeIndex === 5 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Аналитика</li>
                </ul>
            </div>
            <div className='flex  justify-center gap-5 m-5 flex-wrap gap-15 '>

                {
                    Course
                        .filter((onecourse) => {
                            if (activeIndex === 0) {
                                return true;
                            }
                            else {
                                return onecourse.topic.toLowerCase() === categories[activeIndex - 1].toLowerCase()
                            }
                        })
                        .map((onecourse) => (
                            <RoomCard
                                key={onecourse.id}
                                id={onecourse.id}
                                name={onecourse.name}
                                topic={onecourse.topic}
                                description={onecourse.description}
                                author={onecourse.author}
                                peopleMax={onecourse.peopleMax}
                                price={onecourse.price}
                            />

                        ))
                }

            </div>
        </div>
    )
}
