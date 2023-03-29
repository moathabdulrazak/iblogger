'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
    <div className='flex items-center space-x-2'>
      <Link href='/'>
        <Image 
          className='object-cover'
          width={75}
          height={75}
          src='https://static.vecteezy.com/system/resources/previews/000/615/271/large_2x/letter-m-vector-icons-such-logos-template.jpg'
          alt='brand logo'
        />
      </Link>
      <h1>Iblogger</h1>
      <div className='flex items-center space-x-2'>
      </div>
    </div>
      <div className='flex items-center space-x-2 ml-2 pr-5'>
        
        <Link href='/studio'>
          <h1 className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>
            Post
          </h1>
        </Link>
        <p className='text-gray-500 text-sm'>(if  authorized by admin)</p>

      </div>
      

    </header>

  )
}

export default Header
