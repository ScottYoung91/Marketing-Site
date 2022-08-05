import React from 'react';
import BlogFeatured from '../components/BlogFeatured/BlogFeatured';
import BlogCards from '../components/BlogCards/BlogCards';
const BlogScreen = () => {
	return (
		<div style={{ backgroundColor: '#E7D8F6' }}>
			<BlogFeatured />
			<BlogCards />
		</div>
	);
};

export default BlogScreen;
