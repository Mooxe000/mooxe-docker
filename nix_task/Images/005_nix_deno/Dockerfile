FROM mooxe/nix_dev

ADD resource /root/build

RUN set -eux \
; cd /root/build \
; task install-deno

RUN set -eux \
; rm -rf /root/build
