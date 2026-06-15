import CaterersService from "../service/caterer_service.js";
export default class CatererController {
    static getAllCatererController = async (req, res) => {
        try {
            const data = await CaterersService.getAllCaterers();
            return res.status(200).json({
                success: true,
                data,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    static getCatererByIdController = async (req, res) => {
        try {
            const data = await CaterersService.getCaterersByOd(req.params.id);
            return res.status(200).json({
                sucess: true,
                data,
            });
        }
        catch (error) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
    };
    static createCatererController = async (req, res) => {
        try {
            const data = await CaterersService.createCatererService(req.body);
            return res.status(201).json({
                success: true,
                data,
            });
        }
        catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    };
}
