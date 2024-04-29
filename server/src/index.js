import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/users.js';
import { detailsRouter } from './routes/details.js';
import { chatRouter } from './routes/chat.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/details', detailsRouter);
app.use('/chat', chatRouter);

const PORT = process.env.PORT || 5001;

mongoose.connect(
  process.env.MONGODB_URL
).then(res=>{
  console.log('Connected to MongoDB');
}).catch(err=>console.log(err));

app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));