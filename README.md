# Mooxe docker images

### Prepare

use [Earthly](https://earthly.dev/) to build docker images

- mooxe/base(rust + deno)
- mooxe/dev(shell)
- mooxe/node
- mooxe/wasm
- mooxe/ocaml
- mooxe/sdkman

### Usage

#### docker:pull

pull mooxe-docker images from docker.io

```bash
>> docker/podman pull mooxe/base
>> docker/podman pull mooxe/dev
>> docker/podman pull mooxe/node
>> docker/podman pull mooxe/wasm
>> docker/podman pull mooxe/ocaml
>> docker/podman pull mooxe/sdkman
```

#### TODO

- images
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
>> earthly ./src/+wasm-image
>> earthly ./src/+ocaml-image
>> earthly ./src/+sdkman-image
```

#### docker:check

You can use podman to run these images under group mooxe,

or you can replace podman from docker.

```bash
>> podman run --rm -ti --name mooxe mooxe/base
>> podman run --rm -ti --name mooxe mooxe/dev
>> podman run --rm -ti --name mooxe mooxe/node
>> podman run --rm -ti --name mooxe mooxe/wasm
>> podman run --rm -ti --name mooxe mooxe/ocaml
>> podman run --rm -ti --name mooxe mooxe/sdkman
```

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
