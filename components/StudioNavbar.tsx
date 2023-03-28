import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"
import React from 'react'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className='flex items-center' >
        <Link className= 'text-color text-[#f4b400] flex items-center text-color'  href="/">
          {/* <ArrowUturnLeftIcon className=' arrowSize text-[#f4b400] h-6 w-6 mr-2 ' /> */}
        Go to websites
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar