FROM \
  mooxe/rescript

RUN \
  apt-fast install -y g++

RUN \
  curl -O https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup/archive/1.24.3/x86_64-unknown-linux-gnu/rustup-init && \
  chmod +x rustup-init &&  \
  RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup echo 1 | $HOME/rustup-init && \
  rm rustup-init

RUN \
  sed -i '$d' $HOME/.bash_profile && \
  cp $HOME/.bash_profile $HOME/.bash_profile.bk

RUN \
  echo "export PATH=\$HOME/.cargo/bin:\$PATH\nexport RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup" >> $HOME/.bashrc && echo "export PATH=\$HOME/.cargo/bin:\$PATH\nexport RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup" >> $HOME/.zshrc && echo "export PATH=\$HOME/.cargo/bin:\$PATH\nexport RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup" >> $HOME/.config/fish/config.fish

RUN \
  echo "[source.crates-io]\nreplace-with = 'tuna'\n\n[source.tuna]\nregistry = \"https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git\"" > $HOME/.cargo/config

RUN \
  $HOME/.cargo/bin/rustup toolchain install nightly && \
  $HOME/.cargo/bin/rustup run nightly rustc --version && \
  $HOME/.cargo/bin/rustup default nightly

RUN \
  mkdir -p ~/.local/share/bash-completion/completions && \
  $HOME/.cargo/bin/rustup completions bash > ~/.local/share/bash-completion/completions/rustup && \
  mkdir -p ~/.zfunc && \
  $HOME/.cargo/bin/rustup completions zsh > ~/.zfunc/_rustup && \
  mkdir -p ~/.config/fish/completions && \
  $HOME/.cargo/bin/rustup completions fish > ~/.config/fish/completions/rustup.fish

RUN \
  $HOME/.cargo/bin/cargo install dprint && \
  $HOME/.cargo/bin/cargo install rslint_cli

RUN \
  $HOME/.cargo/bin/cargo install cargo-script runner && \
  $HOME/.cargo/bin/cargo install --git https://github.com/faern/rustscript

RUN \
  mv $HOME/.bash_profile.bk $HOME/.bash_profile