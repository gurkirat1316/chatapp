import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const signup = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        await user.save();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Server Error"
        });
    }
};