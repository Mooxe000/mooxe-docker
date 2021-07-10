import DockerFile from '../Docker_file.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/deno`

  .run(`
    fish -lc 'pnpm i -g rescript'
  `)

  ()

export default dockerfile
