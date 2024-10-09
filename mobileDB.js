const dotenv = require("dotenv");
const Mobile = require("./Models/mobile.models");
const ProductsJson = require("./products.json");
const mongoose = require("mongoose");

const start = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/Mobile-App-APIs`, {});

        await Mobile.deleteMany({});

        // Create new records
        await Mobile.create(ProductsJson);

        console.log("Success: Data created");
    } catch (error) {
        console.log("Failed", error);
    }
};

start();
