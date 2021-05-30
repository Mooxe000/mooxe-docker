import { drake } from './deps.js'
const {
  desc
, task
, run
} = drake

import hello from './tasks/hello.js'
import docker from './tasks/docker.js'

[
  hello
, docker
]
.forEach(
  (t) => {

    desc( t.desc )
    task(
      t.name
    , t.deps
    , async function() {
        await t.do()
      }
    )

  }
)

export default () => run()
