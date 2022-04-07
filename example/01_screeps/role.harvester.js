/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */
const spawn = Game.spawns['Spawn1']

const roleHarvester = {

  /** @param {Creep} creep **/
  run: (creep) => {

    if (creep.store.getFreeCapacity() > 0) {

      const sources = creep.room.find(FIND_SOURCES);

      if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(
          sources[0]
        , {
            visualizePathStyle: {
              stroke: '#ffaa00'
            }
          }
        )
      }

    } else {
      const targets = creep.room.find(
        FIND_STRUCTURES
      , {
          filter: (structure) =>
                (
                    structure.structureType === STRUCTURE_EXTENSION
                ||  structure.structureType === STRUCTURE_SPAWN
                )
            &&  structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        }
      )

      if (targets.length > 0) {
        if (
          creep.transfer(
            targets[0]
          , RESOURCE_ENERGY
          ) === ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(
            targets[0]
          , {
              visualizePathStyle: {
                stroke: '#ffffff'
              }
            }
          )
        }
      }
    }

	}
}

module.exports = roleHarvester
