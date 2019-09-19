
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('areacodes').insert([
        {id: 1, areacode: '757', city: 'Va. Beach', state: 'Virginia'},
        {id: 2, areacode: '214', city: 'Dallas', state: 'Texas'},
        {id: 3, areacode: '202', city: 'DC', state: 'DC'},
      ]);
};


