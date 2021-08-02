import { sh } from 'drake'

const name = 'v'

export default {
  name: 'docker'
, desc: 'run in docker'
, deps: []
, do: async function() {

    await sh(
      [
        'podman run --rm -ti'
      ,     `--name=${name.split(':').join('')}`
      ,     '-p 3000:3000'
      ,     '-p 8080:8080'
      ,     `-v $(pwd):/root/${name.split(':').join('')}`
      ,   `mooxe/${name}`
      ,     '/bin/bash'
      ].join(' ')
    )

  }
}
