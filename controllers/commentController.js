// function get All Products
const Comment = require('../models/comment.js')
exports.getComment = async (req, res) => {
    try {
        const comment = await Comment.find().populate([
            "user"
        ]);
        res.json(comment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }   
}

// function get single Product
exports.getCommentById = async (req, res) => {
    try {
        const comment = await (await Comment.findById(req.params.id)).populate([
            "user"
        ]);
        res.json(comment);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

// function Create Product
exports.saveComment = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Update Product
exports.updatedComment = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedComment = await Comment.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Delete Product
exports.deleteComment = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deleteComment = await Comment.deleteOne({_id: req.params.id});
        res.status(200).json(deleteComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}