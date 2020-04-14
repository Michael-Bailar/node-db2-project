
exports.seed = function (knex, promise) {

return knex('cars').del()
  .then(function () {
    return knex('cars').insert([
      { id: 1, VIN: 'testvin1', make: 'ford', model: 'focus', mileage: '111', type: 'salvage' },
      { id: 2, VIN: 'testvin2', make: 'ford', model: 'explorer', mileage: '333', type: 'sale' },
      { id: 3, VIN: 'testvin3', make: 'hyundai', model: 'accent', mileage: '222', type: 'salvage' }
    ])
  }) 
};

