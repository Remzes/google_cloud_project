import express from 'express';
import api from './api';
const app = express();
import error from './middleware/error';
import middleware from './middleware';
const mongoose = require('mongoose');

mongoose.connect('mongodb://presidentApiAccess:presidentapi@35.225.7.90/presidentAPI');

//Middleware
middleware(app);
//API
app.use("/api", api);

//Error handling
app.use(error());

export default app;

