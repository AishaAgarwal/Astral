const SpaceStation = require('../models/spaceStationModel');
const Inventory = require('../models/inventoryModel');
const spaceStationModel = require('../models/spaceStationModel');


const createSpaceStation = async(req,res) => {
    const {name, location, status} = req.body;

    if(!name || !location){
        return res.status(400).json({
            message : 'invalid data request'
        });
    }

    try{
        const newStation = new SpaceStation({
            name,
            location,
            status
        });

        await newStation.save();

        res.status(201).json({
            message: 'space station created successfully'
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

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

const updateInventory = async(req,res) => {
    const {id} = req.params;
    const {goodsId, newStockLevel} = req.body;

    if(!goodsId || !newStockLevel || typeof newStockLevel !== 'number'){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }

    try{
        const spaceStation = await SpaceStation.findById(id);
        if(!spaceStation){
            return res.status(400).json({
                message : 'space station not found'
            });
        }

        let inventoryItem = await Inventory.findOne({
            stationId : id,
            goodsId
        });

        if(!inventoryItem){
            return res.status(404).json({
                message : 'goods not found in inventory'
            });
        }

        inventoryItem.stockLevel = newStockLevel;

        await inventoryItem.save();

        res.status(200).json({
            stationId: id,
            goodsId,
            newStockLevel,
            message : 'inventory updated successfully'
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {listSpaceStations, getSpaceStationDetails, updateInventory, createSpaceStation};