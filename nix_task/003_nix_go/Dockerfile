FROM mooxe/nix_dev

ADD resource /root/build

RUN set -eux \
; ln -s /root/build/.taskfilehub /root/.taskfilehub

RUN set -eux \
; cd /root/build \
; task install-go

RUN set -eux \
; rm -rf /root/build \
; rm -rf /root/.taskfilehub
