import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/register', (req, res) => {
    console.log("register");
    res.send("register");
});
router.get('/login', (req, res) => {
    console.log("login");
    res.send("login");   
});

export default router;