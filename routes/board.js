var express = require('express');
var router = express.Router();
var {Board} = require('../models');


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// http://127.0.0.1:3001/board/write
router.get('/', async (req, res, next) => {
  const data = await Board.findAll();
  res.json(data);
  res.render('board-list.pug');
});

router.get('/write',  (req, res, next) => {
  res.render('board-write.pug');
});

// http://127.0.0.1:3001/board/wr
router.post('/wr', async (req, res, next) => {
  const data = await Board.create({
    title: req.body.title,
    comment: req.body.comment,
    writer: req.body.writer
  });
  res.redirect("/board");
});

module.exports = router;
