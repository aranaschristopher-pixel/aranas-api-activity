const express = require('express');
const router = express.Router();
// Import controllers here...
const { protect, authorize } = require('../middleware/authMiddleware');

// Import the controller
const {
    getAllDishes,
    createDish,
    getDishByID,
    updateDish,
    deleteDish,
} = require ('../controllers/dishController');

const {
    getAllChefs,
    createChef,
    getChefByID,
    updateChef,
    deleteChef,
} = require ('../controllers/chefController');


// ANYONE can get dishes
router.get('/', getDishes);

// ONLY Admins and Managers can create dishes
router.post('/', protect, authorize('admin', 'manager'), createDish);

module.exports = router;
