import Image from 'next/image'
import Link from 'next/link'
// import '../styles/user-styles'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold pc-10 py-5'>
      <div className='flex items-center space-x-2' >
        <Link href="/">
        <Image 
      className="object-cover"
      width={50}
      height={50}
      src="https://static.vecteezy.com/system/resources/previews/000/615/271/large_2x/letter-m-vector-icons-such-logos-template.jpg"
      alt="brand logo"
         />
        </Link>
        <h1>Iblogger</h1>
      </div>


      <div></div>
    </header>
  )
}

export default Header