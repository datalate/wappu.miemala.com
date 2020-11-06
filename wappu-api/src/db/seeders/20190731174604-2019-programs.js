'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2019-04-18T18:00:00+03:00'),
        endAt: new Date('2019-04-18T20:00:00+03:00'),
        title: 'Jussi Kangas Goes Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T18:00:00+03:00'),
        endAt: new Date('2019-04-24T20:00:00+03:00'),
        title: 'Jussi Kangas Goes Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T13:00:00+03:00'),
        endAt: new Date('2019-04-20T15:00:00+03:00'),
        title: 'Lördagsbrunch med Jonas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T11:00:00+03:00'),
        endAt: new Date('2019-04-28T13:00:00+03:00'),
        title: 'SunnuntaiSpesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T14:00:00+03:00'),
        endAt: new Date('2019-04-17T16:00:00+03:00'),
        title: 'Mämmiämpäri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T00:00:00+03:00'),
        endAt: new Date('2019-04-25T07:00:00+03:00'),
        title: 'Historian yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T14:00:00+03:00'),
        endAt: new Date('2019-04-24T16:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T14:00:00+03:00'),
        endAt: new Date('2019-04-26T16:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T11:00:00+03:00'),
        endAt: new Date('2019-04-22T14:00:00+03:00'),
        title: 'Kuuntele ennen kuin kuolet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-30T09:00:00+03:00'),
        endAt: new Date('2019-04-30T12:00:00+03:00'),
        title: 'Kuuntele ennen kuin kuolet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T15:00:00+03:00'),
        endAt: new Date('2019-04-28T17:00:00+03:00'),
        title: 'Karhuradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T22:00:00+03:00'),
        endAt: new Date('2019-04-20T00:00:00+03:00'),
        title: 'Rumpua ja bassoa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T15:00:00+03:00'),
        endAt: new Date('2019-04-20T17:00:00+03:00'),
        title: 'Synthwave radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T00:00:00+03:00'),
        endAt: new Date('2019-04-28T07:00:00+03:00'),
        title: 'Pekka Sauronin yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T16:00:00+03:00'),
        endAt: new Date('2019-04-27T18:00:00+03:00'),
        title: 'Pullan ja Palleron nostalgiatuokio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T16:00:00+03:00'),
        endAt: new Date('2019-04-26T18:00:00+03:00'),
        title: 'Pako todellisuudesta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T18:00:00+03:00'),
        endAt: new Date('2019-04-17T19:00:00+03:00'),
        title: 'Jaxuhali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T14:00:00+03:00'),
        endAt: new Date('2019-04-25T16:00:00+03:00'),
        title: 'Wikiwappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T09:00:00+03:00'),
        endAt: new Date('2019-04-20T11:00:00+03:00'),
        title: 'Ludofilia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T14:00:00+03:00'),
        endAt: new Date('2019-04-27T16:00:00+03:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T18:00:00+03:00'),
        endAt: new Date('2019-04-22T20:00:00+03:00'),
        title: 'Luontoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T18:00:00+03:00'),
        endAt: new Date('2019-04-26T20:00:00+03:00'),
        title: 'Luontoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T16:00:00+03:00'),
        endAt: new Date('2019-04-18T18:00:00+03:00'),
        title: 'Suuren urrrheilujuhlan tuntua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T07:00:00+03:00'),
        endAt: new Date('2019-04-20T09:00:00+03:00'),
        title: 'Nousukiito II: Vanhaa ja uutta rautaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T22:00:00+03:00'),
        endAt: new Date('2019-04-24T00:00:00+03:00'),
        title: 'Kummitusradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T20:00:00+03:00'),
        endAt: new Date('2019-04-25T22:00:00+03:00'),
        title: 'Pepe&Traxmar: Kommuuni Sessions vol. 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T07:00:00+03:00'),
        endAt: new Date('2019-04-29T09:00:00+03:00'),
        title: 'Alkoholiton AAmuhetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T20:00:00+03:00'),
        endAt: new Date('2019-04-27T22:00:00+03:00'),
        title: 'Sulla on väärä mielipide!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T16:00:00+03:00'),
        endAt: new Date('2019-04-25T18:00:00+03:00'),
        title: 'Mutsiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T11:00:00+03:00'),
        endAt: new Date('2019-04-20T13:00:00+03:00'),
        title: 'Vastuuta, vapautta ja voittoja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T07:00:00+03:00'),
        endAt: new Date('2019-04-27T09:00:00+03:00'),
        title: 'Radio of the Rising Sun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T22:00:00+03:00'),
        endAt: new Date('2019-04-19T00:00:00+03:00'),
        title: 'Post-rock-ilta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T22:00:00+03:00'),
        endAt: new Date('2019-04-26T00:00:00+03:00'),
        title: 'Post-rock-ilta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T05:00:00+03:00'),
        endAt: new Date('2019-04-16T07:00:00+03:00'),
        title: 'Tuoreet Eksotit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T15:00:00+03:00'),
        endAt: new Date('2019-04-19T17:00:00+03:00'),
        title: 'Murheiluruutu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T09:00:00+03:00'),
        endAt: new Date('2019-04-16T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T09:00:00+03:00'),
        endAt: new Date('2019-04-17T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T09:00:00+03:00'),
        endAt: new Date('2019-04-18T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T09:00:00+03:00'),
        endAt: new Date('2019-04-19T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T09:00:00+03:00'),
        endAt: new Date('2019-04-27T12:00:00+03:00'),
        title: 'Kärsimysiskelmää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T16:00:00+03:00'),
        endAt: new Date('2019-04-23T18:00:00+03:00'),
        title: 'Esports-radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-15T16:00:00+03:00'),
        endAt: new Date('2019-04-15T18:00:00+03:00'),
        title: 'Haippii, laikkii, subscraippii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T14:00:00+03:00'),
        endAt: new Date('2019-04-18T16:00:00+03:00'),
        title: 'Kymppiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T13:00:00+03:00'),
        endAt: new Date('2019-04-21T18:00:00+03:00'),
        title: 'Wappuradio LIVE! ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T18:00:00+03:00'),
        endAt: new Date('2019-04-25T20:00:00+03:00'),
        title: 'Post-jonneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T22:00:00+03:00'),
        endAt: new Date('2019-04-25T00:00:00+03:00'),
        title: 'Röökii & Rötöksii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T22:00:00+03:00'),
        endAt: new Date('2019-04-21T00:00:00+03:00'),
        title: 'Musiikin rajamailla vol 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T19:00:00+03:00'),
        endAt: new Date('2019-04-20T22:00:00+03:00'),
        title: 'EkuDance!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T09:00:00+03:00'),
        endAt: new Date('2019-04-22T11:00:00+03:00'),
        title: 'Arvostelutoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T09:00:00+03:00'),
        endAt: new Date('2019-04-29T11:00:00+03:00'),
        title: 'Arvostelutoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T18:00:00+03:00'),
        endAt: new Date('2019-04-29T20:00:00+03:00'),
        title: 'Fuksivuodet 2008 & 2018',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T22:00:00+03:00'),
        endAt: new Date('2019-04-29T00:00:00+03:00'),
        title: 'Kthulhun kutsu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T16:00:00+03:00'),
        endAt: new Date('2019-04-17T18:00:00+03:00'),
        title: 'Huonojen elokuvien iltapäivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T18:00:00+03:00'),
        endAt: new Date('2019-04-21T20:00:00+03:00'),
        title: 'I\'m a Road Rane, Honey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-15T14:00:00+03:00'),
        endAt: new Date('2019-04-15T16:00:00+03:00'),
        title: 'ALKUSHOW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T16:00:00+03:00'),
        endAt: new Date('2019-04-22T18:00:00+03:00'),
        title: 'Ruokaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T11:00:00+03:00'),
        endAt: new Date('2019-04-17T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T00:00:00+03:00'),
        endAt: new Date('2019-04-17T07:00:00+03:00'),
        title: 'Euroopan Pimeät Viisut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T07:00:00+03:00'),
        endAt: new Date('2019-04-22T09:00:00+03:00'),
        title: 'Lyriikkaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T11:00:00+03:00'),
        endAt: new Date('2019-04-29T13:00:00+03:00'),
        title: 'Elokuvien eeppisimmät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T14:00:00+03:00'),
        endAt: new Date('2019-04-16T16:00:00+03:00'),
        title: 'Riskiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T14:00:00+03:00'),
        endAt: new Date('2019-04-22T16:00:00+03:00'),
        title: 'Riskiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T00:00:00+03:00'),
        endAt: new Date('2019-04-18T07:00:00+03:00'),
        title: 'Yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T00:00:00+03:00'),
        endAt: new Date('2019-04-26T07:00:00+03:00'),
        title: 'Sonokromia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T00:00:00+03:00'),
        endAt: new Date('2019-04-27T07:00:00+03:00'),
        title: 'Jumipuisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T07:00:00+03:00'),
        endAt: new Date('2019-04-16T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T07:00:00+03:00'),
        endAt: new Date('2019-04-17T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T07:00:00+03:00'),
        endAt: new Date('2019-04-18T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T07:00:00+03:00'),
        endAt: new Date('2019-04-19T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T07:00:00+03:00'),
        endAt: new Date('2019-04-23T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T07:00:00+03:00'),
        endAt: new Date('2019-04-24T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T07:00:00+03:00'),
        endAt: new Date('2019-04-25T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T07:00:00+03:00'),
        endAt: new Date('2019-04-26T09:00:00+03:00'),
        title: 'Menestyjien aamurutiinit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T20:00:00+03:00'),
        endAt: new Date('2019-04-16T22:00:00+03:00'),
        title: 'Tirsk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T22:00:00+03:00'),
        endAt: new Date('2019-04-30T00:00:00+03:00'),
        title: 'Tuomittu, kivitetty, psykoosissa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T20:00:00+03:00'),
        endAt: new Date('2019-04-26T22:00:00+03:00'),
        title: 'Vaihtoehtoinen villapaitaohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T20:00:00+03:00'),
        endAt: new Date('2019-04-28T22:00:00+03:00'),
        title: 'Spinni: Tarinoita illoista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T22:00:00+03:00'),
        endAt: new Date('2019-04-27T00:00:00+03:00'),
        title: 'Hervannan energia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T00:00:00+03:00'),
        endAt: new Date('2019-04-20T07:00:00+03:00'),
        title: 'Metallin historia: rakkauden kesästä saatanan valtakuntaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T12:00:00+03:00'),
        endAt: new Date('2019-04-27T14:00:00+03:00'),
        title: 'Lainasto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T22:00:00+03:00'),
        endAt: new Date('2019-04-17T00:00:00+03:00'),
        title: 'Tummat tunnit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T20:00:00+03:00'),
        endAt: new Date('2019-04-29T22:00:00+03:00'),
        title: 'Kyynärpäätaktiikka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T11:00:00+03:00'),
        endAt: new Date('2019-04-23T13:00:00+03:00'),
        title: 'Lounasta pikku twistillä :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T11:00:00+03:00'),
        endAt: new Date('2019-04-24T13:00:00+03:00'),
        title: 'Lounasta pikku twistillä :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T11:00:00+03:00'),
        endAt: new Date('2019-04-25T13:00:00+03:00'),
        title: 'Lounasta pikku twistillä :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T11:00:00+03:00'),
        endAt: new Date('2019-04-26T13:00:00+03:00'),
        title: 'Lounasta pikku twistillä :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T20:00:00+03:00'),
        endAt: new Date('2019-04-24T22:00:00+03:00'),
        title: 'Deittikoutsit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T17:00:00+03:00'),
        endAt: new Date('2019-04-28T18:00:00+03:00'),
        title: 'Täyteohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T13:00:00+03:00'),
        endAt: new Date('2019-04-17T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T13:00:00+03:00'),
        endAt: new Date('2019-04-18T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T13:00:00+03:00'),
        endAt: new Date('2019-04-16T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T13:00:00+03:00'),
        endAt: new Date('2019-04-23T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T13:00:00+03:00'),
        endAt: new Date('2019-04-24T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T13:00:00+03:00'),
        endAt: new Date('2019-04-25T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T13:00:00+03:00'),
        endAt: new Date('2019-04-26T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T13:00:00+03:00'),
        endAt: new Date('2019-04-29T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-30T00:00:00+03:00'),
        endAt: new Date('2019-04-30T07:00:00+03:00'),
        title: 'Maaseuturatio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T18:00:00+03:00'),
        endAt: new Date('2019-04-23T20:00:00+03:00'),
        title: 'Maximum Jee&Jee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T13:00:00+03:00'),
        endAt: new Date('2019-04-28T15:00:00+03:00'),
        title: 'Tekniikkaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T00:00:00+03:00'),
        endAt: new Date('2019-04-22T07:00:00+03:00'),
        title: 'Junttidiskon Kuninkaalliset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T00:00:00+03:00'),
        endAt: new Date('2019-04-19T07:00:00+03:00'),
        title: 'Jouluyö, juhlayö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T20:00:00+03:00'),
        endAt: new Date('2019-04-22T22:00:00+03:00'),
        title: 'Mansen akateemisen gangstarap -seuran wappuspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T19:00:00+03:00'),
        endAt: new Date('2019-04-19T22:00:00+03:00'),
        title: 'SAMPLERADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T00:00:00+03:00'),
        endAt: new Date('2019-04-21T07:00:00+03:00'),
        title: 'Aaltoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T00:00:00+03:00'),
        endAt: new Date('2019-04-29T07:00:00+03:00'),
        title: 'Are You Sirius?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T14:00:00+03:00'),
        endAt: new Date('2019-04-23T16:00:00+03:00'),
        title: 'Kielâ ammuine ühine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T21:00:00+03:00'),
        endAt: new Date('2019-04-18T00:00:00+03:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-15T18:00:00+03:00'),
        endAt: new Date('2019-04-15T20:00:00+03:00'),
        title: 'Tyhmä kysymys, mutta...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T16:00:00+03:00'),
        endAt: new Date('2019-04-24T18:00:00+03:00'),
        title: 'Daddy-o Raddy-o',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T16:00:00+03:00'),
        endAt: new Date('2019-04-29T18:00:00+03:00'),
        title: 'How to English',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-15T22:00:00+03:00'),
        endAt: new Date('2019-04-16T00:00:00+03:00'),
        title: 'Balkan & Russian Brass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T18:00:00+03:00'),
        endAt: new Date('2019-04-16T20:00:00+03:00'),
        title: 'Balkan & Russian Brass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T11:00:00+03:00'),
        endAt: new Date('2019-04-21T13:00:00+03:00'),
        title: 'Kasaridisco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T20:00:00+03:00'),
        endAt: new Date('2019-04-21T22:00:00+03:00'),
        title: 'Suomen Soramontut Värikuvina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T18:00:00+03:00'),
        endAt: new Date('2019-04-28T20:00:00+03:00'),
        title: 'Jotain kosmista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T22:00:00+03:00'),
        endAt: new Date('2019-04-22T00:00:00+03:00'),
        title: 'Jahnukaisen jazzraati',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T00:00:00+03:00'),
        endAt: new Date('2019-04-24T07:00:00+03:00'),
        title: 'Romanttinen pemahetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-22T22:00:00+03:00'),
        endAt: new Date('2019-04-23T00:00:00+03:00'),
        title: 'Mättö, mättö vol. 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-30T12:00:00+03:00'),
        endAt: new Date('2019-04-30T15:00:00+03:00'),
        title: 'LOPPUSHOW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T09:00:00+03:00'),
        endAt: new Date('2019-04-28T11:00:00+03:00'),
        title: 'Lyriikkaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T00:00:00+03:00'),
        endAt: new Date('2019-04-16T05:00:00+03:00'),
        title: 'Asiantuntijatoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T17:00:00+03:00'),
        endAt: new Date('2019-04-19T19:00:00+03:00'),
        title: 'Mielikuvaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-15T20:00:00+03:00'),
        endAt: new Date('2019-04-15T22:00:00+03:00'),
        title: 'Postiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-20T17:00:00+03:00'),
        endAt: new Date('2019-04-20T19:00:00+03:00'),
        title: 'Would you survive THIS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-28T07:00:00+03:00'),
        endAt: new Date('2019-04-28T09:00:00+03:00'),
        title: 'Hang the DJ - poimintoja levyhyllystä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T20:00:00+03:00'),
        endAt: new Date('2019-04-23T22:00:00+03:00'),
        title: 'Maxwellin epäyhtälöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T20:00:00+03:00'),
        endAt: new Date('2019-04-18T22:00:00+03:00'),
        title: 'Kolmen Soinnun Tähteet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T16:00:00+03:00'),
        endAt: new Date('2019-04-16T18:00:00+03:00'),
        title: 'Wappuvaihto Turun kanssa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T22:00:00+03:00'),
        endAt: new Date('2019-04-28T00:00:00+03:00'),
        title: 'Matalataajuusvärähtelijät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-24T09:00:00+03:00'),
        endAt: new Date('2019-04-24T11:00:00+03:00'),
        title: 'Napalmin katkua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-25T09:00:00+03:00'),
        endAt: new Date('2019-04-25T11:00:00+03:00'),
        title: 'Napalmin katkua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-26T09:00:00+03:00'),
        endAt: new Date('2019-04-26T11:00:00+03:00'),
        title: 'Napalmin katkua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T09:00:00+03:00'),
        endAt: new Date('2019-04-23T11:00:00+03:00'),
        title: 'Napalmin katkua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-17T19:00:00+03:00'),
        endAt: new Date('2019-04-17T21:00:00+03:00'),
        title: 'Showroom Dummies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-18T11:00:00+03:00'),
        endAt: new Date('2019-04-18T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T11:00:00+03:00'),
        endAt: new Date('2019-04-19T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-16T11:00:00+03:00'),
        endAt: new Date('2019-04-16T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-19T13:00:00+03:00'),
        endAt: new Date('2019-04-19T15:00:00+03:00'),
        title: 'Esports-radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T07:00:00+03:00'),
        endAt: new Date('2019-04-21T09:00:00+03:00'),
        title: 'Lasten lauantaiaamu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-21T09:00:00+03:00'),
        endAt: new Date('2019-04-21T11:00:00+03:00'),
        title: 'Venlan darrarunot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-23T00:00:00+03:00'),
        endAt: new Date('2019-04-23T07:00:00+03:00'),
        title: 'ASMR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-27T18:00:00+03:00'),
        endAt: new Date('2019-04-27T20:00:00+03:00'),
        title: 'Käännöskukkasia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-29T14:00:00+03:00'),
        endAt: new Date('2019-04-29T16:00:00+03:00'),
        title: 'Kesäspessu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2019-04-30T07:00:00+03:00'),
        endAt: new Date('2019-04-30T09:00:00+03:00'),
        title: 'Puhkihiottua timanttia',
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
            new Date('2019-04-15T00:00:00+03:00'),
            new Date('2019-04-31T23:59:59+03:00')
          ]
        }
      },
      {}
    );
  }
};
