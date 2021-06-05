import { sh } from 'drake'

export default {
  name: 'docker'
, desc: 'run in docker'
, deps: []
, do: async function() {

    await sh(
      [
        'podman run --rm -ti'
      ,     '--name=deno'
      ,     '-p 3000:3000'
      ,     '-p 8080:8080'
      ,     '-v $(pwd):/root/deno'
      ,   'mooxe/deno'
      ,     '/bin/bash'
      ].join(' ')
    )

  }
}
