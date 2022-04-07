Game.spawns['Spawn1']
.spawnCreep(
  [WORK, CARRY, MOVE]
, 'Harvester1'
)
Game.spawns['Spawn1']
.spawnCreep(
  [WORK, CARRY, MOVE]
, 'Harvester2'
)

Game.spawns['Spawn1']
.spawnCreep(
  [WORK, CARRY, MOVE]
, 'Upgrader1'
)

Game.creeps['Harvester1']
.memory.role = 'harvester'
Game.creeps['Upgrader1']
.memory.role = 'upgrader'

Game.spawns['Spawn1']
.spawnCreep(
  [WORK, CARRY, MOVE]
, 'Builder1'
, {
    memory: { role: 'builder' }
  }
)

Game.spawns['Spawn1']
.spawnCreep(
  [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]
, 'HarvesterBig'
, {
    memory: {
      role: 'harvester'
    }
  }
)

const roleHarvester = require('role.harvester')
// const roleUpgrader = require('role.upgrader')
const roleBuilder = require('role.builder')

const loop = () => {

  Object.keys(Game.rooms)
  .forEach(
    roomName =>
      console.log(
        `Room "${roomName}" has ${Game.rooms[roomName].energyAvailable} energy`
      )
  )

  Object.keys(Game.creeps)
  .forEach(
    creepName => {

      const creep = Game.creeps[creepName]

      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep)
      }

      // if (creep.memory.role == 'upgrader') {
      //   roleUpgrader.run(creep)
      // }

      if (creep.memory.role == 'builder') {
        roleBuilder.run(creep)
      }

    }
  )
}

module.exports.loop = loop
