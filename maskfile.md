# Tasks For Mooxe Docker

## hello

```sh
echo Hello World!!!
```

## build-base

```sh
earthly ./src+base-image
```

## build-dev

```sh
earthly ./src+dev-image
```

## build-go

```sh
earthly ./src+go-image
```

## build-node

```sh
earthly ./src+node-image
```

## build-wasm

```sh
earthly ./src+wasm-image
```

## build-ocaml

```sh
earthly ./src+ocaml-image
```

## build-sdkman

```sh
earthly ./src+sdkman-image
```

## run-base

```sh
podman run --rm -ti \
  --name base \
  -v $(pwd):/root/base \
  mooxe/base \
  /bin/bash
```

## run-dev

```sh
podman run --rm -ti \
  --name dev \
  -v $(pwd):/root/dev \
  -v /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe \
  mooxe/dev \
  /bin/bash
```

## run-go

```sh
podman run --rm -ti \
  --name go \
  -v $(pwd):/root/go \
  -v /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe \
  mooxe/go \
  /bin/bash
```

## run-node

```sh
podman run --rm -ti \
  --name node \
  -p 3000:3000 \
  -p 8080:8080 \
  -p 9000:9000 \
  -v /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe \
  -v $(pwd):/root/node \
  mooxe/node \
  /bin/bash
```

## run-wasm

```sh
podman run --rm -ti \
  --name wasm \
  -v $(pwd):/root/wasm \
  mooxe/wasm \
  /bin/bash
```

## run-ocaml

```sh
podman run --rm -ti \
  --name ocaml \
  -v $(pwd):/root/ocaml \
  mooxe/ocaml \
  /bin/bash
```

## run-sdkman

```sh
podman run --rm -ti \
  --name dev \
  -p 8080:8080 \
  -p 9000:9000 \
  -v $(pwd):/root/dev \
  mooxe/sdkman \
  /bin/bash
```
