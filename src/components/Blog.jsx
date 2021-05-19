import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';

export default function Blog() {
	const [blogData, setBlog] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'blog']{
        title,
        slug,
        mainImage {
          asset-> {
            _id,
            url
          },
          alt
        }
      }`
			)
			.then((data) => setBlog(data))
			.catch(console.error);
	}, []);

	return (
		<main className='bg-gray-800 min-h-screen p-12'>
			<section className='container mx-auto'>
				<h1 className='flex justify-center text-white text-5xl font-bold '>
					Photog Blogs
				</h1>
				<h2 className='flex justify-center text-xl text-gray-200  my-12'>
					Random tips, tricks, and etc.
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{blogData &&
						blogData.map((blog, index) => (
							<article>
								<Link to={'/blog/' + blog.slug.current} key={blog.slug.current}>
									<span
										className='block h-64 relative leading-snug rounded shadow bg-white border-l-8 border-blue-50'
										key={index}>
										<img
											src={blog.mainImage.asset.url}
											alt={blog.mainImage.alt}
											className='w-full h-full rounded-r object-cover absolute'
										/>
										<span className='block relative h-full justify-end items-end pr-4 pb-4'>
											<h3 className='text-gray-700 text-lg font-bold px-3 py-4 bg-blue-50'>
												{blog.title}
											</h3>
										</span>
									</span>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
