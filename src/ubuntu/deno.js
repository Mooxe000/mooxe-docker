import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/node`

  .run(`
    ${snippets.install()`unzip`} &&
    curl -fsSL https://deno.land/x/install/install.sh | sh
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

  .run`
    /bin/fish -lc "deno install --allow-all -r -f --unstable https://deno.land/x/dzx@0.2.3/dzx.ts"
  `
  ()

export default dockerfile
