import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/rescript`

  .run(`
    bash -lc "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
  `)

  ()

export default dockerfile
