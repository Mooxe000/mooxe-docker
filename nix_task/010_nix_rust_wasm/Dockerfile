FROM mooxe/nix_rust

ADD resource /root/build

RUN set -eux \
; ln -s /root/build/.taskfilehub /root/.taskfilehub

RUN set -eux \
; cd /root/build \
; task install-wasm \
; task install-wapm

RUN set -eux \
; rm -rf /root/build \
; rm -rf /root/.taskfilehub
