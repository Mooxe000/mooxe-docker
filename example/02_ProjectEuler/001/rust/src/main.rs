fn main() {
  let res = (0..1000).fold(
    0
  , | a, x | {
      let _x = x + 1
    ; if _x % 5 == 0 || _x % 3 == 0 {
        a + _x
      } else {
        a
      }
    }
  )
; println!("{}", res)
}
