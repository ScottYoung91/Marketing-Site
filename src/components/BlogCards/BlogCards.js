import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './blogcards.css';

const BlogCards = () => {
	return (
		<div className='blog-cards'>
			<BlogCard />
			<BlogCard />
			<BlogCard />
		</div>
	);
};

export default BlogCards;
