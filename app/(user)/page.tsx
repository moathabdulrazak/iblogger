import React from 'react'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { PreviewSuspense } from 'next-sanity/preview'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'
const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  
`
function PreviewSuspenseFallback() {
  return (
    <div role="status">
      <p className="animate-pulse text-center text-lg text-zinc-800">
        Loading Preview Data...
      </p>
    </div>
  )
}

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={<PreviewSuspenseFallback></PreviewSuspenseFallback>}
        
        >
          <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }


  const posts = await client.fetch(query);
  return (<div>
    <BlogList posts={posts} />
    {/* <footer>
    moath
  </footer> */}
  </div>

 
  )
}
