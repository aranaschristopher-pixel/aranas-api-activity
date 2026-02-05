const express = require('express');
const router = express.Router();

// Import the controller
const {
    getAllDishes,
    createDish,
    getDishByID,
    updateDish,
    deleteDish,
} = require ('../controllers/dishController');

// 1. If user goes to GET / (Show menu)
router.get('/dishes', getAllDishes);

// 2. If user sends POST / (New Order)
router.post('/dishes', createDish);

// 3. If user goes to GET /:id (Ask for specific meal)
router.get('/dishes/:id', getDishByID);

// 4. If user sends PUT /:id (Change meal)
router.put('dishes/:id', updateDish);

// 5. If user sends DELETE /:id (Cancel meal)
router.delete('dishes/id', deleteDish);

module.exports = router;