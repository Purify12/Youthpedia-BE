// function get All Products
const Artikel = require('../models/artikel.js')
exports.getArtikel = async (req, res) => {
    try {
        const artikel = await Artikel.find().populate([
            "category",
            "comment"
        ]);
        res.json(artikel);
    } catch (error) {
        res.status(500).json({message: error.message});
    }    
}

// function get single Product
exports.getArtikelById = async (req, res) => {
    try {
        const artikels = await Artikel.findById(req.params.id).populate([
            "category",
            "comment"
        ]);
        res.json(artikels);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

// function Create Product
exports.saveArtikel = async (req, res) => {
    const artikels = new Artikel(req.body);
    try {
        const saveArtikel = await artikels.save();
        res.status(201).json(saveArtikel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Update Product
exports.updateArtikel = async (req, res) => {
    const cekId = await Artikel.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateArtikel = await Artikel.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateArtikel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Delete Product
exports.deleteArtikel = async (req, res) => {
    const cekId = await Artikel.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deleteArtikel = await Artikel.deleteOne({_id: req.params.id});
        res.status(200).json(deleteArtikel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}