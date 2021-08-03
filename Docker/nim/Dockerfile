FROM \
  mooxe/rescript

RUN \
  apt-fast install -y gcc make

RUN \
  git clone --depth 1 https://github.com/nim-lang/Nim.git && \
  mv Nim .nim && \
  cd .nim && \
  ./build_all.sh

RUN \
  echo "export NIM_HOME=\$HOME/.nim\nexport PATH=\$NIM_HOME/bin:\$PATH" >> $HOME/.bash_profile && \
  echo "export NIM_HOME=\$HOME/.nim\nexport PATH=\$NIM_HOME/bin:\$PATH" >> $HOME/.zshrc && \
  echo "export NIM_HOME=\$HOME/.nim\nexport PATH=\$NIM_HOME/bin:\$PATH" >> $HOME/.config/fish/config.fish