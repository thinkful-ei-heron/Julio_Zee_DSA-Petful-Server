const PetsService = {
  getAllPets(knex) {
    return knex.select('*').from('pets');
  },
  getById(knex, id) {
    return knex
      .from('pets')
      .select('*')
      .where({ id })
      .first();
  },
  insertPet(knex, newPet) {
    return knex
      .insert(newPet)
      .into('pets')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deletePet(knex, id) {
    return knex('pets')
      .where({ id })
      .delete();
  },
  updatePet(knex, id, newPetFields) {
    return knex('pets')
      .where({ id })
      .update(newPetFields);
  },
};

module.exports = PetsService;
