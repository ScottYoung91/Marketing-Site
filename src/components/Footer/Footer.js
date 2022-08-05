import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-content'>
				<div className='links'>
					<Link to='/' className='link'>
						Home
					</Link>
					<Link to='/services' className='link'>
						Services
					</Link>
					<h2>Barrett Design</h2>
					<Link to='/about' className='link'>
						About Me
					</Link>
					<Link to='/blog' className='link'>
						Blog
					</Link>
				</div>
				<div className='footer-socials'>
					<img
						src='./assets/icon-email.png'
						alt=''
						width={50}
						className='footer-social'
					/>
					<img
						src='./assets/icon-git.png'
						alt=''
						width={50}
						className='footer-social'
					/>
					<img
						src='./assets/icon-linkedin.png'
						alt=''
						width={50}
						className='footer-social'
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
