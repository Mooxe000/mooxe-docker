FROM mooxe/base

# ARG USER_ID
# ARG GROUP_ID

# RUN set -eux \
# ; sed -i \
#     's/\(archive\|security\).ubuntu.com/mirrors.aliyun.com/g' \
#     /etc/apt/sources.list

# Initialize the environment
# RUN set -eux \
# ; apt-get update
RUN set -eux \
; apt install -y make cmake git vim build-essential

# Prepare and empty machine for building:
RUN set -eux \
; apt-get -y install \
		mercurial cmake \
		libpng-dev libjpeg-dev \
		libtiff-dev libglu1-mesa-dev

# Eigen
RUN set -eux \
; git clone https://gitlab.com/libeigen/eigen.git --branch 3.4
RUN set -eux \
; mkdir eigen_build
RUN set -eux \
; cd eigen_build \
;	cmake . ../eigen \
; make \
; make install \
; cd ..

# Boost
RUN set -eux \
; apt-get -y install \
		libboost-iostreams-dev libboost-program-options-dev \
		libboost-system-dev libboost-serialization-dev

# OpenCV
RUN set -eux \
; DEBIAN_FRONTEND=noninteractive \
		apt-get install -y libopencv-dev

# CGAL
RUN set -eux \
; apt-get -y install \
		libcgal-dev libcgal-qt5-dev

# VCGLib
RUN set -eux \
; git clone https://hub.fastgit.xyz/cdcseacave/VCG.git vcglib

# Build from stable openMVS release
RUN set -eux \
; git clone https://hub.fastgit.xyz/cdcseacave/openMVS.git \
		--branch master

# Uncomment below (and comment above) to use the latest commit from the develop branch
#RUN git clone https://github.com/cdcseacave/openMVS.git --branch develop

RUN set -eux \
; mkdir openMVS_build \
; cd openMVS_build \
; cmake . ../openMVS \
		-DCMAKE_BUILD_TYPE=Release \
		-DVCG_ROOT=../vcglib \
		-DOpenMVS_USE_CUDA=OFF

# Install OpenMVS library
RUN set -eux \
; cd openMVS_build \
; make -j4 \
; make install

# Set permissions such that the output files can be accessed by the current user (optional)
# RUN addgroup --gid $GROUP_ID user
# RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user
# USER user

# Add binaries to path
# ENV PATH /usr/local/bin/OpenMVS:$PATH
