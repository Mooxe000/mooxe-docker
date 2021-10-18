FROM \
  mooxe/winenwjs

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  set -ex; \
  mkdir -p $HOME/.WeChatDevTools; \
  axel -o $HOME/.WeChatDevTools/WeChatDevTools.7z       'https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1052107090&version_type=1';

RUN \
  apt-fast install -y p7zip-full

RUN \
  set -ex; \
  cd $HOME/.WeChatDevTools; \
  yes 'A' | 7z x ./WeChatDevTools.7z; \
  rm -rf ./WeChatDevTools.7z;

RUN \
  set -ex; \
  cd $HOME/.WeChatDevTools; \
  mv \?\?\?\?\?\?\?.exe 微信小程序开发工具.exe;

RUN \
  apt-fast install -y  liblcm1