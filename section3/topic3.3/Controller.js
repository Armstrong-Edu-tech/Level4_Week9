import User from '../models/user.js'
export const getAllUsers = async (req, res) => {
    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};
export const addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



