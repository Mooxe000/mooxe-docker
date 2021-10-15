import {
  Semigroupoid
, compose
, infixr
} from './Semigroupoid.js'

const categoryFn =

  // forall k.
  //  (k -> k-> Type) -> Constraint

  Instance('Category')
  .extends([
    Semigroupoid.class
  ])
  .interface('identity')
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
