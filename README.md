# Mooxe docker images

### Prepare

use [Earthly](https://earthly.dev/) to build docker images

- mooxe/base(rust + deno)
- mooxe/dev(shell)
- mooxe/node

### Usage

#### docker:pull

pull mooxe-docker images from docker.io

```bash
>> docker/podman pull mooxe/base
>> docker/podman pull mooxe/dev
>> docker/podman pull mooxe/node
```

#### TODO

- golang

- rescript
- purescript
- nim

- vlang
- zig

#### docker:build

build mooxe-docker images used by earthly

```bash
>> earthly ./src/+base-image
>> earthly ./src/+dev-image
>> earthly ./src/+node-image
```

#### docker:check

You can use podman to run these images under group mooxe,

or you can replace podman from docker.

```bash
>> podman run --rm -ti --name mooxe mooxe/base
>> podman run --rm -ti --name mooxe mooxe/dev
>> podman run --rm -ti --name mooxe mooxe/node
```

### Earthly

- Earthly

```bash
>> yay -S earthly
>> earthly config global.container_frontend podman-shell
>> cat ~/.earthly/config.yml
>> podman pull earthly/buildkitd
>> podman pull earthly/buildkitd:0.6.9
```

- Debian slim microdeb/bullseye
  - https://github.com/marketplace
    ```bash
    >> podman pull microdeb/bullseye
    ```

- alpine-glibc
  - alpine 3.15
    ```bash
    >> podman pull alpine:3.15
    ```
  - https://github.com/Docker-Hub-frolvlad/docker-alpine-glibc/blob/master/Dockerfile
  - https://hub.docker.com/r/frolvlad/alpine-glibc

- rust
  - https://github.com/rust-lang/docker-rust/blob/master/1.59.0/alpine3.15/Dockerfile

- deno
  - https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile

- CN Mirror
  - https://mirror.tuna.tsinghua.edu.cn/help/alpine/

### Wasm

- https://github.com/rustwasm
  - https://github.com/rustwasm/wasm-bindgen
  - https://github.com/rustwasm/wasm-pack
- https://github.com/bytecodealliance
  - https://github.com/bytecodealliance/wasmtime
  - https://github.com/bytecodealliance/cargo-wasi
- https://github.com/second-state
  - https://github.com/wasmerio/wasmer/
  - https://github.com/second-state/rustwasmc

### Rust Book

- Rust 语言圣经 (Rust Course)
  - https://course.rs/about-book.html
- Cargo 中文文档
  - https://cargo.budshome.com/index.html
- Rust Cookbook 中文版
  - https://rust-cookbook.budshome.com/intro.html
- The Cargo Book
  - https://doc.rust-lang.org/cargo/index.html
- Rust Algorithm Club
  - https://rust-algo.club/concepts/asymptotic-notation/
- Rust 宏小册 中文版
  - https://www.bookstack.cn/read/DaseinPhaos-tlborm-chinese/README.md
- Learning Rust With Entirely Too Many Linked Lists
  - https://rust-unofficial.github.io/too-many-lists/
