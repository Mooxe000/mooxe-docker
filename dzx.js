#!/usr/bin/env -S deno run -A --unstable --import-map=import_map.json https://deno.land/x/dzx@0.3.0/dzx.ts
/// <reference path="https://deno.land/x/dzx@0.3.0/types.d.ts" />

import run from './src/index.js'

$.verbose = true
$.shell = "/usr/bin/bash"

console.log(`Hello from ${$.blue.bold("dzx")}!`)

run()
