import fBasePrd from './basePrd.js'
import fBaseDev from './baseDev.js'
import fNode from './node.js'
import fDeno from './deno.js'

export default {
  basePrd: {
    imgName: 'mooxe/base:prd'
  , file: fBasePrd
  }
, baseDev: {
    imgName: 'mooxe/base:dev'
  , file: fBaseDev
  }
, node: {
    imgName: 'mooxe/node'
  , file: fNode 
  }
, deno: {
    imgName: 'mooxe/deno'
  , file: fDeno 
  }
}
