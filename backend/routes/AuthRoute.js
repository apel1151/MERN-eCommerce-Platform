import express from 'express';
import { AuthController } from '../Controllers/AuthController.js';

const router = express.Router()

router.post("/signup", AuthController)

export default router;