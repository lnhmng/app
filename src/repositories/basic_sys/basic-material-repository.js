import Basic_Material from "../../models/basic_sys/basic-material-model.js";

class BasicMaterialRepository {

    static async getMaterial() {
        try {

            const data = await Basic_Material.findAll({
                limit: 100, 
            });

            return data || [];
            
        } catch (error) {
            throw error;
        }
    }

}

export default BasicMaterialRepository;