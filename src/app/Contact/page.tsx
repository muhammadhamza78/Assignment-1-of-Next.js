import React from 'react'
import Link from 'next/link'

function ContactPage ()  {
    return (
        <div>
        <h1>WELCOME TO CONTACT PAGE </h1>
        <br />
        <br />
        <Link href="/">Home</Link>
        <br />
        <br />
        <Link href="/About">About</Link>
        <br />
        <br />
        <Link href="/Service">Service</Link>
        </div>

    )
}
export default ContactPage