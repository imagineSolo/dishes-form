import React from 'react';

const Pizza = (props) => {
	const { inputChangeHandler } = props;
	return (
		<div className='form-control pizza-options'>
			<div>
				<label className='input-label' htmlFor='number'>
					Number of slices:
				</label>
				<input
					type='number'
					name='no_of_slices'
					pattern='[0-9]'
					placeholder='1 - 14'
					onChange={(e) => inputChangeHandler(e)}
				/>
			</div>
			<div>
				<label className='input-label' htmlFor='number'>
					Diameter:
				</label>
				<input
					type='number'
					step='any'
					name='diameter'
					pattern='[0-9]'
					placeholder='20 - 60'
					onChange={inputChangeHandler}
				/>
			</div>
		</div>
	);
};

export default Pizza;
