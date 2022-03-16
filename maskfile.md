# Tasks For Mooxe Docker

## hello

```sh
echo Hello World!!!
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
  mooxe/dev \
  /bin/bash
```

## run-node

```sh
podman run --rm -ti \
  --name node \
  -v $(pwd):/root/node \
  mooxe/node \
  /bin/bash
```
