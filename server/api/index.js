import {Router} from 'express';
const router = Router();
import countryRouters from './country/countryRouters';
import presidentRouters from './president/presidentRouters';

//Routes
router.use("/countries", countryRouters);
router.use("/countries/:country", presidentRouters);

export default router;