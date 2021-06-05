export default {
  scripts: {
    [Deno.args[0]]: `deno run -A --unstable ./drakefile.js ${Deno.args[0]}`
  }
}
