import config from './server/config/index';
import app from './server/index';
import logger from './server/utils/logger';
import express from 'express';

app.use("/", express.static('client'));

//Main route
app.get('/', (req, res) => {
    res.send("Hello from PresidentAPI");
});

//Port listening
app.listen(process.env.PORT || 1488, () => {
    logger.log(`Listening on port ${config.port}`)
});
