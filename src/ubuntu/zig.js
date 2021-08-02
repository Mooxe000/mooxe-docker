import DockerFile from '../Docker_file.js'

const env = [
  'export ZIG_HOME=\\$HOME/.zig'
, 'export ZIG_SOURCE=\\$ZIG_HOME/zig_linux'
, 'export PATH=\\$ZIG_HOME/bin:\\$PATH'
]

const zig = () => {
  const name = 'zig-linux-x86_64-0.9.0-dev.713+d5f173d28'
  return {
    name
  , url: `https://ziglang.org/builds/${name}.tar.xz`
  }
}

const dockerfile = () =>

  DockerFile()
  .from`mooxe/rescript`

  .run(`
    echo "${env.join('\\n')}" >> $HOME/.bash_profile
  `)

  .run(`
    bash -lc "
    mkdir -p \\$ZIG_SOURCE &&
    mkdir -p \\$ZIG_HOME/bin &&
    mkdir -p \\$ZIG_HOME/lib
    "
  `)

  .run(`
    aria2c -o .zig/zig_linux/zig_linux.tar.xz ${zig().url}
  `)

  .run(`
    bash -lc "
    cd \\$ZIG_SOURCE &&
    tar xvf zig_linux.tar.xz
    "
  `)

  .run(`
    bash -lc "
    ln -s \\$ZIG_SOURCE/${zig().name}/zig \\$ZIG_HOME/bin/zig &&
    ln -s \\$ZIG_SOURCE/${zig().name}/lib \\$ZIG_HOME/lib/ziglib
    "
  `)

  .run(`
    echo "${env.join('\\n')}" >> $HOME/.zshrc &&
    echo "${env.join('\\n')}" >> .config/fish/config.fish
  `)

  ()

export default dockerfile
