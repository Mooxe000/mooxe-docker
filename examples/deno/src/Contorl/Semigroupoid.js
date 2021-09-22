import {
  klass
, infixr
, curry
} from '../Utils/index.js'

const Semigroupoid = 
  klass([
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

infixr.config({
  '<<<': compose
, '>>>': composeFlipped
})
