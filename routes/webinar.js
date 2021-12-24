const webinarController = require("../controllers/webinarController");

const express = require("express");
    // express router
const router = express.Router();

// Route get All Products
router.get("/get", webinarController.getWebinar);
// Route get single Product
router.get('/get/:id', webinarController.getWebinarById);
// Route CREATE Product
router.post('/post', webinarController.saveWebinar);
// Route UPDATE Product
router.patch('/put/:id', webinarController.updateWebinar);
// Route DELETE Product
router.delete('/delete/:id', webinarController.deleteWebinar);

// export router
module.exports = router;


