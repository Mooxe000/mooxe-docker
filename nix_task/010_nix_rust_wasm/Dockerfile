FROM mooxe/nix_rust

ADD resource /root/build

RUN set -eux \
; cd /root/build \
; task install-wasm \
; task install-wapm

RUN set -eux \
; rm -rf /root/build
