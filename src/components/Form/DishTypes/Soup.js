import React from 'react';

const Soup = (props) => {
	const { inputChangeHandler } = props;
	return (
		<div className='form-control'>
			<label className='input-label' htmlFor='range'>
				Spiciness scale:
			</label>
			<input
				type='range'
				name='spiciness_scale'
				min='1'
				max='10'
				defaultValue='5'
				onChange={inputChangeHandler}
			/>
		</div>
	);
};

export default Soup;
