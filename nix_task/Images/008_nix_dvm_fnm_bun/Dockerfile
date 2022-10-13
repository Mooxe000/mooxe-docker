FROM mooxe/nix_dvm_deno

ADD resource /root/build

RUN set -eux \
; cd /root/build \
; task

RUN set -eux \
; rm -rf /root/build
