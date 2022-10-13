#!/bin/bash

xhost +

podman run \
  --name=winenwjs \
  -ti --rm \
  -e DISPLAY \
  --net=host \
  localhost/mooxe/winenwjs \
    /usr/bin/env bash -lc 'nw'
