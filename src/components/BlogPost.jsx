import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function BlogPost() {
  const [ blogPost, setBlogPost ] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == '${slug}']{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      'name': author->name,
      'image': author->image
    }`).then((data) => setBlogPost(data[0]))
    .catch(console.error);
  }, [slug])

  if (!blogPost) return <div>Loading...please wait...</div>

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='text-3xl lg:text-6xl mb-4'>{blogPost.title}</h1>
              <div className='flex justify-center text-gray-800'>
                <img
                  src={urlFor(blogPost.image).url()}
                  alt={blogPost.name} 
                  className='w-10 h-10 rounded-full'
                />
                <p className='flex items-center pl-2 text-2xl'>{blogPost.name}</p>
              </div>
            </div>
          </div>
          <img 
            src={blogPost.mainImage.asset.url} 
            alt={blogPost.title}
            className='w-full object-cover rounded-md'
            style={{ height: '400px' }} 
          />
        </header>
        <div className='px-16 lg:px-24 py-12 lg:py-20 text-lg'>
          <BlockContent 
            blocks={blogPost.body}
            projectId='go9c0fse'
            dataset='production'
          />
        </div>
      </article>
    </main>
  )
}
