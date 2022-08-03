import React from 'react';
import './services.css';

const Services = () => {
	return (
		<section className='services'>
			<h2>Services</h2>
			<div className='service'>
				<div className='service-content'>
					<h1>Website Design</h1>
					<h4>Clean Websites Designed For You</h4>
					<p>
						We design fast intuitive websites customized for your business
						needs. Having a clean professional website allows users to find the
						information they want quickly and easily.
					</p>
				</div>
				<img
					src={'./assets/image-webdev.png'}
					alt=''
					className='service-image'
				/>
			</div>
			<div className='service right-align reverse'>
				<img src={'./assets/image-seo.png'} alt='' className='service-image' />
				<div className='service-content'>
					<h1>Search Optimization</h1>
					<h4>We Make Sure Customers Find You</h4>
					<p>
						In today's world, most services are found online using Google or an
						equivalent search engine. It is critical that your website has good
						Search Engine Optimization.
					</p>
				</div>
			</div>
			<div className='service'>
				<div className='service-content'>
					<h1>E-Commerce</h1>
					<h4>Custom Platforms To Sell Your Products</h4>
					<p>
						You make the product. We make the platform. Customers today want to
						shop online, and we make that possible by building you a full stack
						application with Integrated Payment and Order Tracking
						functionality.
					</p>
				</div>
				<img
					src={'./assets/image-ecommerce.png'}
					alt=''
					className='service-image'
				/>
			</div>
		</section>
	);
};

export default Services;
