#!/usr/bin/env dzx
import Denomander from "https://deno.land/x/denomander/mod.ts"

$.verbose = true
$.shell = "/usr/local/env bash"

// import { $, cd, fs, io, log, path } from "https://deno.land/x/dzx@0.2.3/mod.ts"

console.log(`Hello from ${$.blue.bold("dzx")}!`)

const program = new Denomander({
  app_name: 'Mooxe Dockers builder'
, app_description: 'build mooxe-docker images'
, app_version: '0.0.0'
})

// console.log(Deno.args.slice(1))

program
// globalOption
.baseOption('-n --name', 'build docker name')

.command('build', 'build docker images')
.option('-l --layers', 'build with layers mode')
.option('-nc --no-cache', 'build with no-cache mode')

.parse(Deno.args.slice(1))

// if (program.address) {
//   const port = program.port || "8000"
//   console.log(`Server is running on ${program.address}:${port}`)
// }
