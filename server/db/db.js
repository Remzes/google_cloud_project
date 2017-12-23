const mongoose = require('mongoose');
import countryModel from "./Models/country";
import presidentModel from "./Models/president";

export const PresidentModel = presidentModel(mongoose);
export const CountryModel = countryModel(mongoose, PresidentModel);


