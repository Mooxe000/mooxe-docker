#!/usr/bin/env dzx
/// <reference path="https://deno.land/x/dzx@0.2.3/types.d.ts" />

import Denomander from "https://deno.land/x/denomander/mod.ts"

$.verbose = true
$.shell = "/usr/local/env bash"

import { $, cd, fs, io, log, path } from "https://deno.land/x/dzx@0.2.3/mod.ts"

console.log(`Hello from ${$.blue.bold("dzx")}!`)
