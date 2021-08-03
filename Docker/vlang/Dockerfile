FROM \
  mooxe/rescript

RUN \
  apt-fast install -y gcc tcc clang make

RUN \
  echo "export V_HOME=\$HOME/.v\nexport V_SOURCE=\$V_HOME/v_linux\nexport PATH=\$V_HOME/bin:\$PATH" >> $HOME/.bash_profile

RUN \
  bash -lc " \
  mkdir -p \$V_SOURCE && \
  mkdir -p \$V_HOME/bin && \
  mkdir -p \$V_HOME/lib \
  "

RUN \
  aria2c -o .v/v_linux/v_linux.zip https://github.com/vlang/v/releases/latest/download/v_linux.zip

RUN \
  bash -lc " \
  cd \$V_SOURCE && \
  unzip v_linux.zip && \
  cd v && make \
  "

RUN \
  bash -lc " \
  ln -s \$V_SOURCE/v/v \$V_HOME/bin/v && \
  ln -s \$V_SOURCE/v/vlib \$V_HOME/lib/vlib \
  "

RUN \
  echo "export V_HOME=\$HOME/.v\nexport V_SOURCE=\$V_HOME/v_linux\nexport PATH=\$V_HOME/bin:\$PATH" >> $HOME/.zshrc && \
  echo "export V_HOME=\$HOME/.v\nexport V_SOURCE=\$V_HOME/v_linux\nexport PATH=\$V_HOME/bin:\$PATH" >> .config/fish/config.fish