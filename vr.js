const drakeRun = e =>
  e.reduce(
    (r, c) => ({
      ...r
    , [c]: `deno run -A --unstable ./drakefile.js ${c}`
    })
  , {}
  )

export default {
  scripts: drakeRun([
    'hello'
  , 'docker'
  , 'build'
  ])
}
