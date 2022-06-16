export default envRun => DF => DF

  .run(envRun`
    npm i -g npm
  `)
  .run(envRun`
    npm i -g pnpm
  `)
  .run(envRun`
    pnpm add -g pnpm
  `)

  // -- npm root -g
  // -- yarn global bin
  // -- yarn global dir
  // /bin/bash -lc "yarn config set prefix $(npm root -g)/../../"
  // echo "--global-folder \"$(bash -lc 'npm root -g')/../\"" \
  //    >> ~/.yarnrc

  // pnpm i -g yrm
  .run(envRun`
    pnpm i -g nnrm
  `)

  // .run(fnmRun`
  //   nnrm use taobao
  // `)

  .run(envRun`
    pnpm i -g npm yarn
  `)
  .run(envRun`
    pnpm i -g node-gyp
  `)

  // pnpm i -g node-inspector
  .run(envRun`
    pnpm i -g pnpm npm-check
  `)

  // pnpm i -g coffeescript
  // pnpm i -g rollup gulp-cli
  // pnpm i -g add harp

  .run(envRun`
    pnpm i -g supervisor nodemon forever pm2
  `)
  .run(envRun`
    pnpm i -g serve http-server
  `)
  // pnpm i -g lerna autod

  // pnpm i -g json-server
  // pnpm i -g now

  .run`echo "unsafe-perm = true" >> ~/.npmrc`
