import express from "express";
// import mongoose from "mongoose";
// import Product from "../models/product.js";
import { deleteProducts, getProducts, postProducts, putProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProducts);
router.put("/:id", putProducts);
router.delete("/:id", deleteProducts);

//console.log(process.env.MONGO_URI);

export default router;