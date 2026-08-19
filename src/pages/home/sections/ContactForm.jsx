import { useState } from 'react';
import sendForm from '../../../utils/sendForm';

const initialState = { name: '', email: '', message: '' };

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactForm() {
	const [formData, setFormData] = useState(initialState);
	const [status, setStatus] = useState('idle');
	const [validationError, setValidationError] = useState('');
	const [sentName, setSentName] = useState('');

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	async function handleSubmit(event) {
		event.preventDefault();
		if (
			formData.name === '' ||
			formData.email === '' ||
			formData.message === ''
		) {
			setValidationError('Todos los campos son obligatorios.');
			return;
		}
		if (!isValidEmail(formData.email)) {
			setValidationError('Ingresá un correo válido.');
			return;
		}
		setValidationError('');
		setStatus('sending');
		try {
			await sendForm(formData);
			setSentName(formData.name);
			setStatus('success');
			setFormData(initialState);
		} catch {
			setStatus('error');
		}
	}

	return (
		<form className='cform' onSubmit={handleSubmit} noValidate>
			<div className='cform-row'>
				<div className='cform-field'>
					<label htmlFor='name'>Nombre</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						placeholder='¿Cuál es tu nombre?'
						autoComplete='name'
						required
					/>
				</div>
				<div className='cform-field'>
					<label htmlFor='email'>Correo electrónico</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						placeholder='tu@correo.com'
						autoComplete='email'
						required
					/>
				</div>
			</div>
			<div className='cform-field'>
				<label htmlFor='message'>Mensaje</label>
				<textarea
					id='message'
					name='message'
					value={formData.message}
					onChange={handleInputChange}
					placeholder='¿Con qué comenzamos?'
					required
				/>
			</div>

			{validationError ? (
				<p className='cform-error' role='alert'>
					{validationError}
				</p>
			) : null}

			{status === 'success' ? (
				<p className='cform-status' role='status'>
					¡Mensaje enviado! Muchas gracias por contactar conmigo,{' '}
					<strong>{sentName}</strong>. En breve te contactaré para brindarte
					más información.
				</p>
			) : (
				<button
					className='cform-submit'
					type='submit'
					disabled={status === 'sending'}
				>
					{status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
					<span className='cta-arrow' aria-hidden='true'>
						→
					</span>
				</button>
			)}

			{status === 'error' ? (
				<p className='cform-error' role='alert'>
					Hubo un error al enviar el correo. Por favor, intentá de nuevo.
				</p>
			) : null}
		</form>
	);
}

export default ContactForm;
