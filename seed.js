const { green, red } = require('chalk')
const { db, Program, Ice } = require('./server/db/index')

const programs = [
  //add programs here
  {
    id: 1,
    name: 'Black Dahlia',
    memorySize: 2,
    cost: 5,
    strength: 5,
    type: 'Killer',
  },
  {
    id: 2,
    name: 'Codecracker',
    memorySize: 1,
    cost: 2,
    strength: 2,
    type: 'Decryptor',
  },
  {
    id: 3,
    name: 'Codeslinger',
    memorySize: 1,
    cost: 3,
    strength: 3,
    type: 'Killer',
  },
  {
    id: 4,
    name: 'Cyfermaster',
    memorySize: 2,
    cost: 5,
    strength: 5,
    type: 'Decryptor',
  },
  {
    id: 5,
    name: 'Dwarf',
    memorySize: 1,
    cost: 3,
    strength: 3,
    type: 'Wallbreaker',
  },
  {
    id: 6,
    name: 'Grubb',
    memorySize: 1,
    cost: 2,
    strength: 2,
    type: 'Wallbreaker',
  },
  {
    id: 7,
    name: 'Hammer',
    memorySize: 2,
    cost: 5,
    strength: 5,
    type: 'Wallbreaker',
  },
  {
    id: 8,
    name: 'Evil Twin',
    memorySize: 1,
    cost: 2,
    strength: 2,
    type: 'Killer',
  },
  {
    id: 9,
    name: 'Raffles',
    memorySize: 1,
    cost: 3,
    strength: 3,
    type: 'Decryptor',
  },
]

const ices = [
  //add ice here
  {
    id: 1,
    title: 'Asp',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 2,
    title: 'Banpei',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 3,
    title: 'Cerberus',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 4,
    title: 'Code Corpse',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 5,
    title: 'Data Naga',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 6,
    title: 'Liche',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 7,
    title: 'Neural Blade',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 8,
    title: 'TKO 2.0',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 9,
    title: 'Triggerman',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 10,
    title: 'Zombie',
    cost: 4,
    strength: 4,
    type: 'Sentry',
  },
  {
    id: 11,
    title: 'Wall of Static',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 12,
    title: 'Wall of Ice',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 13,
    title: 'Fire Wall',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 14,
    title: 'Rock Is Strong',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 15,
    title: 'Reinforced Wall',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 16,
    title: 'Data Wall',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 17,
    title: 'Data Wall 2.0',
    cost: 4,
    strength: 4,
    type: 'Firewall',
  },
  {
    id: 18,
    title: 'Crystal Wall',
    cost: 4,
    strength: 3,
    type: 'Firewall',
  },
  {
    id: 19,
    title: 'Laser Wire',
    cost: 4,
    strength: 2,
    type: 'Firewall',
  },
  {
    id: 20,
    title: 'Razor Wire',
    cost: 6,
    strength: 3,
    type: 'Firewall',
  },
  {
    id: 21,
    title: 'Ball and Chain',
    cost: 2,
    strength: 5,
    type: 'Codegate',
  },
  {
    id: 22,
    title: 'Cortical Scanner',
    cost: 7,
    strength: 3,
    type: 'Codegate',
  },
  {
    id: 23,
    title: 'Endless Corridor',
    cost: 4,
    strength: 2,
    type: 'Codegate',
  },
  {
    id: 24,
    title: 'Filter',
    cost: 0,
    strength: 0,
    type: 'Codegate',
  },
  {
    id: 25,
    title: 'Haunting Inquisition',
    cost: 8,
    strength: 6,
    type: 'Codegate',
  },
  {
    id: 26,
    title: 'Keeper',
    cost: 4,
    strength: 4,
    type: 'Codegate',
  },
  {
    id: 27,
    title: 'Mazer',
    cost: 5,
    strength: 5,
    type: 'Codegate',
  },
  {
    id: 28,
    title: 'Nerve Labyrinth',
    cost: 6,
    strength: 4,
    type: 'Codegate',
  },
  {
    id: 29,
    title: 'Quandry',
    cost: 2,
    strength: 2,
    type: 'Codegate',
  },
  {
    id: 30,
    title: 'Scramble',
    cost: 3,
    strength: 3,
    type: 'Codegate',
  },
]

const seed = async () => {
  try {
    await db.sync({ force: true })
    await Promise.all(
      programs.map((program) => {
        return Program.create(program)
      })
    ).then(() => {
      return Promise.all(
        ices.map((ice) => {
          return Ice.create(ice)
        })
      )
    })
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
