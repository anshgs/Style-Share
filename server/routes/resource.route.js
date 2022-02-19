import express from 'express';

const router = express.Router();


//will define functionality based on interface with db and db functionality with the user
router.get('/placehodler', (req, res) => {
    console.log("placeholder");
    res.send("placeholder");
});

export default router;