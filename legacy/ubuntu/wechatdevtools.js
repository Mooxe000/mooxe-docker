import DockerFile from '../Docker_file.js'
import snippets from './snippets/index.js'

const dockerfile = () =>

  DockerFile()
  .from`localhost/mooxe/winenwjs`

  .run(snippets.update)

  .run`
    set -ex;
    mkdir -p $HOME/.WeChatDevTools;
    axel -o $HOME/.WeChatDevTools/WeChatDevTools.7z \
      'https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1052107090&version_type=1';
  `

  .run(
    snippets.install()`p7zip-full`
  )

  .run`
    set -ex;
    cd $HOME/.WeChatDevTools;
    yes 'A' | 7z x ./WeChatDevTools.7z;
    rm -rf ./WeChatDevTools.7z;
  `

  .run`
    set -ex;
    cd $HOME/.WeChatDevTools;
    mv \\?\\?\\?\\?\\?\\?\\?.exe 微信小程序开发工具.exe;
  `

  .run(
    snippets.install()([
    , 'liblcm1'
    // , 'libntlm0'
    // , 'liblcm1-dev'

    // , 'apt-utils'
    // , 'dbus-x11'
    // , 'libasound2'
    // , 'libatk1.0-0'
    // , 'libatomic1'
    // , 'libcanberra-gtk3-module'
    // , 'libgconf-2-4'
    // , 'libgtk3.0'
    // , 'libnss3'
    // , 'libupower-glib3'
    // , 'libxtst6'
    // , 'libx11-6'
    // , 'libx11-xcb1'
    // , 'libxss1'
    // , 'libxrandr2'
    // , 'mesa-utils'
    // , 'ttf-wqy-microhei'
    // , 'upower'
    // , 'wine'
    // , 'wine32'
    // , 'wine-binfmt'
    // , 'xserver-xorg-video-all'
    ])
  )

  // .cmd`
    // dpkg --add-architecture i386 &&
    // /etc/init.d/dbus start &&
    // wine $HOME/.WeChatDevTools/微信小程序开发工具.exe
  // `

  ()

export default dockerfile
