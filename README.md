# Mooxe Docker

### Prepare

#### Deno

You can install the newest version in your system

```bash
>> # curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.12.2
>> curl -fsSL https://deno.land/x/dvm/install.sh | sh
>> tail -n 4 $HOME/.bash_profile >> $HOME/.zshrc
>> tail -n 4 $HOME/.bash_profile >> $HOME/.config/fish/config.fish
>> dvm ls-remote
>> dvm install 1.12.2
```

#### Deno:vr

```bash
deno install -qAn vr https://deno.land/x/velociraptor@1.0.2/cli.ts
```

#### Deno:dzx

```bash
deno install --allow-all -r -f --unstable https://deno.land/x/dzx@0.2.3/dzx.ts
```

### Usage

#### docker:build

build mooxe-docker images one by one

```bash
>> vr build:basePrd
>> vr build:baseDev
>> vr build:node
>> vr build:deno

>> vr build:rescript
>> vr build:purescript

>> vr build:v
>> vr build:rust
```

#### docker:check

run in docker with mooxe/deno image

```bash
vr docker
```
