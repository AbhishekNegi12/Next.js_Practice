"use client"
import { usePathname } from "next/navigation";


import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div>
        <div>I am a Navbar </div>
        <div>You are inside {pathname}</div>
    </div>
  )
}

export default Navbar