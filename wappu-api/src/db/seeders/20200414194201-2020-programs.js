'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2020-04-15T14:00:00+03:00'),
        endAt: new Date('2020-04-15T16:00:00+03:00'),
        title: 'Alkushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T21:00:00+03:00'),
        endAt: new Date('2020-04-26T00:00:00+03:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T00:00:00+03:00'),
        endAt: new Date('2020-04-23T07:00:00+03:00'),
        title: 'Huutisvuoto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T18:00:00+03:00'),
        endAt: new Date('2020-04-27T20:00:00+03:00'),
        title: 'Jotain kosmista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T12:00:00+03:00'),
        endAt: new Date('2020-04-25T14:00:00+03:00'),
        title: 'Ludofilia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T09:00:00+03:00'),
        endAt: new Date('2020-04-26T11:00:00+03:00'),
        title: 'Vauvaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T22:00:00+03:00'),
        endAt: new Date('2020-04-18T00:00:00+03:00'),
        title: 'Folkkista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T22:00:00+03:00'),
        endAt: new Date('2020-04-29T00:00:00+03:00'),
        title: 'Nousukiito III: Illaksi kotiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T18:00:00+03:00'),
        endAt: new Date('2020-04-28T20:00:00+03:00'),
        title: 'Arvostelutoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T18:00:00+03:00'),
        endAt: new Date('2020-04-29T20:00:00+03:00'),
        title: 'Arvostelutoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-15T22:00:00+03:00'),
        endAt: new Date('2020-04-16T00:00:00+03:00'),
        title: 'Viittahommia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T16:00:00+03:00'),
        endAt: new Date('2020-04-25T18:00:00+03:00'),
        title: 'How to english - Ice goodenings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T18:00:00+03:00'),
        endAt: new Date('2020-04-17T20:00:00+03:00'),
        title: 'Sosiaaliset toleranssit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T07:00:00+03:00'),
        endAt: new Date('2020-04-18T09:00:00+03:00'),
        title: 'Junaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T20:00:00+03:00'),
        endAt: new Date('2020-04-17T22:00:00+03:00'),
        title: 'Siitä minä nautin!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T21:00:00+03:00'),
        endAt: new Date('2020-04-25T00:00:00+03:00'),
        title: 'Post-rock-ilta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T14:00:00+03:00'),
        endAt: new Date('2020-04-16T16:00:00+03:00'),
        title: 'Spinni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T20:00:00+03:00'),
        endAt: new Date('2020-04-26T22:00:00+03:00'),
        title: 'Spinni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T18:00:00+03:00'),
        endAt: new Date('2020-04-16T19:00:00+03:00'),
        title: 'Uuden Musiikin Kilta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T20:00:00+03:00'),
        endAt: new Date('2020-04-29T22:00:00+03:00'),
        title: 'Ajan hukkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T17:00:00+03:00'),
        endAt: new Date('2020-04-18T19:00:00+03:00'),
        title: 'EkuDance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T00:00:00+03:00'),
        endAt: new Date('2020-04-25T07:00:00+03:00'),
        title: 'Matalataajuusvärähtelijät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T18:00:00+03:00'),
        endAt: new Date('2020-04-25T21:00:00+03:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T00:00:00+03:00'),
        endAt: new Date('2020-04-22T05:00:00+03:00'),
        title: 'RadioSimulaatio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T20:00:00+03:00'),
        endAt: new Date('2020-04-28T22:00:00+03:00'),
        title: 'Ihan oma syy!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T19:00:00+03:00'),
        endAt: new Date('2020-04-18T21:00:00+03:00'),
        title: 'Kyykkäradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T21:00:00+03:00'),
        endAt: new Date('2020-04-24T00:00:00+03:00'),
        title: 'Yötoiveita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T19:00:00+03:00'),
        endAt: new Date('2020-04-24T21:00:00+03:00'),
        title: 'POP PUNK RADIO OHJELMA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T11:00:00+03:00'),
        endAt: new Date('2020-04-18T13:00:00+03:00'),
        title: 'Tieteen huipulla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T00:00:00+03:00'),
        endAt: new Date('2020-04-27T07:00:00+03:00'),
        title: 'Petkuhuiputusta!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T22:00:00+03:00'),
        endAt: new Date('2020-04-20T00:00:00+03:00'),
        title: 'Musiikin rajamailla: Matka rajan taakse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T16:00:00+03:00'),
        endAt: new Date('2020-04-16T18:00:00+03:00'),
        title: 'Exculevyradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T19:00:00+03:00'),
        endAt: new Date('2020-04-22T21:00:00+03:00'),
        title: 'Nuutu & Katti - WappuQuest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-30T12:00:00+03:00'),
        endAt: new Date('2020-04-30T15:00:00+03:00'),
        title: 'Loppushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T11:00:00+03:00'),
        endAt: new Date('2020-04-16T13:00:00+03:00'),
        title: 'Kannattaa kuunnella nopee :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T11:00:00+03:00'),
        endAt: new Date('2020-04-17T13:00:00+03:00'),
        title: 'Kannattaa kuunnella nopee :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T11:00:00+03:00'),
        endAt: new Date('2020-04-21T13:00:00+03:00'),
        title: 'Kannattaa kuunnella nopee :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T11:00:00+03:00'),
        endAt: new Date('2020-04-22T13:00:00+03:00'),
        title: 'Kannattaa kuunnella nopee :D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T21:00:00+03:00'),
        endAt: new Date('2020-04-22T00:00:00+03:00'),
        title: 'Katujen äänet / kuolleen miehen runokirja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T03:00:00+03:00'),
        endAt: new Date('2020-04-29T07:00:00+03:00'),
        title: 'Nousevan auringon radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T00:00:00+03:00'),
        endAt: new Date('2020-04-29T03:00:00+03:00'),
        title: 'Armastusega Eestist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T11:00:00+03:00'),
        endAt: new Date('2020-04-20T13:00:00+03:00'),
        title: 'Jaxuhali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T22:00:00+03:00'),
        endAt: new Date('2020-04-17T00:00:00+03:00'),
        title: 'Kummitusradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T14:00:00+03:00'),
        endAt: new Date('2020-04-24T16:00:00+03:00'),
        title: 'Rakkauden Rappuradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-15T20:00:00+03:00'),
        endAt: new Date('2020-04-15T22:00:00+03:00'),
        title: 'Mansen akateeminen gangsta rap -seura kuuntelee kotimaista special',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T11:00:00+03:00'),
        endAt: new Date('2020-04-27T13:00:00+03:00'),
        title: 'Showroom Dummies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T20:00:00+03:00'),
        endAt: new Date('2020-04-27T22:00:00+03:00'),
        title: 'Mansen akateemisen gansta rap -seuran erikoinen erikoisohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T22:00:00+03:00'),
        endAt: new Date('2020-04-28T00:00:00+03:00'),
        title: 'Totaalinen hiton sota',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T11:00:00+03:00'),
        endAt: new Date('2020-04-26T13:00:00+03:00'),
        title: 'Puhkihiottua Timanttia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T19:00:00+03:00'),
        endAt: new Date('2020-04-20T21:00:00+03:00'),
        title: 'Pohjoinen Alanko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T00:00:00+03:00'),
        endAt: new Date('2020-04-16T07:00:00+03:00'),
        title: 'Pimeät Viisut vol.2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T11:00:00+03:00'),
        endAt: new Date('2020-04-29T13:00:00+03:00'),
        title: 'Tekniikkaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T00:00:00+03:00'),
        endAt: new Date('2020-04-21T07:00:00+03:00'),
        title: 'Maaseuturatio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T00:00:00+03:00'),
        endAt: new Date('2020-04-28T07:00:00+03:00'),
        title: 'Historian yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T21:00:00+03:00'),
        endAt: new Date('2020-04-19T00:00:00+03:00'),
        title: 'Pittaajien Paratiisi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T17:00:00+03:00'),
        endAt: new Date('2020-04-22T19:00:00+03:00'),
        title: 'Wapputiimin radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T17:00:00+03:00'),
        endAt: new Date('2020-04-23T19:00:00+03:00'),
        title: 'Wapputiimin radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T19:00:00+03:00'),
        endAt: new Date('2020-04-23T21:00:00+03:00'),
        title: 'Pepe&Traxmar: Kommuuni Sessions vol. 3: Karanteeni Sessions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T11:00:00+03:00'),
        endAt: new Date('2020-04-23T13:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T11:00:00+03:00'),
        endAt: new Date('2020-04-24T13:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T09:00:00+03:00'),
        endAt: new Date('2020-04-23T11:00:00+03:00'),
        title: 'Aamupäiväpörinät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T09:00:00+03:00'),
        endAt: new Date('2020-04-24T11:00:00+03:00'),
        title: 'Aamupäiväpörinät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T09:00:00+03:00'),
        endAt: new Date('2020-04-28T11:00:00+03:00'),
        title: 'Aamupäiväpörinät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T09:00:00+03:00'),
        endAt: new Date('2020-04-29T11:00:00+03:00'),
        title: 'Aamupäiväpörinät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T09:00:00+03:00'),
        endAt: new Date('2020-04-18T11:00:00+03:00'),
        title: 'Spring Break Euroopassa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T21:00:00+03:00'),
        endAt: new Date('2020-04-21T00:00:00+03:00'),
        title: 'Sopivasti kinkkinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T14:00:00+03:00'),
        endAt: new Date('2020-04-27T16:00:00+03:00'),
        title: 'Riskiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T14:00:00+03:00'),
        endAt: new Date('2020-04-28T16:00:00+03:00'),
        title: 'Riskiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T07:00:00+03:00'),
        endAt: new Date('2020-04-16T09:00:00+03:00'),
        title: 'Aikuisten ihmisten aamuohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T00:00:00+03:00'),
        endAt: new Date('2020-04-24T07:00:00+03:00'),
        title: 'Näköradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T07:00:00+03:00'),
        endAt: new Date('2020-04-17T09:00:00+03:00'),
        title: 'Aikuisten ihmisten aamuohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T07:00:00+03:00'),
        endAt: new Date('2020-04-20T09:00:00+03:00'),
        title: 'Aikuisten ihmisten aamuohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T11:00:00+03:00'),
        endAt: new Date('2020-04-28T13:00:00+03:00'),
        title: 'Musikaaliradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T07:00:00+03:00'),
        endAt: new Date('2020-04-22T09:00:00+03:00'),
        title: 'Aikuisten ihmisten aamuohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T07:00:00+03:00'),
        endAt: new Date('2020-04-21T09:00:00+03:00'),
        title: 'Aikuisten ihmisten aamuohjelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T19:00:00+03:00'),
        endAt: new Date('2020-04-21T21:00:00+03:00'),
        title: 'Korvamadotus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T20:00:00+03:00'),
        endAt: new Date('2020-04-19T22:00:00+03:00'),
        title: 'Miksi tein tämän itselleni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T22:00:00+03:00'),
        endAt: new Date('2020-04-27T00:00:00+03:00'),
        title: 'Spinni: Tarinoita illoista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T14:00:00+03:00'),
        endAt: new Date('2020-04-17T16:00:00+03:00'),
        title: 'Jipun ja Tuomaksen festarikatsaus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T00:00:00+03:00'),
        endAt: new Date('2020-04-19T07:00:00+03:00'),
        title: 'Kolmen Kimppa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T15:00:00+03:00'),
        endAt: new Date('2020-04-18T17:00:00+03:00'),
        title: 'Are You Hearing The Aliens Too?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T17:00:00+03:00'),
        endAt: new Date('2020-04-20T19:00:00+03:00'),
        title: 'Iltajamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T17:00:00+03:00'),
        endAt: new Date('2020-04-21T19:00:00+03:00'),
        title: 'Iltajamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T16:00:00+03:00'),
        endAt: new Date('2020-04-19T18:00:00+03:00'),
        title: 'Kerta kiellon päälle -LIVE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T00:00:00+03:00'),
        endAt: new Date('2020-04-18T07:00:00+03:00'),
        title: 'Välittäjien yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T14:00:00+03:00'),
        endAt: new Date('2020-04-21T16:00:00+03:00'),
        title: 'Fillarikommunistinen manifesti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T14:00:00+03:00'),
        endAt: new Date('2020-04-22T16:00:00+03:00'),
        title: 'Karanteenin karatetreeni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T21:00:00+03:00'),
        endAt: new Date('2020-04-23T00:00:00+03:00'),
        title: 'Mättö, Mättö vol. 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T14:00:00+03:00'),
        endAt: new Date('2020-04-25T16:00:00+03:00'),
        title: 'Tavara-arvaamo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T13:00:00+03:00'),
        endAt: new Date('2020-04-28T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T13:00:00+03:00'),
        endAt: new Date('2020-04-27T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T09:00:00+03:00'),
        endAt: new Date('2020-04-16T11:00:00+03:00'),
        title: 'Huomenta Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T13:00:00+03:00'),
        endAt: new Date('2020-04-23T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T13:00:00+03:00'),
        endAt: new Date('2020-04-22T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T13:00:00+03:00'),
        endAt: new Date('2020-04-21T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T13:00:00+03:00'),
        endAt: new Date('2020-04-20T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T13:00:00+03:00'),
        endAt: new Date('2020-04-17T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T13:00:00+03:00'),
        endAt: new Date('2020-04-16T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T09:00:00+03:00'),
        endAt: new Date('2020-04-17T11:00:00+03:00'),
        title: 'Huomenta Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T09:00:00+03:00'),
        endAt: new Date('2020-04-21T11:00:00+03:00'),
        title: 'Huomenta Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T09:00:00+03:00'),
        endAt: new Date('2020-04-22T11:00:00+03:00'),
        title: 'Huomenta Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T11:00:00+03:00'),
        endAt: new Date('2020-04-19T13:00:00+03:00'),
        title: 'Lainasto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T07:00:00+03:00'),
        endAt: new Date('2020-04-25T09:00:00+03:00'),
        title: 'Krapula-aamun kärsimys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T09:00:00+03:00'),
        endAt: new Date('2020-04-19T11:00:00+03:00'),
        title: 'Lahjattomien musatunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T07:00:00+03:00'),
        endAt: new Date('2020-04-23T09:00:00+03:00'),
        title: 'Klassikoita vuosien varrelta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T07:00:00+03:00'),
        endAt: new Date('2020-04-24T09:00:00+03:00'),
        title: 'Klassikoita vuosien varrelta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T07:00:00+03:00'),
        endAt: new Date('2020-04-29T09:00:00+03:00'),
        title: 'Klassikoita vuosien varrelta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T07:00:00+03:00'),
        endAt: new Date('2020-04-28T09:00:00+03:00'),
        title: 'Klassikoita vuosien varrelta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T07:00:00+03:00'),
        endAt: new Date('2020-04-27T09:00:00+03:00'),
        title: 'Klassikoita vuosien varrelta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T13:00:00+03:00'),
        endAt: new Date('2020-04-29T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T16:00:00+03:00'),
        endAt: new Date('2020-04-17T18:00:00+03:00'),
        title: 'gtaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T07:00:00+03:00'),
        endAt: new Date('2020-04-19T09:00:00+03:00'),
        title: 'Lasten simahetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T18:00:00+03:00'),
        endAt: new Date('2020-04-26T20:00:00+03:00'),
        title: 'Suomessa tehdään paskaa musaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-18T13:00:00+03:00'),
        endAt: new Date('2020-04-18T15:00:00+03:00'),
        title: 'Näin Suomi juo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T16:00:00+03:00'),
        endAt: new Date('2020-04-29T18:00:00+03:00'),
        title: 'ATK -mittelöinti radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T05:00:00+03:00'),
        endAt: new Date('2020-04-22T07:00:00+03:00'),
        title: 'Tuoreet Eksotit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-25T09:00:00+03:00'),
        endAt: new Date('2020-04-25T12:00:00+03:00'),
        title: 'Kärsimysiskelmää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T18:00:00+03:00'),
        endAt: new Date('2020-04-19T20:00:00+03:00'),
        title: 'Mielikuvamatka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T17:00:00+03:00'),
        endAt: new Date('2020-04-24T19:00:00+03:00'),
        title: 'Sekaisinwapusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T00:00:00+03:00'),
        endAt: new Date('2020-04-26T07:00:00+03:00'),
        title: 'Pekka Sauronin yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T16:00:00+03:00'),
        endAt: new Date('2020-04-20T17:00:00+03:00'),
        title: 'Iltapäiväteen hämmennys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-21T16:00:00+03:00'),
        endAt: new Date('2020-04-21T17:00:00+03:00'),
        title: 'Iltapäiväteen hämmennys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-22T16:00:00+03:00'),
        endAt: new Date('2020-04-22T17:00:00+03:00'),
        title: 'Iltapäiväteen hämmennys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T16:00:00+03:00'),
        endAt: new Date('2020-04-23T17:00:00+03:00'),
        title: 'Iltapäiväteen hämmennys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T16:00:00+03:00'),
        endAt: new Date('2020-04-24T17:00:00+03:00'),
        title: 'Iltapäiväteen hämmennys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-24T13:00:00+03:00'),
        endAt: new Date('2020-04-24T14:00:00+03:00'),
        title: 'On air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T09:00:00+03:00'),
        endAt: new Date('2020-04-20T11:00:00+03:00'),
        title: 'Helpdesk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T16:00:00+03:00'),
        endAt: new Date('2020-04-27T18:00:00+03:00'),
        title: 'Iltapäiväklassinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-28T16:00:00+03:00'),
        endAt: new Date('2020-04-28T18:00:00+03:00'),
        title: 'Iltapäiväklassinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-16T19:00:00+03:00'),
        endAt: new Date('2020-04-16T22:00:00+03:00'),
        title: 'Radiositsit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-30T09:00:00+03:00'),
        endAt: new Date('2020-04-30T12:00:00+03:00'),
        title: '10v juhlakiertue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T22:00:00+03:00'),
        endAt: new Date('2020-04-30T00:00:00+03:00'),
        title: 'Uuden aallon harjalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T14:00:00+03:00'),
        endAt: new Date('2020-04-20T16:00:00+03:00'),
        title: 'Tampere3 -veteraanien salaiset kansiot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-30T07:00:00+03:00'),
        endAt: new Date('2020-04-30T09:00:00+03:00'),
        title: 'Formula 1-aamu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-15T18:00:00+03:00'),
        endAt: new Date('2020-04-15T20:00:00+03:00'),
        title: 'Stereoradio ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-27T09:00:00+03:00'),
        endAt: new Date('2020-04-27T11:00:00+03:00'),
        title: 'Meme review',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-19T13:00:00+03:00'),
        endAt: new Date('2020-04-19T16:00:00+03:00'),
        title: 'Wappuradio DEAD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-17T00:00:00+03:00'),
        endAt: new Date('2020-04-17T07:00:00+03:00'),
        title: 'Suden tunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-29T14:00:00+03:00'),
        endAt: new Date('2020-04-29T16:00:00+03:00'),
        title: 'B-raitaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T07:00:00+03:00'),
        endAt: new Date('2020-04-26T09:00:00+03:00'),
        title: 'B-raitaradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T13:00:00+03:00'),
        endAt: new Date('2020-04-26T15:00:00+03:00'),
        title: 'Vihreää ihanuutta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-30T00:00:00+03:00'),
        endAt: new Date('2020-04-30T07:00:00+03:00'),
        title: 'Regressiivinen yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-15T16:00:00+03:00'),
        endAt: new Date('2020-04-15T18:00:00+03:00'),
        title: 'Miten suomea',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-26T15:00:00+03:00'),
        endAt: new Date('2020-04-26T18:00:00+03:00'),
        title: 'SAMPLERADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-20T00:00:00+03:00'),
        endAt: new Date('2020-04-20T07:00:00+03:00'),
        title: 'Peräkammarinpojat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2020-04-23T14:00:00+03:00'),
        endAt: new Date('2020-04-23T16:00:00+03:00'),
        title: 'Lyriikoita, melodioita ja hämmennystä',
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
            new Date('2020-04-15T00:00:00+03:00'),
            new Date('2020-04-30T23:59:59+03:00')
          ]}
      },
      {}
    );
  }
};
