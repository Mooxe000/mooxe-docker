import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`localhost/mooxe/base:dev`
  .workdir`/root`
  .run(snippets.update)

  .run(
    snippets
    .install()([
      'make'
    , 'g++'
    ])
  )
  .env`NVM_VERSION 0.38.0`
  .run`
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v\${NVM_VERSION}/install.sh | bash &&
    echo 'export NVM_DIR="$([ -z "\${XDG_CONFIG_HOME-}" ] && printf %s "\${HOME}/.nvm" || printf %s "\${XDG_CONFIG_HOME}/nvm")"' >> ~/.profile &&
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.profile
  `

  // fish -lc "fisher edc/bass nvm"
  .run`
    fish -lc "omf i bass nvm"
  `
  // echo "\
  // function nvm\n\
  // bass source ~/.nvm/nvm.sh --no-use ';' nvm \$argv\n\
  // end" >> ~/.config/fish/config.fish

  // git clone https://github.com/passcod/nvm-fish-wrapper.git ~/.config/fish/nvm-wrapper &&
  // echo ". ~/.config/fish/nvm-wrapper/nvm.fish" >> ~/.config/fish/config.fish

  .env`NODE_VERSION_LTS 14.17.0`
  .env`NODE_VERSION 16.2.0`
  .run`
    cp -f ~/.nvm/nvm.sh ~/.nvm/nvm-tmp.sh &&
    echo "nvm install v$NODE_VERSION_LTS" >> ~/.nvm/nvm-tmp.sh &&
    echo "nvm install v$NODE_VERSION" >> ~/.nvm/nvm-tmp.sh &&
    echo "nvm alias 14 $NODE_VERSION_LTS" >> ~/.nvm/nvm-tmp.sh &&
    echo "nvm alias 16 $NODE_VERSION" >> ~/.nvm/nvm-tmp.sh &&
    echo "nvm alias default 14" >> ~/.nvm/nvm-tmp.sh &&
    bash ~/.nvm/nvm-tmp.sh &&
    rm ~/.nvm/nvm-tmp.sh &&
    cp /etc/profile /etc/profile.bak &&
    echo '. ~/.nvm/nvm.sh' >> /etc/profile
  `

  .run`
    bash -lc "curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -" &&
    bash -lc "echo 'deb https://dl.yarnpkg.com/debian/ stable main' | tee /etc/apt/sources.list.d/yarn.list" &&
    apt-fast install -y apt-transport-https
  `

  .run`/bin/bash -lc 'nvm use default'`
  .run`/bin/bash -lc 'npm i -g npm'`
  .run`/bin/bash -lc 'npm i -g yarn'`

  // -- npm root -g
  // -- yarn global bin
  // -- yarn global dir
  // /bin/bash -lc "yarn config set prefix $(npm root -g)/../../"
  // echo "--global-folder \"$(bash -lc 'npm root -g')/../\"" \
  //    >> ~/.yarnrc

  // /bin/bash -lc 'yarn global add yrm'
  .run`/bin/bash -lc 'yarn global add nnrm'`
  .run`/bin/bash -lc 'nnrm use taobao'`

  .run`/bin/bash -lc 'yarn global add npm yarn'`
  .run`/bin/bash -lc 'yarn global add node-gyp'`

  //  /bin/bash -lc 'yarn global add node-inspector'
  .run`/bin/bash -lc 'yarn global add pnpm npm-check'`

  // /bin/bash -lc 'yarn global add coffeescript'
  // /bin/bash -lc 'yarn global add rollup gulp-cli'
  // yarn global add harp

  .run`/bin/bash -lc 'yarn global add supervisor nodemon forever pm2'`
  .run`/bin/bash -lc 'yarn global add serve http-server'`
  // /bin/bash -lc 'yarn global add lerna autod'

  // /bin/bash -lc 'yarn global add json-server'
  // /bin/bash -lc 'yarn global add now'

  .run`echo "unsafe-perm = true" >> ~/.npmrc`

  ()

export default dockerfile
