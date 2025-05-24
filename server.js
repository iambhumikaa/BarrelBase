import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import connectDB from './config/db.js'; 

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRoutes);
app.use(bookingRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
  );
}).catch((err) => {
  console.error('Server failed to start:', err);
});
