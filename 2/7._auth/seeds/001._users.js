exports.seed = function (knex) {
  return knex("users").insert([
    { username: "admin", password: "root" },
    { username: "wajid", password: "123" },
  ]);
};
