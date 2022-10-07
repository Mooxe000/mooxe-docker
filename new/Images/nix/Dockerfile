FROM localhost/nix:2.11.2

ADD resource/task /usr/local/bin/task

ENV PATH $PATH:/usr/local/bin

RUN set -eux \
; chmod +x /usr/local/bin/task

WORKDIR /root

RUN set -eux \
; mkdir -p ./build/tasklib

ADD resource/Taskfile.yml /root/build
ADD resource/tasklib /root/build/tasklib

RUN set -eux \
; cd /root/build \
; task nix-init-all

RUN set -eux \
; rm -rf /root/build

# RUN set -eux \
# ; nix-env -i \
#     bash neovim \
#     fish ncurses
