## hello

```sh
echo Hello World!!!
```

## build

```sh
rustc hello.rs --target=wasm32-wasi
```

## run

```sh
wasmtime hello.wasm
```
