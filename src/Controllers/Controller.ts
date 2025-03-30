import { Request, Response } from "express";



// Get All News Articles
export const getNews = (req: Request, res: Response) => {
  const data = req.body
  console.log("Hi I got data");
  
    console.log(data);
    
  res.status(200).send("Hi there");
};
