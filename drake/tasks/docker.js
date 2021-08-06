import { sh } from 'drake'

const name = 'deno'

export default {
  name: 'docker'
, desc: 'run in docker'
, deps: []
, do: async function() {

    await sh(
      [
        'podman run --rm -ti'
      ,     `--name=${
              name.indexOf(':') !== 0
              ? name.split(':').join('')
              : name
            }`
      ,     '-p 3000:3000'
      ,     '-p 8080:8080'
      ,     `-v $(pwd):/root/${
              name.indexOf(':') !== 0
              ? name.split(':').join('')
              : name
            }`
      ,   `mooxe/${name}`
      ,     '/bin/bash'
      ].join(' ')
    )

  }
}
