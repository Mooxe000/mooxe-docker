FROM ubuntu:22.04

WORKDIR /root

ENV PATH $PATH:/usr/local/bin

ADD resource /root/build

RUN set -eux \
; ln -s /root/build/taskfilehub /root/.taskfilehub

RUN set -eux \
; cd /root/build \
; chmod +x task \
; install -D task /usr/local/bin/task

RUN set -eux \
; cd /root/build \
; task install-all

RUN set -eux \
; rm -rf /root/build \
; rm -rf /root/.taskfilehub
