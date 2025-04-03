import express from 'express';
import mes_route_node_router from './mes-route-node.js';
import mes_interface_log_router from './mes-interface-log.js';

const router = express.Router();

router.use("/", mes_route_node_router);
router.use("/", mes_interface_log_router)

export default router;