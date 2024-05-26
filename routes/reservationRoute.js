import express from 'express';
import { sendReservation } from '../controller/reservation.js'

const router = express.Router(); //created instance of router

router.post('/send',sendReservation);

export default router;