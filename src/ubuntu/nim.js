import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/rescript`

  //   curl https://nim-lang.org/choosenim/init.sh -sSf | sh
  .run(
    snippets
    .install()`nim`
  )

  ()

export default dockerfile
