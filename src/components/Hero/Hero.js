import React from 'react';
import './hero.css';

const Hero = () => {
	return (
		<section className='hero-container'>
			<div className='hero-content'>
				<h2>Design</h2>
				<h2>Marketing</h2>
				<h2>Optimization</h2>
				<button>Learn More</button>
			</div>
			<img src='/assets/hero-background.png' alt='' className='hero-image' />
		</section>
	);
};

export default Hero;
