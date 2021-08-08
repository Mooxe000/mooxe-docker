const Where =
  new Map()
  .set(
    [ 'fmap' ]
  , 'Functor'
  )
  .set(
    [
      'pure'
    , 'fmap' // <*>
    ]
  , 'Applicative'
  )
  .set(
    [
      'mempty'
    , 'mappend'
    , 'mconcat'
    ]
  , 'Monid'
  )
  .set(
    [
      'return'
    , 'apply' // >>=
    , 'bind'  // >>
    , 'fail'
    ]
  , 'Monad'
  )

const Instance = (T) => {

  const t = T

  return new Proxy(
    () => {}
  , {
      get: (t, k) =>
        match({
          where: () => instance => {

            const instanceType = Where.get(Object.keys(instance))

            t[instanceType] = match({
              Functor: () => instance
            , Applicative: () => instance(t.Functor)
            , Monid: () => instance
            , Monad: () => instance
            , other: () => Nothing
            })(instanceType)

            return Instance(t)

          }
        , other: () => Instance(t)
        })(k)
    , apply: (t, b, pa) => Applicative.pure
    }
  )
}
