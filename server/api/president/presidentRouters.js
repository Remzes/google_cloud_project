import {Router} from 'express';
import {CountryModel} from "../../db/db";

const presidentRouter = Router();

//Inside root/countries/:country/:president
//Parameters handler
presidentRouter.param("president", (req, res, next, president) => {

    const presidentFullName = president.split("-");
    if (presidentFullName.length === 2) {
        CountryModel.find({abbreviation: req.baseUrl.split('/')[3]}, {
            presidents: {
                $elemMatch: {
                    firstName: presidentFullName[0].toString(),
                    lastName: presidentFullName[1].toString()
                }
            }
        }, (err, data) => {
            const presidentObject = data[0].presidents[0];
            res.locals.president = (data[0].presidents.length !== 0) ? presidentObject : "No President Found!";
            next();
        });
    } else {
        res.send("No President Found!");
    }
});

//Route handler
presidentRouter.get("/:president", (req, res) => {
    res.json(res.locals.president);
});

export default presidentRouter;