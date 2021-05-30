[ [32m"docker.io/library/ubuntu"[39m ]
[ [32m"root"[39m ]
[ [32m"SOURCES_FILE=/etc/apt/sources.list"[39m ]
[ [32m"SYSMIRROR=mirrors.aliyun.com"[39m ]
[
  [32m'\n    sed -i\n      -e "s/archive.ubuntu.com/${SYSMIRROR}/g"\n      -e "s/security.ubuntu.com/${SYSMIRR...'[39m
]
[ [32m"locale-gin en_US.UTF-8"[39m ]
[ [32m"\n    apt-get update &&\n    apt-get -y upgrade\n  "[39m ]
[
  [32m"\n    apt-get autoremove -y &&\n    apt-get clean &&\n    rm -rf /var/lib/apt/lists/*\n  "[39m
]
FROM docker.io/library/ubuntu
WORKDIR root
ENV SOURCES_FILE=/etc/apt/sources.list
ENV SYSMIRROR=mirrors.aliyun.com
RUN 
    sed -i
      -e "s/archive.ubuntu.com/${SYSMIRROR}/g"
      -e "s/security.ubuntu.com/${SYSMIRROR}/g"
      ${SOURCES_FILE}
  
RUN locale-gin en_US.UTF-8
RUN 
    apt-get update &&
    apt-get -y upgrade
  
RUN 
    apt-get autoremove -y &&
    apt-get clean &&
    rm -rf /var/lib/apt/lists/*
  
