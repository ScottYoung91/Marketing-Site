import React from 'react';
import './about.css';

const About = () => {
	return (
		<div className='about'>
			<div className='about-left'>
				<img
					src='./assets/thumbnail.jpg'
					alt=''
					height={200}
					width={200}
					style={{ borderRadius: '50%', marginBottom: '15px' }}
				/>
				<p>Bachelors of Computer Science</p>
				<p>Univeristy of North Texas</p>
			</div>
			<div className='about-right'>
				<h2>About Me</h2>
				<p>
					I am a Freelance Web Developer who designs websites for small
					businesses and personal projects. I also work with SEO to make sure
					these websites get the hits and retention that my clients are looking
					for.
				</p>
				<div className='socials'>
					<img src='./assets/icon-email.png' alt='' className='social-icon' />
					<img src='./assets/icon-git.png' alt='' className='social-icon' />
					<img
						src='./assets/icon-linkedin.png'
						alt=''
						className='social-icon'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
