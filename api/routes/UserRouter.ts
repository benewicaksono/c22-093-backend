import { Router } from 'express';

import userController from '../controllers/UserController';

const router = Router();


router.get("/users", userController.select);
router.get("/users/:email", userController.select);
router.post("/users", userController.create);

router.post("/session", userController.login);
router.get("/session/:access_token", userController.selectFromToken);


export default router;