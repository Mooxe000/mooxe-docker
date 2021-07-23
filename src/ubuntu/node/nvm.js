import snippets from '../snippets/index.js'
import VSENV from './versions.js'

export default DF => DF
  .run(
    snippets
    .install()([
      'make'
    , 'g++'
    ])
  )

  .pipe(VSENV.nvm)

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

  .pipe(VSENV.node)

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

  // .run`
  //   bash -lc "curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -" &&
  //   bash -lc "echo 'deb https://dl.yarnpkg.com/debian/ stable main' | tee /etc/apt/sources.list.d/yarn.list" &&
  //   apt-fast install -y apt-transport-https
  // `

  .run`/bin/bash -lc 'nvm use default'`
