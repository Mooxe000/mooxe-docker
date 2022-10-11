# Use Ubuntu 18.04 (will be supported until April 2023)
FROM ubuntu:18.04
# FROM mooxe/base

# Add openMVG binaries to path
# ENV PATH $PATH:/opt/openMVG_Build/install/bin

RUN set -eux \
; sed -i \
    's/\(archive\|security\).ubuntu.com/mirrors.aliyun.com/g' \
    /etc/apt/sources.list

# Get dependencies
RUN set -eux \
; apt-get update \
; apt-get install -y

# Get dependencies
RUN set -eux \
; apt-get install -y \
    cmake \
    build-essential \
    graphviz \
    git \
    coinor-libclp-dev \
    libceres-dev \
    libflann-dev \
    liblemon-dev \
    libjpeg-dev \
    libpng-dev \
    libtiff-dev \
    python-minimal
    # liblz4-dev
    # python-minimal
    # python3-minimal
    # python3-lz4
    # python3-lz4tools

RUN set -eux \
; apt-get autoremove -y \
; apt-get clean

# Clone the openvMVG repo
# ADD . /opt/openMVG
# RUN cd /opt/openMVG && git submodule update --init --recursive
RUN set -eux \
; cd /opt \
; git clone --recursive \
    https://hub.fastgit.xyz/openMVG/openMVG.git

# Build
RUN set -eux \
; mkdir /opt/openMVG_Build \
; cd /opt/openMVG_Build \
; cmake -llz4 -DCMAKE_BUILD_TYPE=RELEASE \
    -DCMAKE_INSTALL_PREFIX="/opt/openMVG_Build/install" \
    -DOpenMVG_BUILD_TESTS=ON \
    -DOpenMVG_BUILD_EXAMPLES=OFF \
    -DFLANN_INCLUDE_DIR_HINTS=/usr/include/flann \
    -DLEMON_INCLUDE_DIR_HINTS=/usr/include/lemon \
    -DCOINUTILS_INCLUDE_DIR_HINTS=/usr/include \
    -DCLP_INCLUDE_DIR_HINTS=/usr/include \
    -DOSI_INCLUDE_DIR_HINTS=/usr/include \
    ../openMVG/src \
; make -j 4

RUN set -eux \
; cd /opt/openMVG_Build \
; make test && make install
