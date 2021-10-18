import DockerFile from '../Docker_file.js'
// import snippets from './snippets/index.js'

const version = '1.15.1'

const dvmRun = cmd => `
  bash -lc "${cmd}"
`

const dockerfile = () =>

  DockerFile()
  .from`mooxe/node`

  // .run(`
  //   ${snippets.install()`unzip`} &&
  //   curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.15.1
  // `)

  .run(`
    curl -fsSL https://deno.land/x/dvm/install.sh | sh
  `)

  .run(`
    echo "
      source $HOME/.bash_profile
    " >> $HOME/.bashrc &&
    echo "
      source $HOME/.bash_profile
    " >> $HOME/.zshrc &&
    echo "
      source $HOME/.bash_profile
    " >> $HOME/.config/fish/config.fish
  `)

  .run(dvmRun(`
    dvm install ${version}
  `))

  // .run`
  //   echo "
  //     export DENO_INSTALL=\\"\\$HOME/.deno\\"\\n
  //     export PATH=\\"\\$DENO_INSTALL/bin:\\$PATH\\"\\n
  //   " >> $HOME/.bashrc &&
  //   echo "
  //     export DENO_INSTALL=\\"\\$HOME/.deno\\"\\n
  //     export PATH=\\"\\$DENO_INSTALL/bin:\\$PATH\\"\\n
  //   " >> $HOME/.config/fish/config.fish
  // `

  .run(
    [
      // velociraptor 1.2.0
      'deno install -qAn vr https://deno.land/x/velociraptor@1.2.0/cli.ts'
    ,
      // dzx 0.2.3
      'deno install --allow-all -r -f --unstable https://deno.land/x/dzx@0.2.4/dzx.ts'
    ,
      // trex 1.9.1
      'deno install -A --unstable --import-map=https://deno.land/x/trex/import_map.json -n trex --no-check https://deno.land/x/trex/cli.ts'
    ]
    .map( c => `/bin/fish -lc "${c}"` )
    .join(" && ")
  )

  ()

export default dockerfile
