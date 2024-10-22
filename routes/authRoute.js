import express from 'express';
import {registerController, loginController, testcontroller, forgotPasswordContoller} from '../controllers/authController.js';
import {requireSignIn, isAdmin} from '../middlewares/authMiddleware.js'

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN
router.post('/login', loginController);

//Test Route
router.get('/test', requireSignIn, isAdmin , testcontroller);

//Forgot Password
router.post('/forgot-password', forgotPasswordContoller);

//Protected Route auth

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;