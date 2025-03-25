import mongoose from "mongoose";

async function database() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Connecting cities 🚀🚀🚀");        
    } catch (error) {
        console.log("There is no magic, it's over 😭😭😭😭");    
    }
}
database()