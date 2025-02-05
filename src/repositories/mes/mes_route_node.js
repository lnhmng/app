import MesRouteNodeModel from "../../models/mes/mes-route-node.js";

class MesRouteNodeRepository {

    /**
     * 
     */

    static async get_mes_route_node() {
        try {
            
            const mes_route_node_data = await MesRouteNodeModel.findAll({
                limit: 100,
            });

            return mes_route_node_data || [];

        } catch (error) {
            throw error;
        }
    }

}

export default MesRouteNodeRepository;