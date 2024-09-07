const SpaceStation = require('../models/spaceStationModel');
const Inventory = require('../models/inventoryModel');

const listSpaceStations = async(req,res) => {
    try{
        const spaceStations = await SpaceStation.find();

        const response = spaceStations.map(station => ({
            id : station._id.toString(),
            name : station.name,
            location : station.location,
            status : station.status
        }));

        res.status(200).json(response);
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

const getSpaceStationDetails = async(req,res) => {
    const {id} = req.params;
    try{
        const spaceStation = await SpaceStation.findById(id);
        if(!spaceStation){
            return res.status(404).json({
                message : 'space station not found'
            });
        }
        const inventory = await Inventory.find({
            stationId: id
        });

        const inventoryList = inventory.map(item=> ({
            goodsId: item.goodsId.toString(),
            stockLevel : item.stockLevel
        }));

        res.status(200).json({
            id: spaceStation._id.toString(),
            name : spaceStation.name,
            location : spaceStation.location,
            status : spaceStation.status,
            inventory : inventoryList
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {listSpaceStations, getSpaceStationDetails};