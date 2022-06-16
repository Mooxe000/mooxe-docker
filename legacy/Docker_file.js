const DockerFile = (cmds) =>
  new Proxy(
    () => {}
  , {
      get: (t, k, r) => (e) => {

        if (k === 'pipe') {
          return e(DockerFile(cmds)) 
        }

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
                            ( e.trim() === '' )
                        ||  ( e.trim() === '\n' )
                        ?   false
                        :   true
                    )
                    .join(' \\\n  ')
                    .replace(/\n {2,}$/, '')
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
