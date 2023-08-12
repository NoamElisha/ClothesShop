

import mongoose from 'mongoose'; // we change the to moongose insted of mongo
import dotenv from 'dotenv';

dotenv.config();

export default function mongoConnect() {
    
  mongoose.connect(process.env.URI);
  mongoose.connection
    .once('open', () => {
      console.info(`Mongoose has connected `);
    })
    .on('error', (error) => console.error(error));
}