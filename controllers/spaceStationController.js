const SpaceStation = require('../models/spaceStationModel');

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

module.exports = {listSpaceStations};