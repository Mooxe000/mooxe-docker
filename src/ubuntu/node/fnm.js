import snippets from '../snippets/index.js'

const fnmRun = cmd => `
  export PATH=$HOME/.fnm:$PATH &&
  eval "\`fnm env\`" &&
  ${cmd}
`

export {
  fnmRun
}

export default DF => DF

  .run(
    snippets
    .install()([
      'unzip'
    ])
  )

  .run`curl -o- https://fnm.vercel.app/install | bash`

  .run`
    export PATH=$HOME/.fnm:$PATH &&
    fnm install 16 &&
    fnm install 14 &&
    fnm alias 14 default
  `
