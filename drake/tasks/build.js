import { sh } from 'drake'

export default {
  name: 'build'
, desc: 'build docker images'
, deps: []
, do: async function(...args) {
    await sh(
      `./dzx.js build -m -n ${args.join(' ')}`
    )
  }
}
