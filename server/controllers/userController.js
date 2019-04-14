const mongoose = require("mongoose"),
  User = mongoose.model("User"),
  Score = mongoose.model("Score"),
  bcrypt = require("bcrypt");

module.exports = {
  userIndex: (req, res) => {
    User.find({})
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },

  userShow: (req, res) => {
    User.find({ _id: req.body.id })
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },

  userNew: (req, res) => {
    console.log("Controller check", req.body);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var user = new User({
      username: req.body.username,
      password: hash,
      email: req.body.email
    });
    user
      .save()
      .then(item => {
        console.log("Successful creation");
        res.json({ message: "Success", item });
      })
      .catch(err => {
        console.log("Failed creation");
        res.json({ message: "Failed!", err });
      });
  },

  userLogin: (req, res) => {
    User.find({ username: req.body.username })
      .then(user => {
        console.log(user);
        bcrypt
          .compare(req.body.password, user[0].password)
          .then(data => {
            console.log("data looks like this:", data);
            if (req.session.loginID) {
              res.json({ message: "Success", data: user[0] });
            } else {
              req.session.loginID = user[0]._id;
              res.json({ message: "Success", data: user[0] });
            }
          })
          .catch(err => {
            console.log("Authentication failed");
            res.json({ message: "Error", error: err });
          });
      })
      .catch(err => {
        console.log("Cannot find user");
        res.json({ message: "Error", error: err });
      });
  },

  getLogin: (req, res) => {
    User.find({ _id: req.session.loginID }, function(err, user) {
      if (err) {
        res.redirect("/");
      } else if (user) {
        if (user.length < 1) {
          var temp = null;
          res.json(temp);
        } else {
          res.json(req.session.loginID);
        }
      }
    });
  },

  logout: (req, res) => {
    if (req.session.loginID) {
      req.session.loginID = null;
      res.json(req.session.loginID);
    }
  },

  score: (req, res) => {
    Score.find({ _id: req.params.id });
  }
};
