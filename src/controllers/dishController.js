const Dish = require('../models/dishModel');

// 1. GET ALL: Show the full menu
const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find(); // .find()means "Get Everything"
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

