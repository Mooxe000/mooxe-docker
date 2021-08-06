module Main where

import Prelude (
  ($)
, Unit
, discard
)

import Effect (Effect)
import Effect.Console (log)

import Data.AddressBook (
  Address
, Entry
, AddressBook

, showAddress
, showEntry
, showAddressBook

, emptyBook
, insertEntry
)

main :: Effect Unit
main = do
  log "Hello World!!!"

  let
    address :: Address
    address = {
      street: "123 Fake St."
    , city: "Faketown"
    , state: "CA"
    }
    entry :: Entry
    entry = {
      firstName: "John"
    , lastName: "Smith"
    , address: address
    }

  log $ showAddress address
  log $ showEntry entry

  let

    john :: Entry
    john = {
      firstName: "John"
    , lastName: "Smith"
    , address: {
        street: "123 Fake St."
      , city: "Faketown"
      , state: "CA"
      }
    }

    peggy :: Entry
    peggy = {
      firstName: "Peggy"
    , lastName: "Hill"
    , address: {
        street: "84 Rainey St."
      , city: "Arlen"
      , state: "TX"
      }
    }

    ned :: Entry
    ned = {
      firstName: "Ned"
    , lastName: "Flanders"
    , address: {
        street: "740 Evergreen Terrace"
      , city: "Springfield"
      , state: "USA"
      }
    }

    book :: AddressBook
    book =
        insertEntry john
      $ insertEntry peggy
      $ insertEntry ned 
          emptyBook

  log "==========="
  log $ showAddressBook book
