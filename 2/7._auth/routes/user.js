const router = require("express").Router();
const User = require("../models/User");
const Electives = require("../models/Electives");


router.get("/users", async (req, res) =>{

    const allUsersWithElectives = await User.query().select("username").withGraphFetched("electives");


    res.send({ Response : allUsersWithElectives})
})

router.post("/user", async (req, res) =>{




    /*
    const electives = await Electives.query();
    const { username } = req.body;


    
    try {
    User.query().select("username").where("username", username).limit(1).then(async (foundUser) => {
      if (foundUser.length > 0) {


        const user = await User.query()
        .select("id")
        .where("username", username)
        .whereExists(
            Electives.query()
            .select(1)
            .whereColumn('users.id', 'electives.id')
        )

        const electivesUser = await Electives.query().select().where({ "userId": user[0].id});

        console.log(electivesUser)

        return res.send({ Response : electives})

      } else {

        return res.status(400).send({ response: "User does not exist!" });

    }

    });
} catch (error) {
  return res.status(500).send({ response: "Something went wrong with the database" });
}
*/

})



module.exports = router;
