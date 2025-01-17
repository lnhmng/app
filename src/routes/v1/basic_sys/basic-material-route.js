import express from 'express';
import { CONSTANTS } from '../../../utils/constants.js';

import BasicMaterialController from '../../../controller/basic-material-controller.js';

const basicMaterialRouter = express.Router();

basicMaterialRouter.get(CONSTANTS.API_BASIC_MATERIAL, BasicMaterialController.getMaterial)

export default basicMaterialRouter;