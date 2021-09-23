// import {
//   Semigroupoid
// , compose
// , infixr as i
// } from './Semigroupoid.js'

const categoryFn =
  Instance
  .classInterface([
    'identity'
  ])
  .instance({
    identity: x => x
  })

const category = categoryFn.class

const { identity } = categoryFn

export {
  category
, identity
}
