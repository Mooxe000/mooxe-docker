import {
  Semigroupoid
, compose
, infixr
} from './Semigroupoid.js'

const categoryFn =
  Instance
  .extends([
    Semigroupoid.class
  ])
  .classInterface([
    'identity'
  ])
  .instance({
    identity: x => x
  })

const Category = categoryFn.class

const { identity } = categoryFn

export {

  Category
, identity

, Semigroupoid
, compose
, infixr

}
