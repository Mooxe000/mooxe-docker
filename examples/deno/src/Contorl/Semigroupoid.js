import {
  Instance
, Infixr
, curry
} from '../Utils/index.js'

const Semigroupoid =

  Instance
  .classInterface([
    'compose'
  ])
  .instance({
    compose: (f, g, x) => f(g(x))
  })

const compose = (f, g) =>
  curry(
    Semigroupoid.compose
  )(f, g)
const composeFlipped = (f, g) =>
  compose(g, f)

const infixr = Infixr({
  '<<<': compose
, '>>>': composeFlipped
})

export {
  Semigroupoid
, compose
, composeFlipped
, infixr
}
