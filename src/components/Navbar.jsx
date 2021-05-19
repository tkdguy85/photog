import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
	return (
		<header className='bg-blue-800'>
			<div className='container mx-auto flex justify-between'>
				<nav className='flex'>
					<NavLink
						to='/'
						exact
						className='inline-flex items-center mr-20 py-6 px-3 text-blue-200 hover:text-yellow-500 text-3xl font-bold tracking-widest'
						activeClassName='italic'>
						PhotoG Tips
					</NavLink>

					<NavLink
						to='/gear'
						className='inline-flex items-center my-6 py-2 px-3 rounded text-blue-300 hover:text-yellow-500'
						activeClassName='bg-yellow-100 text-blue-400 font-semibold italic text-lg'>
						Gear
					</NavLink>

					<NavLink
						to='/blog'
						className='inline-flex items-center my-6 py-2 px-3 rounded text-blue-300 hover:text-yellow-500'
						activeClassName='bg-yellow-100 text-blue-400 font-semibold italic text-lg'>
						Blurbs
					</NavLink>

					<NavLink
						to='/aboutme'
						className='inline-flex items-center my-6 py-2 px-3 rounded text-blue-300 hover:text-yellow-500'
						activeClassName='bg-yellow-100 text-blue-400 font-semibold italic text-lg'>
						Who am I?
					</NavLink>
				</nav>
				<div className='py-2 my-4 mr-20'>
					<SocialIcon
						url='https://www.instagram.com/tkdguy85/'
						className='mr-4 transform hover:-translate-y-1'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://twitter.com/Tkdguy85'
						className='mr-4 transform hover:-translate-y-1'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://hashnode.com/@tkdguy85'
						className='mr-4 transform hover:-translate-y-1'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://www.linkedin.com/in/tkdguy85/'
						className='mr-4 transform hover:-translate-y-1'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
