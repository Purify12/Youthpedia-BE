const mongoose = require("mongoose");
const { Schema } = mongoose;

const WebinarSchema = new Schema({
    judul: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    },
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
    }
});

const Webinar = mongoose.model("webinar", WebinarSchema);
module.exports = Webinar;
