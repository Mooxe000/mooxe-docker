import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/node`

  .run(`
    ${snippets.install()`unzip`} &&
    curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.10.3
  `)

  .run`
    echo "
      export DENO_INSTALL=\\"\\$HOME/.deno\\"\\n
      export PATH=\\"\\$DENO_INSTALL/bin:\\$PATH\\"\\n
    " >> $HOME/.bashrc &&
    echo "
      export DENO_INSTALL=\\"\\$HOME/.deno\\"\\n
      export PATH=\\"\\$DENO_INSTALL/bin:\\$PATH\\"\\n
    " >> $HOME/.config/fish/config.fish
  `

  .run(
    [
      // velociraptor
      'deno install -qAn vr https://deno.land/x/velociraptor@1.0.0/cli.ts'
      // dzx 0.2.3
    ,
      'deno install --allow-all -r -f --unstable https://deno.land/x/dzx@0.2.3/dzx.ts'
      // trex
    ,
      'deno install -A --unstable --import-map=https://deno.land/x/trex/import_map.json -n trex --no-check https://deno.land/x/trex/cli.ts'
    ]
    .map( c => `/bin/fish -lc "${c}"` )
    .join(" && ")
  )
  ()

export default dockerfile
