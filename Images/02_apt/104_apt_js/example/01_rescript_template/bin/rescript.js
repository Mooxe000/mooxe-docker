import child_process from 'child_process'
import os from 'os'
import path from 'path'
import fs from 'fs'
import { bsc_exe } from './scripts/bin_path'
import { rescript_exe } from './scripts/bin_path'

const bsconfig = 'bsconfig.json'

const LAST_BUILD_START = 0
const LAST_FIRED_EVENT = 0

const reasons_to_rebuild = [[
  'proj'
, 'started'
]]

const LAST_SUCCESS_BUILD_STAMP = 0
const cwd = process.cwd()
const lockFileName = path.join(cwd, ".bsb.lock")
process.env.BSB_PROJECT_ROOT = cwd

const bsConfigFile = path.join(cwd, bsconfig)
const genTypeFileExtension = undefined

if (fs.existsSync(bsConfigFile)) {
  const genTypeConfig = require(bsConfigFile).gentypeconfig
  if (genTypeConfig) {
    genTypeFileExtension = genTypeConfig.generatedFileExtension
  }
}

const wsClients = []
const watch_mode = false
const verbose = false

const postBuild = undefined
const useWebSocket = false
const webSocketHost = 'localhost'
const webSocketPort = 9999

const getDateAsString = () => {
  const n = new Date()
  return ([
    n.getHours()
  , n.getMinutes()
  , n.getSeconds()
  , n.getMilliseconds()
  ].join(":")
  )
}

const startTime = undefined
const updateStartTime = () => {
  startTime = process.hrtime()
  return ""
}
const updateFinishTime = () => {
  var diff = process.hrtime(startTime)
  return diff[0] * 1e9 + diff[1]
}

const getWatchFiles = (file) => {
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, "utf8"))
  } else {
    return { dirs: [], generated: [] }
  }
}

const dlog = (str) => {
  if (verbose) {
    console.log(str)
  }
}

const notifyClients = () => {
  wsClients = wsClients.filter(
    x => (! x.closed) && (! x.socket.destroyed)
  )
  const wsClientsLen = wsClients.length
  dlog(`Alive sockets number: ${wsClientsLen}`)
  const data = JSON.stringify({
    LAST_SUCCESS_BUILD_STAMP: LAST_SUCCESS_BUILD_STAMP
  })
  for (var i = 0; i < wsClientsLen; ++i) {
    // in reverse order, the last pushed get notified earlier
    const client = wsClients[wsClientsLen - i - 1]
    if (!client.closed) {
      client.sendText(data)
    }
  }
}

const setUpWebSocket = () => {
  const WebSocket = require("./lib/minisocket.js").MiniWebSocket
  const id = setInterval(notifyClients, 3000)
  require("http")
    .createServer()
    .on("upgrade", (req, socket, upgradeHead) => {
      dlog("connection opened")
      const ws = new WebSocket(req, socket, upgradeHead)
      socket.on("error", err => {
        dlog(`Socket Error ${err}`)
      })
      wsClients.push(ws)
    })
    .on("error", err => {
      if (
            err !== undefined
        &&  err.code === "EADDRINUSE"
      ) {
        const error =
            std_is_tty
          ? "\x1b[1;31mERROR:\x1b[0m"
          : "ERROR:"
        console.error([
          `${error} The websocket port number ${webSocketPort} is in use.`
        , "Please pick a different one using the \`-ws [host:]port\` flag from bsb."
        ].join('')
        )
      } else {
        console.error(err)
      }
      process.exit(2)
    })
    .listen(webSocketPort, webSocketHost)
}

const delegate_args = []
const process_argv = process.argv

if (process.env.NINJA_ANSI_FORCED === undefined) {
  if (require("tty").isatty(1)) {
    process.env.NINJA_ANSI_FORCED = "1"
  }
} else {
  dlog(`NINJA_ANSI_FORCED: "${process.env.NINJA_ANSI_FORCED}"`)
}

const help = () => {
  console.log(`Usage: rescript <options> <subcommand>

\`rescript\` is equivalent to \`rescript build\`

Options:
  -v, -version  display version number
  -h, -help     display help

Subcommands:
  init
  build
  clean
  format
  convert
  dump
  help

Run \`rescript <subcommand> -h\` for subcommand help. Examples:
  rescript build -h
  rescript format -h
The default \`rescript\` is equivalent to \`rescript build\` subcommand  
`)
}

const maybe_subcommand = process_argv[2]
const is_building = false
const releaseBuild = () =>{
  if (is_building) {
    try {
      fs.unlinkSync(lockFileName)
    } catch (err) {}
    is_building = false
  }
}

const acquireBuild = () => {
  if (is_building) {
    return false
  } else {
    try {
      const fid = fs.openSync(lockFileName, "wx", 0o664)
      fs.closeSync(fid)
      is_building = true
    } catch (err) {
      if (err.code === "EEXIST") {
        console.warn(lockFileName, "already exists, try later")
      } else { console.log(err) }
    }
    return is_building
  }
}
