fn problem2(len: u32) -> u64 {

  let mut vec: Vec<u64> = vec![]
; let mut vec_sum: Vec<u64> = vec![]
; let mut num1: u64 = 0
; let mut num2: u64 = 1
; let mut val_sum = 0u64

; for _ in 0..len {
    let len = vec.len()
  ; if len == 1 {
      num1 = vec[0]
    ;
    } else if len >=2 {
      num2 = vec[len-2]
    ; num1 = vec[len-1]
    ;
    }
  ; val_sum = num1 + num2
  ; if val_sum % 2 == 0 {
        vec_sum.push(val_sum);
    }
  ; vec.push(val_sum)
  ;
  }
  vec_sum.iter().sum()
}

fn main() {
 
}
