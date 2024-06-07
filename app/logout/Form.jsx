'use client'

import React from 'react'
import { signOut } from "next-auth/react"


export default function Form() {
  return (
    <div><button
      onClick={() => {
        signOut()
      }}
    >Выйти из аккаунта</button></div>
  )
}
