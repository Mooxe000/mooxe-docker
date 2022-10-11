FROM localhost/nix:2.11.2

WORKDIR /root

ENV PATH $PATH:/usr/local/bin

ADD resource /root/build

RUN set -eux \
; cd /root/build \
; chmod +x task \
; install -D task /usr/local/bin/task \
; task nix-init-all

RUN set -eux \
; rm -rf /usr/local/bin/task \
; rm -rf /root/build
