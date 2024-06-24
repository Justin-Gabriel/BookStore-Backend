import express from 'express';
import bookRoute from './bookRoutes.js';

const router = express.Router();

const defaultRoutes = [
    {
        path: '/book',
        route: bookRoute,
    }
];

defaultRoutes.forEach(route => {
    router.use(route.path, route.route)
});

export default router;