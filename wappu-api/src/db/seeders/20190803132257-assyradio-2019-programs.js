'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2019-08-01T13:00:00+03:00'),
        endAt: new Date('2019-08-01T15:00:00+03:00'),
        title: 'Assyradio HYPE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T09:00:00+03:00'),
        endAt: new Date('2019-08-03T11:00:00+03:00'),
        title: 'Seksikäs aamuvenyttely',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-04T11:00:00+03:00'),
        endAt: new Date('2019-08-04T13:00:00+03:00'),
        title: 'LOPPUSHOW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-01T22:00:00+03:00'),
        endAt: new Date('2019-08-02T00:00:00+03:00'),
        title: 'Terapiasessarit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-04T07:00:00+03:00'),
        endAt: new Date('2019-08-04T09:00:00+03:00'),
        title: 'n00biradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-01T20:00:00+03:00'),
        endAt: new Date('2019-08-01T22:00:00+03:00'),
        title: 'How to english',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T19:00:00+03:00'),
        endAt: new Date('2019-08-03T21:00:00+03:00'),
        title: 'All Things Space',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T21:00:00+03:00'),
        endAt: new Date('2019-08-04T00:00:00+03:00'),
        title: 'Salaliittoteoriaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-01T15:00:00+03:00'),
        endAt: new Date('2019-08-01T17:00:00+03:00'),
        title: 'Voiton Katkua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T00:00:00+03:00'),
        endAt: new Date('2019-08-02T02:00:00+03:00'),
        title: 'ATK-Mittelöintiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T09:00:00+03:00'),
        endAt: new Date('2019-08-02T11:00:00+03:00'),
        title: 'Kahen Kilon Show',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T02:00:00+03:00'),
        endAt: new Date('2019-08-03T07:00:00+03:00'),
        title: 'Rakkauden yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T11:00:00+03:00'),
        endAt: new Date('2019-08-03T14:00:00+03:00'),
        title: 'Tiimiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T19:00:00+03:00'),
        endAt: new Date('2019-08-02T22:00:00+03:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T15:00:00+03:00'),
        endAt: new Date('2019-08-02T17:00:00+03:00'),
        title: 'ATK-Mittelöintiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T17:00:00+03:00'),
        endAt: new Date('2019-08-02T19:00:00+03:00'),
        title: 'Kyberpunkki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T22:00:00+03:00'),
        endAt: new Date('2019-08-03T00:00:00+03:00'),
        title: 'Korvamatokuuri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T13:00:00+03:00'),
        endAt: new Date('2019-08-02T15:00:00+03:00'),
        title: 'ASSYT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-04T02:00:00+03:00'),
        endAt: new Date('2019-08-04T07:00:00+03:00'),
        title: 'Elämänhallinnan alkeet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-04T00:00:00+03:00'),
        endAt: new Date('2019-08-04T02:00:00+03:00'),
        title: 'Revolution Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-04T09:00:00+03:00'),
        endAt: new Date('2019-08-04T11:00:00+03:00'),
        title: 'Smurffisampleradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T02:00:00+03:00'),
        endAt: new Date('2019-08-02T07:00:00+03:00'),
        title: 'Hämärästi aamunkoittoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-01T17:00:00+03:00'),
        endAt: new Date('2019-08-01T20:00:00+03:00'),
        title: 'Nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T07:00:00+03:00'),
        endAt: new Date('2019-08-03T09:00:00+03:00'),
        title: 'Hyvää yötä ja huomenta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T00:00:00+03:00'),
        endAt: new Date('2019-08-03T02:00:00+03:00'),
        title: 'Late Night Snack',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T11:00:00+03:00'),
        endAt: new Date('2019-08-02T13:00:00+03:00'),
        title: 'LinuCast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-02T07:00:00+03:00'),
        endAt: new Date('2019-08-02T09:00:00+03:00'),
        title: 'Aseseksuaalien aamuradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T17:00:00+03:00'),
        endAt: new Date('2019-08-03T19:00:00+03:00'),
        title: 'Showroom Dummies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T14:00:00+03:00'),
        endAt: new Date('2019-08-03T16:00:00+03:00'),
        title: 'ASSYT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-08-03T16:00:00+03:00'),
        endAt: new Date('2019-08-03T17:00:00+03:00'),
        title: 'Kiinteä IP',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Programs',
      {
        startAt: {
          [Sequelize.Op.between]: [
            new Date('2019-08-01T00:00:00+03:00'),
            new Date('2019-08-04T23:59:59+03:00')
          ]
        }
      },
      {}
    );
  }
};
