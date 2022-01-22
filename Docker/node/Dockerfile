FROM \
  localhost/mooxe/base:dev

WORKDIR \
  /root

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-fast install -y unzip

RUN \
  curl -o- https://fnm.vercel.app/install | bash

RUN \
  export PATH=$HOME/.fnm:$PATH && \
  fnm install 17 && \
  fnm install 16 && \
  fnm alias 16 default

RUN \
  echo "export PATH=\$HOME/.fnm:\$PATH\neval \"\`fnm env\`\"" >> $HOME/.zshrc && echo "export PATH=\$HOME/.fnm:\$PATH\neval (fnm env)" >> $HOME/.config/fish/config.fish

RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    npm i -g npm \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    npm i -g pnpm \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm add -g pnpm \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g nnrm \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g npm yarn \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g node-gyp \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g pnpm npm-check \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g supervisor nodemon forever pm2 \
  '


RUN \
  bash -lc ' \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g serve http-server \
  '


RUN \
  echo "unsafe-perm = true" >> ~/.npmrc