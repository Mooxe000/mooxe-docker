import { match } from './F.js'

const Where =
  new Map()
  .set(
    JSON.stringify([
      'fmap'
    ])
  , 'Functor'
  )
  .set(
    JSON.stringify([
      'pure'
    , 'fmap' // <*>
    ])
  , 'Applicative'
  )
  .set(
    JSON.stringify([
      'return'
    , 'pipe' // >>=
    , 'apply' // <=<
    , 'then' // >>
    , 'fail'
    ])
  , 'Monad'
  )
  .set(
    JSON.stringify([
      'mempty'
    , 'mappend'
    , 'mconcat'
    ])
  , 'Monid'
  )

const Instance = (I = {}) => {

  const i = I

  return new Proxy(
    () => {}
  , {

      get: (t, k) =>
        match({

          where: () => instance => {

            const instanceKeys = Object.keys(
                typeof instance === 'function'
              ? instance(i)
              : instance
            )

            const instanceType = Where.get(
              JSON.stringify(instanceKeys)
            )

            instanceKeys
            .forEach(
              k => {
                  !i[instanceType]
                ? i[instanceType] = {}
                : undefined

                i[instanceType][k] =
                    typeof instance === 'function'
                  ? instance(i)[k]
                  : instance[k]
              }
            )

            return Instance(i)

          }

        , F: () => i

        , other: () => Instance(i)

        })(k)

    , apply: (t, b, pa) => {
        return i.Applicative.pure
      }

    }
  )
}

export default Instance
