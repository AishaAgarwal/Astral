const Inventory = require('../models/inventoryModel');
const SpaceStation = require('../models/spaceStationModel');
const Goods = require('../models/goodsModel');

// Check stock levels
const checkStockLevels = async (req, res) => {
    const { goodsId } = req.params;
    const { stationId } = req.query;

    if (!goodsId || !stationId) {
        return res.status(400).json({
            message: 'Missing or invalid query parameters'
        });
    }

    try {
        const goods = await Goods.findById(goodsId);
        const station = await SpaceStation.findById(stationId);

        if (!goods || !station) {
            return res.status(404).json({
                message: 'Goods or space station not found'
            });
        }

        const inventory = await Inventory.findOne({ goodsId, stationId });

        if (!inventory) {
            return res.status(404).json({
                message: 'Inventory record not found'
            });
        }

        res.status(200).json({
            stationId: inventory.stationId,
            goodsId: inventory.goodsId,
            stockLevel: inventory.stockLevel
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}

// update stock levels 
const updateStockLevels = async(req,res) => {
    const {stationId, goodsId, newStockLevel} = req.body;

    if(!stationId || !goodsId || newStockLevel === undefined || newStockLevel < 0){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }
    try{
        const goods = await Goods.findById(goodsId);
        const station = await SpaceStation.findById(stationId);

        if(!goods || !station){
            return res.status(404).json({
                message : 'space station or goods not found'
            });
        }
        const inventory = await Inventory.findOneAndUpdate(
            {goodsId, stationId},
            {stockLevel : newStockLevel},
            {new: true, upsert: true}
        );

        res.status(200).json({
            stationId: inventory.stationId,
            goodsId : inventory.goodsId,
            newStockLevel : inventory.stockLevel
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = { checkStockLevels , updateStockLevels};
