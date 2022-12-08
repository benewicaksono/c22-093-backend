import { Request, Response } from 'express';
import User from '../models/UserSchema';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import bcryptConfig from '../config/bcrypt';
import connectMongo from '../db/ConnectMongo';

const userController = {
    create: async (req: Request, res: Response) => {
        await connectMongo('users');

        try {
            const { name, email, isAdmin, password: passwordBody } = req.body;

            if (!name || !email || !passwordBody) return res.status(400).json({ message: "Missing data" });

            const isUserExists = await User.findOne({ email }).exec();

            if (isUserExists) return res.status(401).json({ message: "User Already Exists" })

            const password = await bcrypt.hash(passwordBody, bcryptConfig.salt);
            const access_token = crypto.randomBytes(30).toString("hex");

            const newUser = await new User({
                name,
                email,
                password,
                isAdmin,
                access_token
            }).save();

            return res.status(201).json(newUser);

        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },

    login: async (req: Request, res: Response) => {
        await connectMongo('users');

        try {
            const { email, password } = req.body;

            if (!email || !password) return res.status(400).json({ message: "Missing Data" });

            const user = await User.findOne({ email }).exec();

            if (!user) return res.status(401).json({ message: "Email or Password is Wrong!" })

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) return res.status(401).json({ message: "Email or Password is Wrong!" })

            return res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                access_token: user.access_token,
            });

        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    },

    select: async (req: Request, res: Response) => {
        await connectMongo('users');
        
        try {
            const { email: email } = req.params;
            const noSelect = [
                "-password",
                "-access_token",
            ];
            if (email) {
                const user = await User.findOne({ email }, noSelect).exec();
                return res.status(200).json(user);
            } else {
                const users = await User.find({}, noSelect).exec();
                return res.status(200).json(users);
            }
        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },

    selectFromToken: async (req: Request, res: Response) => {
        await connectMongo('users');
        
        try {
            const { access_token: access_token } = req.params;
            const noSelect = [
                "-password",
            ];
            if (access_token) {
                const user = await User.findOne({ access_token }, noSelect).exec();
                return res.status(200).json(user);
            } else {
                const users = await User.find({}, noSelect).exec();
                return res.status(200).json(users);
            }
        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },
};

export default userController;