import React from 'react'
import Link from 'next/link'

function ServicePage ()  {
    return (
        <div>
        <h1>WELCOME TO SERVICE PAGE</h1>
        <br />
        <br />
        <Link href="/">Home</Link>
        <br />
        <br />
        <Link href="/About">About</Link>
        <br />
        <br />
        <Link href="/Contact">Contact</Link>
        <br />
        <br />
        <Link href="/Service/Onlineservice">Onlineservice</Link>
        </div>

    )
}
export default ServicePage