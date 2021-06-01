const DockerFile = (cmds) =>
  new Proxy(
    () => {}
  , {
      get: (t, k, r) => (e) => {

        const _e =
          typeof e === 'string'
        ? [ e ]
        : e

        const _cmds = [
          ...(
              cmds
            ? cmds
            : []
          )
        , `${k.toUpperCase()} \\\n${
            _e.map(

              (c, i) => {
                const flag = c.match(/^\n {2,}/)
                return `  ${
                    flag === null
                  ? c
                  : c
                  .split(flag[0])
                  .filter(
                    e => 
                      e.trim() === ''
                      ? false
                      : true
                  )
                  .join(' \\\n  ')
                }`
              }
            )
          }`
        ]
        return DockerFile(_cmds)
      }
    , apply: (t, b, p) =>
        cmds.join('\n\n')
    }
  )

export default DockerFile
