#!/usr/bin/env -S deno run -A --unstable --import-map=import_map.json https://deno.land/x/dzx@0.2.3/dzx.ts
/// <reference path="https://deno.land/x/dzx@0.2.3/types.d.ts" />

import Denomander from 'denomander'
import DockerFileObj from './src/ubuntu/index.js'
const DockerFiles = DockerFileObj()

import cmdBuild from './src/commands/build.js'

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
.action( cmdBuild(program, DockerFiles) )

.command('in', 'runin docker images')

.parse(Deno.args.slice(1))
