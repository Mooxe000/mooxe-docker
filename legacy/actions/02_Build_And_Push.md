```yml
name: 02_Build_And_Push

# on:
#   push:
#     branches:    
#       - 'releases/**'

on:
  workflow_dispatch:

jobs:

  docker_build_and_push:
    runs-on: ubuntu-latest
    services:
      registry:
        image: registry:2
        ports:
          - 5000:5000
    steps:
      -
        name: Checkout
        uses: actions/checkout@v2
      -
        name: Set up QEMU
        uses: docker/setup-qemu-action@v1
      -
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
        with:
          driver-opts: network=host

      -
        name: Login to DockerHub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      -
        name: rescript
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/rescript
          push: true
          tags: |
            localhost:5000/mooxe/rescript
            mooxe/rescript
      -
        name: purescript
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/purescript
          push: true
          tags: |
            localhost:5000/mooxe/purescript
            mooxe/purescript
      -
        name: nim
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/nim
          push: true
          tags: |
            localhost:5000/mooxe/nim
            mooxe/nim

      -
        name: vlang
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/vlang
          push: true
          tags: |
            localhost:5000/mooxe/vlang
            mooxe/vlang
      -
        name: zig
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/zig
          push: true
          tags: |
            localhost:5000/mooxe/zig
            mooxe/zig
      -
        name: rust
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/rust
          push: true
          tags: |
            localhost:5000/mooxe/rust
            mooxe/rust

      -
        name: Inspect
        run: |
          docker buildx imagetools inspect localhost:5000/mooxe/rescript
          docker buildx imagetools inspect localhost:5000/mooxe/purescript

          docker buildx imagetools inspect localhost:5000/mooxe/nim

          docker buildx imagetools inspect localhost:5000/mooxe/vlang
          docker buildx imagetools inspect localhost:5000/mooxe/zig
          docker buildx imagetools inspect localhost:5000/mooxe/rust
```
