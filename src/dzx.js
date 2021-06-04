#!/usr/bin/env dzx
/// <reference path="https://deno.land/x/dzx@0.2.3/types.d.ts" />

import Denomander from "https://deno.land/x/denomander/mod.ts"
import { $, cd, fs, io, log, path } from "https://deno.land/x/dzx@0.2.3/mod.ts"

const __dirname = path.dirname(import.meta.url);

// Use hs/serve to run http server, use port 8080 in the project root path 
import DockerFileObj from 'http://localhost:8080/src/ubuntu/index.js'

const getPath = _path => _path.replace(/^file:\/\//, '')

$.verbose = true
$.shell = "/usr/bin/bash"

console.log(`Hello from ${$.blue.bold("dzx")}!`)

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
.action( async () => {

  if (program.name) {

    const DockerFiles = DockerFileObj()

    const tmpDir = getPath(path.join(__dirname, './tmp'))

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

    cd(getPath(__dirname))

    await Deno.remove(tmpDir, { recursive: true })

  }
})

.command('in', 'runin docker images')

.parse(Deno.args.slice(1))
