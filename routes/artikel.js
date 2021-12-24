const artikelController = require("../controllers/artikelcontroller");

const express = require("express");
    // express router
const router = express.Router();

// Route get All Products
router.get("/get", artikelController.getArtikel);
// Route get single Product
router.get('/get/:id', artikelController.getArtikelById);
// Route CREATE Product
router.post('/post', artikelController.saveArtikel);
// Route UPDATE Product
router.patch('/put/:id', artikelController.updateArtikel);
// Route DELETE Product
router.delete('/delete/:id', artikelController.deleteArtikel);

// export router
module.exports = router;


