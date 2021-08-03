FROM \
  mooxe/deno

RUN \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
    pnpm i -g purescript spago 

RUN \
  export PATH=$HOME/.fnm:$PATH && \
  eval "`fnm env`" && \
  sed -i -r 's/(\.\.\/){4}/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\//g' `which spago` && sed -i -r 's/(\.\.\/){4}/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\//g' `which purs`
