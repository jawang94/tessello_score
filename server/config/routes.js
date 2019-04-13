var controllers = require("../controllers/userController.js");

module.exports = function(app) {
  app.get("/user", function(req, res) {
    controllers.userIndex(req, res);
  });
  app.get("/user/:id", function(req, res) {
    controllers.userShow(req, res);
  });
  app.post("/user", function(req, res) {
    controllers.userNew(req, res);
  });
  app.put("/user/:id", function(req, res) {
    controllers.userUpdate(req, res);
  });
  app.delete("/user/delete/:id", function(req, res) {
    controllers.userDelete(req, res);
  });
  app.post("/login", function(req, res) {
    controllers.userLogin(req, res);
  });
  app.get("/login", function(req, res) {
    controllers.getLogin(req, res);
  });
  app.get("/logout", function(req, res) {
    controllers.logout(req, res);
  });
  app.get("/score/:id", function(req, res) {
    controllers.showScore(req, res);
  });
  app.put("/score/:id", function(req, res) {
    controllers.updateScore(req, res);
  });
};
