import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	useEffect(() => {
		if (!showNav && window.innerWidth < 601)
			document.querySelector('.nav-items').style.display = 'none';
	}, [showNav]);

	return (
		<nav>
			<div className='logo-container'>
				<img src={'./logo 1.svg'} alt='' className='logo' />
				<h2>Barrett Design</h2>
			</div>
			<div className='mobile mobile-menu'>
				<button
					onClick={() => {
						document.querySelector('.nav-items').style.display = 'flex';
						setShowNav(true);
					}}
				>
					<img
						src={'./assets/icon-hamburger.svg'}
						alt='nav-button'
						className='hamburger'
					/>
				</button>
				<div className='mobile-nav-items'></div>
			</div>
			<div className='nav-items'>
				<Link to='/' className='nav-item' onClick={() => setShowNav(false)}>
					Home
				</Link>
				<Link
					to='/about'
					className='nav-item'
					onClick={() => setShowNav(false)}
				>
					About Me
				</Link>
				<Link
					to='/services'
					className='nav-item'
					onClick={() => setShowNav(false)}
				>
					Services
				</Link>
				<Link to='/blog' className='nav-item' onClick={() => setShowNav(false)}>
					Blog
				</Link>
				<Link
					to='/contact'
					className='nav-item '
					onClick={() => setShowNav(false)}
				>
					<button className='nav-contact'>Contact</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
