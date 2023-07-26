/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  if (knex("statuses").isExist) {
    await knex("statuses").del();
  }
  await knex("statuses").insert([
    { name: "not started" },
    { name: "in progress" },
    { name: "done" },
    { name: "dropped" },
  ]);
};
