import User from "../Models/UserModel.js";

export const AuthController = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({username, email, password});
    console.log(newUser)
    try {
        await newUser.save();
        res.status(201).json({message: "User created succesfully"});

    } catch (error) {
        res.status(400).json(error.message);
    }
}