import DockerFile from '../Docker_file.js'
import { fnmRun } from './node/fnm.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/deno`

  .run(fnmRun(`
    pnpm i -g rescript
  `))

  ()

export default dockerfile
