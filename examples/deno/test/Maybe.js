import Maybe from "../src/Maybe.js"

const id = self => self
const { fmap } = Maybe.F.Functor

console.log(Maybe(3))

console.log(fmap(id, Maybe(3)))

console.log(id(Maybe(3)))

console.log(fmap(id)(Maybe(3)))

console.log(fmap((n => n + 3), Maybe(3)))

console.log(Maybe.F.Applicative.fmap( Maybe(n => n + 3), Maybe(3) ))

const F = {
  return: Maybe.F.Monad.return
, '>>=': Maybe.F.Monad.apply
, '>>': Maybe.F.Monad.bind
}

console.log(
  F.return("What")
)

console.log(
  F['>>='](Maybe(9), x => F.return(x * 10))
)

const Nothing = null

console.log(
  F['>>='](Nothing, x => F.return(x * 10))
)

console.log(
  F['>>'](x => F.return(x * 10), Maybe(9))
)
