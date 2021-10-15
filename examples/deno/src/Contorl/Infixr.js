import {
  compose
, composeFlipped
} from './Semigroupoid.js'

const Infixr = () => ''

const infixr = Infixr({
  '<<<': compose
, '>>>': composeFlipped
})

export default Infixr
export {
  infixr
}
