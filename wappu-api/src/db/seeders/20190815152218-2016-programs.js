'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2016-04-28T13:00:00+03:00'),
        endAt: new Date('2016-04-28T15:00:00+03:00'),
        title: 'Jussi Kangas goes radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T13:00:00+03:00'),
        endAt: new Date('2016-04-22T15:00:00+03:00'),
        title: 'Mustia kukkia ja kielimoukareita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T15:00:00+03:00'),
        endAt: new Date('2016-04-28T17:00:00+03:00'),
        title: 'Iltapäiväklassinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T13:00:00+03:00'),
        endAt: new Date('2016-04-27T15:00:00+03:00'),
        title: 'Ihmeelliset elokuvat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T13:00:00+03:00'),
        endAt: new Date('2016-04-29T15:00:00+03:00'),
        title: 'Ihmeelliset elokuvat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T15:00:00+03:00'),
        endAt: new Date('2016-04-27T17:00:00+03:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T08:00:00+03:00'),
        endAt: new Date('2016-04-24T10:00:00+03:00'),
        title: 'Jannen ja Tulkin TOP 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-19T11:00:00+03:00'),
        endAt: new Date('2016-04-19T13:00:00+03:00'),
        title: 'HYPE!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-19T13:00:00+03:00'),
        endAt: new Date('2016-04-19T15:00:00+03:00'),
        title: 'Puolitotuuksia rockista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-19T15:00:00+03:00'),
        endAt: new Date('2016-04-19T17:00:00+03:00'),
        title: 'TYÄ MIÄSTEN TURPO TUAKIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T15:00:00+03:00'),
        endAt: new Date('2016-04-22T17:00:00+03:00'),
        title: 'TYÄ MIÄSTEN TURPO TUAKIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-19T21:00:00+03:00'),
        endAt: new Date('2016-04-20T04:00:00+03:00'),
        title: 'Wappuheilan metsästys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T04:00:00+03:00'),
        endAt: new Date('2016-04-20T06:00:00+03:00'),
        title: 'Tuorepuristettu aamupuuro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T04:00:00+03:00'),
        endAt: new Date('2016-04-21T06:00:00+03:00'),
        title: 'Tuorepuristettu aamupuuro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T04:00:00+03:00'),
        endAt: new Date('2016-04-22T06:00:00+03:00'),
        title: 'Tuorepuristettu aamupuuro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T06:00:00+03:00'),
        endAt: new Date('2016-04-20T08:00:00+03:00'),
        title: 'Wake Up With SS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T06:00:00+03:00'),
        endAt: new Date('2016-04-21T08:00:00+03:00'),
        title: 'Wake Up With SS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T06:00:00+03:00'),
        endAt: new Date('2016-04-22T08:00:00+03:00'),
        title: 'Wake Up With SS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T11:00:00+03:00'),
        endAt: new Date('2016-04-20T13:00:00+03:00'),
        title: 'Spinni Radio Lab',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T11:00:00+03:00'),
        endAt: new Date('2016-04-21T13:00:00+03:00'),
        title: 'Spinni Radio Lab',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T11:00:00+03:00'),
        endAt: new Date('2016-04-22T13:00:00+03:00'),
        title: 'Spinni Radio Lab',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T08:00:00+03:00'),
        endAt: new Date('2016-04-20T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T08:00:00+03:00'),
        endAt: new Date('2016-04-21T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T08:00:00+03:00'),
        endAt: new Date('2016-04-22T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T08:00:00+03:00'),
        endAt: new Date('2016-04-29T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T08:00:00+03:00'),
        endAt: new Date('2016-04-28T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T08:00:00+03:00'),
        endAt: new Date('2016-04-27T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T08:00:00+03:00'),
        endAt: new Date('2016-04-26T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T08:00:00+03:00'),
        endAt: new Date('2016-04-25T10:00:00+03:00'),
        title: 'Keskipäivän tasoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T13:00:00+03:00'),
        endAt: new Date('2016-04-20T15:00:00+03:00'),
        title: 'Tuottajakoulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T15:00:00+03:00'),
        endAt: new Date('2016-04-20T17:00:00+03:00'),
        title: 'TTYkitys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T17:00:00+03:00'),
        endAt: new Date('2016-04-20T19:00:00+03:00'),
        title: 'Olutradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T19:00:00+03:00'),
        endAt: new Date('2016-04-20T21:00:00+03:00'),
        title: 'Maxwellin epäyhtälöitä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T21:00:00+03:00'),
        endAt: new Date('2016-04-21T04:00:00+03:00'),
        title: 'Tekniikan Mikan yöblues',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T13:00:00+03:00'),
        endAt: new Date('2016-04-21T15:00:00+03:00'),
        title: 'Mustia kukkia ja kielimoukareita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T15:00:00+03:00'),
        endAt: new Date('2016-04-21T17:00:00+03:00'),
        title: 'DDR:n Naisvoimistelijoiden Totuusradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T17:00:00+03:00'),
        endAt: new Date('2016-04-21T19:00:00+03:00'),
        title: 'Qma latinoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T17:00:00+03:00'),
        endAt: new Date('2016-04-22T19:00:00+03:00'),
        title: 'Tintin ja maikeyn EDM kekrit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T19:00:00+03:00'),
        endAt: new Date('2016-04-22T21:00:00+03:00'),
        title: 'Historian musiikki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T21:00:00+03:00'),
        endAt: new Date('2016-04-23T04:00:00+03:00'),
        title: 'Tummuva yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T04:00:00+03:00'),
        endAt: new Date('2016-04-23T06:00:00+03:00'),
        title: 'Nousevan Auringon (Maan) Aamushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T06:00:00+03:00'),
        endAt: new Date('2016-04-23T08:00:00+03:00'),
        title: 'Tukanheiluttajain tanssigaala',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-30T07:00:00+03:00'),
        endAt: new Date('2016-04-30T09:00:00+03:00'),
        title: 'Tukanheiluttajain tanssigaala',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T08:00:00+03:00'),
        endAt: new Date('2016-04-23T10:00:00+03:00'),
        title: 'Jannen ja Tulkin TOP 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T10:00:00+03:00'),
        endAt: new Date('2016-04-23T13:00:00+03:00'),
        title: 'Rietasta elämää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T13:00:00+03:00'),
        endAt: new Date('2016-04-23T16:00:00+03:00'),
        title: 'Suklaata & Samettia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T16:00:00+03:00'),
        endAt: new Date('2016-04-23T19:00:00+03:00'),
        title: 'EkuDance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T19:00:00+03:00'),
        endAt: new Date('2016-04-23T21:00:00+03:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-23T21:00:00+03:00'),
        endAt: new Date('2016-04-24T04:00:00+03:00'),
        title: 'Showroom Dummies + Yöaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T04:00:00+03:00'),
        endAt: new Date('2016-04-24T06:00:00+03:00'),
        title: 'NeoTampere 2097',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T06:00:00+03:00'),
        endAt: new Date('2016-04-24T08:00:00+03:00'),
        title: 'Kaksi mieltä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T10:00:00+03:00'),
        endAt: new Date('2016-04-24T15:00:00+03:00'),
        title: 'Wappuradio LIVE!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T15:00:00+03:00'),
        endAt: new Date('2016-04-24T18:00:00+03:00'),
        title: 'Kolmen soinnun tähteet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T18:00:00+03:00'),
        endAt: new Date('2016-04-24T20:00:00+03:00'),
        title: 'Sunnuntaimayhem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T20:00:00+03:00'),
        endAt: new Date('2016-04-24T21:00:00+03:00'),
        title: 'Hiukkasviihdytin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-24T21:00:00+03:00'),
        endAt: new Date('2016-04-25T04:00:00+03:00'),
        title: '10. piiri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T04:00:00+03:00'),
        endAt: new Date('2016-04-25T06:00:00+03:00'),
        title: 'Sadan eekkerin metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T04:00:00+03:00'),
        endAt: new Date('2016-04-26T06:00:00+03:00'),
        title: 'Sadan eekkerin metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T04:00:00+03:00'),
        endAt: new Date('2016-04-27T06:00:00+03:00'),
        title: 'Sadan eekkerin metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T04:00:00+03:00'),
        endAt: new Date('2016-04-28T06:00:00+03:00'),
        title: 'Sadan eekkerin metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T04:00:00+03:00'),
        endAt: new Date('2016-04-29T06:00:00+03:00'),
        title: 'Sadan eekkerin metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T06:00:00+03:00'),
        endAt: new Date('2016-04-25T08:00:00+03:00'),
        title: 'Aamukahvia ananaspuusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T06:00:00+03:00'),
        endAt: new Date('2016-04-26T08:00:00+03:00'),
        title: 'Aamukahvia ananaspuusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T06:00:00+03:00'),
        endAt: new Date('2016-04-27T08:00:00+03:00'),
        title: 'Aamukahvia ananaspuusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T06:00:00+03:00'),
        endAt: new Date('2016-04-28T08:00:00+03:00'),
        title: 'Aamukahvia ananaspuusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T06:00:00+03:00'),
        endAt: new Date('2016-04-29T08:00:00+03:00'),
        title: 'Aamukahvia ananaspuusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T11:00:00+03:00'),
        endAt: new Date('2016-04-25T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T11:00:00+03:00'),
        endAt: new Date('2016-04-26T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T11:00:00+03:00'),
        endAt: new Date('2016-04-27T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T11:00:00+03:00'),
        endAt: new Date('2016-04-28T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T11:00:00+03:00'),
        endAt: new Date('2016-04-29T13:00:00+03:00'),
        title: 'Kahvitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T13:00:00+03:00'),
        endAt: new Date('2016-04-25T15:00:00+03:00'),
        title: 'Ihmeelliset elokuvat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T13:00:00+03:00'),
        endAt: new Date('2016-04-26T15:00:00+03:00'),
        title: 'Jussi Kangas goes radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T15:00:00+03:00'),
        endAt: new Date('2016-04-25T17:00:00+03:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T15:00:00+03:00'),
        endAt: new Date('2016-04-26T17:00:00+03:00'),
        title: 'Iltapäiväklassinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T15:00:00+03:00'),
        endAt: new Date('2016-04-29T17:00:00+03:00'),
        title: 'Herkkä hetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T17:00:00+03:00'),
        endAt: new Date('2016-04-25T18:00:00+03:00'),
        title: 'Monday\'s Trance Session With J.A.Z.P.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T18:00:00+03:00'),
        endAt: new Date('2016-04-25T21:00:00+03:00'),
        title: 'Suomen soramontut värikuvina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T17:00:00+03:00'),
        endAt: new Date('2016-04-26T19:00:00+03:00'),
        title: 'Pelit ja vehkeet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T19:00:00+03:00'),
        endAt: new Date('2016-04-26T21:00:00+03:00'),
        title: 'Tuplanollat ja kadonnut vuosikymmen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T19:00:00+03:00'),
        endAt: new Date('2016-04-27T21:00:00+03:00'),
        title: 'Shove-it up your ass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T17:00:00+03:00'),
        endAt: new Date('2016-04-28T19:00:00+03:00'),
        title: 'Isän levykaapilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T19:00:00+03:00'),
        endAt: new Date('2016-04-28T21:00:00+03:00'),
        title: 'Koiratarha radalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T19:00:00+03:00'),
        endAt: new Date('2016-04-29T21:00:00+03:00'),
        title: 'Soundtrackin kääntöpuoli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-30T04:00:00+03:00'),
        endAt: new Date('2016-04-30T07:00:00+03:00'),
        title: 'Morning glory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-30T09:00:00+03:00'),
        endAt: new Date('2016-04-30T12:00:00+03:00'),
        title: 'Loppushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T21:00:00+03:00'),
        endAt: new Date('2016-04-26T04:00:00+03:00'),
        title: 'Setä sen ajan maailma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T21:00:00+03:00'),
        endAt: new Date('2016-04-27T04:00:00+03:00'),
        title: '▲',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T21:00:00+03:00'),
        endAt: new Date('2016-04-28T04:00:00+03:00'),
        title: 'Rytmimuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T21:00:00+03:00'),
        endAt: new Date('2016-04-29T04:00:00+03:00'),
        title: 'Spoiler Alert!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T21:00:00+03:00'),
        endAt: new Date('2016-04-30T04:00:00+03:00'),
        title: 'Pekka Sauronin yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-19T19:00:00+03:00'),
        endAt: new Date('2016-04-19T21:00:00+03:00'),
        title: 'Hyvän mielen hoitoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-19T17:00:00+03:00'),
        endAt: new Date('2016-04-19T19:00:00+03:00'),
        title: 'Syvä purppura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T17:00:00+03:00'),
        endAt: new Date('2016-04-27T19:00:00+03:00'),
        title: 'Syvä purppura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T21:00:00+03:00'),
        endAt: new Date('2016-04-22T04:00:00+03:00'),
        title: 'Ompeluseura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T19:00:00+03:00'),
        endAt: new Date('2016-04-21T21:00:00+03:00'),
        title: 'Hyvän mielen hoitoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T17:00:00+03:00'),
        endAt: new Date('2016-04-29T19:00:00+03:00'),
        title: 'Musiikin Kuuntelu Ohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-20T10:00:00+03:00'),
        endAt: new Date('2016-04-20T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-21T10:00:00+03:00'),
        endAt: new Date('2016-04-21T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-22T10:00:00+03:00'),
        endAt: new Date('2016-04-22T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-25T10:00:00+03:00'),
        endAt: new Date('2016-04-25T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-26T10:00:00+03:00'),
        endAt: new Date('2016-04-26T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-27T10:00:00+03:00'),
        endAt: new Date('2016-04-27T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-28T10:00:00+03:00'),
        endAt: new Date('2016-04-28T11:00:00+03:00'),
        title: 'Päivän lafka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2016-04-29T10:00:00+03:00'),
        endAt: new Date('2016-04-29T11:00:00+03:00'),
        title: 'Päivän lafka',
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
            new Date('2016-04-19T00:00:00+03:00'),
            new Date('2016-04-30T23:59:59+03:00')
          ]}
      },
      {}
    );
  }
};
