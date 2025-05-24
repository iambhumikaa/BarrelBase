import express from 'express';
import { renderHome, renderLogin } from '../controllers/userController.js';

const router = express.Router();

router.get('/', renderHome);
router.get('/user', renderLogin);

export default router;
