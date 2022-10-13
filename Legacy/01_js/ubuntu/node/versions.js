const VERSIONS = {
  nvm: '0.39.1'
, node_lts: '16.13.2'
, node: '17.4.0'
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
