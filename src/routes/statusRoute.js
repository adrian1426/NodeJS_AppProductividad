const express = require('express');

const router = express.Router();
router.get('/status', (req,res)=>{
    return res.send('App Listening and up');
});

module.exports = router;