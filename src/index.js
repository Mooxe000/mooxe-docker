const DockerFile = (cmds) =>
  new Proxy(
    () => {}
  , {
      get: (t, k, r) => (e) => {
        // console.log(e)
        const _cmds = [
          ...(
              cmds
            ? cmds
            : []
          )
        , `${k.toUpperCase()} \\\n${
            e.map(
              (s, i) => {
                return s
                .split('\n')
                .map(
                  c => c.trim()
                )
                .filter(
                  c =>
                    c === ''
                    ? false
                    : true
                )
                .join(' \\\n  ')
              }
            )
            .map(
              c => `  ${c}`
            )
          }`
        ]
        return DockerFile(_cmds)
      }
    , apply: (t, b, p) =>
        cmds.join('\n\n')
    }
  )

const dockerfile =
  DockerFile()
  .from`docker.io/library/ubuntu`
  .workdir`root`
  .env`SOURCES_FILE=/etc/apt/sources.list`
  .env`SYSMIRROR=mirrors.aliyun.com`
  .run`
    sed -i
      -e "s/archive.ubuntu.com/\${SYSMIRROR}/g"
      -e "s/security.ubuntu.com/\${SYSMIRROR}/g"
      \${SOURCES_FILE}
  `
  .run`locale-gin en_US.UTF-8`
  .run`
    apt-get update &&
    apt-get -y upgrade
  `
  .run`
    apt-get autoremove -y &&
    apt-get clean &&
    rm -rf /var/lib/apt/lists/*
  `
  ()

console.log(dockerfile)
