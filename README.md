# Mooxe Docker

### Prepare

#### Deno

You can install the newest version in your system

```bash
>> # curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.13.1
>> curl -fsSL https://deno.land/x/dvm/install.sh | sh
>> tail -n 4 $HOME/.bash_profile >> $HOME/.zshrc
>> tail -n 4 $HOME/.bash_profile >> $HOME/.config/fish/config.fish
>> dvm ls-remote
>> dvm install 1.13.1
```

#### Deno:vr

```bash
>> deno install -qAn vr https://deno.land/x/velociraptor@1.1.0/cli.ts
```

#### Deno:dzx

```bash
>> deno install --allow-all --unstable -f https://deno.land/x/dzx@0.2.4/dzx.ts
```

### Usage

#### docker:pull

pull mooxe-docker images from docker.io

```bash
>> docker/podman pull mooxe/base:prd
>> docker/podman pull mooxe/base:dev
>> docker/podman pull mooxe/node
>> docker/podman pull mooxe/deno

>> docker/podman pull mooxe/rescript
>> docker/podman pull mooxe/purescript
>> docker/podman pull mooxe/nim

>> docker/podman pull mooxe/vlang
>> docker/podman pull mooxe/zig
>> docker/podman pull mooxe/rust
```

#### docker:build

build mooxe-docker images one by one

```bash
>> vr build:basePrd
>> vr build:baseDev
>> vr build:node
>> vr build:deno

>> vr build:rescript
>> vr build:purescript
>> vr build:nim

>> vr build:vlang
>> vr build:zig
>> vr build:rust
```

#### docker:check

run in docker with mooxe/deno image

```bash
vr docker
```
