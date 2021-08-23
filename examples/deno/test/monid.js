// instance (Monoid w) => Monad (Writer w) where
//   return x = Writer (x, mempty)
//   (Writer (x,v)) >>= f =
//     let
//       (Writer (y, v')) = f x
//     in
//       Writer (y, v `mappend` v')

const tWriter = () => {

  const tc = w => {
    try {
      typeChecker.Writer(w)
      typeChecker.Monid(w)
      typeChecker.Monad(Writer(w))
    }
    catch (e) {
      throw new Error('Type Error!')
    }
  }

  return {

    return: x => {

      const w = Writer(x, Writer.mempty)

      tc(w)

      return w

    }

  , bind: (writer, f) => {

      tc(writer)

      const [
        x, v
      ] = writer.get()

      const Writer = () => {

        const w = f(x)

        tc(w)

        const [ y, _v ] = w.get()

        const r_w = Writer([
          y, Witer.mappend(v, _v)
        ])

        tc(r_w)

        return r_w

      }

    }

  }

}
