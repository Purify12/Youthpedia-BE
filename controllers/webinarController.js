// function get All Products
const Webinar = require('../models/webinar.js')
exports.getWebinar = async (req, res) => {
    try {
        const webinars = await Webinar.find();
        res.json(webinars);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

// function get single Product
exports.getWebinarById = async (req, res) => {
    try {
        const webinars = await Webinar.findById(req.params.id);
        res.json(webinars);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

// function Create Product
exports.saveWebinar = async (req, res) => {
    const webinars = new Webinar(req.body);
    try {
        const savedWebinar = await webinars.save();
        res.status(201).json(savedWebinar);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Update Product
exports.updateWebinar = async (req, res) => {
    const cekId = await Webinar.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedWebinar = await Webinar.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedWebinar);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Delete Product
exports.deleteWebinar = async (req, res) => {
    const cekId = await Webinar.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedWebinar = await Webinar.deleteOne({_id: req.params.id});
        res.status(200).json(deletedWebinar);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}