export default {
  scripts: {
    [Deno.args[0]]: `deno run -A --unstable --import-map=import_map.json ./drakefile.js ${Deno.args[0]}`
  }
}
