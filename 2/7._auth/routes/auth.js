const router = require("express").Router();
const User = require("../models/User");

router.get("/logout", (req, res) => {
  return res.status(501).send({ Response: "OK, LOGOUT WORKING!!" });
});

router.post("/signup", (req, res) => {
  //sanitize the input (ORM does that for us)
  // User.query().select().then(users => {
  //     return res.status(501).send({Response: users})

  const { username, password } = req.body;

  if (username && password) {
    // password requirements
    if (password.length < 8) {
      return res
        .status(400)
        .send({ response: "Password must be atleast 8 char long" });
    } else {
      try {
        User.query()
          .select("username")
          .where("username", username)
          .limit(1)
          .then(async (foundUser) => {
            if (foundUser.length > 0) {
              return res.status(400).send({ response: "User already exists" });
            } else {
              const newUser = await User.query().insert({
                username: username,
                password: password
              });
              return res.send({ response: "User added", username});

            }
          });
      } catch (error) {
        return res
          .status(500)
          .send({ response: "Something went wrong with the database" });
      }
    }
  } else {
    return res
      .status(404)
      .send({ response: "Missing fields: username, password" });
  }
});

//   return res.send({ Response: "OK" });
// });

router.post("/login", (req, res) => {
  return res.status(501).send({ Response: "OK, LOGIN WORKING!!" });
});

module.exports = router;
