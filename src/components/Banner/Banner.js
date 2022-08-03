import React from 'react';
import './banner.css';

const Banner = () => {
	return (
		<section className='banner'>
			<div className='banner-content'>
				<h2>What We Do</h2>
				<p>
					Barrett Design helps businesses get new customers by improving their
					Web presence. There are countless small business owners who are
					talented and passionate about what they do. Our mission is to put them
					in contact with people who need their services.
				</p>
				<h2>-WHEN YOU SUCCEED, WE SUCCEED!</h2>
			</div>
			<div className='banner-cards'>
				<div className='banner-card'>
					<h3>Web Design</h3>
					<img src={'./assets/icon-web.svg'} alt='' height={80} width={80} />
				</div>
				<div className='banner-card'>
					<h3>Search Optimization</h3>
					<img src={'./assets/icon-graph.svg'} alt='' height={80} width={80} />
				</div>
				<div className='banner-card'>
					<h3>E-Commerce</h3>
					<img src={'./assets/icon-cart.svg'} alt='' height={80} width={80} />
				</div>
			</div>
		</section>
	);
};

export default Banner;
