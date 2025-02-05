import MesRouteNodeRepository from "../../repositories/mes/mes_route_node.js";
import ReturnResponseUtil from "../../utils/return-response-util.js";

class MesRouteNodeController {

    /**
     * 
     */

    static async get_mes_route_node(req, res) {

        try {

            const result = await MesRouteNodeRepository.get_mes_route_node();

            if (result.length != 0) {
                return ReturnResponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    'Successfully',
                    result
                );
            } else {
                return ReturnResponseUtil.returnResponse(
                    res, 
                    404,
                    false,
                    'Not found',
                    result
                );
            }
            
        } catch (error) {
            console.log(error);
            return ReturnResponseUtil.returnResponse(
                res,
                500, 
                false,
                'Server Error',
                error
            );
        }

    }

}

export default MesRouteNodeController;