import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const env = [
  'export NIM_HOME=\\$HOME/.nim'
, 'export PATH=\\$NIM_HOME/bin:\\$PATH'
]

const deps = [
  'gcc'
, 'make'
]

const dockerfile = () =>

  DockerFile()
  .from`mooxe/rescript`

  // .run(
  //   snippets
  //   .install()`nim`
  // )

  .run(
    snippets
    .install()(deps)
  )

  .run(`
    git clone --depth 1 https://github.com/nim-lang/Nim.git &&
    mv Nim .nim &&
    cd .nim &&
    ./build_all.sh
  `)

  .run(`
    echo "${env.join('\\n')}" >> $HOME/.bash_profile &&
    echo "${env.join('\\n')}" >> $HOME/.zshrc &&
    echo "${env.join('\\n')}" >> $HOME/.config/fish/config.fish
  `)

  ()

export default dockerfile
