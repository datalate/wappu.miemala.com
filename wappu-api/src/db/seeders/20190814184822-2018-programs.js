'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Programs', [
      {
        startAt: new Date('2018-04-17T22:00:00+03:00'),
        endAt: new Date('2018-04-18T00:00:00+03:00'),
        title: 'SAMPLERADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T22:00:00+03:00'),
        endAt: new Date('2018-04-20T00:00:00+03:00'),
        title: 'SAMPLERADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T00:00:00+03:00'),
        endAt: new Date('2018-04-28T07:00:00+03:00'),
        title: 'Ompeluseura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T07:00:00+03:00'),
        endAt: new Date('2018-04-21T09:00:00+03:00'),
        title: 'Alkulukupiiri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T21:00:00+03:00'),
        endAt: new Date('2018-04-21T00:00:00+03:00'),
        title: 'Sceneradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T20:00:00+03:00'),
        endAt: new Date('2018-04-25T00:00:00+03:00'),
        title: 'Rytmimuna 5v Juhlalähetys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T14:00:00+03:00'),
        endAt: new Date('2018-04-26T16:00:00+03:00'),
        title: 'Arvostelutoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T14:00:00+03:00'),
        endAt: new Date('2018-04-27T16:00:00+03:00'),
        title: 'Arvostelutoimisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T07:00:00+03:00'),
        endAt: new Date('2018-04-29T09:00:00+03:00'),
        title: 'Nousukiito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T09:00:00+03:00'),
        endAt: new Date('2018-04-29T11:00:00+03:00'),
        title: 'Sana-analyysi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T00:00:00+03:00'),
        endAt: new Date('2018-04-23T07:00:00+03:00'),
        title: 'Kvanttipuu 5 - Pelinjohtaja lakkoilee takaisin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-17T20:00:00+03:00'),
        endAt: new Date('2018-04-17T22:00:00+03:00'),
        title: 'Pepe&Traxmar: Kommuuni Sessions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T20:00:00+03:00'),
        endAt: new Date('2018-04-27T22:00:00+03:00'),
        title: 'Pepe&Traxmar: Kommuuni Sessions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T09:00:00+03:00'),
        endAt: new Date('2018-04-21T11:00:00+03:00'),
        title: 'AamuTilaRadio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T09:00:00+03:00'),
        endAt: new Date('2018-04-22T11:00:00+03:00'),
        title: 'AamuTilaRadio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T09:00:00+03:00'),
        endAt: new Date('2018-04-28T11:00:00+03:00'),
        title: 'AamuTilaRadio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T14:00:00+03:00'),
        endAt: new Date('2018-04-23T16:00:00+03:00'),
        title: 'Tämä on tärkeää, olen tutkija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T14:00:00+03:00'),
        endAt: new Date('2018-04-24T16:00:00+03:00'),
        title: 'Tämä on tärkeää, olen tutkija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T14:00:00+03:00'),
        endAt: new Date('2018-04-25T16:00:00+03:00'),
        title: 'Tämä on tärkeää, olen tutkija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T22:00:00+03:00'),
        endAt: new Date('2018-04-19T00:00:00+03:00'),
        title: 'Jotain kosmista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T16:00:00+03:00'),
        endAt: new Date('2018-04-27T18:00:00+03:00'),
        title: 'Puolitotuuksia Rockista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T18:00:00+03:00'),
        endAt: new Date('2018-04-29T20:00:00+03:00'),
        title: 'How to English',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T16:00:00+03:00'),
        endAt: new Date('2018-04-25T18:00:00+03:00'),
        title: 'Yhteiskunnallisen musiikin erittäin lyhyt historia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T13:00:00+03:00'),
        endAt: new Date('2018-04-28T15:00:00+03:00'),
        title: 'Contains Strong Language: Englannin kielen ruokottomien ilmaisujen historiaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T07:00:00+03:00'),
        endAt: new Date('2018-04-28T09:00:00+03:00'),
        title: 'Nousevan auringon maan aamu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T09:00:00+03:00'),
        endAt: new Date('2018-04-19T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T09:00:00+03:00'),
        endAt: new Date('2018-04-20T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T09:00:00+03:00'),
        endAt: new Date('2018-04-23T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T11:00:00+03:00'),
        endAt: new Date('2018-04-21T13:00:00+03:00'),
        title: 'Feel Good Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T00:00:00+03:00'),
        endAt: new Date('2018-04-24T07:00:00+03:00'),
        title: 'Yksi näistä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T22:00:00+03:00'),
        endAt: new Date('2018-04-24T00:00:00+03:00'),
        title: 'Jumipuisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T07:00:00+03:00'),
        endAt: new Date('2018-04-18T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T07:00:00+03:00'),
        endAt: new Date('2018-04-19T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T07:00:00+03:00'),
        endAt: new Date('2018-04-20T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T07:00:00+03:00'),
        endAt: new Date('2018-04-23T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T07:00:00+03:00'),
        endAt: new Date('2018-04-24T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T07:00:00+03:00'),
        endAt: new Date('2018-04-25T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T07:00:00+03:00'),
        endAt: new Date('2018-04-26T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T07:00:00+03:00'),
        endAt: new Date('2018-04-27T09:00:00+03:00'),
        title: 'Curlingspesiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T14:00:00+03:00'),
        endAt: new Date('2018-04-20T16:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T16:00:00+03:00'),
        endAt: new Date('2018-04-20T18:00:00+03:00'),
        title: 'Hyvät uutiset ja sää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T18:00:00+03:00'),
        endAt: new Date('2018-04-26T20:00:00+03:00'),
        title: 'Jonnet voi muistaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T18:00:00+03:00'),
        endAt: new Date('2018-04-20T19:00:00+03:00'),
        title: 'Havuja? Heviä!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T09:00:00+03:00'),
        endAt: new Date('2018-04-24T11:00:00+03:00'),
        title: 'Taktiset punssipallerot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T09:00:00+03:00'),
        endAt: new Date('2018-04-25T11:00:00+03:00'),
        title: 'Taktiset punssipallerot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T09:00:00+03:00'),
        endAt: new Date('2018-04-26T11:00:00+03:00'),
        title: 'Taktiset punssipallerot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T09:00:00+03:00'),
        endAt: new Date('2018-04-27T11:00:00+03:00'),
        title: 'Taktiset punssipallerot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T15:00:00+03:00'),
        endAt: new Date('2018-04-28T17:00:00+03:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T18:00:00+03:00'),
        endAt: new Date('2018-04-27T20:00:00+03:00'),
        title: 'Euroviisuspesiaali!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T20:00:00+03:00'),
        endAt: new Date('2018-04-18T22:00:00+03:00'),
        title: 'Mättö mättö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T22:00:00+03:00'),
        endAt: new Date('2018-04-27T00:00:00+03:00'),
        title: 'Sinkkumutsin päiväkirjat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T22:00:00+03:00'),
        endAt: new Date('2018-04-30T00:00:00+03:00'),
        title: 'Lopunajan vinyyliklubi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T11:00:00+03:00'),
        endAt: new Date('2018-04-28T13:00:00+03:00'),
        title: 'Kärsimysiskelmää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T22:00:00+03:00'),
        endAt: new Date('2018-04-26T00:00:00+03:00'),
        title: 'Hyvän mielen hoitoradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T00:00:00+03:00'),
        endAt: new Date('2018-04-18T07:00:00+03:00'),
        title: 'Matkustusradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T18:00:00+03:00'),
        endAt: new Date('2018-04-25T20:00:00+03:00'),
        title: 'Deittikoutsit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T20:00:00+03:00'),
        endAt: new Date('2018-04-25T22:00:00+03:00'),
        title: 'Peikkojen tanssitunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T00:00:00+03:00'),
        endAt: new Date('2018-04-20T07:00:00+03:00'),
        title: 'Nykyaika on pilannut historian: Luddiittien yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T20:00:00+03:00'),
        endAt: new Date('2018-04-19T22:00:00+03:00'),
        title: 'Herkkä hetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T20:00:00+03:00'),
        endAt: new Date('2018-04-23T22:00:00+03:00'),
        title: 'Pitsausradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-30T00:00:00+03:00'),
        endAt: new Date('2018-04-30T07:00:00+03:00'),
        title: 'Synteettinen aallonpituus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T19:00:00+03:00'),
        endAt: new Date('2018-04-28T22:00:00+03:00'),
        title: 'EkuDance!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-30T11:00:00+03:00'),
        endAt: new Date('2018-04-30T15:00:00+03:00'),
        title: 'Loppushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T18:00:00+03:00'),
        endAt: new Date('2018-04-18T20:00:00+03:00'),
        title: 'Deittikoutsit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T16:00:00+03:00'),
        endAt: new Date('2018-04-18T18:00:00+03:00'),
        title: 'Feel Good Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T14:00:00+03:00'),
        endAt: new Date('2018-04-18T16:00:00+03:00'),
        title: 'Euroopan myytinmurtajat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T14:00:00+03:00'),
        endAt: new Date('2018-04-19T16:00:00+03:00'),
        title: 'Humanistien nörttiradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T16:00:00+03:00'),
        endAt: new Date('2018-04-29T18:00:00+03:00'),
        title: 'Rasvaa, kissoja ja hiuslakkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T14:00:00+03:00'),
        endAt: new Date('2018-04-29T16:00:00+03:00'),
        title: 'Wappuraatio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T00:00:00+03:00'),
        endAt: new Date('2018-04-27T07:00:00+03:00'),
        title: 'Tekniikan yöradio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-30T07:00:00+03:00'),
        endAt: new Date('2018-04-30T09:00:00+03:00'),
        title: 'Top Radiosuosikit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T11:00:00+03:00'),
        endAt: new Date('2018-04-29T13:00:00+03:00'),
        title: 'Lainasto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T22:00:00+03:00'),
        endAt: new Date('2018-04-23T00:00:00+03:00'),
        title: 'Musiikin rajamailla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T20:00:00+03:00'),
        endAt: new Date('2018-04-22T22:00:00+03:00'),
        title: 'Tein itse ja säästin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T22:00:00+03:00'),
        endAt: new Date('2018-04-29T01:00:00+03:00'),
        title: 'Tuomittu, kivitetty, psykoosissa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T18:00:00+03:00'),
        endAt: new Date('2018-04-24T20:00:00+03:00'),
        title: 'Syvä Purppura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T20:00:00+03:00'),
        endAt: new Date('2018-04-26T22:00:00+03:00'),
        title: 'Syvä Purppura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T00:00:00+03:00'),
        endAt: new Date('2018-04-21T07:00:00+03:00'),
        title: 'Spinni Radio Nightshift',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T18:00:00+03:00'),
        endAt: new Date('2018-04-22T20:00:00+03:00'),
        title: 'Spinnin LIVE-jatkot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T17:00:00+03:00'),
        endAt: new Date('2018-04-19T19:00:00+03:00'),
        title: 'Pekka ja pikaratikka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T11:00:00+03:00'),
        endAt: new Date('2018-04-18T13:00:00+03:00'),
        title: 'Neliosainen trilogia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T11:00:00+03:00'),
        endAt: new Date('2018-04-19T13:00:00+03:00'),
        title: 'Neliosainen trilogia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T11:00:00+03:00'),
        endAt: new Date('2018-04-20T13:00:00+03:00'),
        title: 'Neliosainen trilogia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T11:00:00+03:00'),
        endAt: new Date('2018-04-23T13:00:00+03:00'),
        title: 'Neliosainen trilogia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T01:00:00+03:00'),
        endAt: new Date('2018-04-29T07:00:00+03:00'),
        title: 'TBD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T16:00:00+03:00'),
        endAt: new Date('2018-04-24T18:00:00+03:00'),
        title: 'ATK-peli radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T16:00:00+03:00'),
        endAt: new Date('2018-04-26T18:00:00+03:00'),
        title: 'ATK-peli radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T00:00:00+03:00'),
        endAt: new Date('2018-04-19T07:00:00+03:00'),
        title: 'Are you Sirius?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T11:00:00+03:00'),
        endAt: new Date('2018-04-24T13:00:00+03:00'),
        title: 'Wapputiimin puuhatunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T22:00:00+03:00'),
        endAt: new Date('2018-04-28T00:00:00+03:00'),
        title: 'Koiratarha radalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T13:00:00+03:00'),
        endAt: new Date('2018-04-29T14:00:00+03:00'),
        title: 'TTYY On Air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T11:00:00+03:00'),
        endAt: new Date('2018-04-25T13:00:00+03:00'),
        title: 'Täti ja tytöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T11:00:00+03:00'),
        endAt: new Date('2018-04-26T13:00:00+03:00'),
        title: 'Täti ja tytöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T11:00:00+03:00'),
        endAt: new Date('2018-04-27T13:00:00+03:00'),
        title: 'Täti ja tytöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T13:00:00+03:00'),
        endAt: new Date('2018-04-21T14:00:00+03:00'),
        title: 'To Hell And Back',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-17T14:00:00+03:00'),
        endAt: new Date('2018-04-17T18:00:00+03:00'),
        title: 'Alkushow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T09:00:00+03:00'),
        endAt: new Date('2018-04-18T11:00:00+03:00'),
        title: 'Aamujamit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T07:00:00+03:00'),
        endAt: new Date('2018-04-22T09:00:00+03:00'),
        title: 'Puuvillapelloilla suhisee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-28T17:00:00+03:00'),
        endAt: new Date('2018-04-28T19:00:00+03:00'),
        title: 'La House',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-30T09:00:00+03:00'),
        endAt: new Date('2018-04-30T11:00:00+03:00'),
        title: 'Kyseessä on teekkarijäynä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T00:00:00+03:00'),
        endAt: new Date('2018-04-26T07:00:00+03:00'),
        title: '#Ennen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T19:00:00+03:00'),
        endAt: new Date('2018-04-19T20:00:00+03:00'),
        title: 'To Hell And Back',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T14:00:00+03:00'),
        endAt: new Date('2018-04-21T16:00:00+03:00'),
        title: 'On tullut reissattua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T20:00:00+03:00'),
        endAt: new Date('2018-04-21T22:00:00+03:00'),
        title: 'Maxwellin epäyhtälöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T00:00:00+03:00'),
        endAt: new Date('2018-04-22T07:00:00+03:00'),
        title: 'Elämä sellaisena kuin se on',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T13:00:00+03:00'),
        endAt: new Date('2018-04-23T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T16:00:00+03:00'),
        endAt: new Date('2018-04-23T17:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-24T13:00:00+03:00'),
        endAt: new Date('2018-04-24T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T13:00:00+03:00'),
        endAt: new Date('2018-04-25T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-26T13:00:00+03:00'),
        endAt: new Date('2018-04-26T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-27T13:00:00+03:00'),
        endAt: new Date('2018-04-27T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-18T13:00:00+03:00'),
        endAt: new Date('2018-04-18T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T13:00:00+03:00'),
        endAt: new Date('2018-04-20T14:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T16:00:00+03:00'),
        endAt: new Date('2018-04-19T17:00:00+03:00'),
        title: 'On Air -yritystunti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-19T13:00:00+03:00'),
        endAt: new Date('2018-04-19T14:00:00+03:00'),
        title: 'SAMPLESAMPLERADIO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T22:00:00+03:00'),
        endAt: new Date('2018-04-22T00:00:00+03:00'),
        title: 'Työelämän sankareiden viikonloppu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T16:00:00+03:00'),
        endAt: new Date('2018-04-21T18:00:00+03:00'),
        title: 'Chickadoua Club',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-17T18:00:00+03:00'),
        endAt: new Date('2018-04-17T20:00:00+03:00'),
        title: 'Jussi Kangas goes Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-21T18:00:00+03:00'),
        endAt: new Date('2018-04-21T20:00:00+03:00'),
        title: 'Jussi ja humanisti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T19:00:00+03:00'),
        endAt: new Date('2018-04-23T20:00:00+03:00'),
        title: 'Pullan ja Palleron nostalgiatuokio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-23T17:00:00+03:00'),
        endAt: new Date('2018-04-23T19:00:00+03:00'),
        title: 'Wikiwappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T11:00:00+03:00'),
        endAt: new Date('2018-04-22T13:00:00+03:00'),
        title: 'Toivomuskaivon tyhjennys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-22T13:00:00+03:00'),
        endAt: new Date('2018-04-22T18:00:00+03:00'),
        title: 'Wappuradio Live!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-25T00:00:00+03:00'),
        endAt: new Date('2018-04-25T07:00:00+03:00'),
        title: 'Wappuheilan metsästys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-29T20:00:00+03:00'),
        endAt: new Date('2018-04-29T22:00:00+03:00'),
        title: 'Kukkia ja kielimoukkuja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startAt: new Date('2018-04-20T19:00:00+03:00'),
        endAt: new Date('2018-04-20T21:00:00+03:00'),
        title: '> echo Show',
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
            new Date('2018-04-17T00:00:00+03:00'),
            new Date('2018-04-30T23:59:59+03:00')
          ]}
      },
      {}
    );
  }
};
