export const nameIsValid = (name) => {
	const letters = /^[A-Za-z]+$/;
	if (name.match(letters)) {
		if (name.length > 2 && name.length < 15) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

export const typeIsValid = (type) => {
	// !!
	return type !== undefined ? true : false;
};

export const pizzaSlicesIsValid = (slices) => {
	return slices > 0 && slices < 15;
};

export const diameterIsValid = (diameter) => {
	return diameter > 19 && diameter < 61;
};

export const spicinessIsValid = (spiciness) => {
	return spiciness.length > 0;
};

export const sandwichSlices = (slices) => {
	return slices.length > 0 && slices.length < 11;
};
