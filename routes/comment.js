const commentController = require("../controllers/commentController");

const express = require("express");
    // express router
const router = express.Router();

// Route get All Products
router.get("/get", commentController.getComment);
// Route get single Product
router.get('/get/:id', commentController.getCommentById);
// Route CREATE Product
router.post('/post', commentController.saveComment);
// Route UPDATE Product
router.patch('/put/:id', commentController.updatedComment);
// Route DELETE Product
router.delete('/delete/:id', commentController.deleteComment);

// export router
module.exports = router;