import express from 'express';
import { CONSTANTS } from '../../../utils/constants.js';

import MesRouteNodeController from '../../../controllers/mes/mes-route-node.js';

const mes_route_node_router = express.Router();

mes_route_node_router.get(
    CONSTANTS.API_MES_ROUTE_NODE,
    MesRouteNodeController.get_mes_route_node
)

export default mes_route_node_router;