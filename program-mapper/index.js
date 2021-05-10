const fetch = require('node-fetch');

fetch('https://wappuradio.fi/api/programs', { headers: { 'Accept': 'application/json' } })
  .then(response => response.json())
  .then(programs => {
    console.log('[');
    for (const program of programs) {
      console.log(`  {
    startAt: new Date('${program.start}'),
    endAt: new Date('${program.end}'),
    title: '${program.title}',
    createdAt: new Date(),
    updatedAt: new Date()
  },`);
    }
    console.log(']');
  });
