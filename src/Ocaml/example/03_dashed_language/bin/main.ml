(* open Base
open Stdio *)

let languages = "Ocaml, Haskell, Purescript, Rust"

(* let dashed_language =
  let language_list = String.split_on_char ',' languages in
  let trim_list = List.map (fun x -> String.trim x) language_list in
  String.concat "-" trim_list *)

(* let ( |> ) x f = f x *)

let dashed_language = languages
  |> String.split_on_char ','
  |> List.map (fun x -> String.trim x)
  |> String.concat "-"

let () =
  print_string dashed_language
