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
// findAll()'s "raw: true" option
//   https://sequelize.org/master/manual/model-querying-finders.html
//   By default, the results of all finder methods are instances of the model class 
//   (as opposed to being just plain JavaScript objects). 
//   This means that after the database returns the results, 
//   Sequelize automatically wraps everything in proper instance objects. 
//   In a few cases, when there are too many results, this wrapping can be inefficient. 
//   To disable this wrapping and receive a plain response instead, 
//   pass { raw: true } as an option to the finder method.
router.get(['/', '/:id'], async (req, res, next) => {
  let data;
  try {
    if (req.params.id) {
      if (req.params.id == "write") {
      }
      else {
        data = await Board.findOne({
          where: {
            id: req.params.id,
          },
          raw: true
        });
        res.json(data);
      }
    }
    else {
      data = await Board.findAll({
        order: [["id", "desc"]],
        raw: true
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
    }
  }
  catch(err) {
    next(err);
  }
});

// http://127.0.0.1:3001/board/write
// router.get('/write', (req, res) => {
//   res.render('board-write.pug');
// });

router.get('/delete/:id', async (req, res) => {
  const data = await Board.destroy({
    where: {
      id: req.params.id
    }
  });
  //res.json(data);
  res.redirect("/board");
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

// RESTFUL method-overriding
// _method() -> put()
router.put('update', (req, res) => {
  res.send("왔어요~");
});


//////////////////////////////////////////////////////////////////////
// TODO
//////////////////////////////////////////////////////////////////////
// 1) onChg() -> async/await Promise 모델로
// 2) router.put('update') : Promise 모델 & sequelize API

module.exports = router;
