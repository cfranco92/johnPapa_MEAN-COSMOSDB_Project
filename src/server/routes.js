const express = require('express');
const router = express.Router();

const heroService = require('./services/hero.service');

router.get('/heroes', (req, res) => {
    heroService.getHeroes(req, res);
    // res.send(200, [
    //     { "id": 10, "name": "Starlord", "sayinh": "oh yeah" }
    // ])
});

module.exports = router;