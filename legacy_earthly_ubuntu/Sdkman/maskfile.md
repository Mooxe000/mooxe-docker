# SDKMAN

## zip

```bash
apt install -y zip
```

## sdkman

```bash
curl -s "https://get.sdkman.io" | bash

echo 'source "$HOME/.sdkman/bin/sdkman-init.sh"' >> $HOME/.profile
echo '
function sdk
  bash -lc "source '$HOME/.sdkman/bin/sdkman-init.sh' && sdk $argv"
end' >> $HOME/.config/fish/config.fish
```

## java

```bash
source $HOME/.profile
sdk selfupdate force
sdk env init
sdk install java 22.1.0.r17-grl
sdk install kotlin 1.6.21
sdk install springboot 2.7.0
sdk install quarkus 2.9.2.Final
sdk install maven 3.8.5
```

## native

```bash
gu install native-image
```

## native-build

```bash
apt install -y zlib1g-dev
quarkus build --native
```
