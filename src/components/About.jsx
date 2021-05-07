import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Bird from '../img/bird.JPG'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)
  
  useEffect(() => {
    sanityClient.fetch(`*[_type == 'author']{
      name,
      bio,
      'image': image.asset->url
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error)
  })

  if (!author) return <div>Anonymous...</div>

  return (
    <main className='relative'>
      <img 
        src={Bird} 
        alt="Bird flying over pond"
        className='absolute w-full'
      />
      <div className='container mx-auto relative p-10 lg:pt-20'>
        <section className=' rounded-lg lg:flex p-8'>
          <img 
            src={urlFor(author.image).url()}  
            alt={author.name}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
          />
          <div className='flex flex-col text-lg justify-center'>
            <h1 className='text-6xl text-green-500 mb-4'>
              Howdy, my name is{" "}
              <span className='text-green-200 italic'>{author.name}</span>
            </h1>
            <div className='lg:max-w-prose prose text-white'>
              <BlockContent 
                blocks={author.bio} 
                projectId='go9c0fse'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
