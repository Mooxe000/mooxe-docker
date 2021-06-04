import { drake } from '../deps.js'
const { sh } = drake

export default {
  name: 'build'
, desc: 'build docker images'
, deps: []
, do: async function() {
    await sh(
      './dzx.js build -m -n deno'
    )
  }
}
