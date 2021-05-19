import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

export default function Gear() {
	const [gearData, setGearData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'gear']{
      productName,
      primaryImage {
        asset-> {
          _id,
          url
        }
      },
      secondImage {
        asset-> {
          _id,
          url
        }
      },
      description,
      gearType,
      link,
      tags
    }`
			)
			.then((data) => setGearData(data))
			.catch(console.error);
	}, []);

	return (
		<main className='bg-gray-800 min-h-screen p-12'>
			<section className='container mx-auto'>
				<h1 className='flex justify-center text-white font-bold text-5xl'>
					What's in my Gear Bag?
				</h1>
				<h2 className='flex justify-center text-xl font-semibold text-gray-200 my-12'>
					Here's a list of my favorite budget setups.
				</h2>
				<section className='grid grid-cols-2 gap-8'>
					{gearData &&
						gearData.map((gear) => (
							<article className='bg-gray-200 p-16 relative rounded-lg shadow-xl'>
								<h3 className='text-gray-500 text-3xl font-bold mb-4 hover:text-yellow-600'>
									<a
										href={gear.link}
										alt={gear.productName}
										target='_blank'
										rel='noreferrer noopener'>
										{gear.productName}
									</a>
								</h3>
								<div className='space-x-6'>
									<div className='grid grid-cols-2 gap-6'>
										<img
											src={gear.primaryImage.asset.url}
											alt={gear.primaryImage.alt}
											className='w-full h-full rounded-lg object-contain '
										/>
										<img
											src={gear.secondImage.asset.url}
											alt={gear.secondImage.alt}
											className='w-full h-full rounded-lg object-contain'
										/>
									</div>
									<p className='my-6 text-lg text-gray-600 leading-relaxed'>
										{gear.description}
									</p>
									<a
										href={gear.link}
										rel='noopener noreferrer'
										target='_blank'
										className='text-blue-400 text-lg font-bold hover:underline hover:text-yellow-700'>
										Check out the gear here{''}
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
