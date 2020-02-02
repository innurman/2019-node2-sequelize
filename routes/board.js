var express = require('express');
var router = express.Router();
// https://www.npmjs.com/package/date-time
// npm i date-time
var datetime = require('date-time'); 
var {Board} = require('../models');


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// http://127.0.0.1:3001/board
router.get('/', async (req, res, next) => {
  const data = await Board.findAll({
    order: [["id", "desc"]]
  });
  // res.json(data);
  // -> [{"id":2,"title":"테스트","writer":"작성자","createdAt":"2020-02-02T05:44:01.000Z","updatedAt":"2020-02-02T05:44:01.000Z"},{"id":1,"title":"테스트","writer":"작성자","createdAt":"2020-02-02T05:43:50.000Z","updatedAt":"2020-02-02T05:43:50.000Z"}]

  // data.map(v => {
  //   v.createAt = datetime({date: v.createdAt});
  //   return v;
  // });

  let vals = {};
  const resultData = data.map((v) => { // data[0]
    v.createAt = datetime(v.createAt);
    // -> 2020-01-19 15:11:59
    v.wdate = datetime(v.createAt);
    return v;
  });
  vals.lists = resultData;
  res.render("board-list.pug", vals);
});

// http://127.0.0.1:3001/board/write
router.get('/write', (req, res) => {
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
