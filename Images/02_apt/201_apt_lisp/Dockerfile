FROM mooxe/apt_base

WORKDIR /root

ADD resource /root/build

RUN set -eux \
; ln -s /root/build/taskfilehub /root/.taskfilehub

RUN set -eux \
; cd /root/build \
; task install-all

RUN set -eux \
; rm -rf /root/build \
; rm -rf /root/.taskfilehub
