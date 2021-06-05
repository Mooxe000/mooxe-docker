import {
  desc
, task
, run
} from 'drake'

import getTaskName from './utils/taskName.js'

import hello from './tasks/hello.js'
import docker from './tasks/docker.js'
import build from './tasks/build.js'

const taskName = getTaskName()

export default () => {

  [
    hello
  , docker
  , build
  ].forEach(
    (t) => {

      desc( t.desc )
      task(

            typeof taskName === 'object'
        &&  taskName.name === t.name
        ?   `${taskName.name}:${taskName.args.join('')}`
        :   t.name

      , t.deps

      , async () =>

              typeof taskName === 'object'
          &&  taskName.name === t.name
          ?   await t.do.apply(null, taskName.args)
          :   await t.do()
      )

    }
  )

  run()
}
