import express from 'express';
import {show,poste,updu,dele} from '../controller/controller.js';
const router = express.Router();

router.get('/',show);
router.post('/add',poste);
router.put('/update/:id',updu);
router.delete('/delete/:id',dele);
export default router;