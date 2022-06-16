import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

// https://github.com/Mooxe000/mooxe-docker-rust

const dockerfile = () =>

  DockerFile()
  .from`mooxe/rescript`

  .run(
    snippets
    .install()
    `g++`
  )

  // bash -lc "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
  // curl https://sh.rustup.rs -sSf | sh -s
  // curl -O https://static.rust-lang.org/rustup/rustup-init.sh &&

  .run(`
    curl -O https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup/archive/1.24.3/x86_64-unknown-linux-gnu/rustup-init &&
    chmod +x rustup-init && 
    RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup echo 1 | $HOME/rustup-init &&
    rm rustup-init
  `)

  .run(`
    sed -i '$d' $HOME/.bash_profile &&
    cp $HOME/.bash_profile $HOME/.bash_profile.bk
  `)

  .run(
    (
      env =>
        [
          `echo "${env}" >> $HOME/.bashrc`
        , `echo "${env}" >> $HOME/.zshrc`
        , `echo "${env}" >> $HOME/.config/fish/config.fish`
        ].join(' && ')
    )
    (
      [
        'export PATH=\\$HOME/.cargo/bin:\\$PATH'
      , 'export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup'
      ].join('\\n')
    )
  )

  .run(( config => `
    echo "${config}" > $HOME/.cargo/config
  `)(
    [
      '[source.crates-io]'
    , "replace-with = 'tuna'"
    , ''
    , '[source.tuna]'
    , 'registry = \\"https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git\\"'
    ].join('\\n')
  ))

  // nightly
  .run(`
    $HOME/.cargo/bin/rustup toolchain install nightly &&
    $HOME/.cargo/bin/rustup run nightly rustc --version &&
    $HOME/.cargo/bin/rustup default nightly
  `)

  .run(`
    mkdir -p ~/.local/share/bash-completion/completions &&
    $HOME/.cargo/bin/rustup completions bash > ~/.local/share/bash-completion/completions/rustup &&
    mkdir -p ~/.zfunc &&
    $HOME/.cargo/bin/rustup completions zsh > ~/.zfunc/_rustup &&
    mkdir -p ~/.config/fish/completions &&
    $HOME/.cargo/bin/rustup completions fish > ~/.config/fish/completions/rustup.fish
  `)

  // .run(`
  //   $HOME/.cargo/bin/cargo install --force
  //   ${[
  //     'cargo-add'
  //   , 'cargo-edit'
  //   , 'cargo-edit-locally'
  //   , 'cargo-make'
  //   , 'cargo-lock'
  //   , 'cargo-tree'
  //   ].join(' ')}
  // `)

  // https://github.com/denoland/deno_lint
  .run(`
    $HOME/.cargo/bin/cargo install dprint &&
    $HOME/.cargo/bin/cargo install rslint_cli
  `)

  // https://github.com/sagiegurari/run_script
  .run(`
    $HOME/.cargo/bin/cargo install cargo-script runner &&
    $HOME/.cargo/bin/cargo install --git https://github.com/faern/rustscript
  `)

  .run(`
    mv $HOME/.bash_profile.bk $HOME/.bash_profile
  `)

  ()

export default dockerfile
