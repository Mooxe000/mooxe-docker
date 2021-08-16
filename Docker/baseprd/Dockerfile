FROM \
  docker.io/ubuntu:21.04

ENV \
  SOURCES_FILE=/etc/apt/sources.list

ENV \
  SYSMIRROR=mirrors.aliyun.com

RUN \
  sed -i \
    -e "s/archive.ubuntu.com/${SYSMIRROR}/g" \
    -e "s/security.ubuntu.com/${SYSMIRROR}/g" \
    ${SOURCES_FILE}

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-get install -y curl apt-utils locales

RUN \
  locale-gen en_US.UTF-8

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-get autoremove -y && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*