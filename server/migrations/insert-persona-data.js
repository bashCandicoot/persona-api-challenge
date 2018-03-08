const personaData = [
  {
    id: '827ccc50-3991-490c-bc4b-2b77a923c5a5',
    job: 'Solicitor',
    company: 'Smith, Haynes and Hooper',
    ssn: 'ZZ376803T',
    residence: '1 Bruce alley\nNew Justin\nL072 TE',
    // current_location: [-66.491849, -69.512524],
    blood_group: 'AB+',
    website: ['https: //www.holmes-saunders.com/',
      'http://foster-ford.com/',
      'https://www.farrell-evans.com/',
      'http://white-kelly.net/',
    ],
    username: 'mauriceharris',
    name: 'Dr. Mohamed Newton',
    sex: 'F',
    address: '09 Knight parkways\nWest Yvonneshire\nHD23 5NJ',
    mail: 'jshort@hotmail.com',
    birthdate: '1989-07-07',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Personas', personaData, {}),
  down: queryInterface => queryInterface.bulkDelete('Personas', null, {}),
};
