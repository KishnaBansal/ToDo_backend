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

exports.login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await UserServices.checkUser(email);
        if(!user) {
            throw new Error("User is not registered");
        }
        const isMatch = await user.comparePassword(password);
        if(isMatch === false) {
            throw new Error("Incorrect password");
        }
        let tokenData = {_id: user._id, email: user.email};
        const token = await UserServices.generateToken(tokenData,"secretKey",'1h');
        res.status(200).json({status: true, token: token});
    }
    catch (err) {
        throw err;
    }
}