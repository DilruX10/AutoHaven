import "dotenv/config"; // import .env variables
import express from "express"; // import express
// import mongoose from "mongoose"; // import mongoose
import cors from "cors";
import {
	deleteCar,
	getAllCars,
	getOneCar,
	newCar,
	searchCars,
	updateCar,
} from "./controller/carController.js";
import carModel from "./models/carModel.js";
import connectDB from "./utils/connectDB.js";
import createCarID from "./utils/createCarID.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "20mb", extended: true })); // middleware for parsing request body

const corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

connectDB();

app.get("/", (request, response) => {
	const res = `<h1> Hi mom.. </h1>`;

	return response.status(200).send(res); // response
}); // (request url, callback function to handle request)

// new car
app.post("/newCar", newCar);

// view all
app.get("/viewAllCars", getAllCars);

// view one
app.get("/viewCar/:id", getOneCar);

// update car
app.post("/updateCar/:id", updateCar);

// search cars
app.post("/searchCars", searchCars);

// delete car
app.delete("/deleteCar/:id", deleteCar);

app.listen(3000, () => {
	//Starts the server and listens for incoming requests
	console.log(`App is listening to port: ${PORT}`);
});
