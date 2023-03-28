import React from 'react'
import { previewData } from 'next/headers'

export default function HomePage() {
  if (previewData()) {
    return <div>Preview mode</div>
  }

  return <div>
    <h1>Not in preview mode</h1>
  </div>
}
