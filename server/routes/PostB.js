const router = require("express").Router();
var Item = require("../models/blogs");

router.get("/", function (req, res) {
  Item.selectAll(function (err, data) {
    if (err) {
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Item.create(req.body, (err, success) => {
    if (err) {
      console.error(err);
    } else {
      res.send(success);
    }
  });
});

router.delete("/", function (req, res) {
  let id = req.params.id;
  console.log(id);
  Item.findOneAndDelete({ id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("deleted");
    }
  });
});

module.exports = router;
