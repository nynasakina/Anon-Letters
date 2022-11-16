const router = require("express").Router();
const User = require("../models/Users");
const Post = require("../models/Posts");
const bcrypt = require("bcrypt");

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser + "User changed");
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(500).json("You can only update your own account");
  }
});

// // GET USER
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const { password, ...others } = user._doc;
// res.status(200).json(user)
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been removed");
      } catch (err) {
        res.status(500).json(err.message);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(500).json("You can only update your own account");
  }
});
module.exports = router;
