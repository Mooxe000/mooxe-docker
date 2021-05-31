const DockerFile = (cmds) =>
  new Proxy(
    () => {}
  , {
      get: (t, k, r) => (e) => {

        const _e =
          typeof e === 'string'
        ? [ e ]
        : e

        // console.log(_e)

        const _cmds = [
          ...(
              cmds
            ? cmds
            : []
          )
        , `${k.toUpperCase()} \\\n${
            _e.map(
              (s, i) => {
                return s
                .split('\n')
                .map(
                  c => c.trim()
                )
                .filter(
                  c =>
                    c === ''
                    ? false
                    : true
                )
                .join(' \\\n  ')
              }
            )
            .map(
              c => `  ${c}`
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
