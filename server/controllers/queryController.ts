import { Request, Response } from "express";
import Query from "../models/Query";

export const createQuery = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body;

    const newQuery = new Query({
      name,
      email,
      phone,
      message,
    });

    await newQuery.save();

    res.status(201).json(newQuery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create query", error });
  }
};

export const getAllQueries = async (req: Request, res: Response) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch queries", error });
  }
};

export const updateQueryStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const query = await Query.findByIdAndUpdate(id, { status }, { new: true });

    if (!query) {
      return res.status(404).json({ message: "Query not found" });
    }

    res.json(query);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update query status", error });
  }
};

export const respondToQuery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    const query = await Query.findByIdAndUpdate(
      id,
      {
        response,
        status: "resolved",
      },
      { new: true },
    );

    if (!query) {
      return res.status(404).json({ message: "Query not found" });
    }

    res.json(query);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to respond to query", error });
  }
};
