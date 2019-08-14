'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2018-10-24T17:00:00+03:00'),
        endAt: new Date('2018-10-24T20:00:00+03:00'),
        title: 'SAMPLERADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T17:00:00+03:00'),
        endAt: new Date('2018-10-25T19:00:00+03:00'),
        title: 'Bjanzen Skitsofreniaterapia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T15:00:00+03:00'),
        endAt: new Date('2018-10-24T17:00:00+03:00'),
        title: 'Teehetkiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T22:00:00+03:00'),
        endAt: new Date('2018-10-24T00:00:00+03:00'),
        title: 'Lakastumusradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T09:00:00+03:00'),
        endAt: new Date('2018-10-23T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T09:00:00+03:00'),
        endAt: new Date('2018-10-25T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-22T14:00:00+03:00'),
        endAt: new Date('2018-10-22T16:00:00+03:00'),
        title: 'Alkushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-22T16:00:00+03:00'),
        endAt: new Date('2018-10-22T17:00:00+03:00'),
        title: 'Teekkarijaoston touhutunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T19:00:00+03:00'),
        endAt: new Date('2018-10-25T20:00:00+03:00'),
        title: 'Loppushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T13:00:00+03:00'),
        endAt: new Date('2018-10-25T15:00:00+03:00'),
        title: 'Disneyradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T22:00:00+03:00'),
        endAt: new Date('2018-10-25T00:00:00+03:00'),
        title: 'Sinkkumutsin päiväkirjat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T00:00:00+03:00'),
        endAt: new Date('2018-10-24T07:00:00+03:00'),
        title: 'Kummitusradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T15:00:00+03:00'),
        endAt: new Date('2018-10-25T17:00:00+03:00'),
        title: 'Ruskapunkku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T20:00:00+03:00'),
        endAt: new Date('2018-10-23T22:00:00+03:00'),
        title: 'Deittikoutsit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T13:00:00+03:00'),
        endAt: new Date('2018-10-24T15:00:00+03:00'),
        title: 'Parasta ja pahinta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T11:00:00+03:00'),
        endAt: new Date('2018-10-24T13:00:00+03:00'),
        title: 'Omituisimmat rötökset ja rikokset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T00:00:00+03:00'),
        endAt: new Date('2018-10-23T07:00:00+03:00'),
        title: 'Tuskaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T00:00:00+03:00'),
        endAt: new Date('2018-10-25T07:00:00+03:00'),
        title: 'Punaisen sammalen lähettiläät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T07:00:00+03:00'),
        endAt: new Date('2018-10-23T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T07:00:00+03:00'),
        endAt: new Date('2018-10-24T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T16:00:00+03:00'),
        endAt: new Date('2018-10-23T18:00:00+03:00'),
        title: 'Ruskainen tunkkausradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T09:00:00+03:00'),
        endAt: new Date('2018-10-24T11:00:00+03:00'),
        title: 'Aamudödis & räs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T18:00:00+03:00'),
        endAt: new Date('2018-10-23T20:00:00+03:00'),
        title: 'Mielipidepalsta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-22T21:30:00+03:00'),
        endAt: new Date('2018-10-23T00:00:00+03:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T11:00:00+03:00'),
        endAt: new Date('2018-10-23T12:00:00+03:00'),
        title: 'Tutun ja Jaketuksen oma ohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T13:00:00+03:00'),
        endAt: new Date('2018-10-23T14:00:00+03:00'),
        title: 'Tutun ja Jaketuksen oma ohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T11:00:00+03:00'),
        endAt: new Date('2018-10-25T13:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-22T17:00:00+03:00'),
        endAt: new Date('2018-10-22T19:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-22T19:00:00+03:00'),
        endAt: new Date('2018-10-22T21:30:00+03:00'),
        title: 'Ruskapunkkarit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T14:00:00+03:00'),
        endAt: new Date('2018-10-23T16:00:00+03:00'),
        title: 'Meditatiiviset päikkärit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-24T20:00:00+03:00'),
        endAt: new Date('2018-10-24T22:00:00+03:00'),
        title: 'Kvanttipuu 6 - Kvarttiseikkailut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-23T12:00:00+03:00'),
        endAt: new Date('2018-10-23T13:00:00+03:00'),
        title: 'Käytättekö TEKin vapaa-aikaa?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-10-25T07:00:00+03:00'),
        endAt: new Date('2018-10-25T09:00:00+03:00'),
        title: 'Sanoja ja lyriikoita',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Programs',
      {
        startAt: {[Sequelize.Op.between]: [
            new Date('2018-10-22T00:00:00+03:00'),
            new Date('2018-10-25T23:59:59+03:00')
          ]}
      },
      {}
    );
  }
};
