// Just Maybe Either

const match = matchObj => s => {

  const initV =
      matchObj.other
    && (
        matchObj.other !== undefined
    ||  matchObj.other !== null
    )
    ? matchObj.other 
    : null

  return Object.keys(matchObj)
  .reduce(
    (r, c) =>
      r !== initV
      ? r
      : c === s
      ? matchObj[c]
      : r
  , initV
  )

}

const a = match({
  a: 'Albert'
, b: 'Broseph'
, c: 'Cecil'
, other: 'default'
})

console.log(a('a'))
console.log(a('b'))
console.log(a('c'))
console.log(a('d'))

// const map = (f, a) => {
//   a.map(f)
// }

// // $
// const dl = (f, x) = f(x)

// // fn
// const curryFn = (f, []) =>
//   a => b => c => d => (a, b, c, d) => f(a, b, c, d)

// const fold = (f, a) => {

// }
