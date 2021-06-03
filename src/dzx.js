#!/usr/bin/env dzx
/// <reference path="https://deno.land/x/dzx@0.2.3/types.d.ts" />

import Denomander from "https://deno.land/x/denomander/mod.ts"
import { $, cd, fs, io, log, path } from "https://deno.land/x/dzx@0.2.3/mod.ts"
import DockerFileObj from 'file:///root/deno/src/ubuntu/index.js'

$.verbose = true
$.shell = "/usr/local/env bash"

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
.option('-l --layers', 'build with layers mode')
.option('-nc --no-cache', 'build with no-cache mode')
.action( () => {

  console.log(program.name)

  if (program.name) {

    fs.ensureDir("./tmp")
    Deno.writeFile(
      './tmp/Dockerfile'
    , DockerFileObj[program.name].file
    )
    $`buildah bud --no-cache -t mooxe/deno`

  }
})

.command('in', 'runin docker images')

.parse(Deno.args.slice(1))
