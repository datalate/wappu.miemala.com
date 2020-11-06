'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tracks', [
      {
        playedAt: new Date('2019-04-15T14:01:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Battlefield 2 - Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:03:00+03:00'),
        artist: 'Loreen',
        title: 'Euphoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:07:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:11:00+03:00'),
        artist: 'Nauti Radiosta',
        title: 'Wappu Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:16:00+03:00'),
        artist: 'Pikku G feat. Ezkimo & YOR123',
        title: 'Räjähdysvaara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:23:00+03:00'),
        artist: 'Mona Carita',
        title: 'Mikä Fiilis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:29:00+03:00'),
        artist: 'WikiRock',
        title: 'Ritari Ässä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:36:00+03:00'),
        artist: 'Eroottiset Tuliaseet',
        title: 'Kyttä on poliisi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:40:00+03:00'),
        artist: 'Raptori',
        title: 'Minä ja ryhmä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:46:00+03:00'),
        artist: 'Bolat Nurimov',
        title: 'Zyn Zyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:49:00+03:00'),
        artist: 'Lavis Danzos',
        title: 'Tabascoa Pizzaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T14:56:00+03:00'),
        artist: 'matias',
        title: '#dissaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:00:00+03:00'),
        artist: 'Horse Attack Sqwad',
        title: 'Mulla on hevonen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:07:00+03:00'),
        artist: 'Caninus',
        title: 'No Dogs, No Masters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:09:00+03:00'),
        artist: 'Sentenced',
        title: 'The Trooper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:17:00+03:00'),
        artist: 'Darude',
        title: 'Sandstorm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:25:00+03:00'),
        artist: 'Royal Philharmonic Orchestra',
        title: 'The Pink Panther: The Pink Panther Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:31:00+03:00'),
        artist: 'Walt Disney',
        title: 'Hakuna Matata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:40:00+03:00'),
        artist: 'Jumal Velho',
        title: 'Bordello',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:46:00+03:00'),
        artist: 'Devin Townsend Project',
        title: 'Offer Your Light',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T15:51:00+03:00'),
        artist: 'Business City',
        title: 'Hiihtää Hiihtää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:00:00+03:00'),
        artist: 'Jason Seizures feat. Hzi',
        title: 'Rumat kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:06:00+03:00'),
        artist: 'Airbourne',
        title: 'Too Much, Too Young, Too Fast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:12:00+03:00'),
        artist: 'Turisas',
        title: 'To Holmgard And Beyond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:19:00+03:00'),
        artist: 'RotFront',
        title: 'YouTube Song',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:26:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Ajoratamaalaus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:35:00+03:00'),
        artist: 'Lady Gaga',
        title: 'Donatella',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:42:00+03:00'),
        artist: 'Zeal & Ardor',
        title: 'We Can\'t Be Found',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:49:00+03:00'),
        artist: 'Eläkeläiset',
        title: 'Sieluni huutaa humppaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:52:00+03:00'),
        artist: 'Discharge',
        title: 'I Won\'t Subscribe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T16:55:00+03:00'),
        artist: 'Anssi Tikanmäki',
        title: 'Savolainen Metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:03:00+03:00'),
        artist: 'Ensiferum',
        title: 'By the Dividing Stream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:10:00+03:00'),
        artist: 'Saimaa',
        title: 'Sataprosenttinen suoritus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:19:00+03:00'),
        artist: 'Kuolleet Intiaanit',
        title: 'Asioita toimittelin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:24:00+03:00'),
        artist: 'Lapinlahden Linnut',
        title: 'Perse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:29:00+03:00'),
        artist: 'Manowar',
        title: 'Wheels of Fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:37:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Salaa tupakalle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:45:00+03:00'),
        artist: 'Ismo Alanko',
        title: 'Mitä se mulle kuuluu mitä mä teen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:52:00+03:00'),
        artist: 'Kari Peitsamon Skootteri',
        title: 'Takaisin Ivaloon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T17:56:00+03:00'),
        artist: 'Frank Zappa',
        title: 'Be in My Video',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T18:04:00+03:00'),
        artist: 'Haddaway',
        title: 'What Is Love?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T18:12:00+03:00'),
        artist: 'WikiRock',
        title: 'Sudenkorennot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T18:22:00+03:00'),
        artist: 'Popeda',
        title: 'Lihaa ja perunaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T18:34:00+03:00'),
        artist: 'Rival Sons',
        title: 'Get Mine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T18:44:00+03:00'),
        artist: 'Paasikiventie',
        title: 'Static Dim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T18:53:00+03:00'),
        artist: 'Alkaline Trio',
        title: 'I Wanna Be A Warhol',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:05:00+03:00'),
        artist: 'Stig',
        title: 'Roy Orbison',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:12:00+03:00'),
        artist: 'Stam1na',
        title: 'Likainen parketti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:24:00+03:00'),
        artist: 'Santa Cruz',
        title: 'Aiming High',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:32:00+03:00'),
        artist: 'Flogging Molly',
        title: 'Drunken Lullabies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:43:00+03:00'),
        artist: 'Earth, Wind & Fire',
        title: 'September',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:50:00+03:00'),
        artist: 'Grover Washington, Jr. with Bill Withers',
        title: 'Just the Two of Us',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T19:58:00+03:00'),
        artist: 'Slayer',
        title: 'Raining Blood',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:06:00+03:00'),
        artist: 'Kiveskives',
        title: 'Posti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:06:00+03:00'),
        artist: 'Pelican',
        title: 'Deny the Absolute',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:15:00+03:00'),
        artist: 'Slint',
        title: 'Breadcrumb Trail',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:22:00+03:00'),
        artist: 'Boris',
        title: 'Rattlesnake',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:27:00+03:00'),
        artist: 'Joy Division',
        title: 'Transmission',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:32:00+03:00'),
        artist: 'Sólstafir',
        title: 'Draumfari',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:37:00+03:00'),
        artist: 'Musta Paraati',
        title: 'Romanssi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:44:00+03:00'),
        artist: 'The Birthday Party',
        title: 'Sonny\'s Burning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:50:00+03:00'),
        artist: 'Isis',
        title: 'Dulcinea',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T20:58:00+03:00'),
        artist: 'God Is an Astronaut',
        title: 'Fire Flies and Empty Skies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:03:00+03:00'),
        artist: 'The Fall',
        title: 'Totally Wired',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:09:00+03:00'),
        artist: 'Big Black',
        title: 'L Dopa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:11:00+03:00'),
        artist: 'Russian Circles',
        title: 'Deficit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:21:00+03:00'),
        artist: 'Tool',
        title: 'Forty Six & 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:29:00+03:00'),
        artist: 'Tina Turner',
        title: 'We Don\'t Need Another Hero (Thunderdome)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:35:00+03:00'),
        artist: 'Bauhaus',
        title: 'Dark Entries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:40:00+03:00'),
        artist: 'My Bloody Valentine',
        title: 'You Made Me Realise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:45:00+03:00'),
        artist: 'Wire',
        title: 'I Am the Fly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T21:52:00+03:00'),
        artist: 'Swans',
        title: 'Screen Shot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:06:00+03:00'),
        artist: 'RotFront',
        title: 'Sovietoblaster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:08:00+03:00'),
        artist: 'Balkan Beat Box',
        title: 'War Again',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:13:00+03:00'),
        artist: 'Gogol Bordello',
        title: 'Wonderlust King',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:21:00+03:00'),
        artist: 'Fanfare Ciocărlia',
        title: '007 (James Bond Theme)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:29:00+03:00'),
        artist: 'Mahala Rai Banda',
        title: 'L\'homme qui boit (The Man Who Drinks)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:36:00+03:00'),
        artist: 'Taraf de Haïdouks & Kočani Orkestar',
        title: 'I Am a Gigolo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:41:00+03:00'),
        artist: 'Mike Patton',
        title: 'Che notte!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:46:00+03:00'),
        artist: 'Shantel',
        title: 'Disko Partizani',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T22:53:00+03:00'),
        artist: 'Esma Redžepova',
        title: 'Chaje Shukarije',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:02:00+03:00'),
        artist: 'Russkaja',
        title: 'Get Lucky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:10:00+03:00'),
        artist: 'Gogol Bordello',
        title: 'Harem in Tuscany (Taranta)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:18:00+03:00'),
        artist: 'Hot 8 Brass Band',
        title: 'It\'s Real',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:21:00+03:00'),
        artist: 'Opa Cupa',
        title: 'Neelia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:27:00+03:00'),
        artist: 'Alamaailman Vasarat',
        title: 'Luu messingillä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:35:00+03:00'),
        artist: 'Lou Dalfin',
        title: 'Occitania E Basta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:42:00+03:00'),
        artist: 'Dubioza kolektiv',
        title: 'Free.mp3 (The Pirate Bay Song)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:48:00+03:00'),
        artist: 'OMFO',
        title: 'Magic Mamaglia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:52:00+03:00'),
        artist: 'Fanfare Ciocărlia',
        title: 'Born to Be Wild',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-15T23:57:00+03:00'),
        artist: 'Russkaja',
        title: 'Wake Me Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T00:03:00+03:00'),
        artist: 'Bomfunk MC\'s',
        title: 'Super Electric',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T00:16:00+03:00'),
        artist: 'Dxxxa D & The Boys',
        title: 'Aikuinen mies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T00:23:00+03:00'),
        artist: 'Tähtiportti',
        title: '\'Yllätys\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T00:32:00+03:00'),
        artist: 'Type O Negative',
        title: 'We Hate Everyone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T00:42:00+03:00'),
        artist: 'Kavinsky',
        title: 'Nightcall',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T00:52:00+03:00'),
        artist: 'Kuusumun Profeetta',
        title: 'Ei aurinko milloinkaan laske',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T01:03:00+03:00'),
        artist: 'Risto',
        title: 'Levy-yhtiön jätkät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T01:09:00+03:00'),
        artist: 'Massive Attack',
        title: 'Paradise Circus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T01:20:00+03:00'),
        artist: 'Kendrick Lamar feat. George Clinton & Thundercat',
        title: 'Wesley’s Theory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T02:38:00+03:00'),
        artist: 'Death Hawks',
        title: 'Grim-Eyed Goat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T02:42:00+03:00'),
        artist: 'Godspeed You Black Emperor!',
        title: 'Storm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T03:08:00+03:00'),
        artist: 'Death Grips',
        title: 'Hacker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T03:21:00+03:00'),
        artist: 'Misfits',
        title: 'Skulls',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T03:28:00+03:00'),
        artist: 'Gorillaz',
        title: 'Empire Ants',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T03:39:00+03:00'),
        artist: '2814',
        title: '恢复',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T03:52:00+03:00'),
        artist: 'Everything Everything',
        title: 'No Reptiles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T04:08:00+03:00'),
        artist: 'Horse Attack Sqwad',
        title: 'Mun hevoseni kuoli pt. 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T04:17:00+03:00'),
        artist: 'Kuusumun Profeetta',
        title: 'Tanssi hänelle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T04:29:00+03:00'),
        artist: 'New Order',
        title: 'Blue Monday \'88',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T04:40:00+03:00'),
        artist: 'Death Grips',
        title: 'The Fever (Aye Aye)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T04:49:00+03:00'),
        artist: 'Chef',
        title: 'Chocolate Salty Balls (P.S. I Love You)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T04:56:00+03:00'),
        artist: 'Bonobo',
        title: 'Kiara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:04:00+03:00'),
        artist: 'Shift K3y, Taiki Nulight',
        title: 'SCR4RY (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:08:00+03:00'),
        artist: 'PopZickle',
        title: 'Alien',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:09:00+03:00'),
        artist: 'Wittyboy',
        title: 'Operatic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:09:00+03:00'),
        artist: 'Wayv D',
        title: 'Driver (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:12:00+03:00'),
        artist: 'Rawz, Protrak',
        title: 'Giving Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:16:00+03:00'),
        artist: 'Coco',
        title: 'Gimme The Mic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:21:00+03:00'),
        artist: 'Blacks feat. Fudz',
        title: 'Drop Out',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:23:00+03:00'),
        artist: 'Griminal',
        title: 'New Shit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:25:00+03:00'),
        artist: 'Spentshellfeat. YGG, Manga Saint Hilare, GHSTLY XXVII, Safone, Joso Sick, Kamakaze & Flowdan',
        title: 'Gridlock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:28:00+03:00'),
        artist: 'Manga',
        title: 'Stop, drop and roll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:32:00+03:00'),
        artist: 'Salem',
        title: 'King Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:40:00+03:00'),
        artist: 'White Ring &  oOoOO',
        title: 'Roses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:43:00+03:00'),
        artist: 'oOoOO',
        title: 'Mouchette',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:51:00+03:00'),
        artist: 'Vektoroid',
        title: 'Godhead Perfect Sun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:52:00+03:00'),
        artist: 'MACROS 82-99',
        title: 'Cool Soda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:54:00+03:00'),
        artist: 'bl00dwave',
        title: 'Nothing Lasts Forever',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T05:58:00+03:00'),
        artist: 'SAINT PEPSI',
        title: 'Walking Talking',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:01:00+03:00'),
        artist: 'The Soulmate Project',
        title: 'Swinging & Dancing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:04:00+03:00'),
        artist: 'Jamie Berry',
        title: 'Sweet Rascal (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:05:00+03:00'),
        artist: 'BMVT',
        title: 'Marie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:10:00+03:00'),
        artist: 'Marc Spieler',
        title: 'Breakfast Club',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:12:00+03:00'),
        artist: 'Johnny Lectro',
        title: 'Who\'s That (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:15:00+03:00'),
        artist: 'Shigeto',
        title: 'Detroit Part II (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:20:00+03:00'),
        artist: 'Stavroz',
        title: 'Gold Town (Original Mi)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:20:00+03:00'),
        artist: 'Stavroz',
        title: 'Gold Town (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:25:00+03:00'),
        artist: 'Hidden Spheres',
        title: 'Waiting Waiting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:31:00+03:00'),
        artist: 'Social Disco Club, Greg Wilson',
        title: 'The Way You Move (Greg Wilson Version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:37:00+03:00'),
        artist: 'Chuggin Edits, Limpodisco',
        title: 'I Know, I Know (Limpodisco Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:40:00+03:00'),
        artist: 'Moon Rocket',
        title: 'Mysterious Walk Of Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:46:00+03:00'),
        artist: 'De Hofnar, Felix Jaehn',
        title: 'Valvé (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:49:00+03:00'),
        artist: 'Deep Chills',
        title: 'Summerbreeze',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:51:00+03:00'),
        artist: 'Dizzy',
        title: 'DIMMI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:55:00+03:00'),
        artist: 'Mozambo',
        title: 'Wake Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T06:58:00+03:00'),
        artist: 'Tortuga',
        title: 'Saxy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:08:00+03:00'),
        artist: 'Poolside',
        title: 'Which Way To Paradise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:14:00+03:00'),
        artist: 'Édith Piaf',
        title: 'Notre-Dame de Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:20:00+03:00'),
        artist: 'Weezer',
        title: 'Sweet Dreams (Are Made Of This)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:32:00+03:00'),
        artist: 'Young Gun Silver Fox',
        title: 'Midnight in Richmond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:41:00+03:00'),
        artist: 'Pomplamoose',
        title: 'Jamirobeegees Mashup',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:48:00+03:00'),
        artist: 'Loiriplukari',
        title: 'Fuengirola',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T07:58:00+03:00'),
        artist: 'Biffy Clyro',
        title: 'Re-arrange',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:08:00+03:00'),
        artist: 'Tori Amos',
        title: 'Cornflake Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:19:00+03:00'),
        artist: 'Sapattivuosi',
        title: 'Maalaistyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:26:00+03:00'),
        artist: 'Propagandhi',
        title: 'Victory Lap',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:33:00+03:00'),
        artist: 'AC/DC',
        title: 'Dirty Deeds Done Dirt Cheap',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:42:00+03:00'),
        artist: 'Rammstein',
        title: 'Los',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:53:00+03:00'),
        artist: 'The Beths',
        title: 'Great No One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T08:58:00+03:00'),
        artist: 'The Lemonheads',
        title: 'Into Your Arms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:04:00+03:00'),
        artist: 'Jamiroquai',
        title: 'Journey to Arnhemland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:12:00+03:00'),
        artist: 'Gil Scott‐Heron',
        title: 'The Revolution Will Not Be Televised',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:19:00+03:00'),
        artist: 'Marcus Miller',
        title: 'Revelation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:27:00+03:00'),
        artist: 'Chick Corea Elektric Band',
        title: 'Got a Match?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:38:00+03:00'),
        artist: 'Tower of Power',
        title: 'Do It With Soul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:47:00+03:00'),
        artist: 'Sere',
        title: 'Nää paikat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T09:54:00+03:00'),
        artist: 'Snarky Puppy with Magda Giannikou',
        title: 'Amour T\'es Là',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:02:00+03:00'),
        artist: 'Kikattava Kakkiainen',
        title: '123Kaakao',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:08:00+03:00'),
        artist: 'Billy Cobham',
        title: 'Snoopy’s Search / Red Baron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:19:00+03:00'),
        artist: 'Kamasi Washington',
        title: 'Integrity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:29:00+03:00'),
        artist: 'KNOWER',
        title: 'Hanging On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:37:00+03:00'),
        artist: 'Chic',
        title: 'Dance, Dance, Dance (Yowsah, Yowsah, Yowsah)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:52:00+03:00'),
        artist: 'Torvikopla, Teekkarikuoro',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T10:58:00+03:00'),
        artist: 'The Dave Brubeck Quartet',
        title: 'Unsquare Dance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:02:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:09:00+03:00'),
        artist: 'Ismo Alanko',
        title: 'Rokin kreivi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:15:00+03:00'),
        artist: 'WÖYH!',
        title: 'Rapuarmeija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:20:00+03:00'),
        artist: 'Ville Valo & Tommi Viksten',
        title: 'Kun minä kotoani läksin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:25:00+03:00'),
        artist: 'Clifters',
        title: 'Mut Murhaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:34:00+03:00'),
        artist: 'Trad.Attack!',
        title: 'Talgo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:39:00+03:00'),
        artist: 'Porcupine Tree',
        title: 'Open Car',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:47:00+03:00'),
        artist: 'Marko Haavisto & Poutahaukat',
        title: 'Paha vaanii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T11:51:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'Grand Ball',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:01:00+03:00'),
        artist: 'Aamupojat',
        title: 'Eurodance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:12:00+03:00'),
        artist: 'Eilert Pilarm',
        title: 'Jailhouse Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:18:00+03:00'),
        artist: 'CMX',
        title: 'Timanttirumpu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:23:00+03:00'),
        artist: 'Raptori',
        title: 'Rane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:31:00+03:00'),
        artist: 'Eroottiset Tuliaseet',
        title: 'Mä en tahdo sua enää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:38:00+03:00'),
        artist: 'Sabaton',
        title: 'The Last Stand',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:45:00+03:00'),
        artist: 'Eläkeläiset',
        title: 'Das Model',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:51:00+03:00'),
        artist: 'Rehupiikles',
        title: 'Minen tykkää maksaloorasta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T12:58:00+03:00'),
        artist: 'YUP',
        title: 'Keittoruoka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T13:06:00+03:00'),
        artist: 'Fröbelin Palikat',
        title: 'Huugi-guugi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T13:11:00+03:00'),
        artist: 'Pää kii',
        title: 'Nyt skipataan kahvit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T13:20:00+03:00'),
        artist: 'Berlin',
        title: 'Take My Breath Away (Love Theme from Top Gun)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T13:27:00+03:00'),
        artist: 'Tehosekoitin',
        title: 'Kaikki nuoret tyypit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T13:40:00+03:00'),
        artist: 'Marko Haavisto & Poutahaukat',
        title: 'Paha vaanii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T13:50:00+03:00'),
        artist: 'Master Blaster',
        title: 'How Old R U? (radio edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T14:01:00+03:00'),
        artist: 'Pikku G feat. Sophie',
        title: 'Romeo ja Julia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T14:11:00+03:00'),
        artist: 'Miljoonasade',
        title: 'Meitä jyrätään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T14:21:00+03:00'),
        artist: 'Sanni',
        title: '2080-luvulla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T14:28:00+03:00'),
        artist: 'Shitter Limited',
        title: 'Vittu mä tapan sut Iiro Viinanen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T14:43:00+03:00'),
        artist: 'Led Zeppelin',
        title: 'Good Times Bad Times',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T14:57:00+03:00'),
        artist: 'Johnny Cash',
        title: 'The Man Comes Around',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:14:00+03:00'),
        artist: 'Paleface',
        title: 'Helsinki - Shangri-La',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:24:00+03:00'),
        artist: 'Antti Tuisku',
        title: 'Rahan takii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:26:00+03:00'),
        artist: 'Kube Feat. Adi L Hasla & Mäkki',
        title: 'Duuni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:35:00+03:00'),
        artist: 'Johnny Cash',
        title: 'Rusty Cage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:43:00+03:00'),
        artist: 'Sabaton',
        title: 'No Bullets Fly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:50:00+03:00'),
        artist: 'Tom Petty and the Heartbreakers',
        title: 'Runnin\' Down a Dream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T15:56:00+03:00'),
        artist: 'Infected Mushroom',
        title: 'Saeed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:03:00+03:00'),
        artist: 'Robin',
        title: 'Onnellinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:08:00+03:00'),
        artist: 'Sima',
        title: 'Semihyvä boogie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:15:00+03:00'),
        artist: 'Matti ja Teppo',
        title: 'Idän pikajuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:21:00+03:00'),
        artist: 'Tommi Läntinen',
        title: 'Kevät ja minä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:26:00+03:00'),
        artist: 'Mighty 44 Feat. Anna Nordell',
        title: 'This Love Ain\'t Going On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:38:00+03:00'),
        artist: 'Felix Zenger',
        title: 'Suumusaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:47:00+03:00'),
        artist: 'So Called Plan',
        title: 'Same About The Sorrow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:51:00+03:00'),
        artist: 'Suamenlejjona',
        title: 'Suamalaista lihaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T16:56:00+03:00'),
        artist: 'Ritarikunta',
        title: 'E Del Leen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:07:00+03:00'),
        artist: 'Suurlähettiläät',
        title: 'Maailman Laidalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:13:00+03:00'),
        artist: 'Robin',
        title: 'Paperilennokki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:20:00+03:00'),
        artist: 'The Crash',
        title: 'Star',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:27:00+03:00'),
        artist: 'Pepe Willberg & Paradise',
        title: 'Elämältä Kaiken Sain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:35:00+03:00'),
        artist: 'Robin',
        title: 'Puuttuva palanen (Wildzide remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:43:00+03:00'),
        artist: 'Joel Hallikainen',
        title: 'Kuurankukka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:50:00+03:00'),
        artist: 'Suamenlejjona',
        title: 'Keppana Jouluaamuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T17:57:00+03:00'),
        artist: 'The Freak Fandango Orchestra',
        title: 'Requiem for a Fish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:04:00+03:00'),
        artist: 'Parno Graszt',
        title: 'Odi phenet cino savo / Azt mondja a kisfiam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:11:00+03:00'),
        artist: 'Electric Beat Orgy',
        title: 'Heartwaker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:22:00+03:00'),
        artist: 'Electric Beat Orgy',
        title: 'Through Child\'s Eyes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:25:00+03:00'),
        artist: 'Amaro Suno',
        title: 'Opre gélem pe vúlica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:29:00+03:00'),
        artist: 'Fanfare Ciocărlia',
        title: 'Alili',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:38:00+03:00'),
        artist: '[dunkelbunt] feat. Amsterdam Klezmer Band',
        title: 'La Revedere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:44:00+03:00'),
        artist: 'Katzenjammer',
        title: 'A Bar in Amsterdam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:49:00+03:00'),
        artist: 'Mielu Bibescu',
        title: 'Mite, Mite',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T18:58:00+03:00'),
        artist: 'Shantel vs. Mahala Raï Banda',
        title: 'Iest Sexy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:01:00+03:00'),
        artist: 'Mano Negra',
        title: 'Mala vida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:06:00+03:00'),
        artist: 'Russkaja',
        title: 'Roar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:11:00+03:00'),
        artist: 'Amariszi',
        title: 'Rakia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:17:00+03:00'),
        artist: 'Koza Mostra & Agathonas Lakovidis',
        title: 'Alcohol Is Free',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:22:00+03:00'),
        artist: 'Shukar Collective',
        title: 'Taraf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:28:00+03:00'),
        artist: 'Municipale Balcanica',
        title: 'Orso Bellerino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:33:00+03:00'),
        artist: 'Bela Lakatos & The Gypsy Youth Project',
        title: 'Del o Brishind…',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:39:00+03:00'),
        artist: 'Fanfare Ciocărlia feat. Mitsou & Florentina Sandu',
        title: 'Duj Duj',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:48:00+03:00'),
        artist: 'Jason Seizures feat. Hzi',
        title: 'Rumat kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:49:00+03:00'),
        artist: 'Leningrad',
        title: 'Super Good',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:53:00+03:00'),
        artist: 'Mahala Rai Banda',
        title: 'Na Janes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T19:58:00+03:00'),
        artist: 'Russkaja',
        title: 'Get Lucky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:02:00+03:00'),
        artist: 'Matti & Teppo',
        title: 'Tule jo tänään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:06:00+03:00'),
        artist: 'Amorphis',
        title: 'Come the Spring',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:10:00+03:00'),
        artist: 'Nirvana',
        title: 'Come as You Are',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:14:00+03:00'),
        artist: 'Bamperos',
        title: 'Tule Kanssani kylpyyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:18:00+03:00'),
        artist: 'Anna Hanski',
        title: 'Tule poika uimaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:22:00+03:00'),
        artist: 'Apocalyptica feat. Nina Hagen',
        title: 'Seemann',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:32:00+03:00'),
        artist: 'Apocalyptica feat. Nina Hagen',
        title: 'Seemann',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:33:00+03:00'),
        artist: 'Alestorm',
        title: 'Over the Seas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:36:00+03:00'),
        artist: 'Veronica Maggio',
        title: 'Jag kommer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:40:00+03:00'),
        artist: 'Bo Kaspers orkester',
        title: 'Låt mig komma in',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:44:00+03:00'),
        artist: 'Palast Orchester, Gesang: Max Raabe',
        title: 'Wenn ein junger Mann kommt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:47:00+03:00'),
        artist: 'Johanna Kurkela',
        title: 'Rakkauslaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:52:00+03:00'),
        artist: 'XL 5',
        title: 'Tulennielijä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T20:56:00+03:00'),
        artist: 'Ann Bell Fell',
        title: 'We Come We Go (Swingig Club mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:04:00+03:00'),
        artist: 'Cheek',
        title: 'Tinakenkätyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:07:00+03:00'),
        artist: 'Notkea Rotta',
        title: 'Rautis tulee, ota koppi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:10:00+03:00'),
        artist: 'Loiriplukari',
        title: 'Huomenna hän tulee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:12:00+03:00'),
        artist: 'Jope Ruonansuu',
        title: 'Kekkonen tulee kuin ukkonen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:16:00+03:00'),
        artist: 'Rölli',
        title: 'Tässä tulee Rölli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:18:00+03:00'),
        artist: 'Nylon Beat',
        title: 'Musta joulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:23:00+03:00'),
        artist: 'Horse Attack Sqwad',
        title: 'Grime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:29:00+03:00'),
        artist: 'Alestorm',
        title: 'Captain Morgan\'s Revenge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:35:00+03:00'),
        artist: 'Haloo Helsinki!',
        title: 'Jos mun pokka pettää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:39:00+03:00'),
        artist: 'Alestorm',
        title: 'Nancy the Tavern Wench',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:44:00+03:00'),
        artist: 'Amaranthe',
        title: 'Trinity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:47:00+03:00'),
        artist: 'Avantasia',
        title: 'Master of the Pendulum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:52:00+03:00'),
        artist: 'Pelle Miljoona & Ylivoima',
        title: 'Se tulee uniin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T21:57:00+03:00'),
        artist: 'Ghost',
        title: 'Monstrance Clock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:05:00+03:00'),
        artist: 'Suicide Commando',
        title: 'God Is in the Rain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:13:00+03:00'),
        artist: 'Syncfactory',
        title: 'Blind Eyes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:15:00+03:00'),
        artist: 'Nightwish',
        title: 'Gethsemane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:21:00+03:00'),
        artist: 'The Gothsicles',
        title: 'My Guy Died (Level 12 Human Sorcerer)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:28:00+03:00'),
        artist: 'Combichrist',
        title: 'Get Your Body Beat (album version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:35:00+03:00'),
        artist: 'Protectorate',
        title: 'Proconsul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:41:00+03:00'),
        artist: 'PERTURBATOR',
        title: 'Future Club',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:47:00+03:00'),
        artist: 'King Satan',
        title: 'Sex Magick',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:51:00+03:00'),
        artist: 'Rabia Sorda',
        title: 'Out of Control',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T22:59:00+03:00'),
        artist: 'Suicide Commando',
        title: 'We are transitory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:08:00+03:00'),
        artist: 'Riot Kitten',
        title: 'Compression Ghosts (DJ promo version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:20:00+03:00'),
        artist: 'ErilaZ',
        title: 'Kuolema sinut tänä syksynä korjaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:34:00+03:00'),
        artist: 'Hocico',
        title: 'Flesh to Lacerate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:46:00+03:00'),
        artist: 'Kuroshio',
        title: 'Amplified (2012 version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:49:00+03:00'),
        artist: 'Syncfactory',
        title: 'Panopticon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:53:00+03:00'),
        artist: 'The Gothsicles',
        title: 'Eff the Sun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-16T23:56:00+03:00'),
        artist: 'Fear of Domination',
        title: 'Sick and Beautiful',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:01:00+03:00'),
        artist: 'Ghost Brigade',
        title: 'Clawmaster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:10:00+03:00'),
        artist: 'Swallow The Sun',
        title: 'Stone Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:20:00+03:00'),
        artist: 'Wolfheart',
        title: 'Call of the Winter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:29:00+03:00'),
        artist: 'Medeia',
        title: 'Ascension',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:39:00+03:00'),
        artist: 'møl',
        title: 'Ligament',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:46:00+03:00'),
        artist: 'Nicole',
        title: 'Uneen Kahlitut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T00:53:00+03:00'),
        artist: 'Nipslip',
        title: 'The Hunt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:00:00+03:00'),
        artist: 'Talbot',
        title: 'Hallelucinogen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:07:00+03:00'),
        artist: 'Myrkur',
        title: 'Ulvinde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:13:00+03:00'),
        artist: 'Jinjer',
        title: 'Teacher, Teacher!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:23:00+03:00'),
        artist: 'Drudkh',
        title: 'The Night is Walking Towards Her Throne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:31:00+03:00'),
        artist: 'Sylvaine',
        title: 'Severance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:38:00+03:00'),
        artist: 'Burzum',
        title: 'Dunkelheit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:46:00+03:00'),
        artist: 'Mayhem',
        title: 'Freezing Moon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T01:56:00+03:00'),
        artist: 'Vitrun',
        title: 'Söngurinn sem ómar á milli stjarnanna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:00:00+03:00'),
        artist: 'Carpe Noctem',
        title: 'Söngurinn sem ómar á milli stjarnanna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:03:00+03:00'),
        artist: 'Amenra',
        title: 'Children Of The Eye',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:14:00+03:00'),
        artist: 'Déhà',
        title: 'butterflies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:23:00+03:00'),
        artist: 'Slow',
        title: 'Aurore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:36:00+03:00'),
        artist: 'Gojira',
        title: 'Toxic Garbage Island',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:41:00+03:00'),
        artist: 'Benighted',
        title: 'Hush Little Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:43:00+03:00'),
        artist: 'Alcest',
        title: 'Là où naissent les couleurs nouvelles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:53:00+03:00'),
        artist: 'Benighted',
        title: 'Hush Little Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:53:00+03:00'),
        artist: 'Benighted',
        title: 'Reptilian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T02:59:00+03:00'),
        artist: 'The Great Old Ones',
        title: 'Visions of R\'lyeh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:07:00+03:00'),
        artist: 'Gojira',
        title: 'Lizard Skin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:13:00+03:00'),
        artist: 'Deathspell Omega',
        title: 'Malconfort',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:23:00+03:00'),
        artist: 'Ellende',
        title: 'Der letzte Marsch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:32:00+03:00'),
        artist: 'Negură Bunget',
        title: 'Tărîm vîlhovnicesc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:38:00+03:00'),
        artist: 'Negură Bunget',
        title: 'Schimnicește',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:46:00+03:00'),
        artist: 'The Ocean',
        title: 'Mesoarchaean',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T03:53:00+03:00'),
        artist: 'The Ocean',
        title: 'Permian: The Great Dying',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:06:00+03:00'),
        artist: 'Warning',
        title: 'Footprints',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:16:00+03:00'),
        artist: 'Architechts',
        title: 'Gone With The Wind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:22:00+03:00'),
        artist: 'Saor',
        title: 'The Declaration',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:34:00+03:00'),
        artist: 'Deadly Carnage',
        title: 'Ifene',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:43:00+03:00'),
        artist: 'Falaise',
        title: 'Lost Moments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:50:00+03:00'),
        artist: 'Enisum',
        title: 'Balance of Insanity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T04:57:00+03:00'),
        artist: 'vvilderness',
        title: 'Sól',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:05:00+03:00'),
        artist: 'Collapse of Light',
        title: 'I Will Not Return',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:12:00+03:00'),
        artist: 'Moonspell',
        title: 'Night Eternal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:17:00+03:00'),
        artist: 'Vader',
        title: 'The Word Made Flesh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:21:00+03:00'),
        artist: 'Behemoth',
        title: 'Ora Pro Nobis Lucifer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:31:00+03:00'),
        artist: 'Rotting Christ',
        title: 'Ветры злые',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:36:00+03:00'),
        artist: 'Rotting Christ',
        title: 'Keravnos Kivernitos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:41:00+03:00'),
        artist: 'Celtic Frost',
        title: 'Obscured',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:51:00+03:00'),
        artist: 'Eluveitie',
        title: 'Alesia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T05:57:00+03:00'),
        artist: 'Grift',
        title: 'Den Stora Tystnaden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T06:04:00+03:00'),
        artist: 'In Mourning',
        title: 'The Black Lodge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T06:14:00+03:00'),
        artist: 'Cult of Luna',
        title: 'Ghost Trail',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T06:27:00+03:00'),
        artist: 'Opeth',
        title: 'The Twilight Is My Robe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T06:40:00+03:00'),
        artist: 'Katatonia',
        title: 'Sanction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T06:46:00+03:00'),
        artist: 'Bloodbath',
        title: 'Eaten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T07:05:00+03:00'),
        artist: 'Dave Grohl',
        title: 'Play',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T07:29:00+03:00'),
        artist: 'Everything Everything',
        title: 'Blast Doors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T07:38:00+03:00'),
        artist: 'Ellips',
        title: 'Kotiteatterijärjestelmä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T07:49:00+03:00'),
        artist: 'Tame Impala',
        title: 'List Of People (To Try And Forget About)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T07:57:00+03:00'),
        artist: 'Third Eye Blind',
        title: 'Semi-Charmed Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:06:00+03:00'),
        artist: 'The Prodigy',
        title: 'Light Up The Sky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:10:00+03:00'),
        artist: 'WikiRock',
        title: 'Laser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:19:00+03:00'),
        artist: 'Lemmenpyssyt',
        title: 'K.U.U.M.A.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:27:00+03:00'),
        artist: 'Marbin',
        title: 'Just Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:38:00+03:00'),
        artist: 'Mopo',
        title: 'Tökkö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:44:00+03:00'),
        artist: 'Pomplamoose',
        title: 'Can\'t Stop Feeling Billy Jean\'s Face',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:48:00+03:00'),
        artist: 'Nigel Hall',
        title: 'Gimme A Sign',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:52:00+03:00'),
        artist: 'Edu Kehäkettunen',
        title: 'Kun Pertti Tuli Kylään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T08:59:00+03:00'),
        artist: 'Charly Bliss',
        title: 'Black Hole',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:04:00+03:00'),
        artist: 'The Spencer Lee Band',
        title: 'The Wolf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:08:00+03:00'),
        artist: 'Louis Cole',
        title: 'Weird Part of the Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:17:00+03:00'),
        artist: 'Esperanza Spalding',
        title: 'Ebony And Ivy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:23:00+03:00'),
        artist: 'Bruno Mars',
        title: 'Runaway Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:29:00+03:00'),
        artist: 'Ultra Bra',
        title: 'Pärnu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:38:00+03:00'),
        artist: 'Scott Henderson',
        title: 'Dolemite',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:47:00+03:00'),
        artist: 'Tulenkantajat',
        title: 'Rollofunk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T09:54:00+03:00'),
        artist: 'Torvikopla, Teekkarikuoro',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:04:00+03:00'),
        artist: 'The Jacksons',
        title: 'Shake Your Body (Down to the Ground)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:10:00+03:00'),
        artist: 'The Brecker Brothers',
        title: 'Sneakin’ Up Behind You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:19:00+03:00'),
        artist: 'Idris Muhammad',
        title: 'Crab Apple',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:29:00+03:00'),
        artist: 'Run‐D.M.C.',
        title: 'Walk This Way',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:41:00+03:00'),
        artist: 'Marvin Gaye',
        title: 'Sexual Healing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:49:00+03:00'),
        artist: 'Benny Sings',
        title: 'Get There',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T10:55:00+03:00'),
        artist: 'Jimi Tenor & UMO',
        title: 'Ghost Warrior',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:03:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:06:00+03:00'),
        artist: 'Tasaraha',
        title: 'Lohduton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:11:00+03:00'),
        artist: 'Rölli',
        title: 'Roskanheittäjät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:16:00+03:00'),
        artist: 'Phil Collins',
        title: 'I wish it would rain down',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:24:00+03:00'),
        artist: 'Seppo Boisman',
        title: 'Indiepasi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:34:00+03:00'),
        artist: 'Hertsi putos kyydistä',
        title: 'Lomalta katkolle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:39:00+03:00'),
        artist: 'Samuli Putro',
        title: 'Pysy aina outona',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:40:00+03:00'),
        artist: 'Samuli Putro',
        title: 'Pysy outona',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:45:00+03:00'),
        artist: 'Tuulia',
        title: 'Pohjanmaa (livebootleg 2018)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T11:54:00+03:00'),
        artist: 'Wheel',
        title: 'Wheel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:13:00+03:00'),
        artist: 'Don Johnson Big Band',
        title: 'Strucci',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:18:00+03:00'),
        artist: 'Pääkköset',
        title: 'Joo-Joo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:23:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Tuhlatut päivät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:28:00+03:00'),
        artist: 'Ricky-Tick Big Band ja Julkinen Sana',
        title: 'Kultakellojefet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:35:00+03:00'),
        artist: 'Maria Mattila',
        title: 'Maailma palaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:41:00+03:00'),
        artist: 'Olavi Uusivirta',
        title: 'Mannerlaatat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:47:00+03:00'),
        artist: 'Timo Kämäräinen',
        title: 'John\'s suitcase',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:55:00+03:00'),
        artist: 'Nazareth',
        title: 'Ratzamanaz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T12:56:00+03:00'),
        artist: 'Nazareth',
        title: 'Razamanaz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T13:00:00+03:00'),
        artist: 'Marzi Nyman',
        title: 'Hui hai hullu akka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T13:07:00+03:00'),
        artist: 'The Proclaimers',
        title: 'I\'m Gonna Be (500 Miles)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T13:19:00+03:00'),
        artist: 'Kool and the Gang',
        title: 'Ladies\' Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T13:33:00+03:00'),
        artist: '7. Taivas',
        title: 'Salaisuus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T13:48:00+03:00'),
        artist: 'Huoratron',
        title: 'Sea of Meat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T13:57:00+03:00'),
        artist: 'The Bad Ass Brass Band',
        title: 'Suitsutus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T14:07:00+03:00'),
        artist: 'Puhti',
        title: 'Seesjärvi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T14:12:00+03:00'),
        artist: 'Pekko Käppi & K:H:H:L',
        title: 'Laihan koiran haukku ei kuulu taivaaseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T14:20:00+03:00'),
        artist: 'Asa Masa',
        title: 'Iso Pete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T14:29:00+03:00'),
        artist: 'Finntroll',
        title: 'Trollhammaren',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T14:39:00+03:00'),
        artist: 'Ailu Valle',
        title: 'Sáhtán ja Máhtán',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T14:49:00+03:00'),
        artist: 'WikiRock',
        title: 'Juhannustaika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:02:00+03:00'),
        artist: 'Eläkeläiset',
        title: 'Viinaa hanuristille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:10:00+03:00'),
        artist: 'SMC Lähiörotat',
        title: 'Lähiörotat Skujaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:22:00+03:00'),
        artist: 'Jätkäjätkät',
        title: 'Kallion kierros',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:32:00+03:00'),
        artist: 'Nunnistaparhain',
        title: 'Live on Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:37:00+03:00'),
        artist: 'Nunnistaparhain',
        title: 'Plasmaa ja lumisadetta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:47:00+03:00'),
        artist: 'The Pogues',
        title: 'Dirty Old Town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T15:58:00+03:00'),
        artist: 'DJ Juspo',
        title: 'Kilpikonnavoimaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T16:03:00+03:00'),
        artist: 'Ennio Morricone',
        title: 'The Ecstasy of Gold (The Good, The Bad and the Ugly)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T16:12:00+03:00'),
        artist: 'Huey Lewis and The News',
        title: 'Back to the Future - The Power of Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T16:20:00+03:00'),
        artist: 'Mark Ayres',
        title: 'The Exorcist: Tubular Bells',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T16:33:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: '1492: Conquest of Paradise: 1492: Conquest of Paradise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T16:47:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Titanic: My Heart Will Go on',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T16:57:00+03:00'),
        artist: 'Ennio Morricone',
        title: 'The Man With the Harmonica (Once Upon a Time in the West)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T17:12:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Casino Royale: Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T17:24:00+03:00'),
        artist: 'Mark Ayres',
        title: 'Theme From The Terminator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T17:42:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Schindler\'s List',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T17:50:00+03:00'),
        artist: 'Ray Parker Jr.',
        title: 'Ghostbusters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T17:57:00+03:00'),
        artist: 'John Williams',
        title: 'Duel of the Fates',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T18:06:00+03:00'),
        artist: 'Avicii',
        title: 'Wake Me Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T18:18:00+03:00'),
        artist: 'Chisu',
        title: 'Älä herätä mua unesta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T18:45:00+03:00'),
        artist: 'Machinae Supremacy',
        title: 'Need For Steve',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:00:00+03:00'),
        artist: 'Siiri Nuora',
        title: 'Dodo-sorsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:04:00+03:00'),
        artist: 'Kraftwerk',
        title: 'Showroom dummies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:11:00+03:00'),
        artist: 'Mordi',
        title: 'Cybernoid II [feat Jennie and Kylie]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:28:00+03:00'),
        artist: 'Winx',
        title: 'Nel segno di Winx',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:35:00+03:00'),
        artist: '放課後楽園部',
        title: '放課後革命',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:40:00+03:00'),
        artist: 'Flow',
        title: 'Cha-La Head-Cha-La',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:45:00+03:00'),
        artist: 'Angelique　cast',
        title: 'エルンスト(CV.森川智之) / H20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T19:52:00+03:00'),
        artist: 'Imppu',
        title: 'I Think Your Boyfriend is Gay (Extended Mix) [feat. Stephen Paul Taylor]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:00:00+03:00'),
        artist: 'Harold Arlen',
        title: 'Over the Rainbow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:07:00+03:00'),
        artist: 'Queen',
        title: 'Bohemian Rhapsody',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:16:00+03:00'),
        artist: 'Sleeping Beauty',
        title: 'Once Upon a Dream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:22:00+03:00'),
        artist: 'Bernard Alane',
        title: 'Les Cloches de Notre-Dame',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:31:00+03:00'),
        artist: 'John Williams',
        title: 'Hedwig’s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:38:00+03:00'),
        artist: 'Billy Boyd',
        title: 'The Last Goodbye',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:47:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Star Wars: Attack of the Clones: Across the Stars',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T20:54:00+03:00'),
        artist: 'Michael Giacchino',
        title: 'Strange Days Ahead',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:05:00+03:00'),
        artist: 'Paavo \'Tarantula\' Härkönen',
        title: 'War Against the Machines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:11:00+03:00'),
        artist: 'Paokala',
        title: 'Neutron Highway',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:22:00+03:00'),
        artist: 'Spiikki',
        title: 'Mighty Siibs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:25:00+03:00'),
        artist: 'Flex',
        title: 'Whiplash',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:32:00+03:00'),
        artist: 'Reed',
        title: 'Cyberdragon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:37:00+03:00'),
        artist: 'Mitch van Hayden',
        title: 'Nerd Love (I\'m Your Computer)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:42:00+03:00'),
        artist: 'Rock',
        title: 'Demo tune 10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:48:00+03:00'),
        artist: 'T-101',
        title: 'Unchained',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:52:00+03:00'),
        artist: '8 Bits High',
        title: 'Beyond Impossible',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:56:00+03:00'),
        artist: 'Agemixer',
        title: 'Da shit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T21:59:00+03:00'),
        artist: 'Zardax',
        title: 'Visio 2018',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:02:00+03:00'),
        artist: 'Spiikki',
        title: 'Wabbu Wabbu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:08:00+03:00'),
        artist: 'Danko',
        title: '8 bit boys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:14:00+03:00'),
        artist: 'GOOD & GUNSTIG',
        title: 'Destination (Radio Cut) [feat. Netpoet]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:19:00+03:00'),
        artist: 'Response of Darklite',
        title: 'Aye Aye Captain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:26:00+03:00'),
        artist: 'NecroPolo',
        title: 'Red Pill, Blue Hell (Event Horizon Edition)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:34:00+03:00'),
        artist: 'Paavo \'Tarantula\' Härkönen',
        title: 'Showdown at sunset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:37:00+03:00'),
        artist: 'Abaddon',
        title: 'Join the Cosmic Caravan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:44:00+03:00'),
        artist: 'Anders Enger Jensen',
        title: 'Rainbow Dreams',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T22:52:00+03:00'),
        artist: 'Ferrara',
        title: 'Suitcase Clockwork',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:01:00+03:00'),
        artist: 'Zardax',
        title: 'Proven futile',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:10:00+03:00'),
        artist: 'Oskill8',
        title: 'Houston we have a problem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:12:00+03:00'),
        artist: 'Juzdie',
        title: 'Miss you back',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:18:00+03:00'),
        artist: 'TBB',
        title: 'Orivesi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:25:00+03:00'),
        artist: 'Pinza',
        title: 'Moscow Saint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:32:00+03:00'),
        artist: 'Flex',
        title: 'Neon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:38:00+03:00'),
        artist: 'Dane',
        title: 'Disgrace (Lea Dreamers Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:43:00+03:00'),
        artist: 'LMan',
        title: 'My Life (feat. Sunflower)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:48:00+03:00'),
        artist: 'Franz_koopa',
        title: 'Galletas de frambuesa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:51:00+03:00'),
        artist: 'Taikatuubi',
        title: 'Crustacean scandal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-17T23:59:00+03:00'),
        artist: 'spiikki',
        title: 'Sidit kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:05:00+03:00'),
        artist: 'Dead Kennedys',
        title: 'Saturday Night Holocaust',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:10:00+03:00'),
        artist: 'Kavinsky',
        title: 'Nightcall',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:16:00+03:00'),
        artist: 'Turbonegro',
        title: 'The Midnight NAMBLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:26:00+03:00'),
        artist: 'Arctic Monkeys',
        title: 'Do Me a Favour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:29:00+03:00'),
        artist: 'Misfits',
        title: 'Mommy Can I Go Out And Kill Tonight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:31:00+03:00'),
        artist: 'Children of Bodom',
        title: 'Silent Night, Bodom Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:37:00+03:00'),
        artist: 'CMX',
        title: 'Pimeä maa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:44:00+03:00'),
        artist: 'Guns N\' Roses',
        title: 'Nightrain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:49:00+03:00'),
        artist: 'Kivesveto Go Go',
        title: 'Asioita tapahtuu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:53:00+03:00'),
        artist: 'YUP',
        title: 'Yövieraat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T00:59:00+03:00'),
        artist: 'Metallica',
        title: 'Enter Sandman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:07:00+03:00'),
        artist: 'Iron Maiden',
        title: '2 Minutes to Midnight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:14:00+03:00'),
        artist: 'Electric Six',
        title: 'Devil Nights',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:19:00+03:00'),
        artist: 'Nightwish',
        title: 'Sleeping Sun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:26:00+03:00'),
        artist: 'Roxette',
        title: 'Sleeping in My Car (single edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:31:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Kuolleet kakarat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:38:00+03:00'),
        artist: 'Alice Cooper',
        title: 'The Awakening',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:44:00+03:00'),
        artist: 'R.E.M.',
        title: 'Nightswimming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:49:00+03:00'),
        artist: 'Jukka Ja Jytämimmit',
        title: 'Kuuma yö Kittilässä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T01:58:00+03:00'),
        artist: 'The Prodigy',
        title: 'Breathe (edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:04:00+03:00'),
        artist: 'Juice Leskinen Grand Slam',
        title: 'Yölento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:14:00+03:00'),
        artist: 'Kakka-hätä 77',
        title: 'Rakkaus on psykoosi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:30:00+03:00'),
        artist: 'M83',
        title: 'Midnight City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:34:00+03:00'),
        artist: 'Dream Theater',
        title: 'The Eternal Dark Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:36:00+03:00'),
        artist: 'Ne Luumäet',
        title: 'Kadunlakaisija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:42:00+03:00'),
        artist: 'Tool',
        title: 'Lateralus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T02:55:00+03:00'),
        artist: 'Angelo Badalamenti',
        title: 'Audrey’s Dance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:03:00+03:00'),
        artist: 'Kuha.',
        title: 'Opi tuntemaan sienet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:10:00+03:00'),
        artist: 'Infected Mushroom',
        title: 'Can’t Stop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:21:00+03:00'),
        artist: 'Sielun Veljet',
        title: 'Yö erottaa pojasta miehen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:24:00+03:00'),
        artist: 'Jethro Tull',
        title: 'Aqualung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:34:00+03:00'),
        artist: 'AC/DC',
        title: 'You Shook Me All Night Long',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:41:00+03:00'),
        artist: 'Peter Gabriel',
        title: 'Darkness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T03:59:00+03:00'),
        artist: 'Patti Smith Group',
        title: 'Because The Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:02:00+03:00'),
        artist: 'Electric Wizard',
        title: 'Black Masses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:09:00+03:00'),
        artist: 'Tori Amos',
        title: 'Velvet Revolution',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:10:00+03:00'),
        artist: 'David Bowie',
        title: 'Ashes to Ashes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:18:00+03:00'),
        artist: 'Down',
        title: 'Stone the Crow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:27:00+03:00'),
        artist: 'Roky Erickson & The Aliens',
        title: 'Night of the Vampire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:36:00+03:00'),
        artist: 'Freud Marx Engels & Jung',
        title: 'Dracula ja pyhä Nicolae',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:40:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Yölinjalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:47:00+03:00'),
        artist: 'Eveliina Kurki',
        title: 'Vampyyri mä oon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T04:59:00+03:00'),
        artist: 'Sonata Arctica',
        title: 'FullMoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:00:00+03:00'),
        artist: 'Whitesnake',
        title: 'Still of the Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:10:00+03:00'),
        artist: 'The Atomic Bitchwax',
        title: 'Hope You Die',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:17:00+03:00'),
        artist: 'NightStop',
        title: 'Streetwalker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:26:00+03:00'),
        artist: 'Mana Mana',
        title: 'Maria Magdalena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:33:00+03:00'),
        artist: 'PMMP',
        title: 'Maria Magdalena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:40:00+03:00'),
        artist: 'Nyrkkitappelu',
        title: 'Vihaan mun bändikavereita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:49:00+03:00'),
        artist: 'Kate Bush',
        title: 'Night of the Swallow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T05:58:00+03:00'),
        artist: 'Judas Priest',
        title: 'Breaking the Law',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:01:00+03:00'),
        artist: 'Beastie Boys',
        title: 'Sabotage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:08:00+03:00'),
        artist: 'Pojat',
        title: 'Yö-yhtye',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:11:00+03:00'),
        artist: 'Deep Purple',
        title: 'Black Night (original single version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:18:00+03:00'),
        artist: 'Annika Eklund',
        title: 'Shanghain valot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:26:00+03:00'),
        artist: 'Anssi Tikanmäki',
        title: 'Aamu Lakeuksilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:34:00+03:00'),
        artist: 'Jimi Hendrix',
        title: 'All Along the Watchtower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:42:00+03:00'),
        artist: 'a‐ha',
        title: 'Take On Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:47:00+03:00'),
        artist: 'Bee Gees',
        title: 'Stayin’ Alive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T06:56:00+03:00'),
        artist: 'Zen Café',
        title: 'Aamuisin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T07:02:00+03:00'),
        artist: 'Weezer',
        title: 'Africa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T07:11:00+03:00'),
        artist: 'Greta Van Fleet',
        title: 'Lover, Leaver (Taker, Believer)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T07:23:00+03:00'),
        artist: 'Beck',
        title: 'Think I\'m In Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T07:33:00+03:00'),
        artist: 'The Beths',
        title: 'Little Death',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T07:44:00+03:00'),
        artist: 'Nick Lowe',
        title: 'I Love The Sound Of Breaking Glass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T07:53:00+03:00'),
        artist: 'Stig',
        title: 'Kissankarvoja feat KAIJA KOO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T08:02:00+03:00'),
        artist: 'Dodgy',
        title: 'In A Room',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T08:14:00+03:00'),
        artist: 'The Posies',
        title: 'Squirrel vs. Snake',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T08:27:00+03:00'),
        artist: 'Maija Vilkkumaa',
        title: 'Kissavideoita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T08:40:00+03:00'),
        artist: 'Courtney Barnett',
        title: 'Nameless, Faceless',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T08:47:00+03:00'),
        artist: 'DON BROCO',
        title: 'Superlove',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T08:53:00+03:00'),
        artist: 'Hardcore Superstar',
        title: 'She’s Offbeat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:00:00+03:00'),
        artist: 'Sixx:A.M.',
        title: 'Van Nuys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:04:00+03:00'),
        artist: 'Sly & The Family Stone',
        title: 'Into My Own Thing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:11:00+03:00'),
        artist: 'The Brand New Heavies',
        title: 'Sweet Freeek',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:19:00+03:00'),
        artist: 'Eero Koivistoinen & UMO Jazz Orchestra',
        title: 'Teranga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:27:00+03:00'),
        artist: 'Jason Derulo',
        title: 'Kiss the Sky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:38:00+03:00'),
        artist: 'The James Taylor Quartet',
        title: 'Europa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:48:00+03:00'),
        artist: 'Trio Töykeät',
        title: 'Susi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T09:53:00+03:00'),
        artist: 'Propellerheads feat. Shirley Bassey',
        title: 'History Repeating',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:02:00+03:00'),
        artist: 'Banga Magda',
        title: 'Vem Morena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:09:00+03:00'),
        artist: 'Candy Dulfer',
        title: 'First In Line',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:19:00+03:00'),
        artist: 'Lettuce',
        title: 'Squadlive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:32:00+03:00'),
        artist: 'Breakwater',
        title: 'Release the Beast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:42:00+03:00'),
        artist: 'Bruce Dickinson',
        title: 'Tears of the Dragon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:52:00+03:00'),
        artist: 'Charles Wright Band',
        title: 'Express Yourself',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T10:58:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:05:00+03:00'),
        artist: 'Kirka',
        title: 'Hetki lyö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:11:00+03:00'),
        artist: 'Torvikopla feat. Teekkarikuoro',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:19:00+03:00'),
        artist: 'Virve \'Vicky\' Rosti',
        title: 'Hyökyaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:23:00+03:00'),
        artist: 'VilleGalle',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:27:00+03:00'),
        artist: 'CMX',
        title: 'Hyökyaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:36:00+03:00'),
        artist: 'Aavikko',
        title: 'Viitostie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:43:00+03:00'),
        artist: 'Jarkko Martikainen & Luotetut miehet',
        title: 'Keväinen jää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T11:51:00+03:00'),
        artist: 'Business city',
        title: 'Kaukopartio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:04:00+03:00'),
        artist: 'Eroottiset Tuliaseet',
        title: 'Huuda mun nimee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:09:00+03:00'),
        artist: 'Sielun Veljet',
        title: 'Huda huda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:13:00+03:00'),
        artist: 'PMMP',
        title: 'Koko show',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:23:00+03:00'),
        artist: 'Huun‐Huur‐Tu',
        title: 'Konguroi (Sixty Horses in my Herd)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:32:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'Eläköön!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:38:00+03:00'),
        artist: 'Pojat',
        title: 'Tampereen Yöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:41:00+03:00'),
        artist: 'Karelian Folk Music Ensemble',
        title: 'Valaam Bells',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:47:00+03:00'),
        artist: 'Albert Kuvezin And Yat-Kha',
        title: 'Love Will Tear Us Apart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:53:00+03:00'),
        artist: 'Vesa-Matti Loiri',
        title: 'Lapin kesä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T12:56:00+03:00'),
        artist: 'Marie Myriam',
        title: 'L\'Oiseau Et L\'Enfant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:02:00+03:00'),
        artist: 'Nena',
        title: '99 Luftballons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:10:00+03:00'),
        artist: 'Apulanta',
        title: 'Anna mulle piiskaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:19:00+03:00'),
        artist: 'Toto',
        title: 'Chinatown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:31:00+03:00'),
        artist: 'Netum',
        title: 'Live',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:38:00+03:00'),
        artist: 'Netum live',
        title: 'Toivo ja Todellisuus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:52:00+03:00'),
        artist: 'Nina Simone',
        title: 'My Baby Just Cares For Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T13:57:00+03:00'),
        artist: 'Iggy Pop',
        title: 'Lust for Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:15:00+03:00'),
        artist: 'Apulanta',
        title: 'Ravistettava ennen käyttöä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:22:00+03:00'),
        artist: 'Waldo\'s People',
        title: 'Lose Control',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:27:00+03:00'),
        artist: 'Chisu',
        title: 'Baden-Baden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:39:00+03:00'),
        artist: 'David Guetta feat. Akon',
        title: 'Sexy Bitch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:43:00+03:00'),
        artist: 'Alexander Rybak',
        title: 'Fairytale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:49:00+03:00'),
        artist: 'Rammstein',
        title: 'Pussy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T14:56:00+03:00'),
        artist: 'Black Eyed Peas',
        title: 'I Gotta Feeling (FMIF remix edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:07:00+03:00'),
        artist: 'Lady Gaga',
        title: 'Poker Face',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:13:00+03:00'),
        artist: 'Paramore',
        title: 'Decode',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:23:00+03:00'),
        artist: 'Anna Puu',
        title: 'C’est la vie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:31:00+03:00'),
        artist: 'PMMP',
        title: 'Lautturi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:42:00+03:00'),
        artist: 'Aste',
        title: 'Poikkeus sääntöön',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:49:00+03:00'),
        artist: 'The Baseballs',
        title: 'Umbrella',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T15:56:00+03:00'),
        artist: 'Billy Talent',
        title: 'Rusted From the Rain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:00:00+03:00'),
        artist: '2 Unlimited',
        title: 'Get Ready for This',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:08:00+03:00'),
        artist: 'Sergio Mendes',
        title: 'Mais Que Nada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:13:00+03:00'),
        artist: 'Bellini',
        title: 'Samba de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:21:00+03:00'),
        artist: 'Finnish Hockey Mafia feat. Antero Mertaranta',
        title: 'Taivas varjele!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:26:00+03:00'),
        artist: 'Poju',
        title: 'Poika (Saunoo)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:33:00+03:00'),
        artist: 'Martti Vainaa & Sallitut Aineet',
        title: 'Pelimies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:46:00+03:00'),
        artist: 'Erkki Liikanen',
        title: 'Maali se on hunajata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T16:56:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:02:00+03:00'),
        artist: 'Ricky Martin',
        title: 'La copa de la vida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:10:00+03:00'),
        artist: 'Kendrick Lamar',
        title: 'HUMBLE.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:15:00+03:00'),
        artist: 'The Alan Parsons Project',
        title: 'Sirius',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:20:00+03:00'),
        artist: 'The Black Eyed Peas',
        title: 'Let\'s Get Retarded',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:26:00+03:00'),
        artist: 'Zombie Nation',
        title: 'Kernkraft 400',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:34:00+03:00'),
        artist: 'The White Stripes',
        title: 'Seven Nation Army',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:43:00+03:00'),
        artist: 'Mark Vinokurov',
        title: 'Aurika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:49:00+03:00'),
        artist: 'The Who',
        title: 'Who Are You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:55:00+03:00'),
        artist: 'Queen',
        title: 'We Will Rock You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T17:57:00+03:00'),
        artist: 'Queen',
        title: 'We Are the Champions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:03:00+03:00'),
        artist: 'Agents',
        title: 'Rockin\' with Enzio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:07:00+03:00'),
        artist: 'ABBA',
        title: 'The Winner Takes It All',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:14:00+03:00'),
        artist: 'Blue Öyster Cult',
        title: '(Don\'t Fear) The Reaper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:22:00+03:00'),
        artist: 'Beastie Boys',
        title: 'Fight for Your Right',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:30:00+03:00'),
        artist: 'Ramones',
        title: 'Rock ’n’ Roll High School',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:34:00+03:00'),
        artist: 'Napoleon XIV',
        title: 'They\'re Coming To Take Me Away Ha-haa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:38:00+03:00'),
        artist: 'Tryer',
        title: 'Poika ja ilves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:44:00+03:00'),
        artist: 'Pää kii',
        title: 'Sä veit mun levyt kirpparille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:49:00+03:00'),
        artist: 'Punaiset Messiaat',
        title: 'Elämä on julmaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T18:55:00+03:00'),
        artist: 'YUP',
        title: 'Yövieraat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:03:00+03:00'),
        artist: 'Tehosekoitin',
        title: 'Ulkona',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:11:00+03:00'),
        artist: 'Pete Parkkonen',
        title: 'Kohta sataa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:16:00+03:00'),
        artist: 'Don Huonot',
        title: 'Hyrrä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:21:00+03:00'),
        artist: 'Huora',
        title: 'Oispa kaljaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:27:00+03:00'),
        artist: 'Green Day',
        title: 'Dominated Love Slave',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:31:00+03:00'),
        artist: 'Ramones',
        title: 'Poison Heart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:38:00+03:00'),
        artist: 'Dead Kennedys',
        title: 'Too Drunk to Fuck',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:43:00+03:00'),
        artist: 'MGMT',
        title: 'Kids',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:50:00+03:00'),
        artist: 'Billy Idol',
        title: 'White Wedding, Part 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T19:56:00+03:00'),
        artist: 'Frozen',
        title: 'Let It Go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:00:00+03:00'),
        artist: 'Rancid',
        title: 'Daly City Train',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:05:00+03:00'),
        artist: 'Agnostic Front',
        title: 'Old New York',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:08:00+03:00'),
        artist: 'Ratsia',
        title: 'Ole hyvä nyt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:12:00+03:00'),
        artist: 'Sur-rur',
        title: 'Fleetwood Macin villi välikausi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:21:00+03:00'),
        artist: 'Leftover Crack',
        title: 'The War at Home',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:30:00+03:00'),
        artist: 'Bad Brains',
        title: 'Sailin\' On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:32:00+03:00'),
        artist: 'Kyre & Duunarit',
        title: 'Rahikainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:35:00+03:00'),
        artist: 'Pojat',
        title: 'Yö-yhtye',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:38:00+03:00'),
        artist: 'Ne Luumäet',
        title: 'Jos en sua saa (live)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:45:00+03:00'),
        artist: 'Pertti Kurikan nimipäivät',
        title: 'Päättäjä on pettäjä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:49:00+03:00'),
        artist: 'Abduktio',
        title: 'Soitellen sotaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T20:53:00+03:00'),
        artist: 'Huora',
        title: 'P.A.-Ska',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:00:00+03:00'),
        artist: 'Hüsker Dü',
        title: 'Girl Who Lives on Heaven Hill',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:04:00+03:00'),
        artist: 'Wasted',
        title: 'Fuel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:08:00+03:00'),
        artist: 'Nuoret sankarit',
        title: 'Lassie palaa kotiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:11:00+03:00'),
        artist: 'Nuoret sankarit',
        title: 'Lassie palaa autoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:18:00+03:00'),
        artist: 'Jukka Nousiainen',
        title: 'Vielä voisko vähän uskoa ihmiseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:18:00+03:00'),
        artist: 'Misfits',
        title: 'The Haunting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:21:00+03:00'),
        artist: 'The Interrupters',
        title: 'A Friend Like Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:26:00+03:00'),
        artist: 'Maailmanloppu',
        title: 'Enää kiväärit laulaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:30:00+03:00'),
        artist: 'Motörhead',
        title: 'RAMONES',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:32:00+03:00'),
        artist: 'Ramones',
        title: 'California Sun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:34:00+03:00'),
        artist: 'Kivesveto Go Go',
        title: 'Las Vegas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:37:00+03:00'),
        artist: 'Klamydia',
        title: 'HEI HOU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:41:00+03:00'),
        artist: 'Ne Luumäet',
        title: 'Rokkitähti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:45:00+03:00'),
        artist: 'Kytänsoittajat',
        title: 'Sokka irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:50:00+03:00'),
        artist: 'Anal Thunder',
        title: 'Our Song for the Eurovision Song Contest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T21:54:00+03:00'),
        artist: 'Cock Sparrer',
        title: 'White Riot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:03:00+03:00'),
        artist: 'If These Trees Could Talk',
        title: 'Solstice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:13:00+03:00'),
        artist: 'Explosions in the Sky',
        title: 'Wilderness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:19:00+03:00'),
        artist: 'God Is an Astronaut',
        title: 'Worlds in Collision',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:26:00+03:00'),
        artist: 'Godspeed You Black Emperor!',
        title: 'Moya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:39:00+03:00'),
        artist: 'Esmerine',
        title: 'Funambule (Deus pas de Serein)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:48:00+03:00'),
        artist: 'Red Sparowes',
        title: 'A brief moment of clarity broke through the deafening hum, but it was too late.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T22:54:00+03:00'),
        artist: '65daysofstatic',
        title: 'Heat Death Infinity Splitter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:01:00+03:00'),
        artist: 'Russian Circles',
        title: 'Mota',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:08:00+03:00'),
        artist: 'Magyar Posse',
        title: 'Whirlpool of Terror and Tension',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:17:00+03:00'),
        artist: 'Mogwai',
        title: 'White Noise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:24:00+03:00'),
        artist: 'Sigur Rós',
        title: 'Brennisteinn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:33:00+03:00'),
        artist: 'A Silver Mt. Zion',
        title: 'Stumble Then Rise on Some Awkward Morning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:40:00+03:00'),
        artist: 'Crippled Black Phoenix',
        title: 'Fantastic Justice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:49:00+03:00'),
        artist: 'The Pineapple Thief',
        title: 'In Exile',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-18T23:55:00+03:00'),
        artist: 'Sólstafir',
        title: 'Lágnætti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:05:00+03:00'),
        artist: 'Jore Marjaranta, Susanna Haavisto, Veeti Kallio, Sakari Kuosmanen, Tapio Liinoja, Vuokko Hovatta, Sami Saari, Pinja Hanski, Jorma Kääriäinen, Juha Lehti, Minna Lasanen & Pentti Hietanen',
        title: 'Jouluyö, juhlayö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:12:00+03:00'),
        artist: 'Pentatonix',
        title: 'It’s the Most Wonderful Time of the Year',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:23:00+03:00'),
        artist: 'Sonja Lumme',
        title: 'Rekiretki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:28:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Jouluksi mummolaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:36:00+03:00'),
        artist: 'Suvi Teräsniska & Antti Annola',
        title: 'Tulkoon joulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:47:00+03:00'),
        artist: 'Saukki ja Pikkuoravat',
        title: 'Pikkuoravien joululaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T00:58:00+03:00'),
        artist: 'Trio Saletti',
        title: 'On rankkaa olla tonttumies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:00:00+03:00'),
        artist: 'Peter Ilyitch Tchaikovsky',
        title: 'Dance of the Sugar Plum Fairy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:05:00+03:00'),
        artist: 'Mirela Stan',
        title: 'Joulupuu on rakennettu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:18:00+03:00'),
        artist: 'Carla Thomas',
        title: 'All I Want for Christmas Is You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:19:00+03:00'),
        artist: 'Club for Five',
        title: 'Maa on niin kaunis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:33:00+03:00'),
        artist: 'Frank Sinatra',
        title: 'Santa Claus Is Coming to Town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:50:00+03:00'),
        artist: 'Scooter',
        title: 'Dutch Christmas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T01:54:00+03:00'),
        artist: 'Laura Voutilainen',
        title: 'Kun joulupukki suukon sai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:01:00+03:00'),
        artist: 'Kalle Jussila',
        title: 'Varpunen jouluaamuna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:08:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Kuninkaiden tervehdys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:08:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Herodeksen laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:09:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Murjaanien kuninkaan alistaminen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:10:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Mänkin laulu / Ja tain tähtein',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:12:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Piltin synnytti Betlehem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:13:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Knihdin laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:14:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'Keisari Aleksanteri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:15:00+03:00'),
        artist: 'Oulun tiernapojat',
        title: 'On lapsi syntynyt meille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:25:00+03:00'),
        artist: 'Vesa-Matti Loiri',
        title: 'Heinillä Härkien kaukalon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:29:00+03:00'),
        artist: 'Vesa‐Matti Loiri',
        title: 'Tonttu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:43:00+03:00'),
        artist: 'Carola',
        title: 'Kuuraparta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T02:50:00+03:00'),
        artist: 'Frank Sinatra',
        title: 'Let it Snow, Let it Snow, Let it Snow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T03:00:00+03:00'),
        artist: 'Kai Vallineva',
        title: 'En etsi valtaa, loistoa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T03:17:00+03:00'),
        artist: 'Juice Leskinen Slam',
        title: 'Sika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T03:30:00+03:00'),
        artist: 'Various Artists',
        title: 'Lumiukko - Howard Blake - Walking in the air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T03:33:00+03:00'),
        artist: 'Smurffit',
        title: 'Smurffiaatto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T03:39:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Joulupukki puree ja lyö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T03:50:00+03:00'),
        artist: 'Juice Leskinen Slam',
        title: 'Tonttujen jouluyö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T04:00:00+03:00'),
        artist: 'Ajattara',
        title: 'Joulupukki puree ja lyö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T04:08:00+03:00'),
        artist: 'Cascada',
        title: 'Last Christmas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T04:17:00+03:00'),
        artist: 'Euthanasia',
        title: 'Joulu peruutettu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T04:23:00+03:00'),
        artist: 'KC/MD Mafia',
        title: 'Gangstatonttu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T04:33:00+03:00'),
        artist: 'Marco Hietala',
        title: 'Enkeli taivaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T04:42:00+03:00'),
        artist: 'Sammy Salminen',
        title: 'Jouluyö, juhlayö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T05:06:00+03:00'),
        artist: 'Nylon Beat',
        title: 'Musta joulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T05:19:00+03:00'),
        artist: 'Frank Sinatra',
        title: 'Have Yourself a Merry Little Christmas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T05:34:00+03:00'),
        artist: 'Aku-Ankka, Hupu, Joulupukki, Lupu, Pikkutonttu, Tupu',
        title: 'Aku ankan jouluaatto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T05:46:00+03:00'),
        artist: 'Sonja Lumme',
        title: 'Jollei jouluna ole lunta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T05:54:00+03:00'),
        artist: 'Martti Servo ja Napander',
        title: 'Joulun manteli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:02:00+03:00'),
        artist: 'Bing Crosby',
        title: 'White Christmas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:16:00+03:00'),
        artist: 'Olavi Virta',
        title: 'Petteri Punakuono',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:19:00+03:00'),
        artist: 'Dxxxa D & The Boys',
        title: 'Muina vuodenaikoina joulupukki saattaa tappaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:25:00+03:00'),
        artist: 'Tapio Heinonen',
        title: 'Sylvian joululaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:35:00+03:00'),
        artist: 'Eevil Stöö',
        title: 'Eevil Stöö matkaan jo käy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:44:00+03:00'),
        artist: 'Louis Armstrong',
        title: 'Christmas in New Orleans',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:48:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Jouluaattona kännissä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:52:00+03:00'),
        artist: 'Maija Hapuoja',
        title: 'Joulun kellot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T06:58:00+03:00'),
        artist: 'Katri Helena',
        title: 'Joulumaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:06:00+03:00'),
        artist: 'Mungo Jerry',
        title: 'In The Summertime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:16:00+03:00'),
        artist: 'Tuomari Nurmio ja Köyhien Ystävät',
        title: 'Ankara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:20:00+03:00'),
        artist: 'Bert Hockman / M. A. Numminen & The Original Slowfox and Tango Orchestra',
        title: 'Lempäälän Strategiat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:28:00+03:00'),
        artist: 'Sugar Ray',
        title: 'Every Morning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:36:00+03:00'),
        artist: 'Bolat Nurimov',
        title: 'Zyn Zyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:45:00+03:00'),
        artist: 'TV Eyes',
        title: 'She\'s A Study',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T07:57:00+03:00'),
        artist: 'Pete Parkkonen',
        title: 'Girl in a Uniform',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T08:07:00+03:00'),
        artist: 'Neil Young & Crazy Horse',
        title: 'F\'!#in Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T08:26:00+03:00'),
        artist: 'Galactic Empire',
        title: 'Cantina Band',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T08:44:00+03:00'),
        artist: 'The Crash',
        title: 'Big Ass Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T08:48:00+03:00'),
        artist: 'Loiriplukari',
        title: 'Exdisco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T08:53:00+03:00'),
        artist: 'Halestorm',
        title: 'Still Of The Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T08:58:00+03:00'),
        artist: 'Eläkeläiset',
        title: 'Jenkkapolkkahumppa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:05:00+03:00'),
        artist: 'Martin Solveig',
        title: 'Jealousy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:14:00+03:00'),
        artist: 'Ricky-Tick Big Band',
        title: 'It\'s a Deal!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:21:00+03:00'),
        artist: 'Tower of Power',
        title: 'Hangin\' With My Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:27:00+03:00'),
        artist: 'The Five Corners Quintet',
        title: 'Skinny Dipping',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:37:00+03:00'),
        artist: 'Clarence Wheeler & The Enforcers',
        title: 'Right On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:47:00+03:00'),
        artist: 'Ella Fitzgerald',
        title: 'Air Mail Special (Club Des Belugas remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:58:00+03:00'),
        artist: 'Jamie Cullum',
        title: 'I Get A Kick Out Of You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T09:58:00+03:00'),
        artist: 'Parliament',
        title: 'Do That Stuff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:12:00+03:00'),
        artist: 'Daft Punk',
        title: 'Something About Us',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:19:00+03:00'),
        artist: 'Rosa Jules',
        title: 'La Parte Mas Triste Del Amor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:25:00+03:00'),
        artist: 'Jamiroquai',
        title: 'Seven Days in Sunny June',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:33:00+03:00'),
        artist: 'Ojos de Brujo',
        title: 'Feedback',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:38:00+03:00'),
        artist: 'The Apples',
        title: 'Run This Town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:48:00+03:00'),
        artist: 'Snarky Puppy',
        title: 'The Simple Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T10:55:00+03:00'),
        artist: 'Torvikopla feat. Teekkarikuoro',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:03:00+03:00'),
        artist: 'spiikki',
        title: 'Mahti Siibs (Mighty Wings)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:08:00+03:00'),
        artist: 'KOM-teatteri',
        title: 'Kansainvälinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:13:00+03:00'),
        artist: '乃木坂46',
        title: '不眠症',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:19:00+03:00'),
        artist: 'Pikku G',
        title: 'Shala-la-la',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:23:00+03:00'),
        artist: 'Costello',
        title: 'Kun Mies Unelmoi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:31:00+03:00'),
        artist: 'CMX',
        title: 'Fysiikka ei kestä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:39:00+03:00'),
        artist: 'Marble Sounds',
        title: 'The Ins and Outs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:45:00+03:00'),
        artist: 'Electric Six',
        title: 'Gay Bar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:50:00+03:00'),
        artist: 'Kaytanhousuja',
        title: 'Kaljaa ainiaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T11:56:00+03:00'),
        artist: 'Tom Waits',
        title: 'Earth Died Screaming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:02:00+03:00'),
        artist: 'YUP',
        title: 'Tohtori Tulp esittelee alkuihmisen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:09:00+03:00'),
        artist: 'Darude',
        title: 'Sandstorm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:13:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Viisas talonmies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:13:00+03:00'),
        artist: 'Matias',
        title: '#dissaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:19:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Viisas talonmies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:21:00+03:00'),
        artist: 'Ismo Alanko',
        title: 'Taiteilijaelämää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:29:00+03:00'),
        artist: 'Vesa‐Matti Loiri',
        title: 'Pelasta maailma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:35:00+03:00'),
        artist: 'Juice Leskinen',
        title: 'Napoleonin mopo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:41:00+03:00'),
        artist: 'Die Antwoord',
        title: 'Enter the Ninja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:47:00+03:00'),
        artist: 'Kiss the Anus of a Black Cat',
        title: 'The Shadows Are You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:52:00+03:00'),
        artist: 'Anal Thunder',
        title: 'Drink Myself to Death',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:56:00+03:00'),
        artist: 'CMX',
        title: 'Negatiivinen alkusoitto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T12:57:00+03:00'),
        artist: 'Various Artists',
        title: 'France \'La Marseillaise\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:01:00+03:00'),
        artist: 'Derek Duke',
        title: 'Rally the Heroes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:05:00+03:00'),
        artist: 'Derek Duke',
        title: 'Abattoir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:12:00+03:00'),
        artist: 'The Adventures of Duane & BrandO',
        title: 'TETRIS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:18:00+03:00'),
        artist: 'Martin O’Donnell and Michael Salvatori',
        title: 'Halo Theme Mjolnir Mix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:30:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:41:00+03:00'),
        artist: 'toby fox',
        title: 'Snowy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:45:00+03:00'),
        artist: 'The Adventures of Duane & BrandO',
        title: 'Castle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T13:53:00+03:00'),
        artist: 'Ashley Barrett',
        title: 'Build That Wall (Zia’s Theme)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T14:10:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Metal Gear Solid - Sons of Liberty Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T14:19:00+03:00'),
        artist: 'Koji Kondo',
        title: 'The Legend of Zelda 25th Anniversary Medley',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T14:41:00+03:00'),
        artist: '13th Floor Elevators',
        title: 'Monkey Island',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T14:50:00+03:00'),
        artist: 'Aperture Science Psychoacoustic Laboratories',
        title: 'Want You Gone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T14:57:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Battlefield 2 - Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:04:00+03:00'),
        artist: 'A-Tyyppi',
        title: 'Ihanaa Leijonat, ihanaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:10:00+03:00'),
        artist: 'R.E.M.',
        title: 'Everybody Hurts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:20:00+03:00'),
        artist: 'Placebo',
        title: 'Where Is My Mind (XFM live version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:27:00+03:00'),
        artist: 'Coldplay',
        title: 'Yellow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:38:00+03:00'),
        artist: 'Jope Ruonansuu',
        title: 'Emmä tiiä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:45:00+03:00'),
        artist: 'Apulanta',
        title: 'jumala',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T15:55:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Kulkuriveljeni Jan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:07:00+03:00'),
        artist: 'Fintelligens',
        title: 'Kaikki peliin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:15:00+03:00'),
        artist: 'Poets of the Fall',
        title: 'Carnival of Rust',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:25:00+03:00'),
        artist: 'Danko Jones',
        title: 'Full of Regret',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:36:00+03:00'),
        artist: 'Red Star Red Army Chorus',
        title: 'Kalinka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:46:00+03:00'),
        artist: 'Tom Jones',
        title: 'If I Only Knew',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:55:00+03:00'),
        artist: 'Mansesteri feat. SO11 & Tappara Fan Club',
        title: 'Saravon Pekka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T16:59:00+03:00'),
        artist: 'Sakari Kuosmanen',
        title: 'Finlandia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:07:00+03:00'),
        artist: 'Saimaa',
        title: 'Matka Mielen Ytimeen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:14:00+03:00'),
        artist: 'Jamppa Tuominen',
        title: 'Liian pitkä matka kotiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:19:00+03:00'),
        artist: 'Haloo Helsinki!',
        title: 'Hyvää matkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:26:00+03:00'),
        artist: 'Abaddon',
        title: 'Join the Cosmic Caravan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:37:00+03:00'),
        artist: 'Ismo Alanko',
        title: 'Matkailun avara maailma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:46:00+03:00'),
        artist: 'Wöyh!',
        title: 'Kaskelotti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T17:53:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Laivamatka WC:ssä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:03:00+03:00'),
        artist: 'Zeal & Ardor',
        title: 'Row Row',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:07:00+03:00'),
        artist: 'Profeetta ja Uusi Maailmanuskonto',
        title: 'Psykoosi on matka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:13:00+03:00'),
        artist: 'Alestorm',
        title: 'Drink',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:20:00+03:00'),
        artist: 'Työelämän uhrit',
        title: 'Raivoloparit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:26:00+03:00'),
        artist: 'Seremoniamestari',
        title: 'Ihana päivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:35:00+03:00'),
        artist: 'Huora',
        title: 'Darra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:41:00+03:00'),
        artist: 'The Haunted',
        title: 'Sweet Relief',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:48:00+03:00'),
        artist: 'KOM-teatteri',
        title: 'Linja-automatka eli sinhvoonia armiitalle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T18:56:00+03:00'),
        artist: 'SEREBRO',
        title: 'Mi Mi Mi (Gary Caos Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:04:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Iron Man',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:10:00+03:00'),
        artist: 'Daft Punk',
        title: 'The Brainwasher',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:15:00+03:00'),
        artist: 'Dune',
        title: 'Million Miles From Home',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:20:00+03:00'),
        artist: 'Pendulum',
        title: 'Propane Nightmares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:26:00+03:00'),
        artist: 'Niki and the Dove',
        title: 'DJ Ease My Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:31:00+03:00'),
        artist: 'Skrillex with Niki and The Dove',
        title: 'Ease My Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:36:00+03:00'),
        artist: 'Steve Winwood',
        title: 'Valerie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:41:00+03:00'),
        artist: 'Eric Prydz',
        title: 'Call on Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:46:00+03:00'),
        artist: 'The Charmels',
        title: 'As Long as I’ve Got You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:49:00+03:00'),
        artist: 'Wu‐Tang Clan',
        title: 'C.R.E.A.M.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:53:00+03:00'),
        artist: 'Piero Piccioni',
        title: 'Right or Wrong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T19:56:00+03:00'),
        artist: 'Aivovuoto',
        title: 'Piilotajunnasta sylkee myrkkyy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:01:00+03:00'),
        artist: 'Shivaree',
        title: 'Goodnight Moon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:06:00+03:00'),
        artist: 'Jodarok',
        title: 'Peittoo kiskoo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:08:00+03:00'),
        artist: 'Sister Sledge',
        title: 'He\'s The Greatest Dancer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:12:00+03:00'),
        artist: 'Will Smith',
        title: 'Gettin’ Jiggy Wit It',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:16:00+03:00'),
        artist: 'Stepa',
        title: 'Lastenlaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:22:00+03:00'),
        artist: 'Vanessa-Mae',
        title: 'Night Flight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:26:00+03:00'),
        artist: 'Julma-Henri & Syrjäytyneet feat. Asama',
        title: '240306',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:31:00+03:00'),
        artist: 'Kingston Wall',
        title: 'Shine on Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:39:00+03:00'),
        artist: 'Huge L',
        title: 'Tulen loistos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:46:00+03:00'),
        artist: 'DJ Kridlokk',
        title: 'Mutsi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:51:00+03:00'),
        artist: 'Colin Blunstone',
        title: 'Smooth Operator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:51:00+03:00'),
        artist: 'Joeski Love',
        title: 'My Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:55:00+03:00'),
        artist: 'Aivovuoto feat. Yona',
        title: 'AI VO WU SHOW & Skeleonora\'s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:58:00+03:00'),
        artist: 'PMMP',
        title: 'Kuvia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T20:59:00+03:00'),
        artist: 'Janet Jackson',
        title: 'Any Time, Any Place',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:05:00+03:00'),
        artist: 'Kendrick Lamar',
        title: 'Poetic Justice ft. Drake',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:14:00+03:00'),
        artist: 'Eevil Stöö x Koksukoo',
        title: 'Mafia kertaa kaks (feat. OG Ikonen)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:19:00+03:00'),
        artist: 'Saito & Lester, Nowhere',
        title: 'Utopia (w/ minthaze)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:24:00+03:00'),
        artist: 'DJ Ibusal',
        title: 'Anna Mun Olla Rauhas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:26:00+03:00'),
        artist: 'James Gang',
        title: 'Ashes the Rain and I',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:31:00+03:00'),
        artist: 'Fatboy Slim',
        title: 'Right Here, Right Now',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:35:00+03:00'),
        artist: 'Mark Snow',
        title: 'The X-Files',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:38:00+03:00'),
        artist: 'Eevil Stöö x Koksukoo',
        title: 'Kumme kuollaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:42:00+03:00'),
        artist: 'The Cranberries',
        title: 'Zombie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:47:00+03:00'),
        artist: 'Eminem',
        title: 'In Your Head',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:51:00+03:00'),
        artist: 'The Clash',
        title: 'Straight to Hell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T21:58:00+03:00'),
        artist: 'M.I.A.',
        title: 'Paper Planes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:02:00+03:00'),
        artist: 'tokyo prose',
        title: 'back to you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:07:00+03:00'),
        artist: 'Tokyo Prose',
        title: 'Won\'t let me go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:13:00+03:00'),
        artist: 'Lenzman',
        title: 'Open page',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:18:00+03:00'),
        artist: 'Victor, Macca & Loz Contereras',
        title: 'Lose Myself feat. Charli Brix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:21:00+03:00'),
        artist: 'Act TC1',
        title: 'Find',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:25:00+03:00'),
        artist: 'Gerra & Stone',
        title: 'Tender Touch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:27:00+03:00'),
        artist: 'Foreign Concept',
        title: 'Gozen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:31:00+03:00'),
        artist: 'Villem & McLeod',
        title: 'Another Star',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:35:00+03:00'),
        artist: 'Technimatic',
        title: 'Dirty Hands',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:40:00+03:00'),
        artist: 'Blu Mar Ten',
        title: 'Forest Fire (Hugh Hardie Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:46:00+03:00'),
        artist: 'DLR',
        title: 'Looking In From The Outside',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:48:00+03:00'),
        artist: 'Chroma',
        title: 'Outline',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:52:00+03:00'),
        artist: 'Scar',
        title: 'Clear As Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:55:00+03:00'),
        artist: 'Fields and Mako',
        title: 'Price of imagination',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T22:58:00+03:00'),
        artist: 'Subwave',
        title: 'Indigo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:06:00+03:00'),
        artist: 'Seba',
        title: 'Time Will Tell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:08:00+03:00'),
        artist: 'Roygreen & Protone',
        title: 'Deep Inside (FD remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:11:00+03:00'),
        artist: 'Voltage',
        title: 'Hold tight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:15:00+03:00'),
        artist: 'FD',
        title: 'Into You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:19:00+03:00'),
        artist: 'Chris Harmonics and Impish',
        title: 'Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:24:00+03:00'),
        artist: 'Electrosoul System & Subwave',
        title: 'One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:31:00+03:00'),
        artist: 'Lenny Fontana',
        title: 'Spread Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:35:00+03:00'),
        artist: 'Nu:Tone feat. Natalie Williams',
        title: 'Strange Encounters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:40:00+03:00'),
        artist: 'Alix Perez & Ivy Lab',
        title: 'Maiden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:45:00+03:00'),
        artist: 'Zero T & Beta 2',
        title: 'White Label',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:46:00+03:00'),
        artist: 'Kolectiv & Dexta & Mauoq',
        title: 'Human Sacrifice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:48:00+03:00'),
        artist: 'Screamarts',
        title: 'Tribes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:52:00+03:00'),
        artist: 'Beta2',
        title: 'NOD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-19T23:56:00+03:00'),
        artist: 'Phaction',
        title: 'Aviatrix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:01:00+03:00'),
        artist: 'Goldie',
        title: 'Inner City Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:05:00+03:00'),
        artist: 'The Jimi Hendrix Experience',
        title: 'Purple Haze',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:09:00+03:00'),
        artist: 'The Beatles',
        title: 'Helter Skelter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:14:00+03:00'),
        artist: 'Blue Cheer',
        title: 'Summertime Blues',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:22:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Black Sabbath',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:28:00+03:00'),
        artist: 'Deep Purple',
        title: 'Into the Fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:35:00+03:00'),
        artist: 'Budgie',
        title: 'Crash Course in Brain Surgery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:39:00+03:00'),
        artist: 'Pentagram',
        title: 'When the Screams Come',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:44:00+03:00'),
        artist: 'Rainbow',
        title: 'Tarot Woman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:50:00+03:00'),
        artist: 'Judas Priest',
        title: 'Dissident Aggressor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:54:00+03:00'),
        artist: 'Van Halen',
        title: 'On Fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T00:58:00+03:00'),
        artist: 'Motörhead',
        title: 'Stay Clean',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:02:00+03:00'),
        artist: 'Angel Witch',
        title: 'Angel Witch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:07:00+03:00'),
        artist: 'Diamond Head',
        title: 'Am I Evil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:15:00+03:00'),
        artist: 'Blitzkrieg',
        title: 'Blitzkrieg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:19:00+03:00'),
        artist: 'Venom',
        title: 'Welcome to Hell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:26:00+03:00'),
        artist: 'Kimmo Kuusniemi Band',
        title: '1000 megawatin totuus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:31:00+03:00'),
        artist: 'Mercyful Fate',
        title: 'Curse of the Pharaohs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:38:00+03:00'),
        artist: 'Iron Maiden',
        title: 'Hallowed Be Thy Name',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:47:00+03:00'),
        artist: 'Hellion',
        title: 'Break The Spell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T01:53:00+03:00'),
        artist: 'Oz',
        title: 'Fire in the Brain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:00:00+03:00'),
        artist: 'Metallica',
        title: 'Hit the Lights',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:02:00+03:00'),
        artist: 'D.R.I.',
        title: 'Runnin’ Around',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:05:00+03:00'),
        artist: 'Bathory',
        title: 'Sacrifice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:12:00+03:00'),
        artist: 'Celtic Frost',
        title: 'Into the Crypts of Rays',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:19:00+03:00'),
        artist: 'Anthrax',
        title: 'Deathrider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:24:00+03:00'),
        artist: 'W.A.S.P.',
        title: 'Animal (Fuck Like a Beast)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:30:00+03:00'),
        artist: 'Trouble',
        title: 'Victim of the Insane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:38:00+03:00'),
        artist: 'Possessed',
        title: 'Seven Churches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:45:00+03:00'),
        artist: 'Destruction',
        title: 'Bestial Invasion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:52:00+03:00'),
        artist: 'Helloween',
        title: 'Walls Of Jericho / Ride The Sky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T02:59:00+03:00'),
        artist: 'Tarot',
        title: 'Spell of Iron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:05:00+03:00'),
        artist: 'Kreator',
        title: 'Pleasure to Kill',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:11:00+03:00'),
        artist: 'Dark Angel',
        title: 'The Burning of Sodom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:16:00+03:00'),
        artist: 'Slayer',
        title: 'Necrophobic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:20:00+03:00'),
        artist: 'Voïvod',
        title: 'Ravenous Medicine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:25:00+03:00'),
        artist: 'Napalm Death',
        title: 'You Suffer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:27:00+03:00'),
        artist: 'Napalm Death',
        title: 'Pseudo Youth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:30:00+03:00'),
        artist: 'Mayhem',
        title: 'Silvester Anfang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:31:00+03:00'),
        artist: 'Mayhem',
        title: 'Deathcrush',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:37:00+03:00'),
        artist: 'Melvins',
        title: 'Gluey Porch Treatments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:39:00+03:00'),
        artist: 'Stone',
        title: 'Overtake',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:45:00+03:00'),
        artist: 'Ministry',
        title: 'The Missing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:49:00+03:00'),
        artist: 'Bathory',
        title: 'A Fine Day To Die',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T03:59:00+03:00'),
        artist: 'Carcass',
        title: 'Ruptured in Purulence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:06:00+03:00'),
        artist: 'Morbid Angel',
        title: 'Lord of All Fevers & Plague',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:12:00+03:00'),
        artist: 'Bolt Thrower',
        title: 'Eternal War',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:16:00+03:00'),
        artist: 'Pestilence',
        title: 'Dehydrated',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:22:00+03:00'),
        artist: 'Entombed',
        title: 'Supposed to Rot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:26:00+03:00'),
        artist: 'Faith No More',
        title: 'The Morning After',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:32:00+03:00'),
        artist: 'Pantera',
        title: 'Domination',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:39:00+03:00'),
        artist: 'Megadeth',
        title: 'Take No Prisoners',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:45:00+03:00'),
        artist: 'Paradise Lost',
        title: 'The Painless',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:49:00+03:00'),
        artist: 'Suffocation',
        title: 'Jesus Wept',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:56:00+03:00'),
        artist: 'Metallica',
        title: 'Don’t Tread on Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T04:58:00+03:00'),
        artist: 'Darkthrone',
        title: 'A Blaze in the Northern Sky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:05:00+03:00'),
        artist: 'Burzum',
        title: 'Ea, Lord of the Depths',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:12:00+03:00'),
        artist: 'Rage Against the Machine',
        title: 'Fistful of Steel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:20:00+03:00'),
        artist: 'Kyuss',
        title: 'Green Machine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:25:00+03:00'),
        artist: 'Dream Theater',
        title: 'Under a Glass Moon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:34:00+03:00'),
        artist: 'Eyehategod',
        title: 'Man Is Too Ignorant to Exist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:38:00+03:00'),
        artist: 'Death',
        title: 'Overactive Imagination',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:44:00+03:00'),
        artist: 'Cynic',
        title: 'Veil of Maya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:51:00+03:00'),
        artist: 'Sleep',
        title: 'Dragonaut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T05:57:00+03:00'),
        artist: 'Sepultura',
        title: 'Biotech Is Godzilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:00:00+03:00'),
        artist: 'Tool',
        title: 'Undertow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:08:00+03:00'),
        artist: 'At the Gates',
        title: 'Terminal Spirit Disease',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:12:00+03:00'),
        artist: 'In Flames',
        title: 'Artifacts of the Black Rain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:17:00+03:00'),
        artist: 'The Gathering',
        title: 'Strange Machines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:23:00+03:00'),
        artist: 'Meshuggah',
        title: 'Soul Burn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:32:00+03:00'),
        artist: 'Fear Factory',
        title: 'New Breed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:36:00+03:00'),
        artist: 'The Dillinger Escape Plan',
        title: '43% Burnt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:39:00+03:00'),
        artist: 'maudlin of the Well',
        title: 'They Aren\'t All Beautiful',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:45:00+03:00'),
        artist: 'Isis',
        title: 'So Did We',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:53:00+03:00'),
        artist: 'Municipal Waste',
        title: 'Intro / Deathripper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T06:56:00+03:00'),
        artist: 'Waste of Space Orchestra',
        title: 'Journey to the Center of Mass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:05:00+03:00'),
        artist: 'Kontra',
        title: 'Ressu ja Punainen Paroni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:09:00+03:00'),
        artist: 'Los Kyherös',
        title: 'Vanha rauta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:18:00+03:00'),
        artist: 'Finnair Pilots\' Big Band',
        title: 'I Have A Feeling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:25:00+03:00'),
        artist: 'Sabaton',
        title: 'Night Witches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:33:00+03:00'),
        artist: 'Mike Oldfield',
        title: 'Five Miles Out',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:43:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Lentäjän Valssi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:49:00+03:00'),
        artist: 'Alwari Tuohitorvi',
        title: 'Spitfire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T07:54:00+03:00'),
        artist: 'Los Kyherös',
        title: '37',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T08:05:00+03:00'),
        artist: 'Tom Petty and the Heartbreakers',
        title: 'Learning to Fly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T08:17:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Helikopterin varjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T08:29:00+03:00'),
        artist: 'Finnair Pilots\' Big Band',
        title: 'Jet Lag',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T08:41:00+03:00'),
        artist: 'Children of Bodom',
        title: 'Danger Zone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T08:50:00+03:00'),
        artist: 'Frank Sinatra',
        title: 'Fly Me to the Moon (In Other Words)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T08:58:00+03:00'),
        artist: 'Kontra',
        title: 'Punaisen Paronin paluu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:01:00+03:00'),
        artist: 'Vassink',
        title: 'Ludofilia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:06:00+03:00'),
        artist: 'Movetron',
        title: 'Ristinolla (original mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:13:00+03:00'),
        artist: 'Emilia',
        title: 'Satan in Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:23:00+03:00'),
        artist: 'M.A Numminen',
        title: 'Kolets Krestlopp I Naturen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:26:00+03:00'),
        artist: 'Agit Prop',
        title: 'Punavangin laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:31:00+03:00'),
        artist: 'Bonnie Tyler',
        title: 'Total Eclipse of the Heart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:39:00+03:00'),
        artist: 'Pasión De Buena Vista',
        title: 'Soy Cubana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:50:00+03:00'),
        artist: 'Kari Tapio',
        title: 'Juna kulkee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T09:57:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Jäähyväiset rock\'n\'rollille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T10:07:00+03:00'),
        artist: 'Iron Maiden',
        title: 'The Number of the Beast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T10:18:00+03:00'),
        artist: 'Jarkko Martikainen',
        title: 'Terroristin häät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T10:30:00+03:00'),
        artist: 'Värttinä',
        title: 'Maa ei kerro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T10:39:00+03:00'),
        artist: 'Electric Six',
        title: 'Danger! High Voltage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T10:47:00+03:00'),
        artist: 'Heavy Metal Perse',
        title: 'Legenda taikamiekasta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T10:56:00+03:00'),
        artist: 'Various',
        title: 'Civilization IV®: Baba Yetu (Duet Version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T11:00:00+03:00'),
        artist: 'spiikki',
        title: 'Mahti Siibs (Mighty Wings)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T11:12:00+03:00'),
        artist: 'Jukka Poika',
        title: 'Potentiaali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T11:23:00+03:00'),
        artist: 'Ricky-Tick Big Band & Julkinen Sana',
        title: 'Uudestaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T11:40:00+03:00'),
        artist: 'Työelämän uhrit',
        title: 'Joo joo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T11:55:00+03:00'),
        artist: 'Thomas Benjamin Wild Esq',
        title: 'I\'ve no more fucks to give',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T12:06:00+03:00'),
        artist: 'P!nk',
        title: 'Slut Like You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T12:27:00+03:00'),
        artist: 'Sabaton',
        title: 'White Death',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T12:44:00+03:00'),
        artist: 'Raptori',
        title: 'Karvanoppaelvis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T12:55:00+03:00'),
        artist: 'Madonna',
        title: 'Express Yourself',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:08:00+03:00'),
        artist: 'Robbie Williams',
        title: 'Love My Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:10:00+03:00'),
        artist: 'Robbie Williams',
        title: 'Love My Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:15:00+03:00'),
        artist: 'Markus Krunegård',
        title: 'Du stör dig hårt på mig',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:15:00+03:00'),
        artist: 'Markus Krunegård',
        title: 'Du stör dig hårt på mig',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:22:00+03:00'),
        artist: 'Laleh',
        title: 'Aldrig bli som Förr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:26:00+03:00'),
        artist: 'Hurula',
        title: 'Sand',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:31:00+03:00'),
        artist: 'Avicii',
        title: 'Broken Arrows',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:37:00+03:00'),
        artist: '2Pac feat. Snoop Dogg',
        title: '2 of Amerikaz Most Wanted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:40:00+03:00'),
        artist: 'Håkan Hellström',
        title: 'Det kommer aldrig va över för mig',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:45:00+03:00'),
        artist: 'Per Gessle',
        title: 'Första Pris (Duett Med Helena Josefsson)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T13:56:00+03:00'),
        artist: 'Pappas Eget Band',
        title: 'Turister I Kosmos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:01:00+03:00'),
        artist: 'ABBA',
        title: 'Tiger',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:08:00+03:00'),
        artist: 'Roxette',
        title: 'Listen to Your Heart (Swedish single edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:10:00+03:00'),
        artist: 'Eva Dahlgren',
        title: 'Vem tänder stjärnorna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:17:00+03:00'),
        artist: 'Stiftelsen',
        title: 'Viljan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:22:00+03:00'),
        artist: 'Laakso',
        title: 'Norrköping',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:31:00+03:00'),
        artist: 'Veronica Maggio',
        title: 'Jag kommer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:35:00+03:00'),
        artist: 'The Ark',
        title: 'It Takes A Fool To Remain Sane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:40:00+03:00'),
        artist: 'Kent med Beatrice Eli',
        title: 'Godhet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:42:00+03:00'),
        artist: 'Kent med Beatrice Eli',
        title: 'Godhet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T14:49:00+03:00'),
        artist: 'Ville Pusa',
        title: 'En man utan namn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:00:00+03:00'),
        artist: 'Markus Krunegård',
        title: 'Sthml skyline',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:03:00+03:00'),
        artist: 'Stilz feat. Meteor',
        title: 'The Day I Lost You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:08:00+03:00'),
        artist: 'Timecop 1983 feat. The Bad Dreamers',
        title: 'Back To You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:13:00+03:00'),
        artist: 'Nina',
        title: 'Beyond Memory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:17:00+03:00'),
        artist: 'Crockett',
        title: 'Isolation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:23:00+03:00'),
        artist: 'The Gunship',
        title: 'Revel In Your Time (Miami Nights 1984 Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:28:00+03:00'),
        artist: 'Sung',
        title: 'Up Hill',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:31:00+03:00'),
        artist: 'Mitch Buchannon',
        title: 'Call Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:35:00+03:00'),
        artist: 'Absinth 3 feat. Oceanside 85',
        title: 'Starlight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:39:00+03:00'),
        artist: 'The Midnight feat. Nikki Flores',
        title: 'Jason',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:45:00+03:00'),
        artist: 'Sellorekt/LA Dreams',
        title: 'Glow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:50:00+03:00'),
        artist: 'Sellorekt/LA Dreams',
        title: 'Trace Your Footsteps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:53:00+03:00'),
        artist: 'Robert Parker',
        title: 'Silver Screen Cruising',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T15:57:00+03:00'),
        artist: 'VHS Dreams',
        title: 'Vice Point',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:03:00+03:00'),
        artist: 'Neon Nox',
        title: 'Street Hawk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:08:00+03:00'),
        artist: 'Perturbator',
        title: 'Miami Disco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:13:00+03:00'),
        artist: 'VHS Dreams',
        title: 'R.E.D.M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:16:00+03:00'),
        artist: 'Lost Years',
        title: 'The Connection',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:21:00+03:00'),
        artist: 'Carpenter Brut',
        title: 'Disco Zombie Italia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:27:00+03:00'),
        artist: 'Gunship',
        title: 'Shadow Fury',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:32:00+03:00'),
        artist: 'Neon Nox feat. Powernerd',
        title: 'Rise Of The Hero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:36:00+03:00'),
        artist: 'FM-84',
        title: 'Tears',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:42:00+03:00'),
        artist: 'The Midnight',
        title: 'Gloria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:48:00+03:00'),
        artist: 'Wolfclub',
        title: 'Starlight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:53:00+03:00'),
        artist: 'College feat. Electric Youth',
        title: 'A Real Hero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T16:56:00+03:00'),
        artist: 'The Midnight',
        title: 'Sunset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T17:12:00+03:00'),
        artist: 'Mieskuoro ja orkesteri',
        title: 'Jääkärimarssi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T17:24:00+03:00'),
        artist: 'Prodigy',
        title: 'Firestarter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T17:36:00+03:00'),
        artist: 'The Jimi Hendrix Experience',
        title: 'All Along the Watchtower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T17:53:00+03:00'),
        artist: 'Teräsbetoni',
        title: 'Älä mene metsään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T18:08:00+03:00'),
        artist: 'Sabaton',
        title: 'White Death',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T18:28:00+03:00'),
        artist: 'The Prodigy',
        title: 'Warriorʼs Dance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T18:37:00+03:00'),
        artist: 'Viikate',
        title: 'Nuori mies nimetön',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T18:45:00+03:00'),
        artist: 'Tool',
        title: 'Vicarious',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T18:57:00+03:00'),
        artist: 'Foster the People',
        title: 'Pumped Up Kicks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:00:00+03:00'),
        artist: '2. Maanantai',
        title: 'Haddaway, tule takaisin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:05:00+03:00'),
        artist: 'Haddaway',
        title: 'Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:10:00+03:00'),
        artist: 'Aikakone',
        title: 'Odota',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:15:00+03:00'),
        artist: 'E-Rotic',
        title: 'Help Me Dr. Dick',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:20:00+03:00'),
        artist: 'Pandora',
        title: 'Come on and Do It',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:25:00+03:00'),
        artist: 'Movetron',
        title: 'Nousin kyytiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:30:00+03:00'),
        artist: 'Daze',
        title: 'Superhero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:35:00+03:00'),
        artist: 'Fun Factory',
        title: 'Take Your Chance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:40:00+03:00'),
        artist: 'E-Type',
        title: 'Back In The Loop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:45:00+03:00'),
        artist: 'Scooter',
        title: 'Endless Summer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:50:00+03:00'),
        artist: 'Raptori',
        title: 'Oi beibi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:54:00+03:00'),
        artist: 'Culture Beat',
        title: 'Mr. Vain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T19:59:00+03:00'),
        artist: 'Black Box',
        title: 'Ride on Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:05:00+03:00'),
        artist: 'Tino',
        title: 'Dance in the Rain (Optical 2 radio mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:10:00+03:00'),
        artist: 'Basic Element',
        title: 'Love 4 Real',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:14:00+03:00'),
        artist: 'Victoria Silvstedt',
        title: 'Hello Hey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:18:00+03:00'),
        artist: 'Jope Ruonansuu',
        title: 'Haluatko ostaa vokaalin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:23:00+03:00'),
        artist: 'Solid Base',
        title: 'Mirror Mirror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:27:00+03:00'),
        artist: 'Aqua',
        title: 'Roses Are Red',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:32:00+03:00'),
        artist: 'DJ Bobo',
        title: 'Somebody Dance With Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:36:00+03:00'),
        artist: 'Ace of Base',
        title: 'Cruel Summer (big bonus mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:41:00+03:00'),
        artist: 'Vanilla Ice',
        title: 'Ice Ice Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:46:00+03:00'),
        artist: '666',
        title: 'D.E.V.I.L.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:51:00+03:00'),
        artist: 'Scatman John',
        title: 'Scatman\'s World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T20:56:00+03:00'),
        artist: 'Blümchen',
        title: 'Geh\'n wie ein Ägypter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:00:00+03:00'),
        artist: 'X-Perience',
        title: 'I Don\'t Care (radio mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:04:00+03:00'),
        artist: 'Captain Jack',
        title: 'Captain Jack (short mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:09:00+03:00'),
        artist: 'Drömhus',
        title: 'Varje steg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:13:00+03:00'),
        artist: 'T-Spoon',
        title: 'Sex on the Beach',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:18:00+03:00'),
        artist: 'Free, The',
        title: 'Loveletter From Space',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:22:00+03:00'),
        artist: 'S.O.A.P.',
        title: 'This Is How We Party',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:26:00+03:00'),
        artist: 'Freebee',
        title: 'True',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:30:00+03:00'),
        artist: 'Leila K',
        title: 'Murderer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:35:00+03:00'),
        artist: 'Diana King',
        title: 'Shy Guy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:39:00+03:00'),
        artist: 'A★Teens',
        title: 'Dancing Queen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:44:00+03:00'),
        artist: 'Imperio',
        title: 'Amor Infinitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:48:00+03:00'),
        artist: 'Corona',
        title: 'Baby Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T21:53:00+03:00'),
        artist: 'Sash feat. Tina Cousins',
        title: 'Mysterious Times',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:00:00+03:00'),
        artist: 'Dr. Alban',
        title: 'It\'s My Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:02:00+03:00'),
        artist: 'Fleetwood Mac',
        title: 'Tusk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:07:00+03:00'),
        artist: 'Pink Floyd',
        title: 'Careful With That Axe, Eugene',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:11:00+03:00'),
        artist: 'Xiu Xiu',
        title: 'Audrey’s Dance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:18:00+03:00'),
        artist: 'Black Metal Raccoons',
        title: '1420 MHz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:23:00+03:00'),
        artist: 'Colin Stetson, Sarah Neufeld',
        title: 'With the Dark Hug of Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:31:00+03:00'),
        artist: 'Circle',
        title: 'Meronia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:41:00+03:00'),
        artist: 'World\'s End Girlfriend',
        title: 'Bohemian Purgatory Part.2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:51:00+03:00'),
        artist: 'Xiu Xiu',
        title: 'Dance of the Dream Man',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T22:57:00+03:00'),
        artist: 'Swans',
        title: 'The Seer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:02:00+03:00'),
        artist: 'Scott Walker',
        title: 'Psoriatic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:10:00+03:00'),
        artist: 'Xiu Xiu',
        title: 'Ice Cream Truck',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:13:00+03:00'),
        artist: 'Author & Punisher',
        title: 'Beastland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:19:00+03:00'),
        artist: 'Colin Stetson, Sarah Neufeld',
        title: 'Rest of Us',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:27:00+03:00'),
        artist: 'World\'s End Girlfriend',
        title: 'Der Spiegel Im Spiegel Im Spiegel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:32:00+03:00'),
        artist: 'Circle',
        title: 'Wherever Particular People Congregate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:34:00+03:00'),
        artist: 'Igorrr',
        title: 'Tendon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:40:00+03:00'),
        artist: 'Xiu Xiu',
        title: 'F.T.W.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:46:00+03:00'),
        artist: 'Xiu Xiu feat. Michael Gira',
        title: 'Under Pressure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:49:00+03:00'),
        artist: 'Black Metal Racoons',
        title: 'Mortal Kombat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:50:00+03:00'),
        artist: 'Melt‐Banana',
        title: 'Zero+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:52:00+03:00'),
        artist: 'Melt‐Banana',
        title: 'Zero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-20T23:58:00+03:00'),
        artist: 'Porcupine Tree',
        title: 'Lazarus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:07:00+03:00'),
        artist: 'Bluesounds',
        title: 'Waves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:08:00+03:00'),
        artist: 'Aavikko',
        title: 'Fyysikot tiedottavat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:15:00+03:00'),
        artist: 'Virve \'Vicky\' Rosti',
        title: 'Hyökyaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:20:00+03:00'),
        artist: 'Cynic',
        title: 'I\'m but a Wave to…',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:30:00+03:00'),
        artist: 'Regina',
        title: 'Lepään aalloilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:42:00+03:00'),
        artist: 'Imogen Heap',
        title: 'Tidal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:47:00+03:00'),
        artist: 'Pantera',
        title: 'Walk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T00:52:00+03:00'),
        artist: 'Hans Zimmer',
        title: 'Mountains',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T01:02:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Harri Hylje',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T01:11:00+03:00'),
        artist: 'Olavi Virta',
        title: 'Yli aaltojen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T01:20:00+03:00'),
        artist: 'Antonio Vivaldi',
        title: 'The Four Seasons \'Spring\': I. Allegro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T01:35:00+03:00'),
        artist: 'Peter Ilyitch Tchaikovsky',
        title: 'Waltz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T01:48:00+03:00'),
        artist: 'Slowdive',
        title: 'Waves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T01:57:00+03:00'),
        artist: 'Heko ja Hurjat Pojat',
        title: 'Tutustumme kosmokseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T02:04:00+03:00'),
        artist: 'Tähtiportti',
        title: 'Viimeinen tähtiportti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T02:13:00+03:00'),
        artist: 'Color',
        title: 'Elképzelt világ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T02:22:00+03:00'),
        artist: 'Pendulum',
        title: 'Watercolour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T02:34:00+03:00'),
        artist: 'Heko ja Hurjat Pojat',
        title: 'G+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T02:43:00+03:00'),
        artist: 'Katrina and the Waves',
        title: 'Walking on Sunshine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T02:52:00+03:00'),
        artist: 'Torvikopla',
        title: 'Outoon valoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T03:02:00+03:00'),
        artist: 'Kuha.',
        title: 'Intervallit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T03:13:00+03:00'),
        artist: 'Risto',
        title: 'Valoputkessa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T03:16:00+03:00'),
        artist: 'WikiRock',
        title: 'Laser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T03:28:00+03:00'),
        artist: '65daysofstatic',
        title: 'Prisms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T03:46:00+03:00'),
        artist: 'Siniaalto',
        title: 'Hulluuden rajapinnalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T03:58:00+03:00'),
        artist: 'Muse',
        title: 'Madness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:10:00+03:00'),
        artist: 'Boards of Canada',
        title: 'Music Is Math',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:24:00+03:00'),
        artist: 'Grateful Däd',
        title: 'Luonto kostaa teolliselle ihmiselle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:27:00+03:00'),
        artist: '666',
        title: 'Cathedral Of Sin (Introduction)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:33:00+03:00'),
        artist: 'Bolat Nurimov',
        title: 'Zyn Zyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:38:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Sininen uni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:45:00+03:00'),
        artist: 'Sin With Sebastian',
        title: 'Shut Up (and Sleep With Me)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T04:55:00+03:00'),
        artist: 'Heko ja Hurjat Pojat',
        title: 'Psykedeelinen aikamatka Aurinkokuningas Ludvig XIV:n hoviin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T05:11:00+03:00'),
        artist: 'A. Aallon Rytmiorkesteri',
        title: 'Hiroshiman porteilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T05:13:00+03:00'),
        artist: 'The Soft Pink Truth',
        title: 'Grim and Frostbitten Gay Bar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T05:20:00+03:00'),
        artist: 'Tähtiportti',
        title: 'Tippakonventti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T05:38:00+03:00'),
        artist: 'Profeetta Ja Uusi Maailmanuskonto',
        title: 'Psykoosiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T05:47:00+03:00'),
        artist: 'Kyle Dixon & Michael Stein',
        title: 'Stranger Things (extended)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:01:00+03:00'),
        artist: 'Dxxxa D & The Boys',
        title: 'Erilainen jäbä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:03:00+03:00'),
        artist: 'Angelo Badalamenti',
        title: 'Twin Peaks Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:17:00+03:00'),
        artist: 'Heko ja Hurjat Pojat',
        title: 'Hernesurf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:19:00+03:00'),
        artist: 'Paperi T',
        title: 'Resnais, Beefheart ja Aalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:23:00+03:00'),
        artist: 'Saara Aalto',
        title: 'Monsters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:33:00+03:00'),
        artist: 'Tyyne & Martta',
        title: 'Kuumat aallot -Linda Linda-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:34:00+03:00'),
        artist: 'Teekkarikuoro',
        title: 'Sahtilaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:37:00+03:00'),
        artist: 'Tiisu',
        title: 'Menkat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:44:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:50:00+03:00'),
        artist: 'Popeda',
        title: 'Helleaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T06:57:00+03:00'),
        artist: 'The Beach Boys',
        title: 'Good Vibrations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:01:00+03:00'),
        artist: 'Various Artists',
        title: 'Pokémon-teema (suom.)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:06:00+03:00'),
        artist: 'Lastenmusiikkiorkesteri Ammuu!',
        title: 'Pienen pieni veturi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:12:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Juranoid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:20:00+03:00'),
        artist: 'Walt Disney',
        title: 'Hakuna Matata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:25:00+03:00'),
        artist: 'Fröbelin Palikat',
        title: 'Rapuperhe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:30:00+03:00'),
        artist: 'Anna ja Juhani Porola & Niina ja Noora Laitinen',
        title: 'Teknokärpänen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:35:00+03:00'),
        artist: 'Ella ja Aleksi',
        title: 'MC Koppakuoriainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:41:00+03:00'),
        artist: 'Various Artists',
        title: 'Muumitalon asukkaat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:46:00+03:00'),
        artist: 'Saukki ja Oravat',
        title: 'Jöröjukka-rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:50:00+03:00'),
        artist: 'Fröbelin Palikat',
        title: 'Sutsi satsi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T07:56:00+03:00'),
        artist: 'Rölli',
        title: 'Omituisten otusten kerho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:01:00+03:00'),
        artist: 'Alan Menken',
        title: 'Ei kaveria parempaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:02:00+03:00'),
        artist: 'Lilli Palvalin, Elisa Piispanen, Johanna Alhola, Satu Välikangas ja Laura Palvalin',
        title: 'Popsi, popsi porkkanaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:06:00+03:00'),
        artist: 'Pariisin Kevät',
        title: 'Teippileikki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:13:00+03:00'),
        artist: 'Riitta ja Ti-Ti Nalle',
        title: 'Kimpsut ja kampsut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:20:00+03:00'),
        artist: 'Smurffit',
        title: 'Smurffi-hii, smurffi-huu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:27:00+03:00'),
        artist: 'Tea',
        title: 'Sormista sakset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:32:00+03:00'),
        artist: 'Piittipoksaajat',
        title: 'Mestariainesta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:38:00+03:00'),
        artist: 'Lilli Palvalin ja Elisa Piispanen',
        title: 'Peppi Pitkätossu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:40:00+03:00'),
        artist: 'Lilli Palvalin, Elisa Piispanen ja Johanna Alhola',
        title: 'Rouva Hulda huoleton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:44:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Mörri‐Möykky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:48:00+03:00'),
        artist: 'Karvakuonot',
        title: 'Ole mulle kaveri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:53:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Poliisi ja rosvo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T08:56:00+03:00'),
        artist: 'Various Artists',
        title: 'PokéRAP (suom.)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:00:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'Tirehtööri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:05:00+03:00'),
        artist: 'Sir Elwoodin hiljaiset värit',
        title: 'Sellaista se on',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:09:00+03:00'),
        artist: 'Egotrippi',
        title: 'Matkustaja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:16:00+03:00'),
        artist: 'Kaija Koo',
        title: 'Tinakenkätyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:23:00+03:00'),
        artist: 'Jenni Vartiainen',
        title: 'Tunnoton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:27:00+03:00'),
        artist: 'Ismo Alanko',
        title: 'Kriisistä kriisiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:35:00+03:00'),
        artist: 'Tarharyhmä',
        title: 'Rakkauslaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:44:00+03:00'),
        artist: 'Apulanta',
        title: 'Armo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:48:00+03:00'),
        artist: 'Sabrina',
        title: 'Boys (Summertime Love)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T09:54:00+03:00'),
        artist: 'Charles Plogman',
        title: 'Olisitpa täällä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:02:00+03:00'),
        artist: 'Rednex',
        title: 'Wish You Were Here',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:08:00+03:00'),
        artist: 'Janne Hurme',
        title: 'Ikävä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:12:00+03:00'),
        artist: 'Jippu',
        title: 'Kuka teki minusta tän naisen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:18:00+03:00'),
        artist: 'Jesse Kaikuranta',
        title: 'Vielä yksi laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:24:00+03:00'),
        artist: 'Kim Lönnholm',
        title: 'Minä olen muistanut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:28:00+03:00'),
        artist: 'Chisu',
        title: 'Miehistä viis!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:36:00+03:00'),
        artist: 'Anna Puu',
        title: 'Kun ei niin ei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:42:00+03:00'),
        artist: 'Mustat Silmät',
        title: 'Ympyrää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:48:00+03:00'),
        artist: 'Ressu Redford',
        title: 'Kuka on se oikea',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:52:00+03:00'),
        artist: 'Jonna Tervomaa',
        title: 'Disco Melancholia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T10:59:00+03:00'),
        artist: 'Anneli Saaristo',
        title: 'Kuuma Maa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:04:00+03:00'),
        artist: 'Whitney Houston',
        title: 'I Wanna Dance With Somebody (Who Loves Me)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:09:00+03:00'),
        artist: 'Madonna',
        title: 'Like a Prayer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:17:00+03:00'),
        artist: 'Culture Club',
        title: 'Karma Chameleon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:21:00+03:00'),
        artist: 'Dingo',
        title: 'Levoton tuhkimo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:28:00+03:00'),
        artist: 'Irene Cara',
        title: 'Flashdance... What a Feeling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:33:00+03:00'),
        artist: 'Frederik',
        title: 'Kolmekymppinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:41:00+03:00'),
        artist: 'Baltimora',
        title: 'Tarzan Boy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:47:00+03:00'),
        artist: 'Michael Jackson',
        title: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T11:56:00+03:00'),
        artist: 'Cyndi Lauper',
        title: 'Girls Just Want to Have Fun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:00:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:05:00+03:00'),
        artist: 'A-ha',
        title: 'Take on Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:12:00+03:00'),
        artist: 'Rick Astley',
        title: 'Never Gonna Give You Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:19:00+03:00'),
        artist: 'Toto',
        title: 'Africa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:27:00+03:00'),
        artist: 'Harold Faltermeyer',
        title: 'Axel F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:33:00+03:00'),
        artist: 'Jennifer Rush',
        title: 'The Power of Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:38:00+03:00'),
        artist: 'Eurythmics',
        title: 'Sweet Dreams (Are Made of This)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:43:00+03:00'),
        artist: 'Modern Talking',
        title: 'Cheri Cheri Lady (Remastered)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:48:00+03:00'),
        artist: 'The Pointer Sisters',
        title: 'I\'m So Excited',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:51:00+03:00'),
        artist: 'Wham',
        title: 'Wake Me Up Before You Go-Go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T12:55:00+03:00'),
        artist: 'Europe',
        title: 'The Final Countdown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T13:50:00+03:00'),
        artist: 'Nauti Radiosta',
        title: 'Wappu Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T13:56:00+03:00'),
        artist: 'CMX',
        title: 'Hyökyaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T14:11:00+03:00'),
        artist: 'Virtuoso',
        title: 'Suuren meren suolaa - My Heart Will Go On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T14:49:00+03:00'),
        artist: 'spiikki',
        title: 'Mahti Siibs (Mighty Wings)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T14:58:00+03:00'),
        artist: 'Huora',
        title: 'Kovia ja kiljua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:02:00+03:00'),
        artist: 'Kilmoore',
        title: 'Insinöörin exodus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:08:00+03:00'),
        artist: 'Kilmoore',
        title: 'Haitarin salaisuus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:12:00+03:00'),
        artist: 'Kilmoore',
        title: 'Humppa tuo, humppa vie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:16:00+03:00'),
        artist: 'Kilmoore',
        title: 'Joulu Hervannassa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:20:00+03:00'),
        artist: 'Kilmoore',
        title: 'Kunnon sika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:24:00+03:00'),
        artist: 'Bolat Nurimov',
        title: 'Zyn Zyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T15:26:00+03:00'),
        artist: 'Scooter',
        title: 'J\'adore hardcore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:13:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:20:00+03:00'),
        artist: 'Cheek',
        title: 'Tinakenkätyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:24:00+03:00'),
        artist: 'Kilmoore',
        title: 'Lost my heart in Nashville',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:31:00+03:00'),
        artist: 'Kilmoore',
        title: 'A Biker, a farmer, a homeless and a guy who\'ve been shot through the guts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:33:00+03:00'),
        artist: 'Kilmoore',
        title: 'Kyllä kuolema meidät erottaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:37:00+03:00'),
        artist: 'Kilmoore',
        title: 'Herrasmies Kentuckystä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T16:40:00+03:00'),
        artist: 'Knife Party',
        title: 'Bonfire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:23:00+03:00'),
        artist: 'Jason Seizures feat. Hzi',
        title: 'Rumat kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:32:00+03:00'),
        artist: 'PMMP',
        title: 'Koko show',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:36:00+03:00'),
        artist: 'Janos Valmunen',
        title: 'Bussipysäkillä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:39:00+03:00'),
        artist: 'Mona Carita',
        title: 'Suoraan taivaalta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:44:00+03:00'),
        artist: 'Kaytanhousuja',
        title: 'Kaljaa ainiaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:47:00+03:00'),
        artist: 'Tommi Läntinen',
        title: 'Kevät ja minä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:50:00+03:00'),
        artist: 'Kikka',
        title: 'Mä haluun viihdyttää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:53:00+03:00'),
        artist: 'Matias',
        title: '#Dissaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:55:00+03:00'),
        artist: 'Robin',
        title: 'Puuttuva palanen (Wildzide remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T17:59:00+03:00'),
        artist: 'Nauti Radiosta',
        title: 'Wappu Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:02:00+03:00'),
        artist: 'Van Halen',
        title: 'Hot For Teacher',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:09:00+03:00'),
        artist: 'Turo\'s Hevi Gee',
        title: 'Roudaus-Blues',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:15:00+03:00'),
        artist: 'Torvikopla feat. Teekkarikuoro',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:24:00+03:00'),
        artist: 'Peer Günt',
        title: 'Backseat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:30:00+03:00'),
        artist: 'Deep Purple',
        title: 'Knocking at Your Back Door',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:44:00+03:00'),
        artist: 'Metallica',
        title: 'Harvester of Sorrow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:51:00+03:00'),
        artist: 'Rainbow',
        title: 'Long Live Rock ’n’ Roll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T18:59:00+03:00'),
        artist: 'Pink Floyd',
        title: 'Money',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:10:00+03:00'),
        artist: 'Wolfmother',
        title: 'Woman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:16:00+03:00'),
        artist: 'Popeda',
        title: 'Tosi routari',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:26:00+03:00'),
        artist: 'Ozzy Osbourne',
        title: 'Crazy Train',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:33:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Vanha kellarissa valittaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:38:00+03:00'),
        artist: 'Led Zeppelin',
        title: 'The Ocean',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:46:00+03:00'),
        artist: 'Juice Leskinen',
        title: 'Rock\'n roll\'n blues\'n jazz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:53:00+03:00'),
        artist: 'Dio',
        title: 'Rainbow in the Dark',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T19:57:00+03:00'),
        artist: 'Hurriganes',
        title: 'Roadrunner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:01:00+03:00'),
        artist: 'Do Make Say Think',
        title: 'War On Torpor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:06:00+03:00'),
        artist: 'Godspeed You! Black Emperor',
        title: 'Piss Crowns Are Trebled',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:20:00+03:00'),
        artist: 'Tähtiportti',
        title: 'Tähtiportti II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:24:00+03:00'),
        artist: 'Explosions in the Sky',
        title: 'Disintegration Anxiety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:29:00+03:00'),
        artist: 'Do Make Say Think',
        title: 'Horripilation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:39:00+03:00'),
        artist: 'Sigur Rós',
        title: 'Varúð',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:45:00+03:00'),
        artist: 'Do Make Say Think',
        title: 'And Boundless',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T20:52:00+03:00'),
        artist: 'Pepe Willberg',
        title: 'Elämän seppeleet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:02:00+03:00'),
        artist: 'Teeth Of The Sea',
        title: 'Siren Spectre, Phase I, Phase II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:10:00+03:00'),
        artist: 'Paavoharju',
        title: 'Valo Tihkuu Kaiken Läpi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:14:00+03:00'),
        artist: 'MONO',
        title: 'The Battle To Heaven',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:27:00+03:00'),
        artist: 'Dirty Three',
        title: 'Sirena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:31:00+03:00'),
        artist: 'Portishead',
        title: 'We Carry On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:38:00+03:00'),
        artist: 'Godspeed You! Black Emperor',
        title: 'Anthem for No State',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:40:00+03:00'),
        artist: 'Godspeed You! Black Emperor',
        title: 'Anthem for No State',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:52:00+03:00'),
        artist: 'Plutonium 74',
        title: 'Pilvikumpujen laet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T21:56:00+03:00'),
        artist: 'Tähtiportti',
        title: 'Viimeinen tähtiportti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:02:00+03:00'),
        artist: 'Lou Donaldson',
        title: 'Blues Walk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:07:00+03:00'),
        artist: 'Original Dixieland Jazz Band',
        title: 'Dixie Jass Band One Step',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:15:00+03:00'),
        artist: 'Louis Armstrong and His Savoy Ballroom Five',
        title: 'St. James Infirmary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:20:00+03:00'),
        artist: 'Benny Goodman',
        title: 'Stompin\' at the Savoy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:35:00+03:00'),
        artist: 'Charlie Barnet and his orchestra',
        title: 'Skyliner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:41:00+03:00'),
        artist: 'John Coltrane',
        title: 'Giant Steps: Giant Steps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T22:53:00+03:00'),
        artist: 'Albert Ayler',
        title: 'Love Cry',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T23:05:00+03:00'),
        artist: 'Alice Coltrane',
        title: 'Journey in Satchidananda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T23:16:00+03:00'),
        artist: 'Michel Camilo',
        title: 'Just Kiddin\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T23:26:00+03:00'),
        artist: 'Trio Töykeät',
        title: 'Get a Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T23:38:00+03:00'),
        artist: 'Hiromi’s Sonicbloom',
        title: 'Led Boots',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-21T23:50:00+03:00'),
        artist: 'Hearts & Minds',
        title: 'Step\'n',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:02:00+03:00'),
        artist: 'Signe',
        title: 'Tulevaisuuteni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:09:00+03:00'),
        artist: 'Frederik',
        title: 'Jos jotain yrittää (Harva meistä on rautaa)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:13:00+03:00'),
        artist: 'Mona Carita',
        title: 'Soita Mulle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:19:00+03:00'),
        artist: 'Frederic',
        title: 'Kasakkapartio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:20:00+03:00'),
        artist: 'Frederik',
        title: 'Kasakkapartio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:26:00+03:00'),
        artist: 'Eini',
        title: 'Yes sir, alkaa polttaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:31:00+03:00'),
        artist: 'Annika Eklund',
        title: 'Shanghain valot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:40:00+03:00'),
        artist: 'Frederik',
        title: 'Eero eros/Eero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:47:00+03:00'),
        artist: 'Markku Aro',
        title: 'Ensi Kertaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T00:55:00+03:00'),
        artist: 'Eini',
        title: 'Olen neitsyt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:04:00+03:00'),
        artist: 'Kikka',
        title: 'Sukkula Venukseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:10:00+03:00'),
        artist: 'Meiju Suvas',
        title: 'Viet itsekontrollin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:15:00+03:00'),
        artist: 'Frederik',
        title: 'Minttu sekä Ville',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:22:00+03:00'),
        artist: 'Mona Carita',
        title: 'Rasputin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:29:00+03:00'),
        artist: 'Emilia',
        title: 'Satan in Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:36:00+03:00'),
        artist: 'Frederik',
        title: 'Sheikki Ali Hassan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:42:00+03:00'),
        artist: 'Fredi',
        title: 'Elää mä sain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T01:55:00+03:00'),
        artist: 'Frederik',
        title: 'Hedelmäpommi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:02:00+03:00'),
        artist: 'Tony Halme',
        title: 'Viikinki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:08:00+03:00'),
        artist: 'Seija Simola',
        title: 'Ota kii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:13:00+03:00'),
        artist: 'Paula Koivuniemi',
        title: 'Sata kesää tuhat yötä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:17:00+03:00'),
        artist: 'Meiju Suvas',
        title: 'Pure mua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:23:00+03:00'),
        artist: 'Dschinghis Khan',
        title: 'Dschinghis Khan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:31:00+03:00'),
        artist: 'Frederik',
        title: 'Idi Amin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:37:00+03:00'),
        artist: 'Mona Carita',
        title: 'Mikä Fiilis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:42:00+03:00'),
        artist: 'Various Artists',
        title: 'Kake Randelin - Avaa hakas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:51:00+03:00'),
        artist: 'Annika Eklund',
        title: 'Disco! -potpuri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T02:58:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Oon voimissain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:04:00+03:00'),
        artist: 'Frederik',
        title: 'Kung Fu Taistelee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:07:00+03:00'),
        artist: 'Leo Luoto',
        title: 'Villi Yö (live is life)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:13:00+03:00'),
        artist: 'Nisa Soraya',
        title: 'Anna rakas raju hetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:18:00+03:00'),
        artist: 'Mona Carita',
        title: 'Suoraan taivaalta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:26:00+03:00'),
        artist: 'Frederik',
        title: 'Kotiinpäin äiti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:30:00+03:00'),
        artist: 'Kikka',
        title: 'Mä Haluun Viihdyttää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:37:00+03:00'),
        artist: 'Seitsemän seinähullua veljestä',
        title: 'Kelpaisiko seksi?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:44:00+03:00'),
        artist: 'Mirumaru',
        title: 'Rahaa, rahaa, rahaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:52:00+03:00'),
        artist: 'Mona Carita',
        title: 'Kaupungin lapset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:59:00+03:00'),
        artist: 'Frederik',
        title: 'Hafanana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T03:59:00+03:00'),
        artist: 'Frederik',
        title: 'Äijäenergiaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:10:00+03:00'),
        artist: 'Kikka',
        title: 'Apinamies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:16:00+03:00'),
        artist: 'Virve \'Vicky\' Rosti',
        title: 'Tuolta saapuu Charlie Brown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:20:00+03:00'),
        artist: 'Mona Carita',
        title: 'Me emme laske viiteen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:26:00+03:00'),
        artist: 'Puolikuu',
        title: 'Ota Minut Nyt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:32:00+03:00'),
        artist: 'Cascade',
        title: 'Pigallelle jonoon vaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:36:00+03:00'),
        artist: 'Frederik',
        title: 'Tyttö kuin tiikeri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:42:00+03:00'),
        artist: 'Danny & Armi',
        title: 'Nyt niin haluaisin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:49:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Sata salamaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T04:54:00+03:00'),
        artist: 'Frederik',
        title: 'Olen Dracula',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:00:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Riisu pois jo arkipaita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:05:00+03:00'),
        artist: 'Mona Carita',
        title: 'Helli mua hiljaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:09:00+03:00'),
        artist: 'Frederik',
        title: 'Porompompon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:13:00+03:00'),
        artist: 'Seidat',
        title: 'Sumu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:19:00+03:00'),
        artist: 'Eini',
        title: 'Monta monta yötä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:26:00+03:00'),
        artist: 'Reijo Taipale',
        title: 'Ihan kuin nuo toiset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:31:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Menolippu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:35:00+03:00'),
        artist: 'Frederik',
        title: 'Paluulippu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:38:00+03:00'),
        artist: 'Lea Laven',
        title: 'Tumma nainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:44:00+03:00'),
        artist: 'Jean S.',
        title: 'Kalajoen hiekat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:51:00+03:00'),
        artist: 'Mona Carita',
        title: 'Da doo ron ron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T05:57:00+03:00'),
        artist: 'Frederik',
        title: 'Rensselit pykälään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:00:00+03:00'),
        artist: 'Kikka',
        title: 'Keskiyön Aikaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:06:00+03:00'),
        artist: 'Juhamatti',
        title: 'Volga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:12:00+03:00'),
        artist: 'Mona Carita',
        title: 'Voi Mikä Casanova!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:17:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Kun Chicago kuoli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:21:00+03:00'),
        artist: 'Frederik',
        title: 'Kaikki bailaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:25:00+03:00'),
        artist: 'Frederik',
        title: 'Maitoa ei tänään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:29:00+03:00'),
        artist: 'Lea Laven',
        title: 'Ei oo, ei tuu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:33:00+03:00'),
        artist: 'Jukka Kuoppamäki',
        title: 'Teräsmies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:36:00+03:00'),
        artist: 'Frederik',
        title: 'Kumimies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:40:00+03:00'),
        artist: 'Mona Carita',
        title: 'Vastaa Jo, Please',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:44:00+03:00'),
        artist: 'Kikka',
        title: 'Tartu Tiukasti Hanuriin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:48:00+03:00'),
        artist: 'Tommi Läntinen',
        title: 'Via Dolorosa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T06:56:00+03:00'),
        artist: 'Kike Elomaa',
        title: 'Kristoffer Kolumbus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:01:00+03:00'),
        artist: 'Frederik',
        title: 'Yön sudet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:05:00+03:00'),
        artist: 'Puhti',
        title: 'Roikonkoski',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:05:00+03:00'),
        artist: 'Puhti',
        title: 'Pahan laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:11:00+03:00'),
        artist: 'Noitalinna Huraa!',
        title: 'Peräseinäjoen teräsmies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:16:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Pimeä tie, mukavaa matkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:21:00+03:00'),
        artist: 'Aksu',
        title: 'Jangsteri Vain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:26:00+03:00'),
        artist: 'Eleanoora Rosenholm',
        title: 'Kiltti vai tuhma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:32:00+03:00'),
        artist: 'Eleanoora Rosenholm',
        title: 'Musta ruusu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:39:00+03:00'),
        artist: 'Tuomas Henrikin Jeesuksen Kristuksen Bändi',
        title: 'Lailla ninjojen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:45:00+03:00'),
        artist: 'Kitkerät Neitsyet',
        title: 'Pelataanko Yatzia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:51:00+03:00'),
        artist: 'Ultra Bra',
        title: 'Suosi ulkomaista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T07:56:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'To Be Contiuned 4, Je Taime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:03:00+03:00'),
        artist: 'CMX',
        title: 'Elementa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:13:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Kiputyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:19:00+03:00'),
        artist: 'Pariisin Kevät',
        title: 'Meteoriitti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:24:00+03:00'),
        artist: 'Apulanta',
        title: 'Vasten mun kasvojani',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:33:00+03:00'),
        artist: 'Scandinavian Music Group',
        title: 'Lopulta olemme kuitenkin yksin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:39:00+03:00'),
        artist: 'Pää kii',
        title: 'Luuletsä et mä oon huvikseni näin sekasin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:42:00+03:00'),
        artist: 'Milla Rumi',
        title: 'Linnanmäen laitteeseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:47:00+03:00'),
        artist: 'Plutonium 74',
        title: 'Kaisa meni diskoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:52:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Hyviä muistoja, huomenna suihkuun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T08:57:00+03:00'),
        artist: 'Huora',
        title: 'Normaali?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T09:01:00+03:00'),
        artist: 'Rölli',
        title: 'Häläpätilaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T09:10:00+03:00'),
        artist: 'Queen',
        title: 'Fat Bottomed Girls',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T09:18:00+03:00'),
        artist: 'Gnarls Barkley',
        title: 'Crazy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T09:28:00+03:00'),
        artist: 'Tyler, the Creator feat. Kali Uchis',
        title: 'See You Again',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T09:39:00+03:00'),
        artist: 'Jamiroquai',
        title: 'Virtual Insanity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T09:49:00+03:00'),
        artist: 'Erykah Badu',
        title: 'Back in the Day (Puff)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T10:03:00+03:00'),
        artist: 'Queens of the Stone Age',
        title: 'I Sat by the Ocean',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T10:13:00+03:00'),
        artist: 'Red Hot Chili Peppers',
        title: 'Can\'t Stop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T10:24:00+03:00'),
        artist: 'Louis Cole feat. Thundercat',
        title: 'Tunnels in the Air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T10:35:00+03:00'),
        artist: 'Daft Punk',
        title: 'Instant Crush',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T10:49:00+03:00'),
        artist: 'Loiriplukari',
        title: 'Ei Voi Laittaa Verotukseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T11:00:00+03:00'),
        artist: 'Arctic Monkeys',
        title: 'R U Mine?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T11:10:00+03:00'),
        artist: 'Focus',
        title: 'Hocus Pocus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T11:19:00+03:00'),
        artist: 'Saimaa',
        title: 'Myrskyluodon Maija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T11:30:00+03:00'),
        artist: 'Kaytanhousuja',
        title: 'Kaljaa ainiaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T11:48:00+03:00'),
        artist: 'Herbie Hancock',
        title: 'Cantaloupe Island',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T12:06:00+03:00'),
        artist: 'Robert Miles',
        title: 'Children',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T12:23:00+03:00'),
        artist: 'Mokoma',
        title: 'Teon teoriaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T12:33:00+03:00'),
        artist: 'Chumbawamba',
        title: 'Tubthumping',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T12:41:00+03:00'),
        artist: 'Emma Salokoski Ensemble',
        title: 'Veden alla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T12:51:00+03:00'),
        artist: 'Tutti Frutti',
        title: 'Sexii, sexii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T12:57:00+03:00'),
        artist: 'Loreen',
        title: 'Euphoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T13:04:00+03:00'),
        artist: 'Huge L & AI',
        title: 'Vihellellen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T13:16:00+03:00'),
        artist: 'Ulver',
        title: 'Eos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T13:26:00+03:00'),
        artist: 'Ismo Alanko Säätiö',
        title: 'Hallanvaara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T13:33:00+03:00'),
        artist: 'Ayreon',
        title: 'Day Sixteen: Loser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T13:38:00+03:00'),
        artist: 'Jungle',
        title: 'Busy Earnin’',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T13:44:00+03:00'),
        artist: 'Kingston Wall',
        title: 'The Real Thing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T14:04:00+03:00'),
        artist: 'Paleface',
        title: 'Talonomistaja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T14:13:00+03:00'),
        artist: 'Glenn Frey',
        title: 'The Heat Is On (Beverly Hills Cop)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T14:23:00+03:00'),
        artist: 'Zen Café',
        title: 'Vuokralainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T14:29:00+03:00'),
        artist: 'Miljoonasade',
        title: 'Voipallo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T14:46:00+03:00'),
        artist: 'Tuomari Nurmio ja Köyhien Ystävät',
        title: 'Kurjuuden kuningas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:01:00+03:00'),
        artist: 'Rex Remington',
        title: 'Huomisen partaalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:21:00+03:00'),
        artist: 'The Smiths',
        title: 'This Charming Man',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:29:00+03:00'),
        artist: 'Zen Café',
        title: 'Talo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:38:00+03:00'),
        artist: 'Coldplay',
        title: 'Charlie Brown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:46:00+03:00'),
        artist: 'Britney Spears',
        title: 'Work Bitch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:53:00+03:00'),
        artist: 'Rammstein',
        title: 'Sonne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T15:58:00+03:00'),
        artist: 'Jumal Velho',
        title: 'Hei Herra DJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:04:00+03:00'),
        artist: 'Popeda',
        title: 'Lihaa ja perunaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:10:00+03:00'),
        artist: 'Kapteeni Ä-ni',
        title: 'Syyää eka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:15:00+03:00'),
        artist: 'Lapinlahden Linnut',
        title: 'Älä pure mun ananasta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:19:00+03:00'),
        artist: 'Foo Fighters',
        title: 'Dear Rosemary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:25:00+03:00'),
        artist: 'Red Hot Chili Peppers',
        title: 'Give It Away',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:34:00+03:00'),
        artist: 'Pizza Enrico',
        title: 'Mita sina sanoa (Video Tempo)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:41:00+03:00'),
        artist: 'Maarit',
        title: 'Jäätelökesä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:46:00+03:00'),
        artist: 'Ricky-Tick Big Band , Julkinen Sana ,',
        title: 'Myrkkyy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:53:00+03:00'),
        artist: 'Juice Leskinen Slam',
        title: 'Sika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T16:58:00+03:00'),
        artist: 'Bo Kaspers orkester',
        title: 'I botten på glaset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:05:00+03:00'),
        artist: 'Seitsemän seinähullua veljestä',
        title: 'Nakit ja muusi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:10:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Far, jag kan inte få upp min kokosnöt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:15:00+03:00'),
        artist: 'Hank Williams',
        title: 'Jambalaya (on the Bayou)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:22:00+03:00'),
        artist: 'Antti Tuisku',
        title: 'En kommentoi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:27:00+03:00'),
        artist: 'Kasmir',
        title: 'Vadelmavene',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:36:00+03:00'),
        artist: 'Kingston Wall',
        title: 'Mushrooms IV: Mushrooms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:41:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Popkornipulla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:44:00+03:00'),
        artist: 'Mamba',
        title: 'Tennissukat kirjahyllyssä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:48:00+03:00'),
        artist: 'Tenacious D',
        title: 'Fuck Her Gently',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:53:00+03:00'),
        artist: 'Eva & Manu',
        title: 'Cinnamon Hearts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T17:58:00+03:00'),
        artist: 'Antero Raimo & Ovet',
        title: 'Rakastan sacher-torttuja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:04:00+03:00'),
        artist: 'The Beatles',
        title: 'I Am the Walrus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:12:00+03:00'),
        artist: 'Gojira',
        title: 'Toxic Garbage Island',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:20:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Lainelautaileva lehmänmaha r & r',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:26:00+03:00'),
        artist: 'Nirvana',
        title: 'Very Ape',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:33:00+03:00'),
        artist: 'Primus',
        title: 'Tommy the Cat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:41:00+03:00'),
        artist: 'Grinderman',
        title: 'Honey Bee (Let’s Fly to Mars)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:48:00+03:00'),
        artist: 'Kumikameli',
        title: 'Turbokusiainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T18:55:00+03:00'),
        artist: 'Porcupine Tree',
        title: 'Bonnie the Cat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:03:00+03:00'),
        artist: 'Mastodon',
        title: 'March of the Fire Ants',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:11:00+03:00'),
        artist: 'Black Sabbath',
        title: 'War Pigs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:23:00+03:00'),
        artist: 'Mastodon',
        title: 'Blood and Thunder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:29:00+03:00'),
        artist: 'Kari Peitsamo ja Ankkuli',
        title: 'Termiittiblues',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:35:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'Härkä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:40:00+03:00'),
        artist: 'Led Zeppelin',
        title: 'Black Dog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:48:00+03:00'),
        artist: 'Rammstein',
        title: 'Haifisch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T19:57:00+03:00'),
        artist: '22‐Pistepirkko',
        title: 'Birdy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:02:00+03:00'),
        artist: 'The Beatnuts',
        title: 'We Got The Funk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:07:00+03:00'),
        artist: 'Joey Bada$$',
        title: 'Paper Trails',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:12:00+03:00'),
        artist: 'Are',
        title: 'Grillijuhlissa ft. Gettomasa, Rekami',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:19:00+03:00'),
        artist: 'Madvillainy',
        title: 'All Caps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:27:00+03:00'),
        artist: 'MC Kuistinen',
        title: 'Wappuspessu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:33:00+03:00'),
        artist: 'JXO',
        title: 'Propaganda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:41:00+03:00'),
        artist: 'Rekami',
        title: 'Mielen Pääl feat. Joniveli, Skandaali & Eetee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:46:00+03:00'),
        artist: 'Mos Def',
        title: 'Ms. Fat Booty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T20:52:00+03:00'),
        artist: 'Big L',
        title: 'Ebonics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:07:00+03:00'),
        artist: 'Kaleva',
        title: 'Mysteereit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:10:00+03:00'),
        artist: 'EPMD',
        title: 'Da Joint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:16:00+03:00'),
        artist: 'Leaf Dog',
        title: 'It\'s all me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:24:00+03:00'),
        artist: 'Nas',
        title: 'N.Y. State of Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:33:00+03:00'),
        artist: 'Queen Latifah',
        title: 'Come Into My House',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:37:00+03:00'),
        artist: 'Eminem',
        title: 'Superman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:47:00+03:00'),
        artist: 'Vicious Beat Posse',
        title: 'Legalized Dope',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:55:00+03:00'),
        artist: 'Dirty Dike',
        title: 'Hi I\'m James',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T21:58:00+03:00'),
        artist: 'No Smoking Team',
        title: 'Oloneuvokset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:02:00+03:00'),
        artist: 'A Perfect Circle',
        title: 'Counting Bodies Like Sheep to the Rhythm of the War Drums',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:08:00+03:00'),
        artist: 'Combichrist',
        title: 'Fuckmachine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:14:00+03:00'),
        artist: 'Mokoma',
        title: 'Tämän maailman ruhtinaan hovi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:19:00+03:00'),
        artist: 'Fear Factory',
        title: 'Self Bias Resistor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:25:00+03:00'),
        artist: 'Meshuggah',
        title: 'Corridor of Chameleons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:31:00+03:00'),
        artist: 'Skein',
        title: 'Fifth Step: The Distance Between Gods and Men',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:38:00+03:00'),
        artist: 'Hocico',
        title: 'Tiempos de furia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:44:00+03:00'),
        artist: 'The Gothsicles',
        title: 'You Have Found the Hawk\'s Claw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:47:00+03:00'),
        artist: 'The Black Dahlia Murder',
        title: 'Miasma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:53:00+03:00'),
        artist: 'Medeia',
        title: 'Phenomenon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T22:57:00+03:00'),
        artist: 'The Dillinger Escape Plan',
        title: 'The Perfect Design',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:02:00+03:00'),
        artist: 'King Satan',
        title: 'Dance With the Devil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:07:00+03:00'),
        artist: 'Sara',
        title: 'Tanssiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:12:00+03:00'),
        artist: 'Igorrr',
        title: 'Excessive Funeral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:15:00+03:00'),
        artist: 'Gojira',
        title: 'Esoteric Surgery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:22:00+03:00'),
        artist: 'ErilaZ',
        title: 'Straight Line',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:27:00+03:00'),
        artist: 'Fear of Domination',
        title: 'Intact Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:32:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'Sikiö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:37:00+03:00'),
        artist: 'Gore Tech & End.User',
        title: 'Atlantic Warfare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:41:00+03:00'),
        artist: 'Nile',
        title: 'Cast Down the Heretic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:47:00+03:00'),
        artist: 'Author & Punisher',
        title: 'Nihil Strength',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:51:00+03:00'),
        artist: 'Riot Kitten',
        title: 'Regicide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-22T23:56:00+03:00'),
        artist: 'Miseration',
        title: 'Noctivagant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:01:00+03:00'),
        artist: 'Erasure',
        title: 'Always',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:07:00+03:00'),
        artist: 'Rick Astley',
        title: 'Never Gonna Give You Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:12:00+03:00'),
        artist: 'O-Zone',
        title: 'Dragostea Din Dei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:18:00+03:00'),
        artist: 'Yes',
        title: 'Roundabout',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:32:00+03:00'),
        artist: 'Crazy Frog',
        title: 'Axel F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:38:00+03:00'),
        artist: 'Pariisin Kevät',
        title: 'Teippileikki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:45:00+03:00'),
        artist: 'Sacre feat. Mike Monroe',
        title: 'Donny Darko - Mad World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T00:53:00+03:00'),
        artist: 'Sash! feat. Rodriguez',
        title: 'Ecuador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:03:00+03:00'),
        artist: 'Bomfunk MC\'s',
        title: 'Freestyler',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:11:00+03:00'),
        artist: 'Robin',
        title: 'Frontside ollie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:21:00+03:00'),
        artist: 'Basshunter',
        title: 'DotA (radio edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:30:00+03:00'),
        artist: 'O-Zone',
        title: 'Dragostea Din Dei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:37:00+03:00'),
        artist: 'Crazy Frog',
        title: 'Popcorn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:43:00+03:00'),
        artist: 'PSY',
        title: 'Gangnam Style (강남스타일)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T01:50:00+03:00'),
        artist: 'Cascada',
        title: 'Miracle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:03:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Paranoid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:07:00+03:00'),
        artist: 'Era',
        title: 'Ameno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:15:00+03:00'),
        artist: 'Kenny Loggins',
        title: 'Danger Zone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:24:00+03:00'),
        artist: 'Rammstein',
        title: 'Du hast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:35:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:41:00+03:00'),
        artist: 'Jumal x10 Lavis',
        title: 'Hitler (feat. Mauschwitz)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T02:52:00+03:00'),
        artist: 'Foster the People',
        title: 'Pumped Up Kicks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:00:00+03:00'),
        artist: 'Darude',
        title: 'Sandstorm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:09:00+03:00'),
        artist: 'Lordi',
        title: 'Hard Rock Hallelujah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:19:00+03:00'),
        artist: 'A-ha',
        title: 'Take on Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:30:00+03:00'),
        artist: 'Master Blaster',
        title: 'How Old R U? (radio edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:36:00+03:00'),
        artist: 'spiikki',
        title: 'Mahti Siibs (Mighty Wings)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:42:00+03:00'),
        artist: 'Herms Niel',
        title: 'Erika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:48:00+03:00'),
        artist: 'Maija Vilkkumaa',
        title: 'Totuutta ja tehtävää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T03:54:00+03:00'),
        artist: 'Suurlähettiläät',
        title: 'Kun Tänään Lähden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:03:00+03:00'),
        artist: 'Bolat Nurimov',
        title: 'Zyn Zyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:10:00+03:00'),
        artist: 'Leijonat & Curre & Kirka',
        title: 'Den glider in',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:20:00+03:00'),
        artist: 'Weedeater',
        title: 'Weed Monkey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:29:00+03:00'),
        artist: 'Siiri Nuora',
        title: 'Dodo-sorsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:31:00+03:00'),
        artist: 'Siiri Nuora',
        title: 'Dodo-sorsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:34:00+03:00'),
        artist: 'Siiri Nuora',
        title: 'Dodo-sorsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:38:00+03:00'),
        artist: 'Creedence Clearwater Revival',
        title: 'Fortunate Son',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:47:00+03:00'),
        artist: 'Nena',
        title: '99 Luftballoons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T04:56:00+03:00'),
        artist: 'Eiffel 65',
        title: 'Blue (Da Ba Dee)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T05:05:00+03:00'),
        artist: 'George Michael',
        title: 'Careless Whisper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T05:20:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Harry Potter and the Philosopher\'s Stone: Hedwig\'s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T05:29:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Pirates of the Carribean - Jack Sparrow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T05:40:00+03:00'),
        artist: 'Janos Valmunen',
        title: 'Bussipysäkillä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T05:46:00+03:00'),
        artist: 'Pendulum',
        title: 'Propane Nightmares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T05:55:00+03:00'),
        artist: 'Toto',
        title: 'Africa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:00:00+03:00'),
        artist: 'Europe',
        title: 'The Final Countdown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:13:00+03:00'),
        artist: 'Unidentified Flying Orchestra',
        title: 'Theme From \'X-Files\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:22:00+03:00'),
        artist: 'Vitas',
        title: 'The 7th Element',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:32:00+03:00'),
        artist: 'Siiri Nuora',
        title: 'Dodo-sorsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:39:00+03:00'),
        artist: 'Ian Taylor',
        title: 'Sea Shanty 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:49:00+03:00'),
        artist: 'Jumal x10 Lavis',
        title: 'Kallion Spuge 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T06:58:00+03:00'),
        artist: 'Darude',
        title: 'Sandstorm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:07:00+03:00'),
        artist: 'Mokoma',
        title: 'Sinne missä aamu sarastaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:15:00+03:00'),
        artist: 'Saimaa',
        title: 'Pikataipale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:24:00+03:00'),
        artist: 'Jarkko Martikainen',
        title: 'Kaikki me kuolemme pian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:24:00+03:00'),
        artist: 'Jarkko Martikainen',
        title: 'Kaikki me kuolemme pian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:31:00+03:00'),
        artist: 'WÖYH!',
        title: 'Juoksuhiekka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:40:00+03:00'),
        artist: 'Kent',
        title: 'Musik non stop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:52:00+03:00'),
        artist: 'Stam1na',
        title: 'Kannoin sinut läpi hiljaisen huoneen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T07:57:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Jos taivaalta sataisi rahaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T08:18:00+03:00'),
        artist: 'Antti Tuisku',
        title: 'Rahan takii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T08:33:00+03:00'),
        artist: 'Cleaning Women',
        title: 'Party Teufel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T08:44:00+03:00'),
        artist: 'Sabrina',
        title: 'Boys (Summertime Love)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T08:50:00+03:00'),
        artist: 'Amorphis',
        title: 'The Smoke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T08:56:00+03:00'),
        artist: 'The Rasmus',
        title: 'Life 705',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:05:00+03:00'),
        artist: 'Slovak Radio Symphony Orchestra',
        title: 'Die Walkure - Ride Of The Valkyries',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:07:00+03:00'),
        artist: 'Bobby Tragalagat',
        title: ' Kung Fu Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:10:00+03:00'),
        artist: 'Ayreon',
        title: 'Connect the Dots',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:17:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Karhupuisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:23:00+03:00'),
        artist: 'The Beatles',
        title: 'Maxwell’s Silver Hammer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:31:00+03:00'),
        artist: 'Steven Wilson',
        title: 'Permanating',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:37:00+03:00'),
        artist: 'Ghost',
        title: 'Year Zero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:44:00+03:00'),
        artist: 'Manowar',
        title: 'Kings of Metal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:50:00+03:00'),
        artist: 'Jimi Hendrix',
        title: 'Little Wing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T09:55:00+03:00'),
        artist: 'Ricky-Tick Big Band , Julkinen Sana ,',
        title: 'Yykaakoo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:07:00+03:00'),
        artist: 'Dubmood',
        title: 'Toffelskater',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:15:00+03:00'),
        artist: 'blink‐182',
        title: 'Dammit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:21:00+03:00'),
        artist: 'Sabaton',
        title: 'Winged Hussars',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:28:00+03:00'),
        artist: 'Mike Patton',
        title: 'Urlo negro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:34:00+03:00'),
        artist: 'Legend of the Seagullmen',
        title: 'Shipswreck',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:41:00+03:00'),
        artist: 'Cream',
        title: 'Sunshine of Your Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:49:00+03:00'),
        artist: 'Jinjer',
        title: 'Ape',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T10:56:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:03:00+03:00'),
        artist: '“Weird Al” Yankovic',
        title: 'Girls Just Want to Have Lunch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:09:00+03:00'),
        artist: 'Röyksopp',
        title: 'Happy Up Here',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:13:00+03:00'),
        artist: 'Freud Marx Engels & Jung',
        title: 'Nattasia katsomassa eli Pekulijenkka Twist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:20:00+03:00'),
        artist: 'Pyhimys',
        title: 'Tapa poika',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:28:00+03:00'),
        artist: 'Twisted Sister',
        title: 'I Wanna Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:37:00+03:00'),
        artist: 'Paasikiventie',
        title: 'Road to Esperanto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:41:00+03:00'),
        artist: 'Devin Townsend Project',
        title: 'Kingdom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T11:54:00+03:00'),
        artist: 'The Rasmus',
        title: 'Liquid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:11:00+03:00'),
        artist: 'Robin',
        title: 'Luupilla mun korvissa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:19:00+03:00'),
        artist: 'Rage Against the Machine',
        title: 'Guerrilla Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:25:00+03:00'),
        artist: 'Tiktak',
        title: 'Lähdetään tänään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:34:00+03:00'),
        artist: 'Emeli Sandé',
        title: 'Next to Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:43:00+03:00'),
        artist: 'Frank Sinatra',
        title: 'Come Fly With Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:49:00+03:00'),
        artist: 'DJ Juspo',
        title: 'Kilpikonnavoimaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T12:56:00+03:00'),
        artist: 'Blues Brothers',
        title: 'Everybody Needs Somebody to Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:00:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Hevitwist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:06:00+03:00'),
        artist: 'Estradasphere',
        title: 'Super Buck II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:12:00+03:00'),
        artist: 'Fatboy Slim',
        title: 'Fucking in Heaven',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:20:00+03:00'),
        artist: 'XL5',
        title: 'Kaunis peto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:32:00+03:00'),
        artist: 'The Prodigy',
        title: 'Firestarter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:43:00+03:00'),
        artist: 'Tuijamaria',
        title: 'Pac-Man-kuume',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:50:00+03:00'),
        artist: 'Scooter',
        title: 'Faster Harder Scooter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T13:57:00+03:00'),
        artist: 'Daft Punk',
        title: 'Technologic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T14:16:00+03:00'),
        artist: 'Trad.Attack!',
        title: 'Sõit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T14:32:00+03:00'),
        artist: 'Mari Boine',
        title: 'Vuoi vuoi mu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T14:46:00+03:00'),
        artist: 'Meie Mees',
        title: 'Nii lämmi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T14:58:00+03:00'),
        artist: 'Santtu Karhu & Talvisovat',
        title: 'Sano, tuuli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T15:13:00+03:00'),
        artist: 'Paleface vier. Ailu Valle',
        title: 'Jostain paljon kauempaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T15:32:00+03:00'),
        artist: 'Dagö',
        title: 'Muusik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T15:41:00+03:00'),
        artist: 'Karelian Folk Music Ensemble',
        title: 'Kantele ensemble',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T15:47:00+03:00'),
        artist: 'Felgen Orkester',
        title: 'Jovnna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T15:53:00+03:00'),
        artist: 'Metsatöll',
        title: 'Hetk enne lahingut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T15:59:00+03:00'),
        artist: 'Ylva',
        title: 'Weeo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T16:05:00+03:00'),
        artist: 'Derek Duke',
        title: 'Rally the Heroes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T16:10:00+03:00'),
        artist: '濱野美奈子',
        title: 'セクター1(SRX)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T16:22:00+03:00'),
        artist: 'The Adventures of Duane & BrandO',
        title: 'DUCK HUNT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T16:28:00+03:00'),
        artist: 'Various',
        title: 'Megaman® Montage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T16:38:00+03:00'),
        artist: 'The Flight',
        title: 'The Cult of Kosmos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T16:50:00+03:00'),
        artist: 'Cris Velasco',
        title: 'The Horseman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:02:00+03:00'),
        artist: 'Machinae Supremacy',
        title: 'Edge And Pearl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:08:00+03:00'),
        artist: 'Yuka Tsujiyoko',
        title: 'The Dauntless Blade (Echoes)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:15:00+03:00'),
        artist: 'Various',
        title: 'Starcraft® II: Wings Of Liberty Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:26:00+03:00'),
        artist: 'Keiichi Okabe',
        title: '意味／河野万里奈／エミ・エヴァンス',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:34:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Halo: Never Forget/Peril',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:42:00+03:00'),
        artist: 'Percival & Marcin Przybyłowicz',
        title: 'Silver for Monsters…',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:47:00+03:00'),
        artist: 'Russell Brower & Laurence Juber',
        title: 'New Tristram',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T17:56:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Tetris - Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:02:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Vanha kellarissa valittaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:07:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Suomi-ilmiö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:13:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Sotilaallinen tyhjiö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:22:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Kuka ön Pertti Ström',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:28:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Jee jee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:37:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Science Fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:39:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Radio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:46:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Heinillä härkien kaukalon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:51:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'John Fogerty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T18:55:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Oppi tulee idästä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:03:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Oi maa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:08:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Rääväsuita ei haluta Suomeen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:12:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Akun tehdas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:17:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Cock in My Pocket',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:21:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Ajan kaupunkiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:29:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Kamat lujilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:33:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Kaljanlanttauslaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:37:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Poliisi pamputtaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:40:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Delirium tremens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:47:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Puhtoinen lähiöni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:52:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Osa luonnollista karsintaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T19:57:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Kalkkiviivoilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:06:00+03:00'),
        artist: 'Kaiho',
        title: 'Vartavasten teekkareille tehty laulu opiskelijaelämään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:17:00+03:00'),
        artist: 'Genesis',
        title: 'A Trick of the Tail',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:22:00+03:00'),
        artist: 'Jumal x10 Lavis',
        title: 'Kullikellot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:30:00+03:00'),
        artist: 'Focus',
        title: 'Sylvia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:36:00+03:00'),
        artist: 'Camel',
        title: 'Sasquach',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:42:00+03:00'),
        artist: 'Rush',
        title: 'Afterimage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:43:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Tungos on lavaste',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:49:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Kiilakivi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:52:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Joku unohti piirtää jalan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T20:56:00+03:00'),
        artist: 'Wigwam',
        title: 'Losing Hold / Finlandia (live)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T21:15:00+03:00'),
        artist: 'Rush',
        title: 'Afterimage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T21:30:00+03:00'),
        artist: 'Saga',
        title: 'Conversations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T21:34:00+03:00'),
        artist: 'Pekka Streng & Tasavallan Presidentti',
        title: 'Laulu hyönteisestä joka nukahti ruusun vuoteeseen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T21:45:00+03:00'),
        artist: 'Marillion',
        title: 'Incommunicado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T21:53:00+03:00'),
        artist: 'Genesis',
        title: 'Ripples…',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T22:03:00+03:00'),
        artist: 'Jonathan Coulton',
        title: 'Creepy Doll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T22:09:00+03:00'),
        artist: 'Evanescence',
        title: 'My Immortal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T22:21:00+03:00'),
        artist: 'Johann Sebastian Bach',
        title: 'Toccata and Fugue in D minor, BWV 565',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T22:33:00+03:00'),
        artist: 'Rockwell',
        title: 'Somebody\'s Watching Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T22:48:00+03:00'),
        artist: 'Mike Oldfield',
        title: 'Tubular Bells',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T22:56:00+03:00'),
        artist: 'Iron Maiden',
        title: 'Fear of the Dark',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T23:11:00+03:00'),
        artist: 'Ghost',
        title: 'From the Pinnacle to the Pit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T23:28:00+03:00'),
        artist: 'Rotten Skeletor',
        title: 'Kummitusten yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T23:40:00+03:00'),
        artist: 'Napoleon XIV',
        title: 'They\'re Coming To Take Me Away Ha-haa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T23:54:00+03:00'),
        artist: 'Bauhaus',
        title: 'In Fear of Fear',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-23T23:58:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Kirjoituspöytämurhaaja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:03:00+03:00'),
        artist: 'Puolimatka',
        title: 'Mua Sattuu (Päähän)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:13:00+03:00'),
        artist: 'Toto',
        title: 'Georgy Porgy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:23:00+03:00'),
        artist: 'The Adventures of Duane & BrandO',
        title: 'MEGAMAN 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:37:00+03:00'),
        artist: 'Suamenlejjona',
        title: 'Keppana viimeinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:48:00+03:00'),
        artist: 'Anssi Kela',
        title: '2080-luvulla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:52:00+03:00'),
        artist: 'DJ Wormi',
        title: 'Tuline Kebab',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T00:56:00+03:00'),
        artist: 'Business City',
        title: 'Yks Yö Lahes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T01:05:00+03:00'),
        artist: 'Puolimatka',
        title: 'Mua Sattuu (Päähän)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T01:09:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T01:22:00+03:00'),
        artist: 'Jean S.',
        title: 'Pitkät päivät pakerretaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T01:35:00+03:00'),
        artist: 'Lenny Kravitz',
        title: 'If I Could Fall in Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T01:43:00+03:00'),
        artist: 'Yes',
        title: 'Roundabout',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T01:57:00+03:00'),
        artist: 'Generik',
        title: 'Kyllikin Valssi (Radio edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:01:00+03:00'),
        artist: 'Puolimatka',
        title: 'Mua Sattuu (Päähän) DJ Kimmo remix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:07:00+03:00'),
        artist: 'Tim Berg',
        title: 'Bromance (Avicii’s Arena mix extended)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:14:00+03:00'),
        artist: 'Master Blaster',
        title: 'How Old R U? (extended mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:26:00+03:00'),
        artist: 'Business City',
        title: 'Setämiehet Säätää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:36:00+03:00'),
        artist: 'Ultra Bra',
        title: 'Rubikin kuutio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:46:00+03:00'),
        artist: 'CMX',
        title: 'Hyökyaalto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T02:54:00+03:00'),
        artist: 'Janos Valmunen',
        title: 'Bussipysäkillä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:01:00+03:00'),
        artist: 'Darren Korb & Ashley Barrett',
        title: 'Setting Sail, Coming Home (End Theme)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:05:00+03:00'),
        artist: 'Puolimatka',
        title: 'Mua Sattuu (Päähän)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:14:00+03:00'),
        artist: 'Toto',
        title: 'Great Expectations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:27:00+03:00'),
        artist: 'Happoradio',
        title: 'Olette kauniita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:36:00+03:00'),
        artist: 'Business City',
        title: 'Kaukopartio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:45:00+03:00'),
        artist: 'Smurffit',
        title: 'Onnea sulle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:54:00+03:00'),
        artist: 'In Flames',
        title: 'Scream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T03:59:00+03:00'),
        artist: 'toby fox',
        title: 'Battle Against a True Hero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:02:00+03:00'),
        artist: 'Frederik',
        title: 'Maitoa ei tänään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:05:00+03:00'),
        artist: 'Puolimatka',
        title: 'Mua Sattuu (Päähän) DJ Kimmo remix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:08:00+03:00'),
        artist: 'Heikki Kuula',
        title: 'Ystävii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:14:00+03:00'),
        artist: 'Stepa',
        title: 'Lastenlaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:22:00+03:00'),
        artist: 'Stepa',
        title: 'Kysymyksiä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:28:00+03:00'),
        artist: 'Teflon Brothers Feat. Sahamies',
        title: 'Pämppää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:35:00+03:00'),
        artist: 'Toistuvat Yllätykset',
        title: 'Housut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:42:00+03:00'),
        artist: 'Ruger Hauer',
        title: 'Jokaiselle jotakin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:48:00+03:00'),
        artist: 'Eminem',
        title: 'Space Bound',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:53:00+03:00'),
        artist: 'Stepa',
        title: 'Viimeiset Dollarit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T04:58:00+03:00'),
        artist: 'Heikki Kuula',
        title: 'Rataraato',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:01:00+03:00'),
        artist: 'The Notorious B.I.G.',
        title: 'Juicy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:09:00+03:00'),
        artist: 'Aladdin',
        title: 'A Whole New World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:17:00+03:00'),
        artist: 'DJ Juspo & Jörgen der Moro',
        title: 'Sikuvoimaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:23:00+03:00'),
        artist: 'Qike & Cirrus',
        title: 'Helan Myrttis & Minne Myrttis Meni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:23:00+03:00'),
        artist: 'Limp Bizkit',
        title: 'Behind Blue Eyes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:31:00+03:00'),
        artist: 'Sanni',
        title: 'Mörköjä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:37:00+03:00'),
        artist: 'Suamenlejjona',
        title: 'Kymmentä vaille yhdeksän',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:45:00+03:00'),
        artist: 'toby fox',
        title: 'ASGORE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T05:55:00+03:00'),
        artist: 'Moomins',
        title: 'Yume no sekai he',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:01:00+03:00'),
        artist: 'Mew',
        title: 'She Spider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:09:00+03:00'),
        artist: 'Puolimatka',
        title: 'Mua Sattuu (Päähän)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:16:00+03:00'),
        artist: 'Kent',
        title: 'Dom andra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:22:00+03:00'),
        artist: 'Linkin Park',
        title: 'The Catalyst',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:29:00+03:00'),
        artist: 'Virtuoso',
        title: 'Suuren meren suolaa - My Heart Will Go On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:35:00+03:00'),
        artist: 'Yona & Orkesteri Liikkuvat Pilvet',
        title: '...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:37:00+03:00'),
        artist: 'K.V.N. & Lobo',
        title: 'Welcome To The Dead End',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:38:00+03:00'),
        artist: 'HENRIK!',
        title: 'Usko Itseesi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:42:00+03:00'),
        artist: 'Yona',
        title: 'Ghetto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:45:00+03:00'),
        artist: 'Yona',
        title: 'Ei Oo Haluu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:50:00+03:00'),
        artist: 'Jodarok',
        title: 'Passaa Ne Eurot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:52:00+03:00'),
        artist: 'DJ Kridlokk',
        title: 'Varaani',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T06:57:00+03:00'),
        artist: 'Various',
        title: 'Halo® Montage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T07:08:00+03:00'),
        artist: 'YUP',
        title: 'Yövuorossa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T07:16:00+03:00'),
        artist: 'Kingston Wall',
        title: 'Used to Feel Before',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T07:26:00+03:00'),
        artist: 'CMX',
        title: 'Ehdotus ensimmäisen mainoskatkon paikaksi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T07:37:00+03:00'),
        artist: 'Devin Townsend',
        title: 'Noisy Pink Bubbles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T07:50:00+03:00'),
        artist: 'Mew',
        title: 'Witness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T07:58:00+03:00'),
        artist: 'Saimaa',
        title: 'Sataprosenttinen suoritus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T08:06:00+03:00'),
        artist: 'Stam1na',
        title: 'Luova hulluus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T08:15:00+03:00'),
        artist: 'Psycore',
        title: 'The Zoo (feat. Danny Saucedo)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T08:33:00+03:00'),
        artist: 'David Bowie',
        title: 'Fashion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T08:46:00+03:00'),
        artist: 'Olavi Uusivirta',
        title: 'Nukketalo palaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T08:56:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Itkisitkö onnesta?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:03:00+03:00'),
        artist: 'Deep Purple',
        title: 'Fireball',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:08:00+03:00'),
        artist: 'Rosa Jules',
        title: 'Sailing Out To Space',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:15:00+03:00'),
        artist: 'Zeal & Ardor',
        title: 'Blood in the River',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:20:00+03:00'),
        artist: 'Blood Ceremony',
        title: 'My Demon Brother',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:28:00+03:00'),
        artist: 'Eric Clapton',
        title: 'Before You Accuse Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:37:00+03:00'),
        artist: 'Manowar',
        title: 'Manowar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:43:00+03:00'),
        artist: 'Työelämän uhrit',
        title: 'Ahistaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:49:00+03:00'),
        artist: 'David Gilmour',
        title: 'Short and Sweet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T09:58:00+03:00'),
        artist: 'Kiuas',
        title: 'Of Love, Lust and Human Nature',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:07:00+03:00'),
        artist: 'Wöyh!',
        title: 'Kalasatamaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:13:00+03:00'),
        artist: 'Death Hawks',
        title: 'Dream Machine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:21:00+03:00'),
        artist: 'Sabaton',
        title: 'Sparta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:28:00+03:00'),
        artist: 'Katzenjammer',
        title: 'To the Sea',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:33:00+03:00'),
        artist: 'Disco Ensemble',
        title: 'Second Soul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:39:00+03:00'),
        artist: 'Europe',
        title: 'Carrie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:45:00+03:00'),
        artist: 'Teräsbetoni',
        title: 'Voiman vartijat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:52:00+03:00'),
        artist: 'Teuvo Loman',
        title: 'Kari',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T10:56:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:04:00+03:00'),
        artist: '“Weird Al” Yankovic',
        title: 'Livin\' in the Fridge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:10:00+03:00'),
        artist: 'Saara',
        title: 'Ikuinen virta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:15:00+03:00'),
        artist: 'Saara',
        title: 'Tupakkirullaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:22:00+03:00'),
        artist: 'Saara',
        title: 'Ruuhka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:27:00+03:00'),
        artist: 'Saara',
        title: 'Ajetaan tandemilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:32:00+03:00'),
        artist: 'Maija Vilkkumaa',
        title: 'Onkse väärin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:38:00+03:00'),
        artist: 'The Black Angels',
        title: 'Twisted Light',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:42:00+03:00'),
        artist: 'Imppu',
        title: 'I Think Your Boyfriend is Gay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:50:00+03:00'),
        artist: 'Michael Jackson',
        title: 'Dirty Diana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:54:00+03:00'),
        artist: 'Caninus',
        title: 'Studio Guy Gets Pissed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T11:59:00+03:00'),
        artist: 'Devin Townsend Project',
        title: 'The Way Home!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T12:16:00+03:00'),
        artist: 'Dire Straits',
        title: 'Walk of Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T12:22:00+03:00'),
        artist: 'Mirva',
        title: 'I Will Rise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T12:28:00+03:00'),
        artist: 'Imogen Heap',
        title: 'Aha!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T12:34:00+03:00'),
        artist: 'Eroottiset Tuliaseet',
        title: 'Jätelavalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T12:43:00+03:00'),
        artist: 'The Blues Brothers',
        title: 'Theme From Rawhide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T12:54:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Akun tehdas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:00:00+03:00'),
        artist: 'Dalindèo',
        title: 'Kurvi-twist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:07:00+03:00'),
        artist: 'Tiisu',
        title: 'Elämältä turpiin sain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:14:00+03:00'),
        artist: 'PMMP',
        title: 'Heliumpallo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:22:00+03:00'),
        artist: 'Jenni Vartiainen',
        title: 'Anna mulle piiskaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:28:00+03:00'),
        artist: 'WikiRock',
        title: 'Linnunrata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:37:00+03:00'),
        artist: 'Queen',
        title: 'Radio Ga Ga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:47:00+03:00'),
        artist: 'Mokoma',
        title: 'Takatalvi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:52:00+03:00'),
        artist: 'Snow White and the Seven Dwarfs',
        title: 'Heigh-Ho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T13:59:00+03:00'),
        artist: 'Smurffit',
        title: 'Smurffimaisen hienoo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T14:15:00+03:00'),
        artist: 'Michael McCann',
        title: 'Icarus (Main Theme)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T14:26:00+03:00'),
        artist: 'TLC',
        title: 'No Scrubs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T14:40:00+03:00'),
        artist: 'Ben Prunty',
        title: 'Colonial (Battle)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T14:49:00+03:00'),
        artist: 'London Grammar',
        title: 'Metal & Dust',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T14:57:00+03:00'),
        artist: 'Geinoh Yamashirogumi',
        title: 'Kaneda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T15:13:00+03:00'),
        artist: 'The Killers',
        title: 'Mr. Brightside',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T15:31:00+03:00'),
        artist: 'KTROPR',
        title: 'Marjatta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T15:41:00+03:00'),
        artist: 'Richard Armitage & The Dwarf Cast',
        title: 'Misty Mountains',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T15:57:00+03:00'),
        artist: 'Percival',
        title: 'Cloak and Dagger',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:03:00+03:00'),
        artist: 'Boston',
        title: 'More Than a Feeling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:11:00+03:00'),
        artist: 'The Doobie Brothers',
        title: 'China Grove',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:17:00+03:00'),
        artist: 'Yes',
        title: 'Rhythm of Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:26:00+03:00'),
        artist: 'Tom Petty and the Heartbreakers',
        title: 'Runnin\' Down a Dream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:36:00+03:00'),
        artist: 'Dire Straits',
        title: 'Heavy Fuel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:45:00+03:00'),
        artist: 'Journey',
        title: 'Be Good to Yourself',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T16:54:00+03:00'),
        artist: 'Golden Earring',
        title: 'Radar Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:04:00+03:00'),
        artist: 'The Cult',
        title: 'She Sells Sanctuary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:09:00+03:00'),
        artist: 'Creedence Clearwater Revival',
        title: 'Fortunate Son',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:14:00+03:00'),
        artist: 'ZZ Top',
        title: 'Sharp Dressed Man',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:23:00+03:00'),
        artist: 'Santana',
        title: 'Black Magic Woman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:28:00+03:00'),
        artist: 'Iron Maiden',
        title: 'The Clairvoyant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:40:00+03:00'),
        artist: 'Jethro Tull',
        title: 'Acres Wild',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:46:00+03:00'),
        artist: 'Deep Purple',
        title: 'Black Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T17:56:00+03:00'),
        artist: 'Toto',
        title: 'Rosanna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:03:00+03:00'),
        artist: 'Kesä',
        title: 'Sotilaan mieli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:08:00+03:00'),
        artist: 'Two Witches',
        title: 'Spirit Sacrifice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:17:00+03:00'),
        artist: 'Popeda',
        title: 'Kellot Lyö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:26:00+03:00'),
        artist: 'Aeronaut V',
        title: 'Into Two',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:36:00+03:00'),
        artist: 'Anne Clark',
        title: 'Our Darkness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:42:00+03:00'),
        artist: 'Aeronaut V',
        title: 'Killing Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:50:00+03:00'),
        artist: 'Noitarovio',
        title: 'Inkvisitio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T18:56:00+03:00'),
        artist: 'Yazoo',
        title: 'Don\'t Go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:05:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Tuulipuut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:13:00+03:00'),
        artist: 'Pet Shop Boys',
        title: 'Two Divided by Zero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:18:00+03:00'),
        artist: 'Simo Frangen & Dave Lindholm',
        title: 'Räkä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:25:00+03:00'),
        artist: 'YUP',
        title: 'Homo sapiens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:34:00+03:00'),
        artist: 'Sepi Kumpulainen',
        title: 'Armotonta menoa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:39:00+03:00'),
        artist: 'J.M.K.E.',
        title: 'Murheellisten laulujen maa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:43:00+03:00'),
        artist: 'Huora',
        title: 'Normaali?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:50:00+03:00'),
        artist: 'Tryer',
        title: 'Mitä kauneus tuo tullessaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T19:55:00+03:00'),
        artist: 'Judas Priest',
        title: 'Painkiller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T20:03:00+03:00'),
        artist: 'Scooter',
        title: 'Faster Harder Scooter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T20:17:00+03:00'),
        artist: 'Nylon Beat',
        title: 'Seksi vie ja taksi tuo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T20:23:00+03:00'),
        artist: 'Kikka',
        title: 'Mä Haluun Viihdyttää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T20:36:00+03:00'),
        artist: 'Rynkky ja Räkäpäät',
        title: 'Tinderiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T20:48:00+03:00'),
        artist: 'Madonna',
        title: 'Jump',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T20:59:00+03:00'),
        artist: 'Smurffit',
        title: 'Nörttismurffi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T21:09:00+03:00'),
        artist: 'E-Rotic',
        title: 'Sex on the Phone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T21:21:00+03:00'),
        artist: 'Kent',
        title: 'Om du var här',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T21:34:00+03:00'),
        artist: 'Raptori',
        title: 'Oi beibi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T21:44:00+03:00'),
        artist: 'Bushman',
        title: 'No 1 Else',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T21:58:00+03:00'),
        artist: 'Waldo',
        title: 'Gimme, Gimme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:02:00+03:00'),
        artist: 'DJ Kridlokk',
        title: 'Röökii & rötöksii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:09:00+03:00'),
        artist: 'Aivovuoto',
        title: 'Jotkut parhaista kavereistani ovat pankkiireita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:13:00+03:00'),
        artist: 'Tuuttimörkö',
        title: 'Pitkät vitut blogosfääriin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:18:00+03:00'),
        artist: 'DJ Ibusal',
        title: 'Pilalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:22:00+03:00'),
        artist: 'K.V.N. & Lobo',
        title: 'Tänä Vuonna ft. SMC Hoodrats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:27:00+03:00'),
        artist: 'Eevil Stöö x Koksukoo',
        title: 'Hallitaan näitä katuja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:35:00+03:00'),
        artist: 'DJ Kridlokk',
        title: 'Oon Eevil Stöö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:40:00+03:00'),
        artist: 'Jodarok',
        title: 'Anna riikinkukon lentää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:47:00+03:00'),
        artist: 'DJ Polarsoul feat. Eevil Stöö, Asa, Tuuttimörkö & Dxxa D',
        title: 'Taivas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:53:00+03:00'),
        artist: 'Khid',
        title: 'Zelda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T22:58:00+03:00'),
        artist: 'Tuuttimörkö',
        title: 'Savuke + Kola',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:04:00+03:00'),
        artist: 'Huge L',
        title: 'Paperi rahaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:11:00+03:00'),
        artist: 'Ruger Hauer',
        title: 'Marraskuu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:19:00+03:00'),
        artist: 'Kemmuru',
        title: 'Humehii (feat. Dxxxa)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:28:00+03:00'),
        artist: 'Jodarok',
        title: 'Kissamummo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:31:00+03:00'),
        artist: 'JV',
        title: 'Zombi ft. Jodarok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:35:00+03:00'),
        artist: 'MNTTT (Eevil Stöö & Aztra)',
        title: 'Creep Mode',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:41:00+03:00'),
        artist: 'Dxxxa D',
        title: 'Uusi Musta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:46:00+03:00'),
        artist: 'DJ Ibusal ⋆ Lobo',
        title: 'Luotolle Pt. II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:51:00+03:00'),
        artist: 'DJ Kridlokk',
        title: 'Varaani',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-24T23:57:00+03:00'),
        artist: 'MC Taakibörsta ft. Raimo',
        title: 'Riskei On Otettava',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:03:00+03:00'),
        artist: 'Turisas',
        title: 'A Portage to the Unknown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:11:00+03:00'),
        artist: 'Bad Religion',
        title: 'Heroes & Martyrs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:16:00+03:00'),
        artist: 'Soundgarden',
        title: 'Spoonman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:26:00+03:00'),
        artist: 'Madness',
        title: 'Night Boat to Cairo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:34:00+03:00'),
        artist: 'CMX',
        title: 'Pedot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:45:00+03:00'),
        artist: 'Strapping Young Lad',
        title: 'We Ride',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T00:51:00+03:00'),
        artist: 'Ressu Redford',
        title: 'Taas aurinko nousee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T01:01:00+03:00'),
        artist: 'Kiveskives',
        title: 'Kosketin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T01:11:00+03:00'),
        artist: 'Sabaton',
        title: 'Coat of Arms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T01:19:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Munat jäi vetoketjun väliin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T01:29:00+03:00'),
        artist: 'Jeff Briggs & Roland Rizzo',
        title: 'Augustus Rises',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T01:41:00+03:00'),
        artist: 'CMX',
        title: 'Pretoriaanikyborgit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T01:57:00+03:00'),
        artist: 'Olavi Virta',
        title: 'Saavuthan jälleen roomaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T02:08:00+03:00'),
        artist: 'Ensiferum',
        title: 'The Longest Journey (Heathen Throne, Part II)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T02:25:00+03:00'),
        artist: 'Turisas',
        title: 'The Great Escape',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T03:01:00+03:00'),
        artist: 'Frederik',
        title: 'Tsingis Khan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T03:10:00+03:00'),
        artist: 'Juice Leskinen Grand Slam',
        title: 'Jenkka uskon puhdistamisesta (twist)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T03:23:00+03:00'),
        artist: 'Trevor Morris',
        title: 'Dragon Age Inquisition - Main Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T03:39:00+03:00'),
        artist: 'Sabaton',
        title: 'The Carolean’s Prayer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T04:03:00+03:00'),
        artist: 'Mieskuoro ja orkesteri',
        title: '30-vuotisen sodan marssi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T04:03:00+03:00'),
        artist: 'Herra Ylppö & Ihmiset',
        title: 'Napoleon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T04:17:00+03:00'),
        artist: 'Haloo Helsinki!',
        title: 'Vapaus käteen jää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T04:28:00+03:00'),
        artist: 'Turisas',
        title: 'The Land of Hope and Glory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T04:41:00+03:00'),
        artist: 'The 101 Strings Orchestra',
        title: 'Yankee Doodle Dandy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T04:53:00+03:00'),
        artist: 'KOM-teatteri',
        title: 'Kansainvälinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T05:12:00+03:00'),
        artist: 'Mieskuoro ja orkesteri',
        title: 'Jääkärimarssi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T05:20:00+03:00'),
        artist: 'Polyteknikkojen Kuoro, Juha Kuivanen',
        title: 'Finlandia-hymni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T05:37:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Minä soitan harmonikkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T05:45:00+03:00'),
        artist: 'Johnny Cash',
        title: 'We\'ll Meet Again',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T05:59:00+03:00'),
        artist: 'Business City',
        title: 'Kaukopartio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T06:10:00+03:00'),
        artist: 'Leningrad Cowboys',
        title: 'Säkkijärven polkka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T06:19:00+03:00'),
        artist: 'Ultra Bra',
        title: 'Kahdeksanvuotiaana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T06:41:00+03:00'),
        artist: 'Miljoonasade',
        title: 'Lapsuuden sankarille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T06:55:00+03:00'),
        artist: 'Leningrad Cowboys & The Alexandrov Red Army Ensemble',
        title: 'Those Were the Days',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:03:00+03:00'),
        artist: 'Mokoma',
        title: 'Mene ja tiedä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:10:00+03:00'),
        artist: 'WÖYH!',
        title: 'Takaperoisten kuiskausten metsä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:19:00+03:00'),
        artist: 'Mew',
        title: 'Special',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:29:00+03:00'),
        artist: 'Riku Niemi Orchestra',
        title: 'Freestyler',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:38:00+03:00'),
        artist: 'Mihai Trăistariu',
        title: 'Tornero (Romania)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:45:00+03:00'),
        artist: 'Stam1na',
        title: 'Maalla, merellä, ilmassa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T07:53:00+03:00'),
        artist: 'Emma Salokoski Ensemble',
        title: 'Oodi kahville',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:02:00+03:00'),
        artist: 'The Ting Tings',
        title: 'Shut Up and Let Me Go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:10:00+03:00'),
        artist: 'Jarkko Martikainen',
        title: 'Balladi unikeolle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:17:00+03:00'),
        artist: 'Amorphis',
        title: 'Silver Bride',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:30:00+03:00'),
        artist: 'Skálmöld',
        title: 'Narfi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:44:00+03:00'),
        artist: 'Sanni the Kid',
        title: 'Pajulintu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:45:00+03:00'),
        artist: 'Sanni the Kid',
        title: 'Kaukana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:50:00+03:00'),
        artist: '22‐Pistepirkko',
        title: 'This Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T08:57:00+03:00'),
        artist: 'The Rasmus',
        title: 'Every Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:03:00+03:00'),
        artist: 'Steven Wilson',
        title: 'The Same Asylum As Before',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:10:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Children of the Grave',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:19:00+03:00'),
        artist: 'Ricky-Tick Big Band , Julkinen Sana ,',
        title: 'Vielä Vähän',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:28:00+03:00'),
        artist: 'Die Antwoord',
        title: 'I Fink U Freeky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:36:00+03:00'),
        artist: 'blink‐182',
        title: 'Adam’s Song',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:45:00+03:00'),
        artist: 'Devin Townsend',
        title: 'March of the Poozers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T09:53:00+03:00'),
        artist: 'Manowar',
        title: 'Shell Shock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:02:00+03:00'),
        artist: 'Mokoma',
        title: 'Uhkakuva 6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:09:00+03:00'),
        artist: 'Aleksi Eeben',
        title: 'Spaceman Salutes Commodore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:16:00+03:00'),
        artist: 'Charlie Parker',
        title: 'Rocker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:22:00+03:00'),
        artist: 'Sabaton',
        title: 'Gott mit uns',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:28:00+03:00'),
        artist: 'Ayreon',
        title: 'Star of Sirrah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:39:00+03:00'),
        artist: 'Ukkosmaine',
        title: 'Pallosalama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:46:00+03:00'),
        artist: 'The Adventures of Duane & BrandO',
        title: 'CHEETAHMEN II',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:52:00+03:00'),
        artist: 'Blue Öyster Cult',
        title: 'O.D.’d on Life Itself',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T10:59:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:06:00+03:00'),
        artist: '“Weird Al” Yankovic',
        title: 'Lasagna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:14:00+03:00'),
        artist: 'Studio Killers',
        title: 'All Men Are Pigs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:21:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:27:00+03:00'),
        artist: 'Jamiroquai',
        title: 'Love Foolosophy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:36:00+03:00'),
        artist: 'George Thorogood & the Destroyers',
        title: 'Bad to the Bone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:47:00+03:00'),
        artist: 'Ellie Goulding',
        title: 'Anything Could Happen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T11:59:00+03:00'),
        artist: 'Nelly Furtado feat. Timbaland',
        title: 'Promiscuous',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:10:00+03:00'),
        artist: 'Alkaline Trio',
        title: 'The Torture Doctor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:16:00+03:00'),
        artist: 'Muuan Mies',
        title: 'Rude Boy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:23:00+03:00'),
        artist: 'AFI',
        title: 'Too Shy to Scream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:29:00+03:00'),
        artist: 'RJD2',
        title: 'Smoke & Mirrors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:39:00+03:00'),
        artist: 'Lapko',
        title: 'Scandal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:47:00+03:00'),
        artist: 'Good Charlotte',
        title: 'Predictable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:54:00+03:00'),
        artist: 'Fleetwood Mac',
        title: 'Go Your Own Way',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T12:59:00+03:00'),
        artist: 'Laika & The Cosmonauts',
        title: 'Salt Mine Twist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T13:05:00+03:00'),
        artist: 'Billy Idol',
        title: 'Rebel Yell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T13:15:00+03:00'),
        artist: 'Jamiroquai',
        title: 'Automaton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T13:24:00+03:00'),
        artist: 'Porcupine Tree',
        title: 'Open Car',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T13:34:00+03:00'),
        artist: 'Ultra Bra',
        title: 'Jäätelöauto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T13:42:00+03:00'),
        artist: 'Gettomasa & Ruuben',
        title: 'Kuolleet presidentit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T13:49:00+03:00'),
        artist: 'Masa & Teurastaja',
        title: 'Lanit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:09:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Grand Theft Auto IV - Soviet Connection',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:13:00+03:00'),
        artist: 'Tommi Läntinen',
        title: 'Via dolorosa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:22:00+03:00'),
        artist: 'Justimus',
        title: 'Kaljavauva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:30:00+03:00'),
        artist: 'Bruce Springsteen',
        title: 'Born in the U.S.A.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:40:00+03:00'),
        artist: 'Led Zeppelin',
        title: 'Immigrant Song',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:48:00+03:00'),
        artist: 'Volbeat feat. Sarah Blackwood',
        title: 'Lonesome Rider',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T14:55:00+03:00'),
        artist: 'Stam1na',
        title: 'Pakkolasku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:10:00+03:00'),
        artist: 'Elvis Presley',
        title: 'Hound Dog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:15:00+03:00'),
        artist: 'Caravan Palace',
        title: 'Jolie Coquine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:23:00+03:00'),
        artist: 'Russkaja',
        title: 'Get Lucky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:32:00+03:00'),
        artist: 'Steve \'n\' Seagulls',
        title: 'The Trooper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:40:00+03:00'),
        artist: 'TLC',
        title: 'Waterfalls',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:49:00+03:00'),
        artist: 'Ylvis',
        title: 'The Fox',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T15:56:00+03:00'),
        artist: 'Blue Swede & Bjorn Skifs',
        title: 'Hooked On A Feeling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:02:00+03:00'),
        artist: 'Phil Collins',
        title: 'In The Air Tonight',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:09:00+03:00'),
        artist: 'Wings',
        title: 'Band On The Run',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:13:00+03:00'),
        artist: 'Fleetwood Mac',
        title: 'Second Hand News',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:17:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Elämän Tarkoitus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:23:00+03:00'),
        artist: 'Eagles',
        title: 'One Of These Nights',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:27:00+03:00'),
        artist: 'Toto',
        title: 'Fahrenheit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:36:00+03:00'),
        artist: 'Juice Leskinen',
        title: 'Luonas kai olla saan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:40:00+03:00'),
        artist: 'Bad Manners',
        title: 'Inner London Violence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:45:00+03:00'),
        artist: 'Eric Clapton',
        title: 'Pretending',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:52:00+03:00'),
        artist: 'J. Karjalainen',
        title: 'Oi mikä ihana ilta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:56:00+03:00'),
        artist: 'Topi Sorsakoski & The Agents',
        title: 'Olet Rakkain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T16:59:00+03:00'),
        artist: 'Eija Sinikka',
        title: 'Naisten kaljailta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:04:00+03:00'),
        artist: 'Michael Sembello',
        title: 'Maniac',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:09:00+03:00'),
        artist: 'Meiju Suvas',
        title: 'Pidä musta kiinni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:14:00+03:00'),
        artist: 'Donna Summer',
        title: 'She Works Hard For The Money',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:20:00+03:00'),
        artist: 'Earth, Wind & fire',
        title: 'Boogie Wonderland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:29:00+03:00'),
        artist: 'Samantha Fox',
        title: '(I Can\'t Get No) Satisfaction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:34:00+03:00'),
        artist: 'Cutting Crew',
        title: '(I Just) Died in Your Arms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:39:00+03:00'),
        artist: 'Modern Talking',
        title: 'Cheri, Cheri Lady',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:44:00+03:00'),
        artist: 'Kim Larsen',
        title: 'Donnez-Moi Du Feu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:49:00+03:00'),
        artist: 'Heaven 17',
        title: 'Play To Win',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:53:00+03:00'),
        artist: 'Madonna',
        title: 'La Isla Bonita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T17:57:00+03:00'),
        artist: 'Jan Hammer',
        title: 'Crockett\'s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:02:00+03:00'),
        artist: 'Taio Cruz',
        title: 'Break Your Heart',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:07:00+03:00'),
        artist: 'Sérgio Mendes feat. The Black Eyed Peas',
        title: 'Mas Que Nada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:14:00+03:00'),
        artist: 'Ari Koivunen',
        title: 'Hear My Call',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:21:00+03:00'),
        artist: 'Koop Arponen',
        title: 'Every Song I Hear...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:27:00+03:00'),
        artist: 'Illi',
        title: 'Hukkaa päivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:34:00+03:00'),
        artist: 'Technicolour',
        title: 'Someday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:41:00+03:00'),
        artist: 'Kim Herold',
        title: 'Social Butterfly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:48:00+03:00'),
        artist: 'Danny',
        title: 'Tokyo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T18:55:00+03:00'),
        artist: 'Lovex',
        title: 'Anyone Anymore',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:00:00+03:00'),
        artist: 'Chicane Feat. Tom Jones',
        title: 'Stoned In Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:06:00+03:00'),
        artist: 'Foo Fighters',
        title: 'Long Road to Ruin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:13:00+03:00'),
        artist: 'Uniklubi',
        title: 'Kaikki mitä mä annoin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:18:00+03:00'),
        artist: 'Aste',
        title: 'Poikkeus sääntöön',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:23:00+03:00'),
        artist: 'Pussycat Dolls',
        title: 'Hush Hush',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:30:00+03:00'),
        artist: 'Timbaland feat. OneRepublic',
        title: 'Apologize',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:36:00+03:00'),
        artist: 'Britney Spears',
        title: 'Break the Ice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:44:00+03:00'),
        artist: 'Tuomas Kauhanen feat. VäinöVäinö',
        title: 'Enkeli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:50:00+03:00'),
        artist: 'Sturm und Drang',
        title: 'Indian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T19:56:00+03:00'),
        artist: 'Pitbull',
        title: 'Hotel Room Service',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:03:00+03:00'),
        artist: 'Nadia Ali',
        title: 'Rapture (Avicii New Generation extended mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:09:00+03:00'),
        artist: 'Dimitri Vegas feat. Like Mike & Martin Garrix',
        title: 'Tremor (Sensation 2014 Anthem / Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:16:00+03:00'),
        artist: 'Nicky Romero feat. NERVO',
        title: 'Like Home',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:22:00+03:00'),
        artist: 'deadmau5',
        title: 'Not Exactly (original)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:32:00+03:00'),
        artist: 'DVBBS & Borgeous',
        title: 'Tsunami (Blasterjaxx remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:41:00+03:00'),
        artist: 'Scooter',
        title: 'Coldwater Canyon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:47:00+03:00'),
        artist: 'Zedd feat. Foxes',
        title: 'Clarity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:53:00+03:00'),
        artist: 'Knife Party',
        title: 'LRAD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T20:59:00+03:00'),
        artist: 'Cosmic Gate',
        title: 'Happyness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:08:00+03:00'),
        artist: 'ATB',
        title: 'Sun Goes Down (Savi × Lema remix edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:15:00+03:00'),
        artist: 'Skrillex feat. Penny',
        title: 'All I Ask of You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:20:00+03:00'),
        artist: 'W&W',
        title: 'Bighfoot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:26:00+03:00'),
        artist: 'Basshunter',
        title: 'Every Morning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:32:00+03:00'),
        artist: 'Dash Berlin feat. Chiston Rigby',
        title: 'Underneath the Sky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:37:00+03:00'),
        artist: 'Dada Life',
        title: 'This Machine Kills Ravers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:43:00+03:00'),
        artist: 'Scooter',
        title: 'I\'m Raving',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:49:00+03:00'),
        artist: 'Groove Coverage',
        title: 'Moonlight Shadow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:50:00+03:00'),
        artist: 'Porter Robinson',
        title: 'Unison (Knife Party Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T21:56:00+03:00'),
        artist: 'Skrillex',
        title: 'With You, Friends (Long Drive)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:02:00+03:00'),
        artist: 'Maserati',
        title: 'San Angeles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:02:00+03:00'),
        artist: 'Maserati',
        title: 'San Angeles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:09:00+03:00'),
        artist: 'Maybeshewill',
        title: 'To The Skies From A Hillside',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:15:00+03:00'),
        artist: 'Caspian',
        title: 'Ríoseco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:23:00+03:00'),
        artist: 'MONO',
        title: 'Pure as Snow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:34:00+03:00'),
        artist: 'toe',
        title: 'Kodoku No Hatsumei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:39:00+03:00'),
        artist: 'Pg.lost',
        title: 'Terrain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:45:00+03:00'),
        artist: 'If These Trees Could Talk',
        title: 'Barren Lands of the Modern Dinosaur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T22:52:00+03:00'),
        artist: 'Explosions in the Sky',
        title: 'Your Hand in Mine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T23:02:00+03:00'),
        artist: 'Godspeed You! Black Emperor',
        title: 'Peasantry or ‘Light! Inside of Light!’',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T23:14:00+03:00'),
        artist: 'Anathema',
        title: 'Untouchable, Part 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T23:21:00+03:00'),
        artist: 'Yndi Halda',
        title: 'We Flood Empty Lakes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T23:33:00+03:00'),
        artist: 'Sólstafir',
        title: 'Köld',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T23:42:00+03:00'),
        artist: 'Sigur Rós',
        title: 'Var',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-25T23:48:00+03:00'),
        artist: 'We Lost the Sea',
        title: 'The Last Dive of David Shaw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:04:00+03:00'),
        artist: 'Dio',
        title: 'Rainbow in the Dark',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:10:00+03:00'),
        artist: 'Päivi Räsänen',
        title: 'Sateenkaaren tuolla puolen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:15:00+03:00'),
        artist: 'Apocalyptica',
        title: 'S.O.S. (Anything but Love)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:20:00+03:00'),
        artist: 'Prince',
        title: 'Purple Rain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:28:00+03:00'),
        artist: 'Jimi Hendrix',
        title: 'Purple Haze',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:32:00+03:00'),
        artist: 'Devin Townsend Project',
        title: 'Truth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:39:00+03:00'),
        artist: 'Deep Purple',
        title: 'Black Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:46:00+03:00'),
        artist: 'Uriah Heep',
        title: 'Lady in Black',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T00:54:00+03:00'),
        artist: 'The Rolling Stones',
        title: 'Paint it Black',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:02:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Kanerva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:11:00+03:00'),
        artist: 'Ott',
        title: 'The Queen of All Everything',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:19:00+03:00'),
        artist: 'Kanye West',
        title: 'Violent Crimes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:26:00+03:00'),
        artist: 'Husky Rescue',
        title: 'My World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:33:00+03:00'),
        artist: 'Eiffel 65',
        title: 'Blue (Da Ba Dee)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:39:00+03:00'),
        artist: 'Nina Simone',
        title: 'Mood Indigo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:43:00+03:00'),
        artist: 'AFI',
        title: '37mm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:50:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Sininen uni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:53:00+03:00'),
        artist: 'DJ Shadow',
        title: 'Midnight in a Perfect World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:54:00+03:00'),
        artist: 'Elvis Presley',
        title: 'Blue suede shoes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T01:59:00+03:00'),
        artist: 'DJ Shadow',
        title: 'Midnight in a Perfect World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:04:00+03:00'),
        artist: 'Nightwish',
        title: 'Ghost Love Score',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:19:00+03:00'),
        artist: 'Alan Walker',
        title: 'Faded',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:27:00+03:00'),
        artist: 'Sha Na Na',
        title: 'Blue Moon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:30:00+03:00'),
        artist: 'Erasure',
        title: 'Always',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:36:00+03:00'),
        artist: 'Jukka Kuoppamäki',
        title: 'Sininen ja valkoinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:42:00+03:00'),
        artist: 'Shinedown',
        title: 'Cyanide Sweet Tooth Suicide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:49:00+03:00'),
        artist: 'Echo & The Bunnymen',
        title: 'Turquoise Days',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:52:00+03:00'),
        artist: 'Bad Religion',
        title: 'Cyanide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T02:58:00+03:00'),
        artist: 'Sibelius',
        title: 'Finlandia, Op. 26',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:07:00+03:00'),
        artist: 'The Cure',
        title: 'Mint Car',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:16:00+03:00'),
        artist: 'Miles Davis',
        title: 'Blue In Green',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:22:00+03:00'),
        artist: 'Hector, Kirka, Pepe Willberg ja Pave Maijanen',
        title: 'Rööperiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:26:00+03:00'),
        artist: 'The Glitch Mob',
        title: 'Fortune Days',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:28:00+03:00'),
        artist: 'Viikate',
        title: 'Myrkynvihreä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:28:00+03:00'),
        artist: 'Viikate',
        title: 'Myrkynvihreää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:37:00+03:00'),
        artist: 'The Glitch Mob',
        title: 'Fortune Days',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:47:00+03:00'),
        artist: 'Kari Peitsamon Skootteri',
        title: 'Oliivinvihreä Dodge Dart vm-75',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T03:50:00+03:00'),
        artist: 'Devin Townsend',
        title: 'Color Your World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:03:00+03:00'),
        artist: 'Röyksopp',
        title: 'Eple',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:07:00+03:00'),
        artist: 'Von Hertzen Brothers',
        title: 'Frozen Butterflies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:13:00+03:00'),
        artist: 'Aikakone',
        title: 'Keltainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:21:00+03:00'),
        artist: 'Frank Zappa',
        title: 'Don\'t Eat the Yellow Snow (single version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:24:00+03:00'),
        artist: 'Coldplay',
        title: 'Yellow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:31:00+03:00'),
        artist: 'The Beatles',
        title: 'Yellow Submarine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:34:00+03:00'),
        artist: 'Amorphis',
        title: 'The Golden Elk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:42:00+03:00'),
        artist: 'Ramin Djawadi',
        title: 'Light of the Seven',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T04:54:00+03:00'),
        artist: 'Stepa',
        title: 'Kaikki hyvin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:01:00+03:00'),
        artist: 'Fool’s Garden',
        title: 'Lemon Tree',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:04:00+03:00'),
        artist: 'ORIGA',
        title: 'rise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:12:00+03:00'),
        artist: 'Air',
        title: 'All I Need',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:18:00+03:00'),
        artist: 'The Shadows',
        title: 'Apache',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:23:00+03:00'),
        artist: 'Boards of Canada',
        title: 'Aquarius',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:31:00+03:00'),
        artist: 'Wintersun',
        title: 'Sons Of Winter And Stars (Rain Of Stars ; Surrounded By Darkness ; Journey Inside A Dream ; Sons Of Winter And Stars)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:45:00+03:00'),
        artist: 'Kingston Wall',
        title: 'Fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:49:00+03:00'),
        artist: 'Sonata Arctica',
        title: 'Cloud Factory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:54:00+03:00'),
        artist: 'The 101 Strings Orchestra',
        title: 'Pink Panther Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T05:58:00+03:00'),
        artist: 'Sanni',
        title: 'Prinsessoja & astronautteja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:04:00+03:00'),
        artist: 'CMX',
        title: 'Punainen komentaja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:09:00+03:00'),
        artist: 'Guano Apes',
        title: 'Pretty in Scarlet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:15:00+03:00'),
        artist: 'KOM-teatteri',
        title: 'Kansainvälinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:18:00+03:00'),
        artist: 'Avain',
        title: 'Punainen tiili',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:24:00+03:00'),
        artist: 'Barren Earth',
        title: 'Curse of the Red River',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:31:00+03:00'),
        artist: 'Amorphis',
        title: 'Under the Red Cloud',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:37:00+03:00'),
        artist: 'The National',
        title: 'The Rains of Castamere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:42:00+03:00'),
        artist: 'Röyksopp',
        title: 'She’s So',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:49:00+03:00'),
        artist: 'Coheed and Cambria',
        title: 'Blood Red Summer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T06:57:00+03:00'),
        artist: 'Rainbow',
        title: 'Man On The Silver Mountain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:05:00+03:00'),
        artist: 'Tears for Fears',
        title: 'Everybody Wants to Rule the World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:15:00+03:00'),
        artist: 'Muumiperheen lauluretki',
        title: 'Pieni iloinen tie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:21:00+03:00'),
        artist: 'WÖYH!',
        title: 'Lasikraatteri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:28:00+03:00'),
        artist: 'Therapy?',
        title: 'Insecurity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:37:00+03:00'),
        artist: 'Phoenix',
        title: 'Everything Is Everything',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:44:00+03:00'),
        artist: 'Mokoma',
        title: 'Valapatto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T07:53:00+03:00'),
        artist: 'Huun‐Huur‐Tu',
        title: 'Chyraa-Khoor (My Yellow Pacer)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:07:00+03:00'),
        artist: 'Billy Joel',
        title: 'New York State of Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:16:00+03:00'),
        artist: 'Frank Zappa',
        title: 'Bobby Brown Goes Down',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:24:00+03:00'),
        artist: 'Pepe Willberg',
        title: 'Aivan sama mulle mä oon onnellinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:33:00+03:00'),
        artist: 'Maraton',
        title: 'Blood Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:43:00+03:00'),
        artist: 'Stam1na',
        title: 'Kajo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:48:00+03:00'),
        artist: 'YUP',
        title: 'Väärinkäsityksiä merellä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T08:56:00+03:00'),
        artist: 'Fredi',
        title: 'Elää mä sain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:03:00+03:00'),
        artist: 'Sodom',
        title: 'Napalm in the Morning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:11:00+03:00'),
        artist: 'Jimi Hendrix',
        title: 'Foxy Lady',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:18:00+03:00'),
        artist: 'Scar Symmetry',
        title: 'The Illusionist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:27:00+03:00'),
        artist: 'Ukkosmaine',
        title: 'Pyyhe kenttään...not!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:36:00+03:00'),
        artist: 'Haken',
        title: 'Initiate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:46:00+03:00'),
        artist: 'Erasure',
        title: 'Take a Chance on Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T09:54:00+03:00'),
        artist: 'AMJ',
        title: 'Three Minute Wonder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:04:00+03:00'),
        artist: 'Rhapsody',
        title: 'Rain of a Thousand Flames',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:12:00+03:00'),
        artist: 'Kingston Wall',
        title: 'Istwan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:20:00+03:00'),
        artist: 'Korpiklaani',
        title: 'Sahti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:32:00+03:00'),
        artist: 'The Beatles',
        title: 'A Hard Day’s Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:35:00+03:00'),
        artist: 'Disco Ensemble',
        title: 'Stun Gun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:41:00+03:00'),
        artist: 'Sabaton',
        title: 'Primo Victoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:48:00+03:00'),
        artist: 'Manowar',
        title: 'Kingdom Come',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T10:56:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:03:00+03:00'),
        artist: '“Weird Al” Yankovic',
        title: 'Fat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:10:00+03:00'),
        artist: 'Hanson',
        title: 'Mmmbop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:19:00+03:00'),
        artist: 'Igorrr',
        title: 'Houmous',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:29:00+03:00'),
        artist: 'Harold Faltermeyer & Steve Stevens',
        title: 'Top Gun Anthem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:39:00+03:00'),
        artist: 'Aavikko',
        title: 'Torpedo Boys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:47:00+03:00'),
        artist: 'Atreyu',
        title: 'Falling Down',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T11:53:00+03:00'),
        artist: 'Sydän, sydän',
        title: 'Koira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:00:00+03:00'),
        artist: 'Toto',
        title: 'Only the Children',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:14:00+03:00'),
        artist: 'Devin Townsend Project',
        title: 'Stars',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:22:00+03:00'),
        artist: 'Choir of Young Believers',
        title: 'Hollow Talk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:29:00+03:00'),
        artist: 'LSB',
        title: 'So Right',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:36:00+03:00'),
        artist: 'blink‐182',
        title: 'Sober',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:41:00+03:00'),
        artist: 'Ella ja Aleksi',
        title: 'Varis Hilton (feat. Kristiina Brask)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:49:00+03:00'),
        artist: 'Pete Parkkonen',
        title: 'Kohta sataa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:58:00+03:00'),
        artist: 'Nauti Radiosta',
        title: 'Wappu Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T12:59:00+03:00'),
        artist: 'Sidsel Ben Semmane',
        title: 'Twist of Love (Denmark)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:04:00+03:00'),
        artist: 'Sininen Kampela',
        title: 'Viinaa, Uskontoa Ja Turhaa Filosofiaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:12:00+03:00'),
        artist: 'Kuona',
        title: 'Kuolemanvesi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:21:00+03:00'),
        artist: 'The Violet Bunnies',
        title: 'Aria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:26:00+03:00'),
        artist: 'Työelämän uhrit',
        title: 'Raivoloparit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:35:00+03:00'),
        artist: 'The Skreppers',
        title: 'Teddy Boy You are Dead and gone now!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:38:00+03:00'),
        artist: 'Johan Platt',
        title: 'Hiboudanse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:47:00+03:00'),
        artist: 'Pilipalisaatio',
        title: 'Teaser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T13:55:00+03:00'),
        artist: 'Aeroloft',
        title: 'Nice Miami',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T14:01:00+03:00'),
        artist: 'Ode In Black',
        title: 'Goodbye',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T14:22:00+03:00'),
        artist: '植松伸夫',
        title: 'The Highwind Takes to the Skies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T14:33:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Mass Effect - Suicide Mission',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T14:43:00+03:00'),
        artist: 'John Williams',
        title: 'Scherzo for Motorcycle and Orchestra (Indiana Jones and the Last Crusade)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T14:54:00+03:00'),
        artist: 'CMX',
        title: 'Linnunrata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T15:18:00+03:00'),
        artist: 'London Philharmonic Orchestra',
        title: 'Batman Arkham City: Main Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T15:25:00+03:00'),
        artist: 'Bastille',
        title: 'What Would You Do',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T15:42:00+03:00'),
        artist: 'Teksti‐TV 666',
        title: 'Tuhatvuotinen harharetki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T15:56:00+03:00'),
        artist: 'Simon & Garfunkel',
        title: 'The Boxer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:02:00+03:00'),
        artist: 'Eluveitie',
        title: 'A Rose for Epona',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:09:00+03:00'),
        artist: 'Equilibrium',
        title: 'Ruf in den Wind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:17:00+03:00'),
        artist: 'Oomph!',
        title: 'Labyrinth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:24:00+03:00'),
        artist: 'Tuomas Holopainen',
        title: 'Cold Heart of the Klondike',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:40:00+03:00'),
        artist: 'Nightwish',
        title: 'Edema Ruh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:49:00+03:00'),
        artist: 'Machinae Supremacy',
        title: 'Indiscriminate Murder Is Counter-Productive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T16:57:00+03:00'),
        artist: 'Turisas',
        title: 'Midnight Sunrise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T17:08:00+03:00'),
        artist: 'Ensiferum',
        title: 'Wanderer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T17:22:00+03:00'),
        artist: 'Sonata Arctica',
        title: 'My Land',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T17:35:00+03:00'),
        artist: 'Korpiklaani',
        title: 'Keep On Galloping',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T17:44:00+03:00'),
        artist: 'Ryan & Rachel O’Donnell',
        title: 'May It Be',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T17:51:00+03:00'),
        artist: 'Sigur Rós',
        title: 'The Rains Of Castamere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T17:56:00+03:00'),
        artist: 'Heavy Metal Perse',
        title: 'Legenda taikamiekasta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T18:04:00+03:00'),
        artist: 'Porcupine Tree',
        title: 'Nine Cats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T18:12:00+03:00'),
        artist: 'Alice In Chains',
        title: 'The Devil Put Dinosaurs Here',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T18:22:00+03:00'),
        artist: 'Mokoma',
        title: 'Punainen kukko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T18:33:00+03:00'),
        artist: 'Ismo Alanko Säätiö',
        title: 'Pulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T18:43:00+03:00'),
        artist: 'Hassisen Kone',
        title: 'Eksyneet lampaat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T18:50:00+03:00'),
        artist: 'Jethro Tull',
        title: 'One White Duck / 0¹⁰=Nothing at All',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T19:00:00+03:00'),
        artist: 'Tool',
        title: 'Ticks & Leeches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T19:15:00+03:00'),
        artist: 'Apulanta',
        title: 'Mato',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T19:24:00+03:00'),
        artist: 'Alice in Chains',
        title: 'Rooster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T19:36:00+03:00'),
        artist: 'Mokoma',
        title: 'Kurjen laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T19:43:00+03:00'),
        artist: 'America',
        title: 'A Horse With No Name',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T19:56:00+03:00'),
        artist: 'Tool',
        title: 'Right in Two',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:04:00+03:00'),
        artist: 'Television',
        title: 'See No Evil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:10:00+03:00'),
        artist: 'Richard Hell & The Voidoids',
        title: 'Blank Generation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:14:00+03:00'),
        artist: 'Dinosaur Jr.',
        title: 'Little Fury Things',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:20:00+03:00'),
        artist: 'The Cure',
        title: 'Play for Today',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:24:00+03:00'),
        artist: 'Hüsker Dü',
        title: 'Pink Turns to Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:29:00+03:00'),
        artist: 'Meat Puppets',
        title: 'Lake of Fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:31:00+03:00'),
        artist: 'Nirvana',
        title: 'About a Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:36:00+03:00'),
        artist: 'Weezer',
        title: 'No One Else',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:40:00+03:00'),
        artist: 'Big Black',
        title: 'The Model',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:45:00+03:00'),
        artist: 'My Bloody Valentine',
        title: 'Only Shallow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:50:00+03:00'),
        artist: 'Slowdive',
        title: 'Alison',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:57:00+03:00'),
        artist: 'Sonic Youth',
        title: 'Kissability',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T20:59:00+03:00'),
        artist: 'Red House Painters',
        title: 'Japanese to English',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:06:00+03:00'),
        artist: 'Pixies',
        title: 'Gouge Away',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:09:00+03:00'),
        artist: 'The Smiths',
        title: 'Cemetry Gates',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:15:00+03:00'),
        artist: 'Pavement',
        title: 'Range Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:19:00+03:00'),
        artist: 'The White Stripes',
        title: 'Jimmy the Exploder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:24:00+03:00'),
        artist: 'The Black Keys',
        title: 'Girl is on My Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:27:00+03:00'),
        artist: 'Dead Moon',
        title: 'Say It Isn\'t So',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:31:00+03:00'),
        artist: 'Flaming Lips',
        title: 'Suddenly Everything Has Changed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:38:00+03:00'),
        artist: 'Arctic Monkeys',
        title: 'From the Ritz to the Rubble',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:44:00+03:00'),
        artist: 'Car Seat Headrest',
        title: 'Destroyed by Hippie Powers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:50:00+03:00'),
        artist: 'Litku Klemetti & Tuntematon Numero',
        title: 'Progetyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T21:56:00+03:00'),
        artist: 'Radio Supernova',
        title: 'Näkemiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:02:00+03:00'),
        artist: 'Sur-rur',
        title: 'Nukahdin kesken pitsan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:08:00+03:00'),
        artist: 'Imatran Voima',
        title: 'In/Out',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:19:00+03:00'),
        artist: 'Esc & Mineral',
        title: 'Soul Toucher',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:26:00+03:00'),
        artist: 'Jori Hulkkonen',
        title: 'Crashcourse in violence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:34:00+03:00'),
        artist: 'Nestori',
        title: 'Vuorilla on maa (LAS Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:41:00+03:00'),
        artist: 'Tes La Rok',
        title: 'Invasion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:47:00+03:00'),
        artist: 'Ø',
        title: 'Unien holvit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:52:00+03:00'),
        artist: 'Pan Sonic',
        title: 'Leikkuri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T22:57:00+03:00'),
        artist: 'Fanu',
        title: 'Salem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:08:00+03:00'),
        artist: 'Randy Barracuda',
        title: 'Skweee like a pig',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:13:00+03:00'),
        artist: 'Luomuhappo',
        title: 'Linnahomo (feat. Huopis)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:21:00+03:00'),
        artist: 'Orkidea',
        title: 'Unity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:31:00+03:00'),
        artist: 'Mono Junk',
        title: 'Search',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:43:00+03:00'),
        artist: 'Jimi Tenor',
        title: 'Take Me Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:50:00+03:00'),
        artist: 'Advanced Art',
        title: 'Pretender (’94 mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-26T23:55:00+03:00'),
        artist: 'Esa Kotilainen',
        title: 'Matkaaja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:05:00+03:00'),
        artist: 'Erkki Kurenniemi',
        title: 'Sähkösoittimen Ääniä #4 + #1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:13:00+03:00'),
        artist: 'Sähkökvartetti',
        title: 'Kaukana väijyy ystäviä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:23:00+03:00'),
        artist: 'Bonobo',
        title: 'The Keeper (Banks remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:31:00+03:00'),
        artist: 'Squarepusher',
        title: 'Iambic 5 Poetry',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:39:00+03:00'),
        artist: 'Carbon Based Lifeforms',
        title: 'Photosynthesis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:47:00+03:00'),
        artist: 'Boards of Canada',
        title: 'Turquoise Hexagon Sun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T00:54:00+03:00'),
        artist: 'Shpongle',
        title: 'Behind Closed Eyelids',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:08:00+03:00'),
        artist: 'µ-Ziq',
        title: 'Mountain Island Boner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:13:00+03:00'),
        artist: 'Hirotaka Miyamoto',
        title: 'Twilight Zone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:20:00+03:00'),
        artist: 'Ulver',
        title: 'Blinded by Blood',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:27:00+03:00'),
        artist: 'DJ Shadow',
        title: 'Midnight in a Perfect World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:33:00+03:00'),
        artist: 'Vangelis',
        title: 'Tears in Rain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:37:00+03:00'),
        artist: 'A Silver Mt. Zion',
        title: '13 Angels Standing Guard ’Round the Side of Your Bed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:46:00+03:00'),
        artist: 'Vatican Shadow',
        title: 'Chechnya\'s Ghosts Loom Large In Death Of Former Spy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:50:00+03:00'),
        artist: 'Zero 7',
        title: 'Destiny',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T01:57:00+03:00'),
        artist: 'Biosphere',
        title: 'Black Mesa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:03:00+03:00'),
        artist: 'Mogwai',
        title: 'Tracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:11:00+03:00'),
        artist: 'Loscil',
        title: 'Stave Peak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:18:00+03:00'),
        artist: 'Subheim',
        title: 'Ybe 76',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:23:00+03:00'),
        artist: 'Four Tet',
        title: 'Circling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:30:00+03:00'),
        artist: 'Richard Barbieri',
        title: 'Hypnotek',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:38:00+03:00'),
        artist: 'Nine Inch Nails',
        title: '34 Ghosts IV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:44:00+03:00'),
        artist: 'Luomuhappo',
        title: 'Haapaneitty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:54:00+03:00'),
        artist: 'múm',
        title: 'Slow Down',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T02:59:00+03:00'),
        artist: 'Ben Frost',
        title: 'Híbakúsja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:09:00+03:00'),
        artist: 'Murcof x Wagner',
        title: 'Avril 14th',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:14:00+03:00'),
        artist: 'Aphex Twin',
        title: 'XMAS_EVET10 (thanaton3 mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:25:00+03:00'),
        artist: 'Jean-Michel Jarre & Tangerine Dream',
        title: 'Zero Gravity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:33:00+03:00'),
        artist: 'Fennesz + Sakamoto',
        title: 'Oto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:38:00+03:00'),
        artist: 'Tähtiportti',
        title: 'Ihmeiden aika ei ole ohi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:45:00+03:00'),
        artist: 'Möyhy-Veikot',
        title: 'Megalomaniac Ice Hockey Madness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:49:00+03:00'),
        artist: 'Tim Hecker',
        title: 'Music of the Air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T03:53:00+03:00'),
        artist: 'Burzum',
        title: 'Tuistos Herz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:00:00+03:00'),
        artist: 'Angelo Badalamenti',
        title: 'Mulholland Drive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:06:00+03:00'),
        artist: 'DFRNT',
        title: 'Incubus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:11:00+03:00'),
        artist: 'DJ Food',
        title: 'Dark Lady',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:16:00+03:00'),
        artist: 'Massive Attack',
        title: 'Sly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:22:00+03:00'),
        artist: 'Aluk Todolo',
        title: '7:01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:34:00+03:00'),
        artist: 'Martin Nonstatic',
        title: 'Granite',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:40:00+03:00'),
        artist: 'Kid Koala feat. Emilíana Torrini',
        title: 'Collapser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:41:00+03:00'),
        artist: 'Lee Perry & Mad Professor',
        title: 'Mad Man Dubwise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:48:00+03:00'),
        artist: 'David Lynch',
        title: 'I Want You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:53:00+03:00'),
        artist: 'The Future Sound of London',
        title: 'Cerebral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T04:58:00+03:00'),
        artist: 'K-X-P',
        title: 'Space Precious Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:05:00+03:00'),
        artist: 'James Bernard',
        title: 'End of an Era',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:11:00+03:00'),
        artist: 'Bluetech',
        title: 'Alchemie Dub',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:18:00+03:00'),
        artist: 'Burial',
        title: 'Archangel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:23:00+03:00'),
        artist: 'Dead Can Dance',
        title: 'Opium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:28:00+03:00'),
        artist: 'Acid Arab',
        title: 'Sayarat 303',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:28:00+03:00'),
        artist: 'Acid Arab',
        title: 'Sayarat 303',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:35:00+03:00'),
        artist: 'Susumu Yokota',
        title: 'Secret Garden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:42:00+03:00'),
        artist: 'Wax Tailor & Charlotte Savary',
        title: 'Our Dance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:47:00+03:00'),
        artist: 'Portishead',
        title: 'Wandering Star',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:52:00+03:00'),
        artist: 'Morcheeba',
        title: 'Crimson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T05:58:00+03:00'),
        artist: 'Monolake',
        title: 'Afterglow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:03:00+03:00'),
        artist: 'Gas',
        title: 'Narkopop 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:09:00+03:00'),
        artist: 'Sunn O)))',
        title: 'Alice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:23:00+03:00'),
        artist: 'SOLAR FIELDS',
        title: 'Feelings (album edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:31:00+03:00'),
        artist: 'Autechre',
        title: 'r ess',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:37:00+03:00'),
        artist: 'Plaid',
        title: 'Eyen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:41:00+03:00'),
        artist: 'Amon Tobin',
        title: 'Switch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:46:00+03:00'),
        artist: 'The Cinematic Orchestra',
        title: 'And Relax!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:51:00+03:00'),
        artist: 'Thievery Corporation feat. Sleepy Wonder & Gunjan',
        title: 'Warning Shots',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T06:56:00+03:00'),
        artist: 'Blockhead',
        title: 'Insomniac Olympics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:02:00+03:00'),
        artist: 'Coda',
        title: 'BLOODY STREAM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:11:00+03:00'),
        artist: 'Vexi',
        title: 'Käy muumilaaksoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:19:00+03:00'),
        artist: 'wowaka(現実逃避P)',
        title: 'ローリンガール',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:29:00+03:00'),
        artist: 'DJ YOSHITAKA',
        title: 'Evans',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:37:00+03:00'),
        artist: 'REOL',
        title: 'Give Me a Break Stop Now',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:44:00+03:00'),
        artist: 'goreshit',
        title: 'fly, heart! fly!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T07:55:00+03:00'),
        artist: 'IRON ATTACK!',
        title: 'Black Magic Woman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T08:06:00+03:00'),
        artist: 'Rindou',
        title: 'フロントサイドオーリー',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T08:15:00+03:00'),
        artist: '相対性理論',
        title: 'シンデレラ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T08:24:00+03:00'),
        artist: 'B’z',
        title: 'FRICTION –LAP 2–',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T08:31:00+03:00'),
        artist: 'Sigh',
        title: 'Doman Seman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T08:49:00+03:00'),
        artist: 'USAO',
        title: 'Sakura Era',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T08:56:00+03:00'),
        artist: 'goreshit',
        title: 'the nature of dying',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:03:00+03:00'),
        artist: 'Johnny',
        title: 'Ihana Aamu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:06:00+03:00'),
        artist: 'Riki Sorsa',
        title: 'Haaveissa vainko oot mun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:11:00+03:00'),
        artist: 'Matti & Teppo',
        title: 'Kaiken takana on nainen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:17:00+03:00'),
        artist: 'Seija Simola',
        title: 'Ei itkeä saa Argentiina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:25:00+03:00'),
        artist: 'Arja Koriseva',
        title: 'Kuningaskobra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:28:00+03:00'),
        artist: 'Taiska',
        title: 'Mombasa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:35:00+03:00'),
        artist: 'Kaseva',
        title: 'Striptease tanssija',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:38:00+03:00'),
        artist: 'Tuula Amberla',
        title: 'Tyttö kampaa märkää tukkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:43:00+03:00'),
        artist: 'Hector',
        title: 'Ake, Make, Pera ja mä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:47:00+03:00'),
        artist: 'Pave Maijanen',
        title: 'Ai Ai Ai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:51:00+03:00'),
        artist: 'Four Cats',
        title: 'Suuret setelit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T09:56:00+03:00'),
        artist: 'Tapio Rautavaara',
        title: 'Juokse sinä humma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:02:00+03:00'),
        artist: 'Kari Vepsä',
        title: 'Onnenmaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:12:00+03:00'),
        artist: 'Yölintu',
        title: 'TV:n kokoinen haitari',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:13:00+03:00'),
        artist: 'Irwin Goodman',
        title: 'St. Pauli Ja Reeperbahn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:17:00+03:00'),
        artist: 'Reijo Taipale',
        title: 'Satumaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:21:00+03:00'),
        artist: 'Pirkko Mannola',
        title: 'Maailman paras levy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:25:00+03:00'),
        artist: 'Saija Varjus',
        title: 'Kuiskaten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:30:00+03:00'),
        artist: 'Trio Erektus',
        title: 'Milloin, milloin, milloin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:34:00+03:00'),
        artist: 'Tommi Läntinen',
        title: 'Via dolorosa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:40:00+03:00'),
        artist: 'Mieskone',
        title: 'Roosa ja kahdeksan muuta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:45:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Olen nähnyt Helga-neidin kylvyssä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:48:00+03:00'),
        artist: 'Samuli Edelmann',
        title: '(Sinä olet) aurinko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:55:00+03:00'),
        artist: 'Kivikasvot',
        title: 'Tankeros Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T10:59:00+03:00'),
        artist: 'Janne Hurme',
        title: 'Tinasormus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:04:00+03:00'),
        artist: 'Arto Tamminen',
        title: 'Utopia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:10:00+03:00'),
        artist: 'Mika Sundqvist',
        title: 'Moottoripyörä on moottoripyörä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:14:00+03:00'),
        artist: 'Mona Carita',
        title: 'Anna kulta anna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:19:00+03:00'),
        artist: 'A. Aallon Rytmiorkesteri',
        title: 'Exodus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:25:00+03:00'),
        artist: 'Sir Elwoodin hiljaiset värit',
        title: 'Viimeisellä rannalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:31:00+03:00'),
        artist: 'Marita Taavitsainen',
        title: 'André',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:40:00+03:00'),
        artist: 'Jari Sillanpää',
        title: 'Bum bum bum \'Sweet Hunaja mix\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:44:00+03:00'),
        artist: 'Markku Karjalainen',
        title: 'Läähätän ja läkähdyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:46:00+03:00'),
        artist: 'Danny',
        title: 'Amarillo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:53:00+03:00'),
        artist: 'Kirka',
        title: 'Surun pyyhit silmistäni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T11:58:00+03:00'),
        artist: 'Tomas Ledin',
        title: 'Sommaren är kort',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:02:00+03:00'),
        artist: 'Capital Cities',
        title: 'Stayin\' Alive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:09:00+03:00'),
        artist: 'Jamie Cullum',
        title: 'Don\'t Stop the Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:15:00+03:00'),
        artist: 'Laibach',
        title: 'Do-Re-Mi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:23:00+03:00'),
        artist: 'Hellsongs',
        title: 'Warpigs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:28:00+03:00'),
        artist: 'Scandroid',
        title: 'Shout',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:34:00+03:00'),
        artist: 'Tina Turner',
        title: 'Whole Lotta Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:39:00+03:00'),
        artist: 'Sigur Rós',
        title: 'The Rains Of Castamere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:44:00+03:00'),
        artist: 'The BossHoss',
        title: 'Gay Bar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:50:00+03:00'),
        artist: 'Gunship',
        title: 'Time After Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T12:57:00+03:00'),
        artist: 'Pomplamoose',
        title: 'A Bad Mashup',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:03:00+03:00'),
        artist: 'Gunship',
        title: 'Time After Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:03:00+03:00'),
        artist: 'The Apples',
        title: 'Killing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:08:00+03:00'),
        artist: 'Postmodern Jukebox starring Sara Niemietz',
        title: 'Hey Ya!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:13:00+03:00'),
        artist: 'Xiu Xiu',
        title: 'Sharp Dressed Man',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:20:00+03:00'),
        artist: 'Shirley Bassey',
        title: 'Light My Fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:23:00+03:00'),
        artist: 'Saimaa',
        title: 'Joutsenlaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:33:00+03:00'),
        artist: 'Nils Landgren Funk Unit',
        title: 'Voulez-Vous',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:38:00+03:00'),
        artist: 'Sturgill Simpson',
        title: 'In Bloom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:44:00+03:00'),
        artist: 'Lizzy Pattinson',
        title: 'Sing it Back',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:50:00+03:00'),
        artist: 'Sonata Arctica',
        title: 'Run To You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:55:00+03:00'),
        artist: 'Steven Wilson',
        title: 'Sign ’O’ the Times',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T13:57:00+03:00'),
        artist: 'Ren Harvieu',
        title: 'Sister Morphine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:00:00+03:00'),
        artist: 'Lou',
        title: 'Let\'s Get Happy (Germany)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:05:00+03:00'),
        artist: 'Eimear Quinn',
        title: 'The Voice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:09:00+03:00'),
        artist: 'Ell/Nikki',
        title: 'Running Scared',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:14:00+03:00'),
        artist: 'Netta',
        title: 'Toy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:19:00+03:00'),
        artist: 'Severine',
        title: 'Un Banc, Un Arbre, Une Rue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:22:00+03:00'),
        artist: 'Έλενα Παπαρίζου',
        title: 'My Number One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:27:00+03:00'),
        artist: 'Massiel',
        title: 'La, La, La',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:31:00+03:00'),
        artist: 'Alexander Rybak',
        title: 'That\'s How You Write A Song',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:36:00+03:00'),
        artist: 'Carola',
        title: 'Främling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:40:00+03:00'),
        artist: 'Sergey Lazarev',
        title: 'Russia: You Are the Only One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:46:00+03:00'),
        artist: 'Jedward',
        title: 'Waterline',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:50:00+03:00'),
        artist: 'Ira Losco',
        title: 'Walk on Water',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T14:55:00+03:00'),
        artist: 'Treble',
        title: 'Amambanda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:01:00+03:00'),
        artist: 'Sophie & Magaly',
        title: 'Papa Pingouin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:05:00+03:00'),
        artist: 'Aliona Moon',
        title: 'O Mie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:09:00+03:00'),
        artist: 'Elina Nechayeva',
        title: 'La forza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:14:00+03:00'),
        artist: 'Malena Ernman',
        title: 'La Voix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:17:00+03:00'),
        artist: 'Cezar',
        title: 'It\'s My Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:19:00+03:00'),
        artist: 'Zlata Ognevich',
        title: 'Gravity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:23:00+03:00'),
        artist: 'Hovig',
        title: 'Gravity (Cyprus)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:26:00+03:00'),
        artist: 'Sébastien Tellier',
        title: 'Divine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:30:00+03:00'),
        artist: 'Stefan Raab',
        title: 'Wadde hadde dudde da?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:34:00+03:00'),
        artist: 'Alf Poier',
        title: 'Weil der Mensch zählt (Austria)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:37:00+03:00'),
        artist: 'Riki Sorsa',
        title: 'Reggae OK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:41:00+03:00'),
        artist: 'AWS',
        title: 'Viszlát nyár',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:45:00+03:00'),
        artist: 'Athena',
        title: 'For Real',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:49:00+03:00'),
        artist: 'Les Fatals Picards',
        title: 'L\'amour à la française (France)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:52:00+03:00'),
        artist: 'Jana Burcheska',
        title: 'Dance Alone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:57:00+03:00'),
        artist: 'Cliff Richard',
        title: 'Congratulations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T15:58:00+03:00'),
        artist: 'Silvia Night',
        title: 'Congratulations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:01:00+03:00'),
        artist: 'Queen',
        title: 'Don\'t Stop Me Now',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:07:00+03:00'),
        artist: 'Pikku G',
        title: 'Me ollaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:12:00+03:00'),
        artist: 'Eminem feat. Nate Dogg',
        title: 'Shake That',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:20:00+03:00'),
        artist: 'Dingo',
        title: 'Nahkatakkinen tyttö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:28:00+03:00'),
        artist: 'Mamba',
        title: 'Vielä on kesää jäljellä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:35:00+03:00'),
        artist: 'Tuomas Holopainen',
        title: 'Go Slowly Now, Sands of Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:44:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Kitara, taivas ja tähdet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T16:58:00+03:00'),
        artist: 'HIM',
        title: 'Join Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:07:00+03:00'),
        artist: 'Spice Girls',
        title: 'Who Do You Think You Are',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:13:00+03:00'),
        artist: 'Roxette',
        title: 'Sleeping in My Car (single edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:20:00+03:00'),
        artist: 'Nightwish',
        title: 'Dark Chest of Wonders',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:25:00+03:00'),
        artist: 'Uniklubi',
        title: 'Rakkautta ja piikkilankaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:31:00+03:00'),
        artist: 'Uriah Heep',
        title: 'Bird Of Prey (US Album version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:39:00+03:00'),
        artist: 'Green Day',
        title: 'Holiday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:45:00+03:00'),
        artist: 'Don Johnson Big Band',
        title: 'One MC, One Delay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:51:00+03:00'),
        artist: 'Antti Tuisku',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T17:57:00+03:00'),
        artist: 'Tre Kronor & Nick Borgen',
        title: 'Den Glider In',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:01:00+03:00'),
        artist: 'Mona Carita',
        title: 'Soita Mulle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:07:00+03:00'),
        artist: 'Reijo Taipale',
        title: 'Ihan kuin nuo toiset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:13:00+03:00'),
        artist: 'Jarmo Kalke',
        title: 'Suuri Star',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:18:00+03:00'),
        artist: 'Meiju Suvas',
        title: 'Kova duuni on rahaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:25:00+03:00'),
        artist: 'Arto Sortavala',
        title: 'Kapteeni Tom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:33:00+03:00'),
        artist: 'Ressu Redford',
        title: 'Taas aurinko nousee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:39:00+03:00'),
        artist: 'Vilperin Perikunta',
        title: 'Tervetuloa länteen Andrej',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:44:00+03:00'),
        artist: 'Seija Simola',
        title: 'Ota kii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:50:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Tunnen Sen Täysillä Taas (Total Eclipse Of The Heart)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T18:56:00+03:00'),
        artist: 'Antero Raimo & Ovet',
        title: 'Korsoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:01:00+03:00'),
        artist: 'Hector',
        title: 'Sudenkorento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:08:00+03:00'),
        artist: 'Seidat',
        title: 'Sumu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:13:00+03:00'),
        artist: 'Teuvo Loman',
        title: 'Kari',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:22:00+03:00'),
        artist: 'Jukka Kuoppamäki',
        title: 'Teräsmies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:29:00+03:00'),
        artist: 'Aksu',
        title: 'Jangsteri Vain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:31:00+03:00'),
        artist: 'Seitsemän seinähullua veljestä',
        title: 'Cuba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:36:00+03:00'),
        artist: 'Seppo Närhi',
        title: 'Koivu ja Tähti (hotel california)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:41:00+03:00'),
        artist: 'CatCat',
        title: 'Kuiskaus (Careless Whisperer)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:46:00+03:00'),
        artist: 'Virtuoso',
        title: 'Suuren meren suolaa - My Heart Will Go On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:52:00+03:00'),
        artist: 'Mona Carita',
        title: 'Vastaa Jo, Please',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T19:57:00+03:00'),
        artist: 'Tapani Kansa',
        title: 'Kultaniityt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:01:00+03:00'),
        artist: 'Sleepy Sleepers',
        title: 'Bodya, sporttia, tsemppistä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:11:00+03:00'),
        artist: 'London Music Works',
        title: 'Kill Bill: Battle without Honor or Humanity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:19:00+03:00'),
        artist: 'Rynkky & Räkäpäät',
        title: 'Seksipippeli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:31:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Meillä on ratikka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:42:00+03:00'),
        artist: 'Rasmus',
        title: 'Funky Jam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:46:00+03:00'),
        artist: 'Kallan',
        title: 'Lågskärin linnut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T20:59:00+03:00'),
        artist: 'Diablo',
        title: 'Dancing Queen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T21:06:00+03:00'),
        artist: 'Aeroloft',
        title: 'Pilipalisaatio - Teaser 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T21:10:00+03:00'),
        artist: 'Soul Captain Band',
        title: 'Vauvantekohomma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T21:24:00+03:00'),
        artist: 'Vilma Alina',
        title: 'Tulevaisuuden lupauksii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T21:36:00+03:00'),
        artist: 'Rynkky & Räkäpäät',
        title: '(P)erhe-elämää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T21:49:00+03:00'),
        artist: 'Sublime',
        title: 'Doin’ Time (original mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T21:58:00+03:00'),
        artist: 'Don Huonot',
        title: 'Hyvää yötä ja huomenta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T22:03:00+03:00'),
        artist: 'Aphex Twin',
        title: 'CHEETA2 ms800',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T22:08:00+03:00'),
        artist: 'DJ Stingray',
        title: 'Cytokines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T22:20:00+03:00'),
        artist: 'Michael Bundt',
        title: 'La Chasse Aux Microbes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T22:34:00+03:00'),
        artist: 'Clara Rockmore',
        title: 'Valse Sentimentale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T22:45:00+03:00'),
        artist: 'Repeat eater',
        title: 'Ping Bong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T22:57:00+03:00'),
        artist: 'Joint minds',
        title: 'Commotion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T23:08:00+03:00'),
        artist: 'Summe',
        title: 'Objectness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T23:15:00+03:00'),
        artist: 'Egyptian Lover',
        title: 'Egypt, Egypt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T23:27:00+03:00'),
        artist: 'Skudge',
        title: 'Static',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T23:36:00+03:00'),
        artist: 'Kraftwerk',
        title: 'Home Computer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T23:45:00+03:00'),
        artist: 'Kylie Minoque',
        title: 'Slow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-27T23:52:00+03:00'),
        artist: 'Imatran Voima',
        title: 'Kurvi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:01:00+03:00'),
        artist: 'Rotten Skeletor',
        title: 'Kummitusten yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:06:00+03:00'),
        artist: 'Jouko Mäki-Lohiluoma',
        title: 'Transitmies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:10:00+03:00'),
        artist: 'Troldhaugen',
        title: 'I Ordered a Taxi Driver Not a Taxidermy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:19:00+03:00'),
        artist: 'Rap-Mummo Eila',
        title: 'Mummo Rap',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:25:00+03:00'),
        artist: 'Rammstein',
        title: 'Rammlied - Remix by Devin Townsend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:37:00+03:00'),
        artist: 'Sir Mr. TAF',
        title: 'Hyppiä ikä kaikki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:44:00+03:00'),
        artist: 'Tapani Kansalainen feat. Edorf & Huutava Vääryys',
        title: 'Kyttäjuttu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T00:52:00+03:00'),
        artist: 'Belzebubs',
        title: 'Blackened Call',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T01:06:00+03:00'),
        artist: 'The Shaggs',
        title: 'Philosophy of the World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T01:18:00+03:00'),
        artist: 'Jaakko Laitinen & Väärä raha',
        title: 'Kännissä ja pilvessä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T01:28:00+03:00'),
        artist: 'Eläin',
        title: 'Politiikka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T01:39:00+03:00'),
        artist: 'Soul Valpio',
        title: 'Teet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T01:42:00+03:00'),
        artist: 'PIKAKASSA',
        title: 'Älä soittele - en aio vastata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T01:48:00+03:00'),
        artist: 'Joose Keskitalo',
        title: 'Kuuletko kun hautausmaa vetää käteen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T02:01:00+03:00'),
        artist: 'Syncom Data',
        title: 'Rumpukone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T02:16:00+03:00'),
        artist: 'Guillermo Sanchez',
        title: 'Careless Whisper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T02:30:00+03:00'),
        artist: 'CMX',
        title: 'Palvelemaan konetta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T02:41:00+03:00'),
        artist: 'F#',
        title: 'The Wannsee Punk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T02:48:00+03:00'),
        artist: 'Alpo Myller',
        title: 'Enon Disco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T02:57:00+03:00'),
        artist: 'Olli Lindholm',
        title: 'Lindholmin Ollie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T03:07:00+03:00'),
        artist: 'Tapani Perttu',
        title: 'Raiskauslaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T03:26:00+03:00'),
        artist: 'Rank Sinatra',
        title: 'Take On Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T03:31:00+03:00'),
        artist: 'Te Vaka',
        title: 'Haoloto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T03:40:00+03:00'),
        artist: 'Idän Ihmeet',
        title: 'Jeesus siunaa nämä lihapullat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T03:48:00+03:00'),
        artist: 'The Silver',
        title: 'Do You Wanna Dance?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T03:55:00+03:00'),
        artist: 'Hupikék Törpikék',
        title: 'Hány centi kell?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:02:00+03:00'),
        artist: 'Booker T & The MG\'s',
        title: 'Green Onions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:10:00+03:00'),
        artist: 'O Samuli A',
        title: 'Ei vittu kytät',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:13:00+03:00'),
        artist: 'PIKAKASSA',
        title: 'Mua väsyttää mut mitä vitun väliä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:23:00+03:00'),
        artist: 'Winny Puhh',
        title: 'Suur modulatsioonitöö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:38:00+03:00'),
        artist: 'Möyhy-Veikot',
        title: 'Bingo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:46:00+03:00'),
        artist: 'Anaal Nathrakh',
        title: 'Forward!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:51:00+03:00'),
        artist: 'Amon Tobin',
        title: 'Get Your Snack On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T04:58:00+03:00'),
        artist: 'Yökyöpelit',
        title: 'Allakka pullakka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:09:00+03:00'),
        artist: 'Tipi & Sylvester Stallone',
        title: 'Mummin kumilapaset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:18:00+03:00'),
        artist: 'Jukka Nousiainen',
        title: 'Miljoonan känniviestin mies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:21:00+03:00'),
        artist: 'Bob Malmström',
        title: 'Tala svenska eller dö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:34:00+03:00'),
        artist: 'Keuhkot',
        title: '24h risteily',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:38:00+03:00'),
        artist: 'XavlegbmaofffassssitimiwoamndutroabcwapwaeiippohfffX',
        title: 'Pneumonoultramicroscopicsilicovolcanoconiosis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:45:00+03:00'),
        artist: 'Suomen Talvisota 1939-1940',
        title: 'Laulu jossa on tunnelma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:53:00+03:00'),
        artist: 'PIKAKASSA',
        title: 'Mikä vitun pedikyyri ja mikä saatanan manikyyri?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:54:00+03:00'),
        artist: 'Geisha',
        title: 'Aavelaiva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T05:58:00+03:00'),
        artist: 'Lard',
        title: 'They\'re Coming to Take Me Away',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:10:00+03:00'),
        artist: 'Verpa Zabulus',
        title: 'Kuuraparta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:20:00+03:00'),
        artist: 'Kid Koala',
        title: '2 Bit Blues',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:25:00+03:00'),
        artist: 'Groove Armada',
        title: 'My Friend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:33:00+03:00'),
        artist: 'James Brown',
        title: 'Super Bad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:42:00+03:00'),
        artist: 'The Avalanches',
        title: 'Frontier Psychiatrist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:49:00+03:00'),
        artist: 'Ricardo Caliente',
        title: 'Staying Alive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T06:56:00+03:00'),
        artist: 'Lars Rypien & Näppituntuma',
        title: 'Onko sulla darra?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:10:00+03:00'),
        artist: 'Stooges',
        title: '1969',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:13:00+03:00'),
        artist: 'Dead Kennedys',
        title: 'We got a bigger problem now',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:19:00+03:00'),
        artist: 'Subhumans',
        title: 'no',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:19:00+03:00'),
        artist: 'Tohtori koira',
        title: 'Paavi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:22:00+03:00'),
        artist: 'Hc andersen',
        title: 'naapurivainajan huono päivä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:22:00+03:00'),
        artist: 'real tears',
        title: 'cant get out of my head',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:26:00+03:00'),
        artist: 'Kivesveto go go',
        title: 'resilar risto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:31:00+03:00'),
        artist: '- nervous system',
        title: 'waste of time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:33:00+03:00'),
        artist: 'kohti tuhoa',
        title: 'rajoitan itseäni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:38:00+03:00'),
        artist: 'the achtungs',
        title: 'im not the one',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:42:00+03:00'),
        artist: 'myrkky käärme',
        title: 'mä oon myrkky käärme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T07:46:00+03:00'),
        artist: 'dead moon',
        title: 'its okey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:01:00+03:00'),
        artist: 'Sonic Youth',
        title: 'dirty boots',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:08:00+03:00'),
        artist: 'Slint',
        title: 'nosferatu man',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:14:00+03:00'),
        artist: 'Frankie the damage',
        title: 'Sniff glue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:18:00+03:00'),
        artist: 'Jukka ja jytämimmit',
        title: 'vauhtikuningatar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:24:00+03:00'),
        artist: 'Lasten hautausmaa',
        title: 'pudasajärven ufo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:31:00+03:00'),
        artist: 'Noitalinna huraa!',
        title: 'nauravat jänikset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:34:00+03:00'),
        artist: 'Mana mana',
        title: 'kuolla elävänä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:41:00+03:00'),
        artist: 'The Dwyers',
        title: 'about to crack',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:48:00+03:00'),
        artist: 'Ebba grön',
        title: 'staten och kapitalet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:51:00+03:00'),
        artist: 'sur-sur',
        title: 'aurinko ei mahdu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:53:00+03:00'),
        artist: 'sur-rur',
        title: 'aurinko ei mahdu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T08:56:00+03:00'),
        artist: 'Joy division',
        title: 'decades',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:02:00+03:00'),
        artist: 'Tuomas Henrikin Jeesuksen Kristuksen Bändi',
        title: 'Pettymys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:07:00+03:00'),
        artist: 'Turmion Kätilöt',
        title: 'Vihko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:13:00+03:00'),
        artist: 'Noitalinna Huraa!',
        title: 'Järvellä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:20:00+03:00'),
        artist: 'Eroottiset Tuliaseet',
        title: 'Viimeinen rivi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:24:00+03:00'),
        artist: 'PMMP',
        title: 'Matkalaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:30:00+03:00'),
        artist: 'Irina',
        title: 'Sua varten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:35:00+03:00'),
        artist: 'Haloo Helsinki!',
        title: 'Nainen jonka ympärille tuolit tuodaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:39:00+03:00'),
        artist: 'Zen Café',
        title: 'Mies jonka ympäriltä tuolit viedään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:48:00+03:00'),
        artist: 'Pyhimys',
        title: '#13 Paranoid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T09:54:00+03:00'),
        artist: 'Maustetytöt',
        title: 'Tein kai lottorivini väärin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:02:00+03:00'),
        artist: 'Anssi Kela',
        title: 'Kuolleen miehen kitara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:10:00+03:00'),
        artist: 'Suurlähettiläät',
        title: 'Maailman laidalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:18:00+03:00'),
        artist: 'Kuusumun Profeetta',
        title: 'Ei aurinko milloinkaan laske',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:26:00+03:00'),
        artist: 'Eleanoora Rosenholm',
        title: 'Valo kaasumeren hämärässä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:36:00+03:00'),
        artist: 'Litku Klemetti & Tuntematon Numero',
        title: 'Kova meininki loppuu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:43:00+03:00'),
        artist: 'Ricky-Tick Big Band & Julkinen Sana',
        title: 'Rakkaudella vihaajille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:48:00+03:00'),
        artist: 'Jarkko Martikainen',
        title: 'Ei-toivotut laulut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T10:56:00+03:00'),
        artist: 'Scandinavian Music Group',
        title: '100 km Ouluun (2009 versio)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T11:00:00+03:00'),
        artist: 'Rölli',
        title: 'Häläpätilaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T11:03:00+03:00'),
        artist: 'Absoluuttinen Nollapiste',
        title: 'Sunnuntai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T11:08:00+03:00'),
        artist: 'The Velvet Underground',
        title: 'Sunday Morning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T11:28:00+03:00'),
        artist: 'Langa',
        title: 'Le, Le, Lej',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T11:35:00+03:00'),
        artist: 'Rosvosektori',
        title: 'Reinot',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T11:51:00+03:00'),
        artist: 'Teflon Brothers',
        title: 'Kärpästen Juhlat (Osa 2)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T12:10:00+03:00'),
        artist: 'Bob Marley & The Wailers',
        title: 'One Love / People Get Ready',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T12:19:00+03:00'),
        artist: 'Reijo Taipale',
        title: 'Nautin Elämästä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T12:27:00+03:00'),
        artist: 'Frank Sinatra',
        title: 'Fly Me to the Moon (In Other Words)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T12:28:00+03:00'),
        artist: 'Aqua',
        title: 'Barbie Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T12:42:00+03:00'),
        artist: 'PMMP',
        title: 'Taiteilia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T12:54:00+03:00'),
        artist: 'Antti Tuisku feat. JVG',
        title: 'SWÄG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:02:00+03:00'),
        artist: 'Queen',
        title: 'The Show Must Go On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:05:00+03:00'),
        artist: 'Jason Seizures feat. Hzi',
        title: 'Rumat kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:09:00+03:00'),
        artist: 'Kikka',
        title: 'Se hellyyden on tekniikkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:16:00+03:00'),
        artist: 'MNTTT (Eevil Stöö & Aztra)',
        title: 'Tekniikka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:25:00+03:00'),
        artist: 'Benny Törnroos',
        title: 'Fixu vekotin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:31:00+03:00'),
        artist: 'Ito Kanoko',
        title: 'Hacking to the Gate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:38:00+03:00'),
        artist: 'Opeth',
        title: 'In My Time of Need',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:47:00+03:00'),
        artist: 'Death Grips',
        title: 'Hacker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T13:58:00+03:00'),
        artist: 'Ace Waters',
        title: 'Above the Magma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:06:00+03:00'),
        artist: 'Aperture Science Psychoacoustic Laboratories',
        title: 'Science is Fun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:20:00+03:00'),
        artist: 'Phantasm (FES cv. Sakakibara Yui)',
        title: 'Toki Tsukasadoru Juuni no Meiyaku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:20:00+03:00'),
        artist: 'Phantasm (FES cv. Sakakibara Yui)',
        title: 'Toki Tsukasadoru Juuni no Meiyaku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:34:00+03:00'),
        artist: 'WikiRock',
        title: 'Laser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:42:00+03:00'),
        artist: 'Imppu',
        title: 'I Think Your Boyfriend is Gay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:52:00+03:00'),
        artist: 'Valve Studio Orchestra',
        title: 'Team Fortress 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T14:56:00+03:00'),
        artist: 'Business City',
        title: 'Setämiehet Säätää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:04:00+03:00'),
        artist: 'Rubik',
        title: 'Karhu junassa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:09:00+03:00'),
        artist: 'Battlelore',
        title: 'The Mark of the Bear',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:14:00+03:00'),
        artist: 'Descendents',
        title: 'I Wanna Be a Bear',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:17:00+03:00'),
        artist: 'Lasten Hautausmaa',
        title: 'Karhupuisto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:21:00+03:00'),
        artist: 'Helinä Ilkka',
        title: 'Tahdon lempeän nallekarhun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:27:00+03:00'),
        artist: 'The Hold Steady',
        title: 'The Bear and the Maiden Fair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:32:00+03:00'),
        artist: 'Mimmit',
        title: 'Jääkarhu Nanook',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:38:00+03:00'),
        artist: 'Dalindèo',
        title: 'Karhupuiston kuningatar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:47:00+03:00'),
        artist: 'Cuby + Blizzards',
        title: 'Dancing Bear',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:52:00+03:00'),
        artist: 'Kipparikvartetti',
        title: 'Teddy-karhujen huviretki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T15:58:00+03:00'),
        artist: 'Anna Puu',
        title: 'Anna ja merikarhu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:06:00+03:00'),
        artist: 'Astrid Swan',
        title: 'Black Bear And A Hoofer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:11:00+03:00'),
        artist: 'Moloko',
        title: 'If You Have a Cross to Bear You May as Well Use It as a Crutch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:19:00+03:00'),
        artist: 'Muuan mies',
        title: 'Karhukaiset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:28:00+03:00'),
        artist: 'Pariisin Kevät',
        title: 'Ehkä kaikki palaa itsestään enNALLEen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:31:00+03:00'),
        artist: 'Noitalinna Huraa!',
        title: 'Otso karvalaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:36:00+03:00'),
        artist: 'Riitta Korpela',
        title: 'Ti-Ti Nalle remix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:42:00+03:00'),
        artist: 'Message to Bears',
        title: 'Mountains',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:48:00+03:00'),
        artist: 'Spede & G. Pula-aho',
        title: 'Verokarhu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:52:00+03:00'),
        artist: 'Stam1na',
        title: 'Karhunraudat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T16:57:00+03:00'),
        artist: 'Pekka ja Susi',
        title: 'Karhun elämää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:01:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Paranoid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:07:00+03:00'),
        artist: 'Judas Priest',
        title: 'You\'ve Got Another Thing Comin\'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:17:00+03:00'),
        artist: 'Iron Maiden',
        title: 'Revelations',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:25:00+03:00'),
        artist: 'Faith No More',
        title: 'Take This Bottle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:33:00+03:00'),
        artist: 'YUP',
        title: 'Pää puhuu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:38:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Heaven and Hell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:48:00+03:00'),
        artist: 'Kenny Loggins',
        title: 'Danger Zone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T17:56:00+03:00'),
        artist: 'Allekirjoittanut',
        title: 'Leikkikalujäppinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:02:00+03:00'),
        artist: 'Maustetytöt',
        title: 'Tein kai lottorivini väärin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:05:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: '2001: A Space Odyssey: Also Sprach Zarathustra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:09:00+03:00'),
        artist: 'Miljoonasade',
        title: 'Fly On Juri Gagarin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:19:00+03:00'),
        artist: 'WikiRock',
        title: 'Linnunrata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:31:00+03:00'),
        artist: 'Muse',
        title: 'Supermassive Black Hole',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:39:00+03:00'),
        artist: 'Avantasia',
        title: 'Lost in Space',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:47:00+03:00'),
        artist: 'Radio Supernova',
        title: 'Tellus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T18:57:00+03:00'),
        artist: 'Devin Townsend',
        title: 'By Your Command',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T19:19:00+03:00'),
        artist: 'Nightwish',
        title: 'Sacrament of Wilderness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T19:42:00+03:00'),
        artist: 'David Bowie',
        title: 'Life on Mars?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T19:50:00+03:00'),
        artist: 'Arcadea',
        title: 'Gas Giant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T19:55:00+03:00'),
        artist: 'Hawkwind',
        title: 'Orgone Accumulator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:09:00+03:00'),
        artist: 'Yusuke Yamamoto',
        title: 'Roc Soft Raw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:16:00+03:00'),
        artist: 'Armless Kid',
        title: 'A Night With Kerri (Dub Striker Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:17:00+03:00'),
        artist: 'Julien Jabre',
        title: 'Swimming PLaces (Purple Disco Machine Re-Work)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:20:00+03:00'),
        artist: 'Emory Toler & Disco Town',
        title: 'Music Owns Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:26:00+03:00'),
        artist: 'Blaze',
        title: 'Lovelee Dae (Bicep Remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:30:00+03:00'),
        artist: 'Adam Emil',
        title: 'Genuine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:34:00+03:00'),
        artist: 'Uniile',
        title: 'It Must Be Illegal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:38:00+03:00'),
        artist: 'Niles Cooper',
        title: 'Together',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:43:00+03:00'),
        artist: 'Pandar',
        title: 'Midnight Memories',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:48:00+03:00'),
        artist: 'Jerk Boy',
        title: 'Sunny Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:52:00+03:00'),
        artist: 'Dirty Channels vs Danny Russell',
        title: 'Watchin\' Out',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:56:00+03:00'),
        artist: 'Bwi-Bwi',
        title: 'Vibes Alive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T20:58:00+03:00'),
        artist: 'Pinz & Pelz',
        title: 'House Angel Music Baby',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:02:00+03:00'),
        artist: 'Slaqk',
        title: 'Surf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:07:00+03:00'),
        artist: 'Slim Hustla',
        title: 'Midnight In Copenhagen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:10:00+03:00'),
        artist: 'Jack N Jerk',
        title: 'Quadraphony',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:15:00+03:00'),
        artist: 'Di Barsotti',
        title: 'Borderline',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:20:00+03:00'),
        artist: 'Slim Hustla',
        title: 'Newfound Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:25:00+03:00'),
        artist: 'Barry & Gibbs',
        title: 'I Feel Your Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:30:00+03:00'),
        artist: 'Funk Connection',
        title: 'The Hill (Club Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:35:00+03:00'),
        artist: 'Gershon Jackson & Reset Preset',
        title: 'Hands Together (House of Omni Hands Together Extended Club Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:39:00+03:00'),
        artist: 'Kraak & Smaak',
        title: 'Maputo Express',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:42:00+03:00'),
        artist: 'Bob Sinclar',
        title: 'Vision Of Paradise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:45:00+03:00'),
        artist: 'Daft Punk',
        title: 'Burnin\' (Ian Pooley Cut Up Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:48:00+03:00'),
        artist: 'X-Press 2',
        title: 'London Xpress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:53:00+03:00'),
        artist: 'TiM TASTE',
        title: 'Dark Dreams',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T21:57:00+03:00'),
        artist: 'Tiga & Kölsch',
        title: 'Hal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:03:00+03:00'),
        artist: 'Nox Arcana',
        title: 'The Great Old Ones / [untitled]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:09:00+03:00'),
        artist: 'Sulphur Aeon',
        title: '…to Drown This World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:10:00+03:00'),
        artist: 'Sulphur Aeon',
        title: 'Devotion to the Cosmic Chaos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:17:00+03:00'),
        artist: 'Metallica',
        title: 'The Thing That Should Not Be',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:25:00+03:00'),
        artist: 'Nox Arcana',
        title: 'Alhazred\'s Vision',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:28:00+03:00'),
        artist: 'Behemoth',
        title: 'Sculpting the Throne ov Seth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:35:00+03:00'),
        artist: 'Khepra',
        title: 'Obsession of the Mad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:41:00+03:00'),
        artist: 'Deathchain',
        title: 'The Crawling Chaos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:46:00+03:00'),
        artist: 'Sulphur Aeon',
        title: 'He Is the Gate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:51:00+03:00'),
        artist: 'Morbid Angel',
        title: 'Nar Mattaru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:53:00+03:00'),
        artist: 'Morbid Angel',
        title: 'God of Emptiness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T22:59:00+03:00'),
        artist: 'The Vision Bleak',
        title: 'A Curse of the Grandest Kind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:05:00+03:00'),
        artist: 'Deathchain',
        title: 'Serpent of the Deep',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:13:00+03:00'),
        artist: 'Bal-Sagoth',
        title: 'Shackled to the Trilithon of Kutulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:18:00+03:00'),
        artist: 'The Vision Bleak',
        title: 'Kutulu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:26:00+03:00'),
        artist: 'Barathrum',
        title: 'Deep From the Depths',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:30:00+03:00'),
        artist: 'Septic Flesh',
        title: 'Mad Architect',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:34:00+03:00'),
        artist: 'Ajattara',
        title: 'Kielletyn sanat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:39:00+03:00'),
        artist: 'Arcane Device',
        title: 'Lathe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:42:00+03:00'),
        artist: 'Igorrr',
        title: 'Unpleasant Sonata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:44:00+03:00'),
        artist: 'Morbid Angel',
        title: 'Kawazu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-28T23:45:00+03:00'),
        artist: 'Deathchain',
        title: 'Cthulhu Rising',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T00:00:00+03:00'),
        artist: 'Ramin Djawadi',
        title: 'Main Title',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T00:09:00+03:00'),
        artist: 'Bo Hansson',
        title: 'Leaving Shire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T00:19:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Päivänsäde ja menninkäinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T00:29:00+03:00'),
        artist: 'Heavy Metal Perse',
        title: 'Peikkotyrannin kuolema (acoustic version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T00:41:00+03:00'),
        artist: 'Adam Skorupa & Krzysztof Wierzynkiewicz',
        title: 'Howl Of The White Wolf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T00:54:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Harry Potter and the Philosopher\'s Stone: Hedwig\'s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T01:07:00+03:00'),
        artist: 'Jarvis Cocker & Jason Buckle',
        title: 'Do the Hippogriff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T01:24:00+03:00'),
        artist: 'Klamydia',
        title: 'Lohikäärme Puff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T01:35:00+03:00'),
        artist: 'Bo Hansson',
        title: 'Lothlórien',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T01:53:00+03:00'),
        artist: 'John Williams',
        title: 'Star Wars: Main Title',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T02:11:00+03:00'),
        artist: 'Jeremy Soule',
        title: 'Skyrim - Dragonborn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T02:23:00+03:00'),
        artist: 'The National',
        title: 'The Rains of Castamere',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T02:33:00+03:00'),
        artist: 'Ghost',
        title: 'From the Pinnacle to the Pit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T02:49:00+03:00'),
        artist: 'Janos Valmunen',
        title: 'Bussipysäkillä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T03:06:00+03:00'),
        artist: 'Billy Boyd',
        title: 'The Last Goodbye',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T03:20:00+03:00'),
        artist: 'Danny Elfman',
        title: 'Alice Reprise #5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T03:34:00+03:00'),
        artist: 'Chisu',
        title: 'Yksinäisen keijun tarina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T03:50:00+03:00'),
        artist: 'Bo Hansson',
        title: 'The Old Forest & Tom Bombadil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T04:07:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Star Wars: A New Hope: Main Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T04:25:00+03:00'),
        artist: 'Richard Armitage & The Dwarf Cast',
        title: 'Misty Mountains',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T04:35:00+03:00'),
        artist: 'Adam Skorupa & Krzysztof Wierzynkiewicz',
        title: 'In Temeria (Intro)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T04:43:00+03:00'),
        artist: 'Kenny Loggins',
        title: 'Playing With the Boys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T04:56:00+03:00'),
        artist: 'Led Zeppelin',
        title: 'Ramble On',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T05:10:00+03:00'),
        artist: 'YUP',
        title: 'Homo sapiens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T05:29:00+03:00'),
        artist: 'Devin Townsend Project',
        title: 'The Mighty Masturbator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T05:55:00+03:00'),
        artist: 'Apulanta',
        title: 'Zombeja!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T06:07:00+03:00'),
        artist: 'The City of Prague Philharmonic Orchestra',
        title: 'Nimbus 2000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T06:19:00+03:00'),
        artist: 'The BBC Radiophonic Workshop',
        title: 'Doctor Who (original theme)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T06:31:00+03:00'),
        artist: 'Hevisaurus',
        title: 'Viimeinen mammutti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T06:41:00+03:00'),
        artist: 'Ghost',
        title: 'He Is',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T06:50:00+03:00'),
        artist: 'Riku Avanto & Spermaiset Nakit',
        title: 'Superninja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T06:56:00+03:00'),
        artist: 'Don Huonot',
        title: 'Hyvää yötä ja huomenta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:04:00+03:00'),
        artist: 'Johnny',
        title: 'Ihana Aamu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:08:00+03:00'),
        artist: 'Bon Jovi',
        title: 'Bad Medicine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:18:00+03:00'),
        artist: 'YUP',
        title: 'Ihana elämä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:28:00+03:00'),
        artist: 'Korpiklaani',
        title: 'Vodka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:34:00+03:00'),
        artist: 'The Beatles',
        title: 'Yesterday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:40:00+03:00'),
        artist: 'Marko Haavisto & Poutahaukat',
        title: 'Paha vaanii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:47:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Murheellisten laulujen maa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T07:54:00+03:00'),
        artist: 'Tehosekoitin',
        title: 'Asfaltti polttaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:03:00+03:00'),
        artist: 'Maustetytöt',
        title: 'Tein kai lottorivini väärin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:09:00+03:00'),
        artist: 'Anssi Kela',
        title: 'Miten sydämet toimii?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:18:00+03:00'),
        artist: 'Bon Jovi',
        title: 'Livin\' on a Prayer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:28:00+03:00'),
        artist: 'City of Prague Philharmonic Orchestra',
        title: 'Titanic: My Heart Will Go on',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:41:00+03:00'),
        artist: 'Toto',
        title: 'Mushanga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:55:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Myrkkyä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T08:59:00+03:00'),
        artist: 'Siiri Nuora',
        title: 'Dodo-sorsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T09:05:00+03:00'),
        artist: 'Bomfunk MC\'s',
        title: 'Super Electric',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T09:17:00+03:00'),
        artist: 'Earth, Wind & Fire',
        title: 'September',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T09:28:00+03:00'),
        artist: 'Aavikko',
        title: 'Torpedo Girls',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T09:40:00+03:00'),
        artist: 'Tame Impala',
        title: 'The Less I Know the Better',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T09:52:00+03:00'),
        artist: 'Ultra Bra',
        title: 'Heikko valo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T10:06:00+03:00'),
        artist: 'Nordman',
        title: 'Vandraren',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T10:19:00+03:00'),
        artist: 'Childish Gambino',
        title: 'Redbone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T10:29:00+03:00'),
        artist: 'Rölli',
        title: 'Häläpätilaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T10:42:00+03:00'),
        artist: 'Type O Negative',
        title: 'My Girlfriend\'s Girlfriend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T10:55:00+03:00'),
        artist: 'Natalie Imbruglia',
        title: 'Torn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:00:00+03:00'),
        artist: 'Cheap Trick',
        title: 'Mighty Wings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:06:00+03:00'),
        artist: 'Walt Disney',
        title: 'Elämän tie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:11:00+03:00'),
        artist: 'Andrew Lloyd Webber',
        title: 'Memory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:14:00+03:00'),
        artist: 'Various Artists',
        title: 'Sunrise, Sunset (from Fiddler on the Roof)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:19:00+03:00'),
        artist: 'Yann Tiersen',
        title: 'L’Autre Valse d’Amélie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:22:00+03:00'),
        artist: 'Lin‐Manuel Miranda',
        title: 'Yorktown (The World Turned Upside Down)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:27:00+03:00'),
        artist: 'Alan Menken',
        title: 'Prinssi Ali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:35:00+03:00'),
        artist: 'Bombayz',
        title: 'Slumdog Millionaire - Jai-Ho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:38:00+03:00'),
        artist: 'Sacre feat. Mike Monroe',
        title: 'Donny Darko - Mad World',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:42:00+03:00'),
        artist: 'Mahna Mahna And The Snowths',
        title: 'Mah Na Mah Na',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:46:00+03:00'),
        artist: 'Lauren Ward, Bailey Ryon, Ensemble',
        title: 'Revolting Children',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:49:00+03:00'),
        artist: 'Nightwish',
        title: 'The Phantom of the Opera',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:54:00+03:00'),
        artist: 'Glee Cast',
        title: 'Don\'t Rain on My Parade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T11:58:00+03:00'),
        artist: 'Cinderella',
        title: 'Bibbidi-Bobbidi-Boo (The Magic Song)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:07:00+03:00'),
        artist: 'The London Ensemble',
        title: 'Requiem for a Dream: Lux Aeterna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:15:00+03:00'),
        artist: 'Various Artists',
        title: 'Lumiukko - Howard Blake - Walking in the air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:18:00+03:00'),
        artist: 'Hans Zimmer',
        title: 'Inception: Dream Collapsing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:23:00+03:00'),
        artist: 'Richard Gere ,',
        title: 'We Both Reached For The Gun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:29:00+03:00'),
        artist: 'Benny Andersson & Björn Ulvaeus',
        title: 'Jag är jag, du är du (Knowing Me, Knowing You)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:35:00+03:00'),
        artist: 'Justin Hurwitz',
        title: 'Mia & Sebastian’s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:40:00+03:00'),
        artist: 'Various Artists',
        title: 'Ol´Man River (from Show Boat)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:47:00+03:00'),
        artist: 'Auliʻi Cravalho',
        title: 'How Far I’ll Go',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:51:00+03:00'),
        artist: 'Hans Zimmer',
        title: 'On Stranger Tides',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:54:00+03:00'),
        artist: 'Monty Python',
        title: 'Always Look on the Bright Side of Life',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T12:58:00+03:00'),
        artist: 'Toy Story',
        title: 'You\'ve Got a Friend in Me (Duet)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T13:04:00+03:00'),
        artist: 'Fröbelin Palikat',
        title: 'Kaivan Monttua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T13:11:00+03:00'),
        artist: 'Rancid',
        title: 'Time Bomb',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T13:24:00+03:00'),
        artist: 'Pyhimys',
        title: 'Ei unta ennen Maltsuu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T13:31:00+03:00'),
        artist: 'Eevil Stöö',
        title: 'Et nappaa lipsumasta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T13:44:00+03:00'),
        artist: 'DJ Ibusal',
        title: 'Pilalla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T13:57:00+03:00'),
        artist: 'Sabrina',
        title: 'Boys (Summertime Love)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:01:00+03:00'),
        artist: 'Danny',
        title: 'Kesäkatu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:10:00+03:00'),
        artist: 'Robin',
        title: 'Kesärenkaat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:16:00+03:00'),
        artist: 'XS PROJECT',
        title: 'Bochka Bass Kolbaser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:24:00+03:00'),
        artist: 'Gasellit',
        title: 'Mä meen naimisiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:24:00+03:00'),
        artist: 'Gasellit',
        title: 'Mä meen naimisiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:32:00+03:00'),
        artist: 'JVG feat. Märkä-Simo',
        title: 'Häissä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:38:00+03:00'),
        artist: 'Antti Tuisku feat. VilleGalle',
        title: 'Keinutaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:52:00+03:00'),
        artist: 'Elokuu',
        title: 'Soutaa huopaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T14:58:00+03:00'),
        artist: 'Asa Masa',
        title: 'Mökkihullu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T15:05:00+03:00'),
        artist: 'Teflon Brothers Feat. Sahamies',
        title: 'Pämppää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T15:14:00+03:00'),
        artist: 'Kymppilinja feat. Mariska',
        title: 'Minä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T15:29:00+03:00'),
        artist: 'Ne Luumäet',
        title: 'Autopartio 525',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T15:32:00+03:00'),
        artist: 'VilleGalle feat. SANNI',
        title: 'Lähtisitkö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T15:36:00+03:00'),
        artist: 'Maarit',
        title: 'Jäätelökesä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T15:56:00+03:00'),
        artist: 'Mamba',
        title: 'Vielä on kesää jäljellä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:01:00+03:00'),
        artist: 'Ben E. King',
        title: 'Stand By Me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:07:00+03:00'),
        artist: 'blink‐182',
        title: 'San Diego',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:13:00+03:00'),
        artist: 'Tupakan Ystävät',
        title: 'Laulu Punatukkaisesta Pojasta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:21:00+03:00'),
        artist: 'Bomfunk MC\'s',
        title: 'Freestyler',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:32:00+03:00'),
        artist: 'Suamenlejjona',
        title: 'Kiakkokulta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:42:00+03:00'),
        artist: 'Lamb of God',
        title: 'Choke Sermon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:50:00+03:00'),
        artist: 'Frederik',
        title: 'Kolmekymppinen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T16:56:00+03:00'),
        artist: 'Paasikiventie',
        title: 'Silvio Etnoskåne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:07:00+03:00'),
        artist: 'Kansas',
        title: 'Carry On Wayward Son',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:14:00+03:00'),
        artist: 'No Doubt',
        title: 'Spiderwebs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:25:00+03:00'),
        artist: 'Sleepy Sleepers',
        title: 'Syö lanttuva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:33:00+03:00'),
        artist: 'Plutonium 74',
        title: 'Kasiolove',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:42:00+03:00'),
        artist: 'The Offspring',
        title: 'The Kids Aren\'t Alright',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:48:00+03:00'),
        artist: 'Rehupiikles',
        title: 'Oori maatilamatkaalulle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T17:55:00+03:00'),
        artist: 'Sir Elwoodin hiljaiset värit',
        title: 'Jumala rankaisee Helsinkiä tänä yönä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T18:02:00+03:00'),
        artist: 'In Flames',
        title: 'Crawl Through Knives',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T18:14:00+03:00'),
        artist: 'Katy Perry',
        title: 'I Kissed a Girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T18:16:00+03:00'),
        artist: 'Jason Seizures feat. Hzi',
        title: 'Rumat kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T18:20:00+03:00'),
        artist: 'Antti Tuisku feat. VilleGalle',
        title: 'Keinutaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T18:41:00+03:00'),
        artist: 'Indica',
        title: 'Ikuinen Virta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T18:54:00+03:00'),
        artist: 'Ellinoora',
        title: 'Leijonakuningas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T19:13:00+03:00'),
        artist: 'Lady Gaga',
        title: 'Poker Face',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T19:32:00+03:00'),
        artist: 'Sanni',
        title: 'Että mitähän vittua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T19:50:00+03:00'),
        artist: 'Tiisu',
        title: 'Virtaset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T19:51:00+03:00'),
        artist: 'Apulanta',
        title: 'Ravistettava ennen käyttöä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:05:00+03:00'),
        artist: 'DJ Marky & XRS feat. Stamina MC',
        title: 'LK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:06:00+03:00'),
        artist: 'DJ Hazard & Distorted Minds',
        title: 'Mr. Happy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:12:00+03:00'),
        artist: 'Pendulum',
        title: 'Hold Your Colour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:18:00+03:00'),
        artist: 'London Elektricity',
        title: 'Funkopolis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:23:00+03:00'),
        artist: 'Marky & XRS',
        title: 'Real Good',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:25:00+03:00'),
        artist: 'Shy FX',
        title: 'Call Me (feat. Maverick Sabre)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:28:00+03:00'),
        artist: 'Box N Lock',
        title: 'Chimpo 1996',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:33:00+03:00'),
        artist: 'Bop',
        title: 'Song about my dog (subwave remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:37:00+03:00'),
        artist: 'Etherwood',
        title: 'A hundred oceans',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:41:00+03:00'),
        artist: 'Askel & Elere',
        title: 'Never feat. Leevi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:43:00+03:00'),
        artist: 'Spirit, Digital',
        title: 'Phantom Force (Fracture\'s Astrophonica Edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:46:00+03:00'),
        artist: 'Fracture',
        title: 'Big up the ladies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T20:49:00+03:00'),
        artist: 'Om Unit & Moresounds',
        title: 'Nuff Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:03:00+03:00'),
        artist: 'Baobinga',
        title: 'Basement Track',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:04:00+03:00'),
        artist: 'Eric Prydz',
        title: 'Call on me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:04:00+03:00'),
        artist: 'Indivision',
        title: 'Pirates',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:04:00+03:00'),
        artist: 'Pharrell Williams',
        title: 'Happy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:04:00+03:00'),
        artist: 'A-ha',
        title: 'Take on me',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:05:00+03:00'),
        artist: 'BCEE',
        title: 'Captured in time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:05:00+03:00'),
        artist: 'Tiktak',
        title: 'Heilutaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:05:00+03:00'),
        artist: 'Noisia',
        title: 'Dead Limit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:08:00+03:00'),
        artist: 'Dub Phizix',
        title: 'Marka feat. Strategy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:08:00+03:00'),
        artist: 'DJ Hazard',
        title: 'Time Tripping',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:08:00+03:00'),
        artist: 'DLR & Ulterior Motive',
        title: 'Modules',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:12:00+03:00'),
        artist: 'Current Value',
        title: 'That Smile',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:17:00+03:00'),
        artist: 'Ivy Lab',
        title: 'Calculate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:21:00+03:00'),
        artist: 'Shield & Submarine',
        title: 'March of Giants',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:28:00+03:00'),
        artist: 'Tsuruda',
        title: 'Kicking Wolf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:28:00+03:00'),
        artist: 'Eprom & Zeke Beats',
        title: 'Humanoid 2.0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:32:00+03:00'),
        artist: 'Resound',
        title: 'Rain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:34:00+03:00'),
        artist: 'Esc',
        title: 'Choose one',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:36:00+03:00'),
        artist: 'Askel & Elere',
        title: 'Siren',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:42:00+03:00'),
        artist: 'King of the Rollers',
        title: 'Burnt Ends',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:46:00+03:00'),
        artist: 'Serum, Trigga',
        title: 'Phenomenon, Pt.2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:48:00+03:00'),
        artist: 'Serum',
        title: 'One more thing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:49:00+03:00'),
        artist: 'Serum',
        title: 'Lumberjack (Original Mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:50:00+03:00'),
        artist: 'Serum',
        title: 'Lumberjack (VIP)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:52:00+03:00'),
        artist: 'Serum & Voltage',
        title: 'Mission Control',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:53:00+03:00'),
        artist: 'Serum, Voltage & Inja',
        title: 'Gunfinger Fam (Vip)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T21:54:00+03:00'),
        artist: 'DJ Limited',
        title: 'The Elephant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:00:00+03:00'),
        artist: 'Culprate',
        title: 'Helter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:03:00+03:00'),
        artist: 'Sleep',
        title: 'The Sciences',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:06:00+03:00'),
        artist: 'Sleep',
        title: 'Marijuanaut\'s Theme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:14:00+03:00'),
        artist: 'Fu Manchu',
        title: 'Trapeze Freak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:19:00+03:00'),
        artist: 'Kaiser',
        title: 'High Octane Supersoul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:25:00+03:00'),
        artist: 'Reverend Bizarre',
        title: 'Doomsower',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:32:00+03:00'),
        artist: 'Horse Latitudes',
        title: 'Decayment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:40:00+03:00'),
        artist: 'Stoned Jesus',
        title: 'Wound',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:43:00+03:00'),
        artist: 'Electric Wizard',
        title: 'Funeralopolis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T22:52:00+03:00'),
        artist: 'Samsara Blues Experiment',
        title: 'Army of Ignorance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:00:00+03:00'),
        artist: 'Uncle Acid & the Deadbeats',
        title: 'Waiting For Blood',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:05:00+03:00'),
        artist: 'Mars Red Sky',
        title: 'Stranded In Arcadia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:12:00+03:00'),
        artist: 'Kairon; IRSE!',
        title: 'Valorians',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:17:00+03:00'),
        artist: '1000mods',
        title: 'Vidage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:27:00+03:00'),
        artist: 'Yob',
        title: 'Pain Like Sugar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:33:00+03:00'),
        artist: 'L.A. Witch',
        title: 'Drive Your Car',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:38:00+03:00'),
        artist: 'Acid King',
        title: 'Electric Machine',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:46:00+03:00'),
        artist: 'Yawning Man',
        title: 'Catamaran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:50:00+03:00'),
        artist: 'King Gizzard & the Lizard Wizard',
        title: 'I\'m in Your Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:54:00+03:00'),
        artist: 'King Gizzard & the Lizard Wizard',
        title: 'I\'m Not in Your Mind',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-29T23:57:00+03:00'),
        artist: 'Black Sabbath',
        title: 'Into the Void',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:05:00+03:00'),
        artist: 'Tyyne & Martta',
        title: 'Kuumakymppinen (Kolmekymppinen)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:08:00+03:00'),
        artist: 'Nisa',
        title: 'Saunasamba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:13:00+03:00'),
        artist: 'Jaakko Teppo',
        title: 'Hilma ja Onni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:20:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Pohjois-Karjala',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:28:00+03:00'),
        artist: 'Danny',
        title: 'Pieni sana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:33:00+03:00'),
        artist: 'Freeman',
        title: 'Ajetaan tandemilla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:40:00+03:00'),
        artist: 'Frederik',
        title: 'Vaarin traktori',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:46:00+03:00'),
        artist: 'Juice Leskinen Grand Slam',
        title: 'Isoisän hinttipussi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:51:00+03:00'),
        artist: 'Matti ja Teppo',
        title: 'Olen kiitollinen tänään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T00:56:00+03:00'),
        artist: 'Virve Rosti',
        title: 'Sata salamaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:02:00+03:00'),
        artist: 'KTROPR',
        title: 'Marjatta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:08:00+03:00'),
        artist: 'Esa Pakarinen',
        title: 'Lentävä kalakukko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:19:00+03:00'),
        artist: 'Marko Haavisto & Poutahaukat',
        title: 'Paha vaanii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:27:00+03:00'),
        artist: 'Jope Ruonansuu',
        title: 'Traktorinpyörä on traktorinpyörä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:34:00+03:00'),
        artist: 'Pete Parkkonen',
        title: 'Kohta sataa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:42:00+03:00'),
        artist: 'Hurriganes',
        title: 'I Will Stay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:49:00+03:00'),
        artist: 'Jamppa Kääriäinen',
        title: 'Sinä Läksit Poes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T01:57:00+03:00'),
        artist: 'Las Ketchup',
        title: 'The Ketchup Song (Asereje) (Spanglish Version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:03:00+03:00'),
        artist: 'Frederik',
        title: 'Tsingis Khan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:09:00+03:00'),
        artist: 'Maustetytöt',
        title: 'Tein kai lottorivini väärin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:17:00+03:00'),
        artist: 'Kasmir',
        title: 'Mökkitie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:23:00+03:00'),
        artist: 'Multimediakonsultit',
        title: 'Tarjousmaksalaatikko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:32:00+03:00'),
        artist: 'Lauri Tähkä & Elonkerjuu',
        title: 'Kuriittamma rakastamma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:38:00+03:00'),
        artist: 'Jaska Mäkynen',
        title: 'Suomenhevonen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:45:00+03:00'),
        artist: 'Pauli Hanhiniemi',
        title: 'Hummani hei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:50:00+03:00'),
        artist: 'Frederik',
        title: 'Idi Amin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T02:56:00+03:00'),
        artist: 'Freud Marx Engels & Jung',
        title: 'Buuri Johannesburgista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:04:00+03:00'),
        artist: 'Jeanette',
        title: 'Porqué te vas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:09:00+03:00'),
        artist: 'Hullujussi',
        title: 'Bingo bango bongo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:15:00+03:00'),
        artist: 'Frederik',
        title: 'Tyttö kuin tiikeri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:20:00+03:00'),
        artist: 'Jorma Hynninen',
        title: 'Kaksi vanhaa tukkijätkää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:26:00+03:00'),
        artist: 'Kaija Koo',
        title: 'Supernaiset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:38:00+03:00'),
        artist: 'Kari Tapio',
        title: 'Juna kulkee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:41:00+03:00'),
        artist: 'Pikku-Orava',
        title: 'Kalinka / Volga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:51:00+03:00'),
        artist: 'Anna Hanski',
        title: 'Kotiviini',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:54:00+03:00'),
        artist: 'Frederik',
        title: 'Maitoa ei tänään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T03:58:00+03:00'),
        artist: 'Kaytanhousuja',
        title: 'Vieremälle jörnimään',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:05:00+03:00'),
        artist: 'Jari Sillanpää',
        title: 'Liekeissä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:10:00+03:00'),
        artist: 'Distrance',
        title: 'Ei saatana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:17:00+03:00'),
        artist: 'Jean S.',
        title: 'Pitkät päivät pakerretaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:20:00+03:00'),
        artist: 'Ismo Alanko',
        title: 'Taiteilijaelämää',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:30:00+03:00'),
        artist: 'Juice Leskinen',
        title: 'Viidestoista yö',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:42:00+03:00'),
        artist: 'Frederik',
        title: 'Markkinarako',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:45:00+03:00'),
        artist: 'Hector',
        title: 'Juodaan viinaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:51:00+03:00'),
        artist: 'Teekkarikuoro',
        title: 'Sahtilaulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:51:00+03:00'),
        artist: 'Korpiklaani',
        title: 'Ievan polkka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T04:57:00+03:00'),
        artist: 'Kisu',
        title: 'Juustossa löytyy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:02:00+03:00'),
        artist: 'Pate Mustajärvi',
        title: 'Ukkometso',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:05:00+03:00'),
        artist: 'EppuPopedaNormaali',
        title: 'Hyvä kankkunen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:13:00+03:00'),
        artist: 'A. Aallon Rytmiorkesteri',
        title: 'Kun sydän on heikoimmillaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:21:00+03:00'),
        artist: 'Frederik',
        title: 'Linda Linda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:28:00+03:00'),
        artist: 'Mona Carita',
        title: 'Rasputin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:35:00+03:00'),
        artist: 'Bamperos',
        title: 'Tule kanssani kylpyyn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:39:00+03:00'),
        artist: 'Jaakko Teppo',
        title: 'Työttömän laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:43:00+03:00'),
        artist: 'Juha Vainio',
        title: 'Käyn ahon laitaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:51:00+03:00'),
        artist: 'Seitsemän Seinähullua Veljestä',
        title: 'Nakit Ja Muusi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T05:58:00+03:00'),
        artist: 'Lastenmusiikkiorkesteri Ammuu!',
        title: 'Traktorilla ajelen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:04:00+03:00'),
        artist: 'Popeda',
        title: 'Oodi makkaralle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:06:00+03:00'),
        artist: 'Kaoma',
        title: 'Lambada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:10:00+03:00'),
        artist: 'Neljänsuora',
        title: 'Julia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:16:00+03:00'),
        artist: 'Frederik',
        title: 'Tule tyttö kyytiin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:20:00+03:00'),
        artist: 'Leevi and the Leavings',
        title: 'Rin Tin Tin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:31:00+03:00'),
        artist: 'Apulanta',
        title: 'Kalamiehen toveri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:36:00+03:00'),
        artist: 'Yölintu',
        title: 'Naapurin sahtijenkka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:38:00+03:00'),
        artist: 'Hector',
        title: 'Lainaa vain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:47:00+03:00'),
        artist: 'M.A. Numminen',
        title: 'Minä soitan harmonikkaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:47:00+03:00'),
        artist: 'Eija Sinikka',
        title: 'Letkis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:50:00+03:00'),
        artist: 'Danny',
        title: 'Kauan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:53:00+03:00'),
        artist: 'Kummeli',
        title: 'Samba rumba bueno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T06:56:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Baarikärpänen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:02:00+03:00'),
        artist: 'Scooter',
        title: 'Maria (I Like It Loud)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:07:00+03:00'),
        artist: 'Jessy Matador',
        title: 'Allez Olla Olé',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:10:00+03:00'),
        artist: 'Las Ketchup',
        title: 'The Ketchup Song (Asereje) (Spanglish Version)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:14:00+03:00'),
        artist: 'Lou Bega',
        title: 'Mambo No 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:18:00+03:00'),
        artist: 'Duck Sauce',
        title: 'Barbra Streisand (Radio Edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:22:00+03:00'),
        artist: 'Boney M.',
        title: 'Rasputin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:27:00+03:00'),
        artist: 'ABBA',
        title: 'Dancing Queen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:34:00+03:00'),
        artist: 'Gigi D\'Agostine',
        title: 'The Riddle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:38:00+03:00'),
        artist: 'Carrilio',
        title: 'samba de janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:42:00+03:00'),
        artist: 'Ritchie Valens',
        title: 'La bamba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:44:00+03:00'),
        artist: 'Alizée',
        title: 'Moi... Lolita',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:49:00+03:00'),
        artist: 'O-Zone',
        title: 'Dragostea Din Dei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:53:00+03:00'),
        artist: 'Daddy DJ',
        title: 'Daddy Dj (Original Radio Edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T07:57:00+03:00'),
        artist: 'Los del Río',
        title: 'Macarena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:03:00+03:00'),
        artist: 'Basshunter',
        title: 'Boten Anna (radio edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:07:00+03:00'),
        artist: 'Lucenzo feat. Don Omar',
        title: 'Danza Kuduro (original mix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:10:00+03:00'),
        artist: 'Boney M.',
        title: 'Daddy Cool',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:15:00+03:00'),
        artist: 'MIKA',
        title: 'Grace Kelly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:18:00+03:00'),
        artist: 'Alexandra Stan',
        title: 'Mr. Saxobeat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:21:00+03:00'),
        artist: 'Alex Gaudino feat. Crystal Waters',
        title: 'Destination Calabria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:27:00+03:00'),
        artist: 'Vengaboys',
        title: 'Boom, Boom, Boom, Boom!!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:33:00+03:00'),
        artist: 'Nena',
        title: '99 Luftballoons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:38:00+03:00'),
        artist: '2 Unlimited',
        title: 'No Limit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:42:00+03:00'),
        artist: 'SunStroke Project & Olia Tira',
        title: 'Run Away',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:46:00+03:00'),
        artist: 'Culture Club',
        title: 'Karma Chameleon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:50:00+03:00'),
        artist: 'Cascada',
        title: 'Everytime We Touch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:57:00+03:00'),
        artist: 'Loona',
        title: 'Vamos A La Playa (Radio Edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T08:57:00+03:00'),
        artist: 'Yolanda Be Cool & DCUP',
        title: 'We No Speak Americano',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:04:00+03:00'),
        artist: 'Goon',
        title: 'Ekoauto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:12:00+03:00'),
        artist: 'The Devin Townsend Band',
        title: 'Deadhead',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:23:00+03:00'),
        artist: 'Vokologi',
        title: 'Ääniaaltoja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:32:00+03:00'),
        artist: 'Pink Floyd',
        title: 'The Gunner’s Dream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:38:00+03:00'),
        artist: 'Acid Arab feat. Cem Yıldız',
        title: 'Stil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:46:00+03:00'),
        artist: 'Johnny Cash',
        title: 'Hurt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T09:52:00+03:00'),
        artist: 'Amon Tobin',
        title: 'Nightlife',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:01:00+03:00'),
        artist: 'Savatage',
        title: 'Christmas Eve (Sarajevo 12/24)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:07:00+03:00'),
        artist: 'Letzte Instanz',
        title: 'Winterträne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:12:00+03:00'),
        artist: 'Don Johnson Big Band',
        title: 'Suru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:21:00+03:00'),
        artist: 'Charanjit Singh',
        title: 'Raga Bhairav',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:26:00+03:00'),
        artist: 'Karnivool',
        title: 'Shutterspeed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:34:00+03:00'),
        artist: 'Olavi Uusivirta',
        title: 'Toton Africa feat. Tuomo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:38:00+03:00'),
        artist: 'Ghost Brigade',
        title: 'Elämä on tulta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:47:00+03:00'),
        artist: 'Mokoma',
        title: 'Kuinka kävi näin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:51:00+03:00'),
        artist: 'The Gathering',
        title: 'When the Sun Hits',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T10:59:00+03:00'),
        artist: 'DJ Marky & XRS feat. Stamina MC',
        title: 'LK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:04:00+03:00'),
        artist: 'PMMP',
        title: 'Kesäkaverit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:10:00+03:00'),
        artist: 'Kansas',
        title: 'Carry On Wayward Son',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:19:00+03:00'),
        artist: 'Kraftwerk',
        title: 'Radioaktivität',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:32:00+03:00'),
        artist: 'Manowar',
        title: 'Battle Hymn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:41:00+03:00'),
        artist: 'Dodgy',
        title: 'Good Enough',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:47:00+03:00'),
        artist: 'Stam1na',
        title: 'Valhe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T11:54:00+03:00'),
        artist: 'toby fox',
        title: 'Undertale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T12:51:00+03:00'),
        artist: 'spiikki',
        title: 'Mahti Siibs (Mighty Wings)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T12:57:00+03:00'),
        artist: 'Ukkosmaine',
        title: 'Salamaponi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:01:00+03:00'),
        artist: 'Femme Balba',
        title: 'Näin heiluu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:05:00+03:00'),
        artist: 'Lord of the Lost',
        title: 'La Bomba',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:10:00+03:00'),
        artist: 'Eppu Normaali',
        title: 'Pallit heiluu taas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:17:00+03:00'),
        artist: 'Loiriplukari',
        title: 'Iso Auto Ja Pieni Setä',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:21:00+03:00'),
        artist: 'DJ Juspo',
        title: 'Kilpikonnavoimaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:23:00+03:00'),
        artist: 'Tre kronor & Nick Borgen',
        title: 'Den glider in',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:32:00+03:00'),
        artist: 'spiikki',
        title: 'Sidit kuuluu radioon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:41:00+03:00'),
        artist: 'Torvikopla feat. Teekkarikuoro',
        title: 'Peto on irti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:48:00+03:00'),
        artist: 'The BossHoss',
        title: 'Gay Bar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:52:00+03:00'),
        artist: 'Muuan mies',
        title: 'Karhukaiset',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T13:57:00+03:00'),
        artist: 'Suamenlejjona',
        title: 'Suamalaista lihaa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:04:00+03:00'),
        artist: 'Tommi Läntinen',
        title: 'S.O.S',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:09:00+03:00'),
        artist: 'Noitalinna Huraa!',
        title: 'Vappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:12:00+03:00'),
        artist: 'Ken Arai',
        title: 'I AM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:18:00+03:00'),
        artist: 'Rick Astley',
        title: 'Never Gonna Give You Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:22:00+03:00'),
        artist: 'Master Blaster',
        title: 'How Old R U? (radio edit)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:26:00+03:00'),
        artist: 'Russkaja',
        title: 'Get Lucky',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:31:00+03:00'),
        artist: 'Dead Kennedys',
        title: 'Too Drunk to Fuck',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:37:00+03:00'),
        artist: 'DJ JakJakJaketus',
        title: 'Run Away & Hey Mama (mashup)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:39:00+03:00'),
        artist: 'Perturbator',
        title: 'Miami Disco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:43:00+03:00'),
        artist: 'Nauti Radiosta',
        title: 'Wappu Wappu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:46:00+03:00'),
        artist: 'Oskill8',
        title: 'Dodo-sorsa (Oskill8 Sceneradio Gameboy remix)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:49:00+03:00'),
        artist: 'Dubmood',
        title: 'Paradox Keygen 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:50:00+03:00'),
        artist: 'Frederik',
        title: 'Kohta juna lähtee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T14:57:00+03:00'),
        artist: 'The Verkkars',
        title: 'EZ4ENCE (Kannatuslaulu)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playedAt: new Date('2019-04-30T15:01:00+03:00'),
        artist: 'Teekkarikuoro',
        title: 'Ikuisen teekkarin laulu',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Tracks',
      {
        playedAt: {
          [Sequelize.Op.between]: [
            new Date('2019-01-01T00:00:00+03:00'),
            new Date('2019-12-31T23:59:59+03:00')
          ]
        }
      },
      {}
    );
  }
};
