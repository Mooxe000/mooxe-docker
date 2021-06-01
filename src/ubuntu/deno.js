import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/node`

  .run`
    apt install -y unzip &&
    curl -fsSL https://deno.land/x/install/install.sh | sh
  `

  .run`
    echo "
      export DENO_INSTALL=\\"\$HOME/.deno\\"\\n
      export PATH=\\"\$DENO_INSTALL/bin:\$PATH\\"\\n
    " >> $HOME/.bashrc
  `
  ()

export default dockerfile
