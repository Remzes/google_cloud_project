import {Router} from 'express';
import {CountryModel} from "../../db/db";
const countryRoutes = Router();

//Inside root/countries route
countryRoutes.get('/', (req, res) => {
    CountryModel.find({}, (err, data) => {
        res.json(data);
    })
});

//Inside root/countries/:country
//Parameter handler
countryRoutes.param("country", (req, res, next, country) => {
    CountryModel.find({abbreviation: country}, (err, data) => {
        const countryObject = data[0];
        res.locals.country = (data.length !== 0) ? countryObject : "No Country Found!";
        next();
    });
});

//Route handler
countryRoutes.get('/:country', (req, res) => {
    res.send(res.locals.country);
});
//End of root/countries/:country

export default countryRoutes;

