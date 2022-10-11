/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */
const roleHarvester = {

  /** @param {Creep} creep **/
  run: creep => {

    console.log('Creep\'s Energy:', creep.store.energy)
    // console.log('FreeCapacity', creep.store.getFreeCapacity())

    if (creep.store.getFreeCapacity() > 0) {

      const sources = creep.room.find(FIND_SOURCES)

      if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
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
            filter: structure =>
                  (
                      structure.structureType === STRUCTURE_EXTENSION
                  ||  structure.structureType === STRUCTURE_SPAWN
                  )
              // &&  creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0
          }
        )

      // console.log(JSON.stringify(targets, null, 2))
      // console.log(creep.transfer( targets[0], RESOURCE_ENERGY ))
      // console.log(ERR_NOT_IN_RANGE)

      if (targets.length > 0) {
        if (
          creep.transfer( targets[0], RESOURCE_ENERGY ) === ERR_NOT_IN_RANGE
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
