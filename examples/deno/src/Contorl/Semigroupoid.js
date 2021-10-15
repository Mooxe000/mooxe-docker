import {
  Instance
, curry
} from '../Utils/index.js'

const Semigroupoid =

  // forall k.
  //  (k -> k-> Type) -> Constraint

  Instance('Semigroupid')
  .interface(['compose'])
  .instance({
    compose: (f, g, x) => f(g(x))
    // forall b c d.
    //  a d c -> a b c -> a b d
  })

const compose = (f, g) =>
  curry(
    Semigroupoid.compose
  )(f)(g)
const composeFlipped = (f, g) =>
  compose(g, f)

export {
  Semigroupoid
, compose
, composeFlipped
}
