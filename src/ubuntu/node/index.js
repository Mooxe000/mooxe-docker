import DockerFile from '../../Docker_file.js'
import snippets from '../snippets/index.js'

// import nvm, { nvmRun } from './nvm.js'
import fnm, { fnmRun } from './fnm.js'
// import volta, { voltaRun } from './volta.js'

import packages from './packages.js'

const dockerfile = () =>

  DockerFile()

  .from`localhost/mooxe/base:dev`
  .workdir`/root`
  .run(snippets.update)

  // .pipe(nvm)
  .pipe(fnm)
  // .pipe(volta)
  
  .pipe(packages(
    // nvmRun
    fnmRun
    // voltaRun
  )) 

  ()

export default dockerfile
