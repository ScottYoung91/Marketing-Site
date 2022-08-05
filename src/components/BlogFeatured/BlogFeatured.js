import React from 'react';
import { Link } from 'react-router-dom';
import './blogfeatured.css';

const BlogFeatured = () => {
	return (
		<div className='container-blog'>
			<div className='blog-featured'>
				<div className='image-wrapper'>
					<img
						src='./assets/image-seo.png'
						alt=''
						className='featured-thumbnail'
					/>
				</div>
				<div className='featured-content'>
					<h4>Author</h4>
					<h1>Blog Title</h1>
					<p>Tagline</p>
					<Link to='' className='read-more'>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogFeatured;
