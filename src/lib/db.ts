import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Por favor define la variable MONGODB_URI en tu archivo .env'
  );
}

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 1) {
      // Ya está conectado
      return;
    }
    await mongoose.connect(MONGODB_URI!);
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error conectando a MongoDB', error);
    throw new Error('Error conectando a la base de datos');
  }
}