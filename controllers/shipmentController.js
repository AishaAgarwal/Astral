const Shipment = require('../models/shipmentModel');
const SpaceStation = require('../models/spaceStationModel');
const Goods = require('../models/goodsModel');
const ShipmentIssue = require('../models/shipmentIssuesModel');

// create a shipment order 
const createShipmentOrder = async(req,res) => {
    const userId = req.user.id;
    const {sourceStationId, destinationStationId, goodsId, quantity, shipmentDetails} = req.body;

    if(!sourceStationId || !destinationStationId || !goodsId || !quantity || !shipmentDetails){
        return res.status(400).json({
            message : 'invalid data'
        });
    }
    try{
        const sourceStation = await SpaceStation.findById(sourceStationId);
        const destinationStation = await SpaceStation.findById(destinationStationId);
        const goods = await Goods.findById(goodsId);

        if(!sourceStation || !destinationStation || !goods){
            return res.status(404).json({
                message : 'space station or goods not found'
            });
        }

        const shipment = new Shipment({
            userId,
            sourceStationId,
            destinationStationId,
            goodsId,
            quantity,
            shipmentDetails
        });

        await shipment.save();

        return res.status(201).json({
            shipmentId: shipment._id,
            status : shipment.status,
            message : 'shipment order created successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            message : 'server error'
        });
    }
};

// track shipment by shipment id 
const trackShipment = async(req,res) => {
    const {trackingId} = req.params;

    try{
        const shipment = await Shipment.findById(trackingId);

        if(!shipment){
            return res.status(400).json({
                message : 'Tracking ID not found'
            });
        }

        res.status(200).json({
            trackingId : shipment._id,
            status : shipment.status,
            currentLocation : shipment.shipmentDetails,
            estimatedDelivery : "not available"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

// report shipment issue
const reportShipmentIssue = async(req,res) => {
    const {shipmentId, issueDescription, reportedBy} = req.body;

    if(!shipmentId || !issueDescription || !reportedBy){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }

    try{
        const shipment = await Shipment.findById(shipmentId);
        if(!shipment){
            return res.status(404).json({
                message : 'shipment not found'
            });
        }

        const shipmentIssue = new ShipmentIssue({
            shipmentId,
            issueDescription,
            reportedBy
        });

        await shipmentIssue.save();

        return res.status(201).json({
            message : 'issue reported successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {createShipmentOrder, trackShipment, reportShipmentIssue};