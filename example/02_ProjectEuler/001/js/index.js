const ret = new Array(1000)
.fill(0)
.reduce(
  (r, c, i) =>
    r + (
        (i + i) % 3 === 0
    ||  (i + i) % 5 === 0
    ?   i + 1
    :   0
    )
, 0
)

console.log(ret)
