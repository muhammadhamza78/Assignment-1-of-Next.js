import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> WELCOME TO MAIN PAGE</h1>
      <br />
      <br />
      <Link href="/About">About</Link>
      <br />
      <br />
      <Link href="/Service">Service</Link>
      <br />
      <br />
      <Link href="/Contact">Contact</Link>
    </div>
  );
}