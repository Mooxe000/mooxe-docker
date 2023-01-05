FROM mooxe/apt_base

WORKDIR /root

ADD resource /root/build

RUN set -eux \
; ln -s /root/build/taskfilehub /root/.taskfilehub

ENV PUB_HOSTED_URL https://pub.flutter-io.cn
ENV FLUTTER_STORAGE_BASE_URL https://storage.flutter-io.cn
ENV TAR_OPTIONS=--no-same-owner
ENV FLUTTER_GIT_URL https://ghproxy.com/github.com/flutter/flutter.git
ENV REPO_OS_OVERRIDE linux
ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64
ENV ANDROID_SDK_ROOT $HOME/.sdk_root

RUN set -eux \
; cd /root/build \
; task install-all

RUN set -eux \
; rm -rf /root/build \
; rm -rf /root/.taskfilehub
