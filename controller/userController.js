const UserServices = require('../services/userServices');

exports.register = async (req,res,next) => {
    try {
        console.log(req.body);
        const {email,password} = req.body;
        const successRes = await UserServices.registerUser(email, password);
        res.json({status: true, message: "User registered successfully"});
    }
    catch (err) {
        throw err;
    }
}