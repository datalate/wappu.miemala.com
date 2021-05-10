'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
	  {
		startAt: new Date('2021-04-17T20:00:00+03:00'),
		endAt: new Date('2021-04-17T22:00:00+03:00'),
		title: 'Arvostelutoimisto',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T07:00:00+03:00'),
		endAt: new Date('2021-04-22T09:00:00+03:00'),
		title: 'Kuinka appelsiini kuoritaan?',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T07:00:00+03:00'),
		endAt: new Date('2021-04-23T09:00:00+03:00'),
		title: 'Kuinka appelsiini kuoritaan?',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-30T07:00:00+03:00'),
		endAt: new Date('2021-04-30T09:00:00+03:00'),
		title: 'Kuinka appelsiini kuoritaan?',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T00:00:00+03:00'),
		endAt: new Date('2021-04-24T07:00:00+03:00'),
		title: 'Pitkäsoittojen Yö',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T21:00:00+03:00'),
		endAt: new Date('2021-04-25T00:00:00+03:00'),
		title: 'Sceneradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T11:00:00+03:00'),
		endAt: new Date('2021-04-27T13:00:00+03:00'),
		title: 'Wikiwappu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T15:00:00+03:00'),
		endAt: new Date('2021-04-17T18:00:00+03:00'),
		title: 'Mansen Akateemisen Gangsta rap -Seuran Aitopääradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T20:00:00+03:00'),
		endAt: new Date('2021-04-22T22:00:00+03:00'),
		title: 'Nollanolla',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T19:00:00+03:00'),
		endAt: new Date('2021-04-24T21:00:00+03:00'),
		title: 'Suuret akateemiset radiositsit',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T11:00:00+03:00'),
		endAt: new Date('2021-04-25T13:00:00+03:00'),
		title: 'Ihan oma syy!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T22:00:00+03:00'),
		endAt: new Date('2021-04-20T00:00:00+03:00'),
		title: 'Huumori on hauskaa',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T09:00:00+03:00'),
		endAt: new Date('2021-04-22T11:00:00+03:00'),
		title: 'Tanssitossujen tomutustorstai',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T13:00:00+03:00'),
		endAt: new Date('2021-04-24T15:00:00+03:00'),
		title: 'Tavara-arvaamo',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T18:00:00+03:00'),
		endAt: new Date('2021-04-19T20:00:00+03:00'),
		title: 'SAMPLERADIO SPECIAL',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T15:00:00+03:00'),
		endAt: new Date('2021-04-25T18:00:00+03:00'),
		title: 'SAMPLERADIO',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-15T14:00:00+03:00'),
		endAt: new Date('2021-04-15T16:00:00+03:00'),
		title: 'Alkushow',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T07:00:00+03:00'),
		endAt: new Date('2021-04-25T09:00:00+03:00'),
		title: 'Tuomaksen aamuteknomagiashow',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T13:00:00+03:00'),
		endAt: new Date('2021-04-18T18:00:00+03:00'),
		title: 'Wappuradio LIVE!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T00:00:00+03:00'),
		endAt: new Date('2021-04-20T05:00:00+03:00'),
		title: 'Yölento',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T13:00:00+03:00'),
		endAt: new Date('2021-04-25T15:00:00+03:00'),
		title: 'SMURFFISAMPLERADIO',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T00:00:00+03:00'),
		endAt: new Date('2021-04-23T07:00:00+03:00'),
		title: 'Historian yö',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T05:00:00+03:00'),
		endAt: new Date('2021-04-20T07:00:00+03:00'),
		title: 'Tuoreet Eksotit',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T18:00:00+03:00'),
		endAt: new Date('2021-04-18T20:00:00+03:00'),
		title: 'Iltajamit',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T18:00:00+03:00'),
		endAt: new Date('2021-04-25T20:00:00+03:00'),
		title: 'Iltajamit',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T15:00:00+03:00'),
		endAt: new Date('2021-04-26T18:00:00+03:00'),
		title: 'Mansen Akateemisen Gangsta rap -Seuran uudemman musiikin radio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T11:00:00+03:00'),
		endAt: new Date('2021-04-21T13:00:00+03:00'),
		title: 'Amatöörin niksinurkka',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T17:00:00+03:00'),
		endAt: new Date('2021-04-27T19:00:00+03:00'),
		title: 'Oikeesti hyvä iskelmäradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T22:00:00+03:00'),
		endAt: new Date('2021-04-30T00:00:00+03:00'),
		title: 'Folk off, punk!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T09:00:00+03:00'),
		endAt: new Date('2021-04-18T11:00:00+03:00'),
		title: 'Ludofilia',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T00:00:00+03:00'),
		endAt: new Date('2021-04-17T07:00:00+03:00'),
		title: 'Lastenohjelmien Yö',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T18:00:00+03:00'),
		endAt: new Date('2021-04-20T20:00:00+03:00'),
		title: 'Nuutu & Katti - WappuQuest',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T00:00:00+03:00'),
		endAt: new Date('2021-04-21T07:00:00+03:00'),
		title: 'Nakutaiteenyö',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T00:00:00+03:00'),
		endAt: new Date('2021-04-26T07:00:00+03:00'),
		title: 'Pimeat Viisut vol. 3',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T07:00:00+03:00'),
		endAt: new Date('2021-04-16T09:00:00+03:00'),
		title: 'Aikuisten Ihmisten Aamuohjelma',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T15:00:00+03:00'),
		endAt: new Date('2021-04-22T17:00:00+03:00'),
		title: 'Musikaaliradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T20:00:00+03:00'),
		endAt: new Date('2021-04-28T22:00:00+03:00'),
		title: 'Pittaajien paratiisi',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T11:00:00+03:00'),
		endAt: new Date('2021-04-16T13:00:00+03:00'),
		title: 'Söpöt eläinjutut',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T09:00:00+03:00'),
		endAt: new Date('2021-04-25T11:00:00+03:00'),
		title: 'Kaikki kiva on kiellettyä!!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T13:00:00+03:00'),
		endAt: new Date('2021-04-16T15:00:00+03:00'),
		title: 'Musiikin duunarit',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T11:00:00+03:00'),
		endAt: new Date('2021-04-28T13:00:00+03:00'),
		title: 'Hyvät, pahat ja opet',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-15T18:00:00+03:00'),
		endAt: new Date('2021-04-15T20:00:00+03:00'),
		title: 'Modulaatioradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T07:00:00+03:00'),
		endAt: new Date('2021-04-20T09:00:00+03:00'),
		title: 'Aikuisten Ihmisten Aamuohjelma',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T07:00:00+03:00'),
		endAt: new Date('2021-04-21T09:00:00+03:00'),
		title: 'Aikuisten Ihmisten Aamuohjelma',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T21:00:00+03:00'),
		endAt: new Date('2021-04-28T00:00:00+03:00'),
		title: 'Iltasaturaatio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T22:00:00+03:00'),
		endAt: new Date('2021-04-18T00:00:00+03:00'),
		title: 'Saturday Night Spinni',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T20:00:00+03:00'),
		endAt: new Date('2021-04-26T22:00:00+03:00'),
		title: 'Hiuslakkaa ja glitteriä',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T20:00:00+03:00'),
		endAt: new Date('2021-04-20T22:00:00+03:00'),
		title: 'Britpop radio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T20:00:00+03:00'),
		endAt: new Date('2021-04-29T22:00:00+03:00'),
		title: 'Italo-Disco Radio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T18:00:00+03:00'),
		endAt: new Date('2021-04-28T20:00:00+03:00'),
		title: 'Pepe & Traxmar: Kommuunisessions vol. 4',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T07:00:00+03:00'),
		endAt: new Date('2021-04-19T09:00:00+03:00'),
		title: 'Viikon suositukset',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T07:00:00+03:00'),
		endAt: new Date('2021-04-26T09:00:00+03:00'),
		title: 'Viikon suositukset',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T17:00:00+03:00'),
		endAt: new Date('2021-04-22T20:00:00+03:00'),
		title: 'Klikkiotsikoita ja kohuja',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T20:00:00+03:00'),
		endAt: new Date('2021-04-19T22:00:00+03:00'),
		title: 'Pualikka käteh, kyykkä kumoh',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T15:00:00+03:00'),
		endAt: new Date('2021-04-21T17:00:00+03:00'),
		title: 'Melodiset örinätarinat',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T22:00:00+03:00'),
		endAt: new Date('2021-04-22T00:00:00+03:00'),
		title: 'Exculevyradio 1: Mielikuvitusmatka jännän äärelle',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T22:00:00+03:00'),
		endAt: new Date('2021-04-27T00:00:00+03:00'),
		title: 'Exculevyradio 2: Electric Boogaloo',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T09:00:00+03:00'),
		endAt: new Date('2021-04-21T11:00:00+03:00'),
		title: 'Lahjattomien musatunti',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T22:00:00+03:00'),
		endAt: new Date('2021-04-23T00:00:00+03:00'),
		title: 'Radio Arkh.AM',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T17:00:00+03:00'),
		endAt: new Date('2021-04-21T20:00:00+03:00'),
		title: 'Dungeons and Dummies',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T11:00:00+03:00'),
		endAt: new Date('2021-04-22T13:00:00+03:00'),
		title: 'Avaruusohjelma',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T17:00:00+03:00'),
		endAt: new Date('2021-04-23T19:00:00+03:00'),
		title: 'Röyhkää menoa',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T00:00:00+03:00'),
		endAt: new Date('2021-04-28T07:00:00+03:00'),
		title: 'Yhtäköyttä yhdistyksessä',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T22:00:00+03:00'),
		endAt: new Date('2021-04-26T00:00:00+03:00'),
		title: 'Future Bass & Trap',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T17:00:00+03:00'),
		endAt: new Date('2021-04-24T19:00:00+03:00'),
		title: 'Psykemusiikin ajankohtaisohjelma',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T15:00:00+03:00'),
		endAt: new Date('2021-04-28T18:00:00+03:00'),
		title: 'Tekniikkaradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T07:00:00+03:00'),
		endAt: new Date('2021-04-27T09:00:00+03:00'),
		title: 'Iloa päivääsi! Good Morning!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T07:00:00+03:00'),
		endAt: new Date('2021-04-28T09:00:00+03:00'),
		title: 'Iloa päivääsi! Good Morning!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T07:00:00+03:00'),
		endAt: new Date('2021-04-29T09:00:00+03:00'),
		title: 'Iloa päivääsi! Good Morning!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T11:00:00+03:00'),
		endAt: new Date('2021-04-24T13:00:00+03:00'),
		title: 'Lainasto',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T09:00:00+03:00'),
		endAt: new Date('2021-04-28T11:00:00+03:00'),
		title: 'tupsun aamuhassuttelu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T09:00:00+03:00'),
		endAt: new Date('2021-04-29T11:00:00+03:00'),
		title: 'tupsun aamuhassuttelu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-30T09:00:00+03:00'),
		endAt: new Date('2021-04-30T12:00:00+03:00'),
		title: 'Se yksi, joka jäi soittamatta',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T15:00:00+03:00'),
		endAt: new Date('2021-04-23T17:00:00+03:00'),
		title: 'Oispa festarit: Reivin aikaan',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T15:00:00+03:00'),
		endAt: new Date('2021-04-29T18:00:00+03:00'),
		title: 'Miten Suomea?!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-15T22:00:00+03:00'),
		endAt: new Date('2021-04-16T00:00:00+03:00'),
		title: 'Määrittelyradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T00:00:00+03:00'),
		endAt: new Date('2021-04-18T07:00:00+03:00'),
		title: 'Huutisvuoto',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-30T12:00:00+03:00'),
		endAt: new Date('2021-04-30T15:00:00+03:00'),
		title: 'Loppushow',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T11:00:00+03:00'),
		endAt: new Date('2021-04-17T13:00:00+03:00'),
		title: 'NääsPeksin historia ja alkutaival',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T21:00:00+03:00'),
		endAt: new Date('2021-04-17T00:00:00+03:00'),
		title: 'Mattomaratoni',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T15:00:00+03:00'),
		endAt: new Date('2021-04-16T17:00:00+03:00'),
		title: 'Oispa festarit: Alkusoitto',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T07:00:00+03:00'),
		endAt: new Date('2021-04-17T09:00:00+03:00'),
		title: 'Lasten simahetki',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T09:00:00+03:00'),
		endAt: new Date('2021-04-20T11:00:00+03:00'),
		title: 'Huomenta Wappu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T09:00:00+03:00'),
		endAt: new Date('2021-04-23T11:00:00+03:00'),
		title: 'Makuasioita',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T11:00:00+03:00'),
		endAt: new Date('2021-04-20T13:00:00+03:00'),
		title: 'Jalointa puuta',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-15T20:00:00+03:00'),
		endAt: new Date('2021-04-15T22:00:00+03:00'),
		title: 'Korvamadotus',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T15:00:00+03:00'),
		endAt: new Date('2021-04-27T17:00:00+03:00'),
		title: 'Oispa festarit: Ei siis hai!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T11:00:00+03:00'),
		endAt: new Date('2021-04-29T13:00:00+03:00'),
		title: 'Bassolounas',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-15T16:00:00+03:00'),
		endAt: new Date('2021-04-15T18:00:00+03:00'),
		title: 'Paras biisi !',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T00:00:00+03:00'),
		endAt: new Date('2021-04-29T04:00:00+03:00'),
		title: 'Mutta mitä muuta ne teki?',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T22:00:00+03:00'),
		endAt: new Date('2021-04-21T00:00:00+03:00'),
		title: 'Doom, Gloom and Red sunrise',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T22:00:00+03:00'),
		endAt: new Date('2021-04-19T00:00:00+03:00'),
		title: 'Luontoradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T04:00:00+03:00'),
		endAt: new Date('2021-04-29T07:00:00+03:00'),
		title: 'Punkahtavaa puhekirjelmöintiä',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T19:00:00+03:00'),
		endAt: new Date('2021-04-16T21:00:00+03:00'),
		title: 'Iltameteliä',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T00:00:00+03:00'),
		endAt: new Date('2021-04-16T07:00:00+03:00'),
		title: 'Defiradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T18:00:00+03:00'),
		endAt: new Date('2021-04-17T20:00:00+03:00'),
		title: 'Levykansien arvostelijat',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T11:00:00+03:00'),
		endAt: new Date('2021-04-23T13:00:00+03:00'),
		title: 'Radio Moreenin Klassiset tunnit',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T14:00:00+03:00'),
		endAt: new Date('2021-04-20T15:00:00+03:00'),
		title: 'Järjestöradio: Musta tuntuu radiolta',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T14:00:00+03:00'),
		endAt: new Date('2021-04-19T15:00:00+03:00'),
		title: 'Järjestöradio: Viestintätohtori Jullin vastaanotolla',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T14:00:00+03:00'),
		endAt: new Date('2021-04-22T15:00:00+03:00'),
		title: 'Järjestöradio: Kielitaitoisten kevätkimara',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T13:00:00+03:00'),
		endAt: new Date('2021-04-26T14:00:00+03:00'),
		title: 'Järjestöradio: Montako puujalkavitsiä keksit raksasta?',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T14:00:00+03:00'),
		endAt: new Date('2021-04-23T15:00:00+03:00'),
		title: 'Järjestöradio: TAHRAdio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T14:00:00+03:00'),
		endAt: new Date('2021-04-26T15:00:00+03:00'),
		title: 'Järjestöradio: Lähetysradiolähetys',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T14:00:00+03:00'),
		endAt: new Date('2021-04-21T15:00:00+03:00'),
		title: 'Järjestöradio: Gambinaradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T13:00:00+03:00'),
		endAt: new Date('2021-04-29T14:00:00+03:00'),
		title: 'Yritystunti: TEK',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T13:00:00+03:00'),
		endAt: new Date('2021-04-28T14:00:00+03:00'),
		title: 'Yritystunti: Solita',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T13:00:00+03:00'),
		endAt: new Date('2021-04-27T14:00:00+03:00'),
		title: 'Yritystunti: Eficode',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T13:00:00+03:00'),
		endAt: new Date('2021-04-23T14:00:00+03:00'),
		title: 'Yritystunti: TREY',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T13:00:00+03:00'),
		endAt: new Date('2021-04-21T14:00:00+03:00'),
		title: 'Yritystunti: Futurice',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T13:00:00+03:00'),
		endAt: new Date('2021-04-20T14:00:00+03:00'),
		title: 'Yritystunti: Gofore',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T13:00:00+03:00'),
		endAt: new Date('2021-04-19T14:00:00+03:00'),
		title: 'Yritystunti: Netum',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T14:00:00+03:00'),
		endAt: new Date('2021-04-28T15:00:00+03:00'),
		title: 'Järjestöradio: Psykologiaa, pelleilyä ja paljon muuta',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T09:00:00+03:00'),
		endAt: new Date('2021-04-19T11:00:00+03:00'),
		title: 'Huomenta Wappu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T09:00:00+03:00'),
		endAt: new Date('2021-04-16T11:00:00+03:00'),
		title: 'Huomenta Wappu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T17:00:00+03:00'),
		endAt: new Date('2021-04-19T18:00:00+03:00'),
		title: 'Wapputiimi',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T20:00:00+03:00'),
		endAt: new Date('2021-04-18T22:00:00+03:00'),
		title: 'Saraniemonen',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T20:00:00+03:00'),
		endAt: new Date('2021-04-25T22:00:00+03:00'),
		title: 'Saraniemonen',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T22:00:00+03:00'),
		endAt: new Date('2021-04-24T00:00:00+03:00'),
		title: 'Memes, Murder and ASMR',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T00:00:00+03:00'),
		endAt: new Date('2021-04-22T07:00:00+03:00'),
		title: 'Nousevan auringon radio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T00:00:00+03:00'),
		endAt: new Date('2021-04-19T07:00:00+03:00'),
		title: 'Mätien tomaattien leffamaratooni',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-21T20:00:00+03:00'),
		endAt: new Date('2021-04-21T22:00:00+03:00'),
		title: 'Uniset nukkujat',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T19:00:00+03:00'),
		endAt: new Date('2021-04-27T21:00:00+03:00'),
		title: 'Nössöradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T11:00:00+03:00'),
		endAt: new Date('2021-04-18T13:00:00+03:00'),
		title: 'Työelämä on laiffii!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T07:00:00+03:00'),
		endAt: new Date('2021-04-24T09:00:00+03:00'),
		title: 'Roadtrip-radio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-28T22:00:00+03:00'),
		endAt: new Date('2021-04-29T00:00:00+03:00'),
		title: 'Pikkulauantai',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T15:00:00+03:00'),
		endAt: new Date('2021-04-20T17:00:00+03:00'),
		title: 'Oispa festarit: Lisää lehmänkelloa!',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-16T17:00:00+03:00'),
		endAt: new Date('2021-04-16T19:00:00+03:00'),
		title: 'Kurkistus turpoon',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-18T07:00:00+03:00'),
		endAt: new Date('2021-04-18T09:00:00+03:00'),
		title: 'Sanojen parsintaa',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T09:00:00+03:00'),
		endAt: new Date('2021-04-17T11:00:00+03:00'),
		title: 'tupsun aamuhassuttelu: Lauantaispesiaali',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-20T17:00:00+03:00'),
		endAt: new Date('2021-04-20T18:00:00+03:00'),
		title: 'Wapputiimi',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T11:00:00+03:00'),
		endAt: new Date('2021-04-26T13:00:00+03:00'),
		title: 'Student exchange semester in Finland during a pandemic',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-17T13:00:00+03:00'),
		endAt: new Date('2021-04-17T15:00:00+03:00'),
		title: 'gtaradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-23T19:00:00+03:00'),
		endAt: new Date('2021-04-23T22:00:00+03:00'),
		title: 'Arvostelutoimisto',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T15:00:00+03:00'),
		endAt: new Date('2021-04-19T17:00:00+03:00'),
		title: 'YTHS kyselytunti',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-19T11:00:00+03:00'),
		endAt: new Date('2021-04-19T13:00:00+03:00'),
		title: 'Filleriradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T14:00:00+03:00'),
		endAt: new Date('2021-04-27T15:00:00+03:00'),
		title: 'Järjestöradio: Afternoon TEA',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-22T13:00:00+03:00'),
		endAt: new Date('2021-04-22T14:00:00+03:00'),
		title: 'Järjestöradio: Vähäkohinainen esivahvistin',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T14:00:00+03:00'),
		endAt: new Date('2021-04-29T15:00:00+03:00'),
		title: 'Järjestöradio: Pakastekasvikset, patongiti ja kuivapatonki',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-25T00:00:00+03:00'),
		endAt: new Date('2021-04-25T07:00:00+03:00'),
		title: 'P̷̨͎̝᷂̺͎͚͆͗͢ę̵̤͈͎ͣ͒ͯ᷁ͭ̀᷃͂̑̚͟k̵̳̞̽̏͒᷁̂͑̉͋k̵̢̙͓̬͇͉̠ͭ̈͢a̴̧̱̪̾̍͆̅̽́͘ Ș̷̨᷿̱̹̈́̽ͪ͂͆̏ͤͨ̌̃͜ǎ̷̹᷄ͭ︡̚u̵͔̼͓̖᷂ͣ︡̎̀᷉͢r̷̡̯̜̪̤̫̬̯᷄́́̄͑́᷅͘͝ơ̸̡̫͕͔͔᷿̫ͩ͟n̵̤̺̖̪̳̹ͯ̈́ͥ͢͟͢͞ȉ̴̺̩̺᷿̪᷊ͪ͜n̶̢͇᷂͖̆͗ y̸̖̞̬̞᷂̮̤̬̕͟͜ö̵̭̗̖̙͕̺̱̟̺̗̀᷅᷈͒ͫ͆ͩ̄r̷͓̺̗͇̻̫̦͌ͯ͛ͪ᷈̓︣ͯ̽a̸̡̨̢̤̞̹̭͈̣̐̄ͤ̔᷀̎̓͜d̸̼̟͉͕͈᷾̈͛ͬ́͘̚͟͡ỉ̸̬̤̟̺̑o̴̗᷂͂́ͧ͐᷀̂͋᷇̈̕',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T15:00:00+03:00'),
		endAt: new Date('2021-04-24T17:00:00+03:00'),
		title: 'main_radio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T00:00:00+03:00'),
		endAt: new Date('2021-04-27T07:00:00+03:00'),
		title: 'Näköradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-24T09:00:00+03:00'),
		endAt: new Date('2021-04-24T11:00:00+03:00'),
		title: 'Breakfast With The Simpsons',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T18:00:00+03:00'),
		endAt: new Date('2021-04-26T20:00:00+03:00'),
		title: 'Vaihtoehtoinen villapaitaradio',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-29T18:00:00+03:00'),
		endAt: new Date('2021-04-29T20:00:00+03:00'),
		title: 'Yksilön voima',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-27T09:00:00+03:00'),
		endAt: new Date('2021-04-27T11:00:00+03:00'),
		title: 'tupsun aamuhassuttelu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-26T09:00:00+03:00'),
		endAt: new Date('2021-04-26T11:00:00+03:00'),
		title: 'tupsun aamuhassuttelu',
		createdAt: new Date(),
		updatedAt: new Date()
	  },
	  {
		startAt: new Date('2021-04-30T00:00:00+03:00'),
		endAt: new Date('2021-04-30T07:00:00+03:00'),
		title: 'Science of Fiction',
		createdAt: new Date(),
		updatedAt: new Date()
	  }
	], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Programs', {
	    startAt: {
	      [Sequelize.Op.between]: [
			    new Date('2021-04-15T00:00:00+03:00'),
			    new Date('2021-04-30T23:59:59+03:00')
		    ]
		  }
	  }, {});
  }
};
