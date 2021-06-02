export default {
  update: `
    apt-get update &&
    apt-get -y upgrade
  `
, clean: `
    apt-get autoremove -y &&
    apt-get clean &&
    rm -rf /var/lib/apt/lists/*
  `
, install: (installer = 'fast') =>
    soft =>
      `apt-${installer} install -y ${
        Array.isArray(soft)
      ? soft.join(' ')
      : soft
      }`
}
