const fibArrSnip = (fibArr2, times, stopFn, reduceFn, reduceValue) => {

  const ret = [ fibArr2[1], fibArr2[0] + fibArr2[1] ]
  const stopCheck = stopFn(ret, times + 1)
  const r_reduceValue = reduceFn(ret, reduceValue)

  return stopCheck
  ? {
      stopValue: ret
    , reduceValue: r_reduceValue
    }
  : fibArrSnip(ret, times + 1, stopFn, reduceFn, r_reduceValue)
}

const ret =
  fibArrSnip(
    [1, 2]
  , 1
  , (_ret, times) =>
        // (times + 1) >= 10
        _ret[1] >= 4000000
      ? true
      : false
  , (_ret, reduceValue) =>
      _ret[1] % 2 === 0
      ? [
          ...reduceValue
        , _ret[1] 
        ]
      : reduceValue
  , [2]
  )
  .reduceValue
  .reduce(
    (r, c) => r + c
  , 0
  )

console.log(ret)
