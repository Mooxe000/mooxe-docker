const getTaskName = () =>
    Deno.args[0].includes(':')
  ? Deno.args[0].split(':')
    .reduce(
      (r, c, i) => 
          i === 0
        ? {
            name: c
          , args: []
          }
        : {
            name: r.name
          , args: [
              ...r.args
            , c
            ]
          }
    , {}
    )
  : Deno.args[0]

export default getTaskName
