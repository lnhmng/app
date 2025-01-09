import express from 'express';
import { CONSTANTS } from '../../../utils/constants.js';
import returnResponseUtil from '../../../utils/return-response-util.js';

const basicMaterialRouter = express.Router();

basicMaterialRouter.get(CONSTANTS.API_BASIC_MATERIAL, async (req, res) => {
    try {
        const data = '1234';

        return returnResponseUtil.returnResponse(res, 200, true, 'Result', data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data" });
    }
});

export default basicMaterialRouter;