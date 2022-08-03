import React from 'react';
import './contact.css';

const Contact = () => {
	return (
		<section className='contact'>
			<div className='container'>
				<form action='' className='contact-form' netlify>
					<h4>Contact Us</h4>
					<input type='text' name='name' id='name' placeholder='name' />
					<input type='text' name='email' id='email' placeholder='email' />
					<input
						type='text'
						name='description'
						id='description'
						placeholder='description'
						className='description'
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
