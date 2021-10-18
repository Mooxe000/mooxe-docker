FROM \
  mooxe/rescript

RUN \
  echo "export ZIG_HOME=\$HOME/.zig\nexport ZIG_SOURCE=\$ZIG_HOME/zig_linux\nexport PATH=\$ZIG_HOME/bin:\$PATH" >> $HOME/.bash_profile

RUN \
  bash -lc " \
  mkdir -p \$ZIG_SOURCE && \
  mkdir -p \$ZIG_HOME/bin && \
  mkdir -p \$ZIG_HOME/lib \
  "

RUN \
  aria2c -o .zig/zig_linux/zig_linux.tar.xz https://ziglang.org/builds/zig-linux-x86_64-0.9.0-dev.1414+cde3dd365.tar.xz

RUN \
  bash -lc " \
  cd \$ZIG_SOURCE && \
  tar xvf zig_linux.tar.xz \
  "

RUN \
  bash -lc " \
  ln -s \$ZIG_SOURCE/zig-linux-x86_64-0.9.0-dev.713+d5f173d28/zig \$ZIG_HOME/bin/zig && \
  ln -s \$ZIG_SOURCE/zig-linux-x86_64-0.9.0-dev.713+d5f173d28/lib \$ZIG_HOME/lib/ziglib \
  "

RUN \
  echo "export ZIG_HOME=\$HOME/.zig\nexport ZIG_SOURCE=\$ZIG_HOME/zig_linux\nexport PATH=\$ZIG_HOME/bin:\$PATH" >> $HOME/.zshrc && \
  echo "export ZIG_HOME=\$HOME/.zig\nexport ZIG_SOURCE=\$ZIG_HOME/zig_linux\nexport PATH=\$ZIG_HOME/bin:\$PATH" >> .config/fish/config.fish