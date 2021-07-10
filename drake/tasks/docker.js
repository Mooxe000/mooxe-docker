import { sh } from 'drake'

const name = 'rescript'

export default {
  name: 'docker'
, desc: 'run in docker'
, deps: []
, do: async function() {

    await sh(
      [
        'podman run --rm -ti'
      ,     `--name=${name}`
      ,     '-p 3000:3000'
      ,     '-p 8080:8080'
      ,     '-p 6001:6001'
      ,     `-v $(pwd):/root/${name}`
      ,   `mooxe/${name}`
      ,     '/bin/bash'
      ].join(' ')
    )

  }
}
