import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>
  DockerFile()
  .from`docker.io/ubuntu`
  // .workdir`root`

  .env`SOURCES_FILE=/etc/apt/sources.list`
  .env`SYSMIRROR=mirrors.aliyun.com`
  .run`
    sed -i
      -e "s/archive.ubuntu.com/\${SYSMIRROR}/g"
      -e "s/security.ubuntu.com/\${SYSMIRROR}/g"
      \${SOURCES_FILE}
  `
  .run(snippets.update)
  .run(snippets.install`get`([
    'curl'
  , 'apt-utils'
  , 'locales'
  ]))
  .run`locale-gen en_US.UTF-8`

  .run(snippets.update)
  .run(snippets.clean)
  ()

export default dockerfile
