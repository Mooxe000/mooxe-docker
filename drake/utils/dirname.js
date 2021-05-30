const dirname = (url) =>
  new URL(
    '.'
  , url
  ).pathname

const filename = (url) =>
  new URL(
    ''
  , url
  ).pathname

const __ = (url) => {
  return {
    __dirname: dirname(url)
  , __filename: filename(url)
  }
}

export {
  dirname
, filename
}

export default __
