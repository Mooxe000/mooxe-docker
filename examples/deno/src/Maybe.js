import Instance from "./Instance.js"

// const id = self => self
const Nothing = null

const Just = n => ({
  Just: n
})

const getJust = ({Just}) => Just

const Maybe = (() => {

  const instance = {

    // instance Functor Maybe where
    //   fmap f (Just x) = Just (f x)
    //   fmap f Nothing = Nothing
    Functor: {
      fmap: (f, t) =>
          t === Nothing
        ? Nothing
        : Just( f( getJust(t) ) )
    }

    // instance Applicative Maybe where
    //   pure = Just
    //   Nothing <*> _ = Nothing
    //   (Just f) <*> something = fmap f something
  , Applicative: ({Functor}) => ({
      pure: Just
    , fmap: (f, t) =>
            f === Nothing
        ||  t === Nothing
        ?   Nothing
        :   Functor.fmap(
              getJust(f), t
            )
    })

    // instance Monoid a => Monoid (Maybe a) where
    //   mempty = Nothing
    //   Nothing `mappend` m = m
    //   m `mappend` Nothing = m
    //   Just m1 `mappend` Just m2 = Just (m1 `mappend` m2)
  , Monid: {
      mempty: Nothing
    , mappend: (
        () => {
          const recMappend = (m1, m2) =>
                m1 === Nothing
            ||  m2 === Nothing
            ?   m1 === Nothing
            ?   m2
            :   m2 === Nothing
            ?   m1
            :   Nothing
            :   Just( recMappend( getJust(m1), getJust(m2) ))
          return recMappend
        }
      )()
    , mconcat: () => {}
    }

    // instance Monad Maybe where
    //   return x = Just x
    //   Nothing >>= f = Nothing
    //   Just x >>= f = f x
    //   fail _ = Nothing
  , Monad: ({Applicative}) => ({
      return: Applicative.pure
      // >>=
    , apply: (ma, fmb) =>
          ma === Nothing
        ? Nothing
        : fmb( getJust( ma ))
      // >>
    , bind: (fmb, ma) => apply(fmb, ma)
    , fail: () => Nothing
    })
  }

  const MaybeIns = Instance()
  .where(instance.Functor)
  .where(instance.Applicative)
  .where(instance.Monid)
  .where(instance.Monad)

  return (() => {
    const fn = MaybeIns()
    fn.F = MaybeIns.F
    return fn
  })()

})()

export default Maybe