import express from 'express';
import {CONSTANTS} from '../../utils/constants.js';

import basic_sys_APIs from './basic_sys/index.js';
import mes_APIs from './mes/mes-route-node.js';

const router = express.Router();

router.use(CONSTANTS.API_BASIC_SYS, basic_sys_APIs);
router.use(CONSTANTS.API_MES, mes_APIs);

export default router