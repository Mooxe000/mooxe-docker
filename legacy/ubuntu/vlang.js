import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const env = [
  'export V_HOME=\\$HOME/.v'
, 'export V_SOURCE=\\$V_HOME/v_linux'
, 'export PATH=\\$V_HOME/bin:\\$PATH'
]

const deps = [
  'gcc'
, 'tcc'
, 'clang'
, 'make'
]

const dockerfile = () =>

  DockerFile()
  .from`mooxe/rescript`

  .run(
    snippets
    .install()(deps)
  )

  .run(`
    echo "${env.join('\\n')}" >> $HOME/.bash_profile
  `)

  .run(`
    bash -lc "
    mkdir -p \\$V_SOURCE &&
    mkdir -p \\$V_HOME/bin &&
    mkdir -p \\$V_HOME/lib
    "
  `)

  .run(`
    aria2c -o .v/v_linux/v_linux.zip https://github.com/vlang/v/releases/latest/download/v_linux.zip
  `)

  .run(`
    bash -lc "
    cd \\$V_SOURCE &&
    unzip v_linux.zip &&
    cd v && make
    "
  `)

  .run(`
    bash -lc "
    ln -s \\$V_SOURCE/v/v \\$V_HOME/bin/v &&
    ln -s \\$V_SOURCE/v/vlib \\$V_HOME/lib/vlib
    "
  `)

  .run(`
    echo "${env.join('\\n')}" >> $HOME/.zshrc &&
    echo "${env.join('\\n')}" >> .config/fish/config.fish
  `)

  ()

export default dockerfile
