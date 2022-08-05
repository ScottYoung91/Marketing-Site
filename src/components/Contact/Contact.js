import React from 'react';
import './contact.css';

const Contact = () => {
	return (
		<section className='contact'>
			<div className='container'>
				<form
					action=''
					className='contact-form'
					name='contact '
					netlify
					netlify-honeypot='bot-field'
				>
					<h4>Contact Us</h4>
					<input type='text' name='name' id='name' placeholder='name' />
					<input type='text' name='email' id='email' placeholder='email' />
					<textarea
						type='text'
						name='description'
						id='description'
						placeholder='description'
						className='description'
					></textarea>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
