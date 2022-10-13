const roleHarvester = require('role.harvester')
// const roleUpgrader = require('role.upgrader')
// const roleBuilder = require('role.builder')

const loop = () => {

  // Object.keys(Game.rooms)
  // .forEach(
  //   roomName =>
  //     console.log(
  //       `Room "${roomName}" has ${Game.rooms[roomName].energyAvailable} energy`
  //     )
  // )

  const screepsLimit = 5

  const {
    creeps
  , spawns
  } = Game

  if (Object.keys(creeps).length < screepsLimit) {
    Game.spawns[Object.keys(spawns)[0]]
    .spawnCreep(
      [WORK, CARRY, MOVE]
    , `Harvester${Object.keys(creeps).length + 1}`
    ) 
  }

  Object.keys(creeps)
  .forEach(
    creepName => {

      roleHarvester.run(creeps[creepName])

      // if (creep.memory.role == 'upgrader') {
      //   roleUpgrader.run(creep)
      // }

      // if (creep.memory.role == 'builder') {
      //   roleBuilder.run(creep)
      // }

    }
  )
}

module.exports.loop = loop
