import BasicMaterialRepository from "../repositories/basic-material-repository.js";
import ReturnResponseUtil from "../utils/return-response-util.js";

class BasicMaterialController {

    static async getMaterial(req, res) {
        try {

            const data = await BasicMaterialRepository.getMaterial();

            return ReturnResponseUtil.returnResponse(res, 200, true, 'Result', data);
            
        } catch (error) {
            console.log(error);
            return ReturnResponseUtil.returnResponse(res, 500, false, 'Server Error', error)
        }
    }

}

export default BasicMaterialController;