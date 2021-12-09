const User = require("../models/users");

const createUser = async (req, res) => {
  try {
    const user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    let savedUser = await user.save();
    res.status(200).send({
      error: 0,
      message: "user saved successfully",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).send({
      error: 1,
      messsage: error.message || error,
    });
  }
};

const userDetails = async (req, res) => {
  try {
    let userData = await User.find({});
    if (userData.length > 0) {
      res.status(200).send({
        error: 0,
        message: "found user data",
        data: userData,
      });
    }else{
        res.status(404).send({
            error:1,
            message: "nothing to show",
        })
    }
  } catch (error) {
    res.status(500).send({
      error: 1,
      messsage: error,
    });
  }
};

module.exports = {
  createUser,
  userDetails,
};
