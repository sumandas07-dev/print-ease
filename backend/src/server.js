import app from './app.js';
import connectDB from './config/mongoDB.js';
import dotenv from 'dotenv';

dotenv.config();

const startServer = async () => {
    try {
        await connectDB();

        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    } catch(error) {
        console.log('Server Error: ', error.message);
    }
}

startServer();