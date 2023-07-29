import express from "express";
import { getAugments, refreshAugments } from "../controllers/augmentsController";

const router = express.Router();
router.get('/', getAugments);
router.post('/', refreshAugments)

module.exports = router;