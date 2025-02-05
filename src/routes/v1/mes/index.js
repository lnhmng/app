import express from 'express';
import mes_route_node_router from './mes-route-node.js';

const router = express.Router();

router.use("/", mes_route_node_router);

export default router;