
const Mobile = require("../Models/mobile.models")

const getAllProducts = async (req, res) => {

    const myData = await Mobile.find(req.query);
    // const requestBody = req.body
    // console.log("Test", requestBody)

    res.status(200).json({ myData })
    // res.status(200).json({ msg: requestBody.test });
    // res.status(200).json({ msg: "I am getting Products" });
}
const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getting All new productsTesting" });
}
module.exports = { getAllProducts, getAllProductsTesting }