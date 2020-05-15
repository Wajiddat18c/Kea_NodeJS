exports.seed = function (knex) {
  return knex("users").insert([   //password
    { username: "admin", password: "$2b$12$daEdLPW7Zja99B9rU5PW1e40oPkOrmJAdgESJWfFG0QkCfhpbkoC6" },
    { username: "wajid", password: "$2b$12$$2b$12$rTUYmXfL/ohQGnfX5qxFTuXQZljBTb4vtYJoqs/qC/sJ9OWTZbBFS" },
  ]);
};
