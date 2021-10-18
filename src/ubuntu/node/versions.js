const VERSIONS = {
  nvm: '0.39.0'
, node_lts: '14.18.1'
, node: '16.11.1'
}

export {
  VERSIONS
}

export default {
  nvm: DF => DF
    .env(`NVM_VERSION ${VERSIONS.nvm}`)
, node: DF => DF
    .env(`NODE_VERSION_LTS ${VERSIONS.node_lts}`)
    .env(`NODE_VERSION ${VERSIONS.node}`)
}
