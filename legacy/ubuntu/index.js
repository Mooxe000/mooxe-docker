import fBasePrd from './basePrd.js'
import fBaseDev from './baseDev.js'
import fNode from './node/index.js'
import fDeno from './deno.js'

import fRescript from './rescript.js'
import fPurescript from './purescript.js'
import fCalcitCirru from './calcit_cirru.js'
import fNim from './nim.js'

import fVlang from './vlang.js'
import fZig from './zig.js'
import fRust from './rust.js'

import fWineNwjs from './winenwjs.js'
import fWeChatDevTools from './wechatdevtools.js'

export default () => (
  {
    baseprd: {
      imgName: 'mooxe/base:prd'
    , file: fBasePrd()
    }
  , basedev: {
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

  , vlang: {
      imgName: 'mooxe/vlang'
    , file: fVlang()
    }
  , zig: {
      imgName: 'mooxe/zig'
    , file: fZig()
    }
  , rust: {
      imgName: 'mooxe/rust'
    , file: fRust()
    }

  , winenwjs: {
      imgName: 'mooxe/winenwjs'
    , file: fWineNwjs()
    }
  , wechatdevtools: {
      imgName: 'mooxe/wechatdevtools'
    , file: fWeChatDevTools()
    }

  }

)
