import React, { useState } from 'react';

import Pizza from './DishTypes/Pizza';
import Sandwich from './DishTypes/Sandwich';
import Soup from './DishTypes/Soup';
import {
	nameIsValid,
	typeIsValid,
	pizzaSlicesIsValid,
	diameterIsValid,
	spicinessIsValid,
	sandwichSlices,
} from '../../utils/isValid';
import './Form.scss';

const Form = () => {
	const [formInput, setFormInput] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const inputChangeHandler = (e) => {
		const value = e.target.value;

		setFormInput({
			...formInput,
			[e.target.name]:
				e.target.type === 'number' || e.target.type === 'range'
					? parseInt(value)
					: value,
		});
	};

	const isFormValid = () => {
		const {
			name,
			type,
			no_of_slices,
			diameter,
			spiciness_scale,
			slices_of_bread,
		} = formInput;

		let isFormValid = true;

		const isValidName = nameIsValid(name);
		const isValidType = typeIsValid(type);
		let isValidOptional = true;

		if (formInput.type === 'pizza') {
			isValidOptional =
				pizzaSlicesIsValid(no_of_slices) && diameterIsValid(diameter);
		}

		if (formInput.type === 'soup') {
			isValidOptional = spicinessIsValid(spiciness_scale);
		}

		if (formInput.type === 'sandwich') {
			isValidOptional = sandwichSlices(slices_of_bread);
		}

		isFormValid = isValidName && isValidType && isValidOptional;

		return isFormValid;
	};

	const submitFormHandler = (e) => {
		e.preventDefault();
		setError(false);
		const isValid = isFormValid();

		if (isValid) {
			fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formInput),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
				})
				.then(setError && setError(false))
				.then(setFormSubmitted(true))
				.catch((error) => {
					console.error('Error:', error);
				});
		} else {
			setFormSubmitted(false);
			setError(true);
		}
	};

	return (
		<>
			<form className='form' onSubmit={submitFormHandler}>
				<div className='form-control'>
					<label className='input-label' htmlFor='text'>
						Dish name:
					</label>
					<input
						type='text'
						name='name'
						value={formInput.value}
						placeholder='Name of the dish...'
						maxLength='15'
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<div className='form-control'>
					<label className='input-label' htmlFor='text'>
						Preparation time:
					</label>
					<input
						type='time'
						name='preparation_time'
						value={formInput.value}
						step='1'
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<div className='form-control type'>
					<label className='input-label' htmlFor='text'>
						Type:
					</label>
					<select
						name='type'
						id='dish-type-select'
						onChange={inputChangeHandler}
					>
						<option>--select--</option>
						<option value='pizza'>Pizza</option>
						<option value='soup'>Soup</option>
						<option value='sandwich'>Sandwich</option>
					</select>
					{formInput.type === 'pizza' && (
						<Pizza inputChangeHandler={inputChangeHandler} />
					)}
					{formInput.type === 'soup' && (
						<Soup inputChangeHandler={inputChangeHandler} />
					)}
					{formInput.type === 'sandwich' && (
						<Sandwich inputChangeHandler={inputChangeHandler} />
					)}
				</div>
				<button className='submit'>Submit</button>
			</form>
			{formSubmitted && <h2 style={{ color: 'green' }}>Form submitted!</h2>}
			{error && <h2 style={{ color: 'red' }}>Form invalid!</h2>}
		</>
	);
};

export default Form;
