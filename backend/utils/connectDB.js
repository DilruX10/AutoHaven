import "dotenv/config"; // import .env variables
import mongoose from "mongoose"; // import mongoose

const connectDB = async () => {
	// if await is used in the body function should be async
	try {
		await mongoose
			.connect(process.env.DB_URI)
			.then((con) => {
				console.log(
					`MongoDB Database connected with HOST: ${con.connection.host}`
				);
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (err) {
		console.log(err);
	}
};

export default connectDB;
