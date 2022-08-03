import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className='logo-container'>
				<img src={'./logo 1.svg'} alt='' className='logo' />
				<h2>Barrett Design</h2>
			</div>
			<div className='nav-items'>
				<Link to='/' className='nav-item'>
					Home
				</Link>
				<Link to='/about' className='nav-item'>
					About Me
				</Link>
				<Link to='/services' className='nav-item'>
					Services
				</Link>
				<Link to='/blog' className='nav-item'>
					Blog
				</Link>
				<Link to='/blog' className='nav-item '>
					<button className='nav-contact'>Contact</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
