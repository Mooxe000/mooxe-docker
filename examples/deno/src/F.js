// Just Maybe Either

const match = matchObj => s =>
    matchObj.hasOwnProperty(s)
  ? matchObj[s]()
  : matchObj.hasOwnProperty('other')
  ? matchObj.other()
  : 'Either'

// fn
const curry2 = f => (...args) =>

  match({
    '1': () => b => f(args[0], b)
  , '2': () => f(args[0], args[1]) // f.apply(null, args)
  , other: () => 'Either'
  })(`${args.length}`)

const F = (() => {

  const _F = fn => (...args) => {

    const fns = arr => {
      return arr.reverse()
      .reduce(
        (r, c) =>
            r === null
          ? c
          : fn(c, r)
      , null
      )
    }

    return match({
      '1': () => fn(args[0])
    , '2': () => fn(args[0], args[1]) // fn.apply(null, args)
    , other: () => fns(args)
    })(`${args.length}`)

  }

  return {

    '$':  _F(
            curry2(
              (a, b) =>
                  typeof a === 'function'
                ? a(b)
                : typeof b === 'function'
                ? b(a)
                : 'Either'
            )
          )

  , '.':  _F(
            curry2(
              (fa, fb) => x => fa( fb( x ))
            )
          )

  }
})()

const map = (b, a) =>
  a.map(
    t =>
        typeof b === 'function'
      ? b(t)
      : typeof t === 'function' 
      ? t(b)
      : 'Either'  
  )

export {
  match
, map
, curry2
, F
}
