const VERSIONS = {
  nvm: '0.38.0'
, node_lts: '14.17.5'
, node: '16.8.0'
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
