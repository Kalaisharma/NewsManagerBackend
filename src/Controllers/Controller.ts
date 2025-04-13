import { Request, Response } from "express";
import connectDB from "../Database/Mongoose";
import mongoose from "mongoose";
import {News} from "../Database/Mongoose";

export const getNews = async (req: Request, res: Response) => {
    try {
        await connectDB(); // Establish connection
        const { fullName, address, email, mobileNumber, feedback, country, state } = req.body;
        console.log(fullName, address, email, mobileNumber, feedback, country, state);
        
        const newArticle = new News({ fullName, address, email, mobileNumber, feedback, country, state });
      const result = await newArticle.save();
      console.log("New article saved:", result);
      
        res.status(201).json({ message: "News article added successfully", article: newArticle });
    } catch (error) {
        console.error("Error adding news:", error);
        res.status(500).json({ message: "Internal Server Error" });
    } 
};