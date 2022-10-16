FROM mooxe/nix_dev

ADD resource /root/build

RUN set -eux \
; cd /root/build \
; task install-rust \
; task install-cargo-update

RUN set -eux \
; rm -rf /root/build
