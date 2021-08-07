import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts"

import {
  match
, F
, map
} from '../src/index.js'

Deno.test(
  "match"
, () => {

    const data = {
      a: () => 'Albert'
    , b: () => 'Broseph'
    , c: () => 'Cecil'
    , other: () => 'default'
    }

    const fn = match(data)

    assertEquals(fn('a'), data.a())
    assertEquals(fn('b'), data.b())
    assertEquals(fn('c'), data.c())
    assertEquals(fn('d'), data.other())

  }
)

Deno.test(
  "map #1"
, () => {
    const fns = [
      x => 4 + x
    , x => 10 * x
    , x => x ** 2
    , Math.sqrt
    ]
    assertEquals(
      map(
        F['$'](3)
      , fns
      )
    , fns.map(
        t => t(3)
      )
    )
  }
)

Deno.test(
  "map #2"
, () => {

    const na = [
      5 , -3, -6, 7
    , -3, 2, -19, 24
    ]

    assertEquals(
      map(
        F['.'](
          negate
        , Math.abs
        )
      , na
      )
    , na.map(
        t => negate(
          Math.abs(t)
        )
      )
    )

  }
)

const negate = n => ~n + 1
const cons = (start, end) =>
  new Array(end - start + 1)
  .fill(start)
  .map(
    (c, i) => c + i
  )
const tail = a => {
  const [
    _head
  , ..._tail
  ] = a
  return _tail
}

const sum = arr =>
  arr.reduce(
    (r, c) => r + c
  , 0
  )

Deno.test(
  "map #3"
, () => {
    assertEquals(
      map(
        F['.'](
          negate
        , sum
        , tail
        )
      , [
          cons(1, 5)
        , cons(3, 6)
        , cons(1, 7)
        ]
      )
    , [-14,-15,-27]
    )
  }
)
