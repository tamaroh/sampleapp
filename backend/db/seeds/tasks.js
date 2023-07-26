/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  if (knex("tasks").isExist) {
    await knex("tasks").del();
  }
  await knex("tasks").insert([
    {
      name: "基板の設計",
      category_id: 3,
      status_id: 1,
      description: "基板の設計を行う",
      created_at: "2023-06-01",
    },
    {
      name: "技術書を読む",
      category_id: 1,
      status_id: 2,
      description: "プロダクトマネージメント",
      created_at: "2021-10-02",
    },
    {
      name: "Ark",
      category_id: 4,
      status_id: 1,
      description: "Arkをプレイする",
      created_at: "2021-10-03",
    },
  ]);
};
