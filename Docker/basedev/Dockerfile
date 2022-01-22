FROM \
  localhost/mooxe/base:prd

RUN \
  apt-get update && \
  apt-get -y upgrade

ARG \
  DEBIAN_FRONTEND=noninteractive

ENV \
  TZ=Asia/Shanghai

RUN \
  apt-get install -y software-properties-common

RUN \
  yes '' | add-apt-repository ppa:git-core/ppa && \
  yes '' | apt-add-repository ppa:fish-shell/release-3 && \
  yes '' | apt-add-repository ppa:apt-fast/stable

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-get install -y aria2 wget apt-fast

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-fast install -y git

RUN \
  apt-fast install -y neovim axel

RUN \
  apt-fast install -y zsh fish

RUN \
  git clone --depth=1 https://github.com/Bash-it/bash-it.git \
    ~/.bash_it && \
  yes | bash -lc "~/.bash_it/install.sh"

RUN \
  git clone --depth=1 https://github.com/robbyrussell/oh-my-zsh.git \
    ~/.oh-my-zsh && \
  cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

RUN \
  curl -L https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install > install && \
  fish install --noninteractive --path=~/.local/share/omf --config=~/.config/omf && \
  rm -rf install

RUN \
  fish -lc "omf install robbyrussell"

RUN \
  echo "set fish_greeting ''\nset -gx LC_ALL en_US.UTF-8\nset -gx LC_CTYPE en_US.UTF-8" > ~/.config/fish/config.fish

RUN \
  apt-get autoremove -y && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*