import React from 'react';
import { Link } from 'react-router-dom';
import './blogcard.css';

const BlogCard = () => {
	return (
		<div className='blog-card'>
			<h2>Title</h2>
			<p>tagline</p>
			<Link to='/'>Read More</Link>
		</div>
	);
};

export default BlogCard;
