import fBasePrd from './basePrd.js'
import fBaseDev from './baseDev.js'
import fNode from './node/index.js'
import fDeno from './deno.js'

import fRescript from './rescript.js'
import fCalcitCirru from './calcit_cirru.js'

import fRust from './rust.js'

export default () => (
  {
    basePrd: {
      imgName: 'mooxe/base:prd'
    , file: fBasePrd()
    }
  , baseDev: {
      imgName: 'mooxe/base:dev'
    , file: fBaseDev()
    }
  , node: {
      imgName: 'mooxe/node'
    , file: fNode()
    }
  , deno: {
      imgName: 'mooxe/deno'
    , file: fDeno()
    }

  , rescript: {
      imgName: 'mooxe/rescript'
    , file: fRescript()
    }
  , calcitCirru: {
      imgName: 'mooxe/calcit_cirru'
    , file: fCalcitCirru()
    }

  , rust: {
      imgName: 'mooxe/rust'
    , file: fRust()
    }

  }

)
