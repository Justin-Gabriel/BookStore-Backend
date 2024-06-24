import 'dotenv/config'
import connectToMongoDB from '../db/index.js'


const startServer = async (app) => {
    try {
        await connectToMongoDB();
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error(`Error in starting the server: ${error}`);
    }
}

export default startServer;