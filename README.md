# Mooxe docker images

### Images

- mooxe/nix_base
- mooxe/nix_dev

- mooxe/nix_go
- mooxe/nix_g_go
- mooxe/nix_deno
- mooxe/nix_dvm_deno
- mooxe/nix_deno_node_bun
- mooxe/nix_dvm_fnm_bun
- mooxe/nix_rust
- mooxe/nix_rust_wasm
- mooxe/nix_ocaml

- mooxe/nix_sdkman
- mooxe/nix_maven_gradle
- mooxe/nix_kotlin
- mooxe/nix_sbt_scala

### Usage

#### docker:pull

pull mooxe-docker images from docker.io

```bash
>> docker/podman pull mooxe/nix_dev
```

#### TODO build Images

- clojure
- dart
- flutter

- haskell
- rescript
- purescript

- newlisp

- nim
- vlang
- zig

- python
- ruby
- perl

### Earthly

- Earthly

```bash
>> yay -S earthly
>> earthly config global.container_frontend podman-shell
>> cat ~/.earthly/config.yml
>> podman pull earthly/buildkitd
>> podman pull earthly/buildkitd:0.6.20
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
