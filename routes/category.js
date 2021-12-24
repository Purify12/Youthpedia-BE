const categoryController = require("../controllers/categoryController");

const express = require("express");
    // express router
const router = express.Router();

// Route get All Products
router.get("/get", categoryController.getCategory);
// Route get single Product
router.get('/get/:id', categoryController.getCategoryById);
// Route CREATE Product
router.post('/post', categoryController.saveCategory);
// Route UPDATE Product
router.patch('/put/:id', categoryController.updateCategory);
// Route DELETE Product
router.delete('/delete/:id', categoryController.deleteCategory);

// export router
module.exports = router;