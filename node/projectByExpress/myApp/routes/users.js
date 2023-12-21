var express = require('express');
var router = express.Router();
var UserModel = require('../db/models/userModel');
const userModel = require('../db/models/userModel');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/addUser', (req, res, next) => {
  let { username, pwd } = req.body
  const user = new UserModel({
    username,
    pwd
  })
  user.save()
    .then(() => {
      res.status(201).json({
        msg: '新增成功',
        user
      })
    })
    .catch(err => {
      res.status(400).json({
        error: err.message,
      });
    })
})
router.get('/findUserList', (req, res, next) => {
  UserModel.find().
    then((users) => {
      res.status(200).json({
        list: users
      })
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message,
      });
    });
})

router.delete('/deleteUserById', (req, res, next) => {
  console.log(req.body.id)
  userModel.findById(req.body.id)
    .then(result => {
      if (!result) {
        return res.status(404).json({
          msg: 'data not found'
        })
      }
      result.deleteOne()
        .then(() => {
          res.status(200).json({
            msg: '删除成功'
          })
        })
        .catch((err) => {
          res.status(400).json({
            error: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message,
      });
    });
})
module.exports = router;
