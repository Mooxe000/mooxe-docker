## hello

```sh
echo 'Hello World!!!'
```

## clean

```sh
rm -rf ./pkg ./target ./Cargo.lock
```

## build

```sh
set -eux
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --out-dir pkg --target deno \
  ./target/wasm32-unknown-unknown/release/deno.wasm
```

## test-run

```sh
deno run --allow-read ./test.js
```
