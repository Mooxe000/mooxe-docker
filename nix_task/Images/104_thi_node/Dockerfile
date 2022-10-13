FROM ubuntu:22.04

ADD resource/task /usr/local/bin

WORKDIR /root

RUN set -eux \
; mkdir -p ./build/tasklib

ADD resource/Taskfile.yml /root/build
ADD resource/tasklib /root/build/tasklib

RUN set -eux \
; cd /root/build \
; task install-base

RUN set -eux \
; cd /root/build \
; task install-all

RUN set -eux \
; cd /root/build \
; task status

RUN set -eux \
; rm -rf /root/build
