import React from 'react';

const Sandwich = (props) => {
	const { inputChangeHandler } = props;
	return (
		<div className='form-control'>
			<label className='input-label' htmlFor='number'>
				Slices of bread:
			</label>
			<input
				type='number'
				name='slices_of_bread'
				placeholder='1 - 10'
				onChange={inputChangeHandler}
			/>
		</div>
	);
};

export default Sandwich;
