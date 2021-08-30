module Data.AddressBook where

import Prelude (
  ($)
, (<>)
, (==)
, (&&)
, (<<<)
, map
)

import Data.Foldable (
  foldMap
)

import Control.Plus (empty)
import Data.List (
  (:)
, List(..)
, filter
, head
)
import Data.Maybe (Maybe)

type Address = {
  street :: String
, city   :: String
, state  :: String
}

type Entry = {
  firstName :: String
, lastName  :: String
, address   :: Address
}

type AddressBook = List Entry

showAddress :: Address -> String
showAddress addr =
    foldMap (\n -> n <> ", ")
  $ addr.street
  : addr.city
  : addr.state
  : empty

showEntry :: Entry -> String
showEntry entry =
      entry.lastName <> ", " <> entry.firstName
  <>  ": " <> showAddress entry.address

emptyBook :: AddressBook
emptyBook = empty

insertEntry :: Entry -> AddressBook -> AddressBook
insertEntry = Cons

showAddressBook :: AddressBook -> String
showAddressBook addrBook =
    foldMap (\n -> n <> "\n")
  $ map showEntry addrBook

findEntry ::
  String -> String -> AddressBook
  -> Maybe Entry
findEntry firstName lastName =
  head <<< filter filterEntry
  where
    filterEntry :: Entry -> Boolean
    filterEntry entry =
          entry.firstName == firstName
      &&  entry.lastName == lastName
