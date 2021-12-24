const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArtikelSchema = new Schema({
    countries: {
        type: String,
        enum: [
            "Indonesia", 
            "Malaysia", 
            "Singapura", 
            "Brunei",
            "Kamboja", 
            "Vietnam", 
            "Thailand", 
            "Laos", 
            "Myanmar", 
            "Filipina"
        ],
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
      },
    title: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,    
    },
    picture: {
        type: String,
        required: true,
    },
    source: {
        type: String,
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "comment"
      },
    trend:{
        type:Boolean,
        required: true,
    },
    recomended:{
        type:Boolean,
        required: true,
    }
});

const Artikel = mongoose.model("artikel", ArtikelSchema);
module.exports = Artikel;
