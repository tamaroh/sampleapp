/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  if (knex("categories").isExist) {
    await knex("categories").del();
  }
  await knex("categories").insert([
    { name: "book" },
    { name: "movie" },
    { name: "keyboard" },
    { name: "game" },
  ]);
};
