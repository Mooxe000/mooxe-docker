# Tasks For Mooxe Docker

## hello

```sh
echo Hello World!!!
```

## start-registry2

```sh
podman run -d --rm \
  --name registry2 \
  -p 5000:5000 \
  -v .docker-registry-config.yml:/root/config.yml \
    registry:2 \
      registry serve /root/config.yml
```

## stop-registry2

```sh
podman rm -f registry2
```

## logs-registry2

```sh
podman logs -f registry2
```

## before-build (registry_ip)

```bash
# export registry_ip=localhost:5000
# mask before-build $registry_ip
sed "s/localhost/$registry_ip/g" ./src/Earthfile.sample > ./src/Earthfile
```

## registry-config

```bash
echo "registry_ip = $registry_ip"

echo "
unqualified-search-registries = ['docker.io']

[[registry]]
location = \"$registry_ip:5000\"
insecure = true

[[registry]]
location = \"localhost:5000\"
insecure = true
" > ~/.config/containers/registries.conf

bat ~/.config/containers/registries.conf

echo "
global:
  container_frontend: podman-shell
  buildkit_additional_config: |
    [registry.\"$registry_ip:5000\"]
      http = true
      insecure = true
    [registry.\"localhost:5000\"]
      http = true
      insecure = true
" > ~/.earthly/config.yml

bat ~/.earthly/config.yml
```

## after-build

```bash
rm ./src/Earthfile
```

## build-wrapper (task_name) (registry_ip)

```bash
mask before-build $registry_ip

echo registry_ip = $registry_ip
earthly ./src+$task_name-image

podman tag $registry_ip:5000/mooxe/$task_name localhost:5000/mooxe/$task_name
podman tag $registry_ip:5000/mooxe/$task_name mooxe/$task_name
podman tag $registry_ip:5000/mooxe/$task_name docker.io/mooxe/$task_name

mask after-build
```

## build-base (registry_ip)

```bash
mask build-wrapper base $registry_ip
```

## build-dev (registry_ip)

```sh
mask build-wrapper dev $registry_ip
```

## build-go (registry_ip)

```sh
mask build-wrapper go $registry_ip
```

## build-node (registry_ip)

```sh
mask build-wrapper node $registry_ip
```

## build-wasm (registry_ip)

```sh
mask build-wrapper wasm $registry_ip
```

## build-ocaml (registry_ip)

```sh
mask build-wrapper ocaml $registry_ip
```

## build-sdkman (registry_ip)

```sh
mask build-wrapper sdkman $registry_ip
```

## build-mvgscolmap (registry_ip)

```sh
mask build-wrapper mvgscolmap $registry_ip
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
  -v $(pwd):/root/golang \
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
  --name sdkman \
  -p 8080:8080 \
  -p 9000:9000 \
  -v $(pwd):/root/sdkman \
  mooxe/sdkman \
  /bin/bash
```

## run-mvgscolmap

```sh
podman run --rm -ti \
  --name mvgscolmap \
  -v $(pwd):/root/mvgscolmap \
  mooxe/mvgscolmap \
  /bin/bash
```
