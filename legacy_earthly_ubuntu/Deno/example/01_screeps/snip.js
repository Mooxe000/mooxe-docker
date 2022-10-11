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

const spawn = Game.spawns['Spawn0']

JSON.stringify(Game.spawns, null, 2)
JSON.stringify(Game.creeps, null, 2)
