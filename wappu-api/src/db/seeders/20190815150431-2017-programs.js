'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2017-04-24T21:00:00+00:00'),
        endAt: new Date('2017-04-25T04:00:00+00:00'),
        title: 'Hyödylliset idiootit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T13:00:00+00:00'),
        endAt: new Date('2017-04-29T15:00:00+00:00'),
        title: 'Puolitotuuksia rockista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T21:00:00+00:00'),
        endAt: new Date('2017-04-26T04:00:00+00:00'),
        title: 'Ethos, Pathos, Logos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T08:00:00+00:00'),
        endAt: new Date('2017-04-25T10:00:00+00:00'),
        title: 'Saattaa sisältää pähkinää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T08:00:00+00:00'),
        endAt: new Date('2017-04-26T10:00:00+00:00'),
        title: 'Saattaa sisältää pähkinää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T08:00:00+00:00'),
        endAt: new Date('2017-04-27T10:00:00+00:00'),
        title: 'Saattaa sisältää pähkinää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T08:00:00+00:00'),
        endAt: new Date('2017-04-28T10:00:00+00:00'),
        title: 'Saattaa sisältää pähkinää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T08:00:00+00:00'),
        endAt: new Date('2017-04-29T10:00:00+00:00'),
        title: 'Suunniteltu&tehty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T19:00:00+00:00'),
        endAt: new Date('2017-04-24T21:00:00+00:00'),
        title: 'Koiratarha radalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T21:00:00+00:00'),
        endAt: new Date('2017-04-27T04:00:00+00:00'),
        title: 'Post-iltaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T11:00:00+00:00'),
        endAt: new Date('2017-04-25T13:00:00+00:00'),
        title: 'Iltapäiväveto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T13:00:00+00:00'),
        endAt: new Date('2017-04-27T15:00:00+00:00'),
        title: 'Rytmimuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T21:00:00+00:00'),
        endAt: new Date('2017-04-24T04:00:00+00:00'),
        title: 'Liskodisko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T17:00:00+00:00'),
        endAt: new Date('2017-04-25T19:00:00+00:00'),
        title: 'Matka madonreikään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T19:00:00+00:00'),
        endAt: new Date('2017-04-29T21:00:00+00:00'),
        title: 'Hyvän mielen hoitoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T15:00:00+00:00'),
        endAt: new Date('2017-04-27T17:00:00+00:00'),
        title: 'Liikuntatunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T15:00:00+00:00'),
        endAt: new Date('2017-04-24T17:00:00+00:00'),
        title: 'Liikuntatunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T06:00:00+00:00'),
        endAt: new Date('2017-04-20T08:00:00+00:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T06:00:00+00:00'),
        endAt: new Date('2017-04-21T08:00:00+00:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T06:00:00+00:00'),
        endAt: new Date('2017-04-24T08:00:00+00:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T21:00:00+00:00'),
        endAt: new Date('2017-04-29T04:00:00+00:00'),
        title: 'Suomi124',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T08:00:00+00:00'),
        endAt: new Date('2017-04-22T10:00:00+00:00'),
        title: 'Viimeistä viedään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T10:00:00+00:00'),
        endAt: new Date('2017-04-20T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T10:00:00+00:00'),
        endAt: new Date('2017-04-21T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T10:00:00+00:00'),
        endAt: new Date('2017-04-24T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T10:00:00+00:00'),
        endAt: new Date('2017-04-25T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T10:00:00+00:00'),
        endAt: new Date('2017-04-26T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T10:00:00+00:00'),
        endAt: new Date('2017-04-27T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T10:00:00+00:00'),
        endAt: new Date('2017-04-28T11:00:00+00:00'),
        title: 'Business as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T06:00:00+00:00'),
        endAt: new Date('2017-04-29T08:00:00+00:00'),
        title: 'Lainasto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T19:00:00+00:00'),
        endAt: new Date('2017-04-20T21:00:00+00:00'),
        title: 'Jumipuisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T04:00:00+00:00'),
        endAt: new Date('2017-04-21T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T04:00:00+00:00'),
        endAt: new Date('2017-04-24T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T04:00:00+00:00'),
        endAt: new Date('2017-04-25T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T04:00:00+00:00'),
        endAt: new Date('2017-04-26T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T04:00:00+00:00'),
        endAt: new Date('2017-04-27T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T04:00:00+00:00'),
        endAt: new Date('2017-04-28T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T04:00:00+00:00'),
        endAt: new Date('2017-04-20T06:00:00+00:00'),
        title: 'Vesikauhuisten uimakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T17:00:00+00:00'),
        endAt: new Date('2017-04-28T19:00:00+00:00'),
        title: 'Ennen oli paremmin?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T11:00:00+00:00'),
        endAt: new Date('2017-04-24T12:00:00+00:00'),
        title: 'Tämä on tärkeää, olen tutkija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T11:00:00+00:00'),
        endAt: new Date('2017-04-21T12:00:00+00:00'),
        title: 'Tämä on tärkeää, olen tutkija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T12:00:00+00:00'),
        endAt: new Date('2017-04-22T14:00:00+00:00'),
        title: 'Tekniikan Musiikki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T08:00:00+00:00'),
        endAt: new Date('2017-04-24T10:00:00+00:00'),
        title: 'Kolmen Koon keskipäivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T08:00:00+00:00'),
        endAt: new Date('2017-04-20T10:00:00+00:00'),
        title: 'Kolmen Koon keskipäivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T08:00:00+00:00'),
        endAt: new Date('2017-04-21T10:00:00+00:00'),
        title: 'Kolmen Koon keskipäivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T11:00:00+00:00'),
        endAt: new Date('2017-04-20T12:00:00+00:00'),
        title: 'Tämä on tärkeää, olen tutkija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-19T17:00:00+00:00'),
        endAt: new Date('2017-04-19T19:00:00+00:00'),
        title: 'Jussi Kangas goes Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T17:00:00+00:00'),
        endAt: new Date('2017-04-24T19:00:00+00:00'),
        title: 'Jussi Kangas goes Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T16:00:00+00:00'),
        endAt: new Date('2017-04-22T18:00:00+00:00'),
        title: 'EkuDance!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-30T06:00:00+00:00'),
        endAt: new Date('2017-04-30T08:00:00+00:00'),
        title: 'Känkkäränkkää käkättimeen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T21:00:00+00:00'),
        endAt: new Date('2017-04-21T04:00:00+00:00'),
        title: 'TILARADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-19T13:00:00+00:00'),
        endAt: new Date('2017-04-19T15:00:00+00:00'),
        title: 'Iltapäiväklassinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T13:00:00+00:00'),
        endAt: new Date('2017-04-26T15:00:00+00:00'),
        title: 'Iltapäiväklassinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-19T15:00:00+00:00'),
        endAt: new Date('2017-04-19T17:00:00+00:00'),
        title: 'Instrumentaalipläjäys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-19T19:00:00+00:00'),
        endAt: new Date('2017-04-19T21:00:00+00:00'),
        title: 'Radio Prog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T12:00:00+00:00'),
        endAt: new Date('2017-04-21T14:00:00+00:00'),
        title: 'Kielletty hedelmä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T16:00:00+00:00'),
        endAt: new Date('2017-04-21T18:00:00+00:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T04:00:00+00:00'),
        endAt: new Date('2017-04-22T06:00:00+00:00'),
        title: 'Nousevan Auringon aamutee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T19:00:00+00:00'),
        endAt: new Date('2017-04-22T21:00:00+00:00'),
        title: 'EDM Kekrit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T21:00:00+00:00'),
        endAt: new Date('2017-04-23T04:00:00+00:00'),
        title: 'PORA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T08:00:00+00:00'),
        endAt: new Date('2017-04-23T10:00:00+00:00'),
        title: 'Laulun ytimessä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T17:00:00+00:00'),
        endAt: new Date('2017-04-23T19:00:00+00:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T19:00:00+00:00'),
        endAt: new Date('2017-04-23T21:00:00+00:00'),
        title: 'Tekniikan Mikan blues',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T12:00:00+00:00'),
        endAt: new Date('2017-04-20T14:00:00+00:00'),
        title: 'E-Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T12:00:00+00:00'),
        endAt: new Date('2017-04-24T14:00:00+00:00'),
        title: 'E-Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T11:00:00+00:00'),
        endAt: new Date('2017-04-27T13:00:00+00:00'),
        title: 'Iltapäiväveto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T11:00:00+00:00'),
        endAt: new Date('2017-04-26T13:00:00+00:00'),
        title: 'Iltapäiväveto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T11:00:00+00:00'),
        endAt: new Date('2017-04-28T15:00:00+00:00'),
        title: 'Iltapäiväveto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T15:00:00+00:00'),
        endAt: new Date('2017-04-26T17:00:00+00:00'),
        title: 'DDR:n Naisvoimistelijoiden Maailmankiertue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T17:00:00+00:00'),
        endAt: new Date('2017-04-26T19:00:00+00:00'),
        title: 'Echo Show',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T10:00:00+00:00'),
        endAt: new Date('2017-04-29T11:00:00+00:00'),
        title: 'TTYY as usual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-30T08:00:00+00:00'),
        endAt: new Date('2017-04-30T12:00:00+00:00'),
        title: 'Loppushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-30T04:00:00+00:00'),
        endAt: new Date('2017-04-30T06:00:00+00:00'),
        title: 'Donaldin ja Kartsan Wappukeittiö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T18:00:00+00:00'),
        endAt: new Date('2017-04-21T21:00:00+00:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T17:00:00+00:00'),
        endAt: new Date('2017-04-20T19:00:00+00:00'),
        title: 'Syvä Purppura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T17:00:00+00:00'),
        endAt: new Date('2017-04-27T19:00:00+00:00'),
        title: 'Syvä Purppura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T06:00:00+00:00'),
        endAt: new Date('2017-04-22T08:00:00+00:00'),
        title: 'Tärinäradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T21:00:00+00:00'),
        endAt: new Date('2017-04-28T04:00:00+00:00'),
        title: 'TBD-radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T14:00:00+00:00'),
        endAt: new Date('2017-04-22T16:00:00+00:00'),
        title: 'Herkkä hetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T19:00:00+00:00'),
        endAt: new Date('2017-04-28T21:00:00+00:00'),
        title: 'Maxwellin epäyhtälöitä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T06:00:00+00:00'),
        endAt: new Date('2017-04-23T08:00:00+00:00'),
        title: 'Känkkäränkkää käkättimeen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-19T11:00:00+00:00'),
        endAt: new Date('2017-04-19T13:00:00+00:00'),
        title: 'HYPE!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T19:00:00+00:00'),
        endAt: new Date('2017-04-27T21:00:00+00:00'),
        title: 'Suklaata & Samettia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T19:00:00+00:00'),
        endAt: new Date('2017-04-25T21:00:00+00:00'),
        title: 'Radio Prog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T15:00:00+00:00'),
        endAt: new Date('2017-04-20T17:00:00+00:00'),
        title: 'Overdose of Finnish Pop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T15:00:00+00:00'),
        endAt: new Date('2017-04-25T17:00:00+00:00'),
        title: 'Overdose of Finnish Pop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T06:00:00+00:00'),
        endAt: new Date('2017-04-25T08:00:00+00:00'),
        title: 'Rakkauden Wappurappio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T06:00:00+00:00'),
        endAt: new Date('2017-04-26T08:00:00+00:00'),
        title: 'Rakkauden Wappurappio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-27T06:00:00+00:00'),
        endAt: new Date('2017-04-27T08:00:00+00:00'),
        title: 'Rakkauden Wappurappio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T06:00:00+00:00'),
        endAt: new Date('2017-04-28T08:00:00+00:00'),
        title: 'Rakkauden Wappurappio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-25T13:00:00+00:00'),
        endAt: new Date('2017-04-25T15:00:00+00:00'),
        title: 'Karjapaimenten kannuksilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-19T21:00:00+00:00'),
        endAt: new Date('2017-04-20T04:00:00+00:00'),
        title: 'Tarinoita suloisista synneistä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-28T15:00:00+00:00'),
        endAt: new Date('2017-04-28T17:00:00+00:00'),
        title: 'Kivikaudesta keskiviikkoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T04:00:00+00:00'),
        endAt: new Date('2017-04-29T06:00:00+00:00'),
        title: 'Suunsoittoa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T21:00:00+00:00'),
        endAt: new Date('2017-04-30T04:00:00+00:00'),
        title: '100 maan sammuttavat säkeet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T21:00:00+00:00'),
        endAt: new Date('2017-04-22T04:00:00+00:00'),
        title: 'Ompeluseura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-20T14:00:00+00:00'),
        endAt: new Date('2017-04-20T15:00:00+00:00'),
        title: 'Kysy Luojalta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-24T14:00:00+00:00'),
        endAt: new Date('2017-04-24T15:00:00+00:00'),
        title: 'Kysy Luojalta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-21T14:00:00+00:00'),
        endAt: new Date('2017-04-21T16:00:00+00:00'),
        title: 'Pelastakaa Aasit!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T04:00:00+00:00'),
        endAt: new Date('2017-04-23T06:00:00+00:00'),
        title: 'Eteerinen eetteri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T17:00:00+00:00'),
        endAt: new Date('2017-04-29T19:00:00+00:00'),
        title: 'Kolmen soinnun tähteet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T10:00:00+00:00'),
        endAt: new Date('2017-04-22T12:00:00+00:00'),
        title: 'Making of Wappuradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-22T18:00:00+00:00'),
        endAt: new Date('2017-04-22T19:00:00+00:00'),
        title: 'Saturday\'s Trance Flight With J.A.Z.P.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-26T19:00:00+00:00'),
        endAt: new Date('2017-04-26T21:00:00+00:00'),
        title: 'Jotain kosmista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T10:00:00+00:00'),
        endAt: new Date('2017-04-23T15:00:00+00:00'),
        title: 'Wappuradio LIVE!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-23T15:00:00+00:00'),
        endAt: new Date('2017-04-23T17:00:00+00:00'),
        title: 'Maailman pisin kalju',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T15:00:00+00:00'),
        endAt: new Date('2017-04-29T17:00:00+00:00'),
        title: 'Maailman pisin kalju',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2017-04-29T11:00:00+00:00'),
        endAt: new Date('2017-04-29T13:00:00+00:00'),
        title: 'Herkkä hetki',
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
            new Date('2017-04-19T00:00:00+03:00'),
            new Date('2017-04-30T23:59:59+03:00')
          ]}
      },
      {}
    );
  }
};
