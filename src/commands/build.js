import { $, cd, fs, io, log, path } from 'dzx'
import DockerFile from '../Docker_file.js';
const __dirname = path.dirname(import.meta.url);

import { getPath } from '../util.js'

export default ( program, DockerFiles ) =>

  async () => {

    if (program.name) {

      const tmpDir = getPath(path.join(__dirname, '../../tmp'))

      await fs.ensureDir(tmpDir)

      await Deno.writeTextFile(
        `${tmpDir}/Dockerfile`
      , DockerFiles[program.name].file
      )

      cd(tmpDir)

      $.stdout = "inherit"
      $.stderr = "inherit"

      await $`buildah bud --${
          program.mode
        ? [
            'no-cache'
          , 'layers'
          ].includes(program.mode)
        ? program.mode
        : 'layers'
        : 'no-cache'
      } -t ${
        DockerFiles[program.name].imgName
      }`

      cd(getPath(path.join(__dirname, '../../')))

      await Deno.remove(tmpDir, { recursive: true })

    }

  }
