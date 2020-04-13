
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Cars').insert([
        {VIN: 'abc123456789', Make:'Ford', Model: 'Mustang', Mileage: '210,000', TransmissionType: 'Manual', Title: 'Clean' },
        {VIN: 'def123456789', Make:'Dodge', Model: 'Charger', Mileage: '75,000', TransmissionType: 'Manual', Title: 'Clean' },
        {VIN: 'ghi123456789', Make:'Ford', Model: 'Escort', Mileage: '250,000', TransmissionType: 'auto', Title: 'Salvaged' },
        {VIN: 'jkl123456789', Make:'Dodge', Model: 'Grand Caravan', Mileage: '115,000', TransmissionType: 'auto', Title: '' },
        {VIN: 'mno123456789', Make:'Honda', Model: 'Accord', Mileage: '176,000', TransmissionType: 'auto', Title: 'Clean' },

      ]);
    });
};
