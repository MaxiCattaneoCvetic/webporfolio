import { useState } from 'react';
import style from './form.module.css';
import Swal from 'sweetalert2';
import sendForm from '../../utils/sendForm';

function Form() {
	const [error, setError] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const initialState = {
		name: '',
		email: '',
		message: '',
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	function isValidEmail(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	function handleSubmit() {
		const message =
			'¡Muchas gracias por contactar conmigo ' +
			`<strong>${formData.name}</strong>` +
			'! En breve te contactaré para brindarte más información.';
		if (
			formData.name === '' ||
			formData.email === '' ||
			formData.message === ''
		) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Todos los campos son obligatorios.',
			});
			return;
		} else if (!isValidEmail(formData.email)) {
			setError(true);
			return;
		} else {
			setError(false);
		}
		try {
			sendForm(formData);
			Swal.fire({
				icon: 'success',
				title: '¡Mensaje enviado!',
				html: message,
			}).then(() => {
				setFormData(initialState);
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Hubo un error al enviar el correo. Por favor, intenta de nuevo.',
				footer: 'Error: ' + error,
			});
		}
	}

	return (
		<section>
			<h2 className={style.titleForm}>Contacto</h2>
			<div id='contact'>
				<form className={style.form} id='contact'>
					<div className={style.inputContainer}>
						<label htmlFor='name'>
							Nombre:
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleInputChange}
								className={style.input}
								required
								placeholder='¿Cuál es tu nombre?'
							/>
						</label>

						<label htmlFor='email'>
							Correo Electrónico:
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleInputChange}
								className={style.input}
								placeholder='Correo electrónico'
								required
							/>
						</label>
					</div>
					<div>
						{error ? (
							<p style={{ color: 'red', fontSize: '15px' }}>
								Ingresa un correo válido
							</p>
						) : null}
					</div>
					<label htmlFor='message'>Comentarios</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleInputChange}
						className={style.inputTextarea}
						placeholder='¿Con qué comenzamos?'
						required
					/>

					<button
						className={style.btn}
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						aria-label='Enviar'
					>
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
}

export default Form;
