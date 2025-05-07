import React from 'react'
import Link from 'next/link'

export default function LearnSideBar() {
  return (
    <div className='h-[100vh] flex flex-col gap-2 justify-center items-center'>
        <Link href='/'>Progresss</Link>
        <Link href='/'>FeedBack</Link>
        <Link href='/'>Certificate</Link>
    </div>
  )
}
