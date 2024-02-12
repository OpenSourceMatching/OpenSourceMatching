import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToMongo = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    console.log('Using new database connection');
    if (!process.env.MONGOURI) {
      throw new Error('MONGOURI is not defined');
    }
    await mongoose.connect(process.env.MONGOURI || '');
    isConnected = true;
  } catch (err) {
    console.error('Error connecting to database', err);
  }
};