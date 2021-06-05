# Mooxe Docker

### Prepare

#### Deno

Make sure your deno's version ```>= 1.10.3```

You can install the newest version in your system

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

#### Deno:vr

```bash
deno install -qAn vr https://deno.land/x/velociraptor@1.0.0/cli.ts
```

### Usage

#### docker:build

build mooxe-docker images one by one

```bash
vr build:basePrd
vr build:baseDev
vr build:node
vr build:deno
```

#### docker:check

run in docker with mooxe/deno image

```bash
vr docker
```
