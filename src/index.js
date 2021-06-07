import Denomander from 'denomander'
import DockerFileObj from './ubuntu/index.js'
const DockerFiles = DockerFileObj()

import cmdBuild from './commands/build.js'

export default () => {

  const program = new Denomander({
    app_name: 'Mooxe Dockers builder'
  , app_description: 'build mooxe-docker images'
  , app_version: '0.0.0'
  })

  program
  // globalOption
  // baseOption
  .globalOption('-n --name', 'build docker name')

  .command('build', 'build docker images')
  .option('-m --mode', `

    build with layers/no-cache mode.
    default mode: no-cache
  `)
  .action( cmdBuild(program, DockerFiles) )

  .command('in', 'runin docker images')

  .parse(Deno.args.slice(1))

}
