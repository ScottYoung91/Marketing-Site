import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
const HomeScreen = () => {
	return (
		<div>
			<Hero />
			<Banner />
			<Services />
			<Contact />
		</div>
	);
};

export default HomeScreen;
