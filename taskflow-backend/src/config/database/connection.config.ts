import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv()

const apiUri = process.env.API_URL;

if (apiUri) {
    mongoose.connect(apiUri).then(() => { console.log('Conexión Exitosa!') }).catch((error: any) => {
        console.error(`Ocurrió un error en la conexión!: ${error.message}`);
    });
}