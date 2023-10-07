import carModel from "../models/carModel.js";
import createCarID from "../utils/createCarID.js";

export const getAllCars = async (request, response) => {
	try {
		// get all car details
		const carRes = await carModel.find({});

		// return car data as a response
		return response.status(201).json({
			count: carRes.length,
			cars: carRes,
		});
		//
	} catch (error) {
		var errorMsg = error.message;
		console.log(errorMsg);
		return response.status(500).json({ message: errorMsg });
	}
};

export const newCar = async (request, response) => {
	// extract data from request
	const {
		model,
		brand,
		color,
		type,
		size,
		manufacturer,
		fuel_type,
		transmission,
		imgLink,
	} = request.body;

	try {
		// get carid
		const carId = createCarID();

		// insert car
		const carRes = await carModel.create({
			carId,
			model,
			brand,
			color,
			type,
			size,
			manufacturer,
			fuel_type,
			transmission,
			imgLink,
		});
		// return car data as a response
		return response.status(201).json(carRes);
		//
	} catch (error) {
		var errorMsg = error.message;
		console.log(errorMsg);
		return response.status(500).json({ message: errorMsg });
	}
};

export const getOneCar = async (request, response) => {
	// extract data from url
	const carId = request.params.id;

	try {
		// find car object id
		const carOId = await carModel.find({
			carId: carId,
		});

		// get car details
		const carRes = await carModel.findById(carOId);

		// return car data as a response
		return response.status(201).json(carRes);
		//
	} catch (error) {
		var errorMsg = error.message;
		console.log(errorMsg);
		return response.status(500).json({ message: errorMsg });
	}
};

export const updateCar = async (request, response) => {
	// extract data from url
	const carId = request.params.id;

	// extract data from request
	const {
		model,
		brand,
		color,
		type,
		size,
		manufacturer,
		fuel_type,
		transmission,
		imgLink,
	} = request.body;

	try {
		// find car object id
		const carOId = await carModel.find({
			carId: carId,
		});

		// find by id and update model
		await carModel.findByIdAndUpdate(carOId, {
			model,
			brand,
			color,
			type,
			size,
			manufacturer,
			fuel_type,
			transmission,
			imgLink,
		});

		// get updated car details
		const carRes = await carModel.findById(carOId);

		// return car data as a response
		return response.status(201).json(carRes);
		//
	} catch (error) {
		var errorMsg = error.message;
		console.log(errorMsg);
		return response.status(500).json({ message: errorMsg });
	}
};

export const deleteCar = async (request, response) => {
	// extract data from url
	const carId = request.params.id;

	try {
		// find car object id
		const carOId = await carModel.find({
			carId: carId,
		});

		// find by id and update model
		await carModel.findByIdAndDelete(carOId);

		// get updated car details
		const carRes = await carModel.findById(carOId);

		return response.status(201).json({ message: "Deleted" });
		//
	} catch (error) {
		var errorMsg = error.message;
		console.log(errorMsg);
		return response.status(500).json({ message: errorMsg });
	}
};

export const searchCars = async (request, response) => {
	// extract data from request
	const conditions = request.body;

	try {
		// get all car details
		const allCars = await carModel.find({});

		const carRes = allCars.filter((car) => {
			return Object.keys(conditions).every((key) => {
				return conditions[key] === car[key];
			});
		});

		// return car data as a response
		return response.status(201).json(carRes);
		//
	} catch (error) {
		var errorMsg = error.message;
		console.log(errorMsg);
		return response.status(500).json({ message: errorMsg });
	}
};
