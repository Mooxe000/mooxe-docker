import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`localhost/mooxe/base:prd`

  .run(snippets.update)

  .arg`DEBIAN_FRONTEND=noninteractive`
  .env`TZ=Asia/Shanghai`

  .run`
    apt-get install -y software-properties-common &&
    yes '' | add-apt-repository ppa:git-core/ppa &&
    yes '' | apt-add-repository ppa:fish-shell/release-3 &&
    yes '' | apt-add-repository ppa:apt-fast/stable
  `

  .run(snippets.update)

  .run(snippets.install`get`([
    'aria2'
  , 'wget'
  , 'apt-fast'
  ]))

  .run(snippets.update)

  .run(
    snippets.install()
    `git`
  )

  .run(
    snippets.install()([
      'neovim'
    , 'axel'
    ])
  )

  .run(
    snippets.install()([
      'zsh'
    , 'fish'
    ])
  )

  // bash-it
  .run`
    git clone --depth=1 https://github.com/Bash-it/bash-it.git
      ~/.bash_it &&
    yes | bash -lc "~/.bash_it/install.sh"
  `

  // oh-my-zsh
  // sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
  .run`
    git clone --depth=1 https://github.com/robbyrussell/oh-my-zsh.git
      ~/.oh-my-zsh &&
    cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
  `

  // fisherman
  // curl -sL get.fisherman.sh | fish
  // curl -Lo ~/.config/fish/functions/fisher.fish \
  //    --create-dirs git.io/fisherman

  // git clone https://github.com/fisherman/fisherman ~/.local/share/fisherman && \
  //   cd ~/.local/share/fisherman && \
  // make && cd ~

  // oh-my-fish
  // curl -L https://get.oh-my.fish | fish
  // #  curl -L https://get.oh-my.fish > install 
  .run`
    curl -L https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install > install &&
    fish install --noninteractive --path=~/.local/share/omf --config=~/.config/omf &&
    rm -rf install
  `

  // fish -lc "fisher omf/theme-robbyrussell"
  .run`
    fish -lc "omf install robbyrussell"
  `

  .run((
    conf => `echo "${conf}" > ~/.config/fish/config.fish`
  )([
    "set fish_greeting ''\\n"
  , "set -gx LC_ALL en_US.UTF-8\\n"
  , "set -gx LC_CTYPE en_US.UTF-8"
  ].join('')))
    
  .run(snippets.clean)
  ()

export default dockerfile
