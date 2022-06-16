const voltaRun = cmd => `
  export PATH=$HOME/.volta/bin:$PATH &&
  ${cmd}
`

export {
  voltaRun
}

export default DF => DF

  .run`curl -o- https://get.volta.sh | bash`

  .run`
    export PATH=$HOME/.volta/bin:$PATH &&
    volta install node@16 &&
    volta install node@14
  `
