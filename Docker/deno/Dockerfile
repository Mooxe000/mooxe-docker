FROM \
  mooxe/node

RUN \
  curl -fsSL https://deno.land/x/dvm/install.sh | sh

RUN \
  echo " \
    source $HOME/.bash_profile \
  " >> $HOME/.bashrc && \
  echo " \
    source $HOME/.bash_profile \
  " >> $HOME/.zshrc && \
  echo " \
    source $HOME/.bash_profile \
  " >> $HOME/.config/fish/config.fish

RUN \
  bash -lc " \
    dvm install 1.15.1 \
  "


RUN \
  /bin/fish -lc "deno install -qAn vr https://deno.land/x/velociraptor@1.2.0/cli.ts" && /bin/fish -lc "deno install --allow-all -r -f --unstable https://deno.land/x/dzx@0.2.4/dzx.ts" && /bin/fish -lc "deno install -A --unstable --import-map=https://deno.land/x/trex/import_map.json -n trex --no-check https://deno.land/x/trex/cli.ts"