import fBasePrd from './basePrd.js'
import fBaseDev from './baseDev.js'
import fNode from './node/index.js'
import fDeno from './deno.js'

import fRescript from './rescript.js'
import fPurescript from './purescript.js'
import fCalcitCirru from './calcit_cirru.js'
import fNim from './nim.js'

import fV from './v.js'
import fZig from './zig.js'
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
  , purescript: {
      imgName: 'mooxe/purescript'
    , file: fPurescript()
    }
  , calcitCirru: {
      imgName: 'mooxe/calcit_cirru'
    , file: fCalcitCirru()
    }
  , nim: {
      imgName: 'mooxe/nim'
    , file: fNim()
  }

  , v: {
      imgName: 'mooxe/v'
    , file: fV()
    }
  , zig: {
      imgName: 'mooxe/zig'
    , file: fZig()
    }
  , rust: {
      imgName: 'mooxe/rust'
    , file: fRust()
    }

  }

)
