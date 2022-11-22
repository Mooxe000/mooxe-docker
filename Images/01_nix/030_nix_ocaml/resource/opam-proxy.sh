#!/usr/bin/env bash

for file in $(
  grep \
    -e 'github\.com.*archive' \
    -e 'github\.com.*releases' \
    $(find ~/.opam-repository -name opam) \
  | sed -re 's/(\/opam).*$/\1/'
)
do

  echo $file

  if [[ ! -z $(grep 'github\.com.*releases' $file) ]]
  then
    sed \
      -i "s/github\.com.*releases/ghproxy\.com\\/&/" \
      $file
    grep 'github\.com.*releases' $file
  fi

  if [[ ! -z $(grep 'github\.com.*archive' $file) ]]
  then
    sed \
      -i "s/github\.com.*archive/ghproxy\.com\\/&/" \
      $file
    grep 'github\.com.*archive' $file
  fi

done
