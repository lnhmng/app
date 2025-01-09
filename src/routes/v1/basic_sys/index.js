import express from 'express'
import basicMaterial from './basic-material-route.js';

const router = express.Router()

router.use("/", basicMaterial)

export default router