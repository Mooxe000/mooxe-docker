import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const env = [
  'export NWJS_HOME=\\$HOME/.nwjs'
, 'export PATH=\\$NWJS_HOME:\\$PATH'
]

const dockerfile = () =>

  DockerFile()
  .from`localhost/mooxe/base:dev`

  .workdir`/root`

  .run(snippets.update)

  .run`
    set -ex;
    axel https://dl.nwjs.io/v0.55.0/nwjs-sdk-v0.55.0-linux-x64.tar.gz;
  `

  .run`
    set -ex;
    tar xvf ./nwjs-sdk-v0.55.0-linux-x64.tar.gz;
    mv ./nwjs-sdk-v0.55.0-linux-x64 ./.nwjs;
    rm -rf ./nwjs-sdk-v0.55.0-linux-x64.tar.gz;
  `
  .run`
    set -ex;
    dpkg --add-architecture i386;
  `

  .run(snippets.update)

  .run(
    snippets.install()([
      'wine'
    , 'wine32'
    , 'winbind'
    , 'wine-binfmt'
    , 'nodejs'
    , 'npm'
    , 'dbus-x11'
    , 'x11-apps' // xclock
    , 'libnss3'
    , 'libatk1.0-0'
    , 'libgbm1'
    , 'libatspi2.0-0'
    , 'libgtk-3-0'
    , 'libcanberra-gtk3-module'
    , 'libupower-glib3'
    ])
  )

  .run`
    set -ex;
    ln -s /usr/sbin/start-stop-daemon /usr/bin/start-stop-daemon;
  `

  .run(`
    echo "${env.join('\\n')}" >> $HOME/.bash_profile &&
    echo "${env.join('\\n')}" >> $HOME/.zshrc &&
    echo "${env.join('\\n')}" >> $HOME/.config/fish/config.fish
  `)

  // .run(snippets.clean)

  ()

export default dockerfile
