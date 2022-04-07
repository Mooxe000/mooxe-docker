fn main() {
  let res = (0..1000).fold(0, | a, x | {
    let _x = x + 1;
    if x % 5 == 0 || x % 3 == 0 {
      return a + x + 1
    }
  a
  });
  println!("{}", res);
}
