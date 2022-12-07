# Dev-Containers

Dev-Containers 是一个跨平台、开箱即用、支持多钟编程语言的编程学习和开发环境的容器镜像群

### 特点

- 支持主流桌面(Windows+WSL/Linux/MacOS)
- 基于 NixOS，使用 taskfile + dockerfile 构建
- 内置 taskfile 支持
- 支持大多数主流编程语言及相关生态
- 无需做特殊的网络处理
- 编程语言及生态保持尽可能的使用更新的稳定版本
- 可以链接主流 IDE 镜像（如：vscode 容器版），实现云编码

### 镜像群

#### DONE 已完工镜像群及依赖关系

- nix:2.12.0pre20221202_b4b1338
  - mooxe/nix_base
    - mooxe/nix_dev

      - mooxe/nix_go
      - mooxe/nix_g_go
      - mooxe/nix_deno
        - mooxe/nix_deno_node_bun
      - mooxe/nix_dvm_deno
        - mooxe/nix_dvm_fnm_bun
      - mooxe/nix_rust
        - mooxe/nix_rust_wasm
      - mooxe/nix_ocaml

      - mooxe/nix_sdkman # JAVA - GraalVM JDK
        - mooxe/nix_maven_gradle
          - mooxe/nix_kotlin
          - mooxe/nix_sbt_scala
      - mooxe/nix_cs_sbt_scala

#### TODO 待制作镜像群

      - mooxe/Clojure

      - mooxe/haskell
      - mooxe/rescript
      - mooxe/purescript
      - mooxe/newlisp

      - mooxe/nim
      - mooxe/zig
      - mooxe/vlang

      - mooxe/dart
      - mooxe/flutter

      - mooxe/python
      - mooxe/ruby
      - mooxe/perl

## Usage 使用方式

#### container:pull 拉取镜像

pull mooxe-docker images from docker.io

```bash
>> docker/podman pull mooxe/nix_dev
```

#### container:run 运行容器

-----------------------------------

## Legacy

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
