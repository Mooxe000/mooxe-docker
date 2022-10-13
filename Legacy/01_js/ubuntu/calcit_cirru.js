import DockerFile from '../Docker_file.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/deno`

  .run(
    [
      'bundle_calcit'
    // , 'calcit_runner'
    , 'cr'
    ].reduce(
      (r, c) => [
        ...r
      , `axel -o $HOME/.deno/bin http://apis.calcit-lang.org/binaries/linux/${c}`
      ]
    , []
    )
    .join(' && ')
  )

  .run(`
    chmod +x $HOME/.deno/bin/*
  `)

  .run(`
    fish -lc 'pnpm i -g calcit-editor'
  `)

  ()
  
export default dockerfile
