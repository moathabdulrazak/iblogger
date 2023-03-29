import React from 'react'
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import category from '@/schemas/category';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ClientSideRoute from './ClientSideRoute';
type Props = {
  posts: Array<Post>;
};

const BlogList = ({ posts }: Props) => {  
  return (
    <div>
      <hr className='border-[#F7AB0A] mb-10'  />

   <div className='grid grid-cols-1 md:grid-cols-2 px-10  gap-10 gap-y-16 pb-24' >
  {posts.map((post) => {
    return (
      <ClientSideRoute  key={post._id} route={`/post/${post.slug.current}`} >

      <div className='group cursor-pointer flex flex-col' >
        <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out ' >
          <Image
          className="object-cover object-left lg:object-center"
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
          />
           <div>
            <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop:-blur-lg rounded drop-shadow-lg text-white p-5
            flex justify-between '  >
              <p className='font-bold' >{post.title}</p>
              <p className="transform-gpu subpixel-antialiased">
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
            </div>
            <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
                    {post.categories?.map(category => (
                      <div
                      key={category._id}
                      className="h-fit rounded-full bg-[#F7AB0A] px-3 py-1 text-center text-sm font-semibold text-black"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
           </div>
        </div>
        <div className='mt-5 flex-1' >
          <p className='underline text-lg font-bold' >{post.title}</p>
          <p className='text-gray-500  line--2' >{post.description}</p>
        </div>
        <p className='mt-5 font-bold flex items-center group-hover:underline' >
          read post
          <ArrowUpRightIcon className='ml-2 h-4 w-4'/>
        </p>
      </div>
  </ClientSideRoute>
    );
  })}
</div>
    </div>
  )
}

export default BlogList
