import express from 'express';
import authRoutes from '../routes/auth.route.js';
import resourceRoutes from '../routes/resource.route.js';

const router = express.Router();

router.use('/', authRoutes);
router.use('/', resourceRoutes);

export default router;