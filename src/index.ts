import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3001, () => {
      console.log('🚀 Server is running...');
    })

    console.log('Connected..')
  })
  .catch(() => console.log('Error connecting...'));

