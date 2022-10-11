import DockerFile from '../Docker_file.js'
import { fnmRun } from './node/fnm.js'

const dockerfile = () =>

  DockerFile()
  .from`mooxe/deno`

  .run(fnmRun(`
    pnpm i -g purescript spago 
  `))

  .run(fnmRun(
    [
      'spago'
    , 'purs'
    ].map(
      cli => (
        prtPathFlag =>
          `sed -i -r 's/(${prtPathFlag}){4}/${
            new Array(6)
            .fill(prtPathFlag)
            .join('')
          }/g' \`which ${cli}\``
      )(
        '\\.\\.\\/'
      )
    )
    .join(' && ')
  ))

  ()

export default dockerfile
