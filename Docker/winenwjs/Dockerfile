FROM \
  localhost/mooxe/base:dev

WORKDIR \
  /root

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  set -ex; \
  axel https://dl.nwjs.io/v0.55.0/nwjs-sdk-v0.55.0-linux-x64.tar.gz;

RUN \
  set -ex; \
  tar xvf ./nwjs-sdk-v0.55.0-linux-x64.tar.gz; \
  mv ./nwjs-sdk-v0.55.0-linux-x64 ./.nwjs; \
  rm -rf ./nwjs-sdk-v0.55.0-linux-x64.tar.gz;

RUN \
  set -ex; \
  dpkg --add-architecture i386;

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-fast install -y wine wine32 winbind wine-binfmt nodejs npm dbus-x11 x11-apps libnss3 libatk1.0-0 libgbm1 libatspi2.0-0 libgtk-3-0 libcanberra-gtk3-module libupower-glib3

RUN \
  set -ex; \
  ln -s /usr/sbin/start-stop-daemon /usr/bin/start-stop-daemon;

RUN \
  echo "export NWJS_HOME=\$HOME/.nwjs\nexport PATH=\$NWJS_HOME:\$PATH" >> $HOME/.bash_profile && \
  echo "export NWJS_HOME=\$HOME/.nwjs\nexport PATH=\$NWJS_HOME:\$PATH" >> $HOME/.zshrc && \
  echo "export NWJS_HOME=\$HOME/.nwjs\nexport PATH=\$NWJS_HOME:\$PATH" >> $HOME/.config/fish/config.fish