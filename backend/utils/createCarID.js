const createCarID = () => {
	const length = 4; // the length of the string (excluding "C")
	let result = "C"; // start with "C"
	const characters = "0123456789"; // the characters to choose from
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
};

export default createCarID;
