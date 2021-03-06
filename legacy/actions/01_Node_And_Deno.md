```yml
name: 01_Node_And_Deno

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
        name: baseprd
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/baseprd
          push: true
          tags: |
            localhost:5000/mooxe/base:prd
            mooxe/base:prd

      -
        name: basedev add local port
        uses: jacobtomlinson/gha-find-replace@v2
        with:
          find: "localhost"
          replace: "localhost:5000"
          include: "**/Dockerfile"
          regex: true

      -
        name: basedev
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/basedev
          push: true
          tags: |
            localhost:5000/mooxe/base:dev
            mooxe/base:dev
            mooxe/base:latest
      -
        name: node
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/node
          push: true
          tags: |
            localhost:5000/mooxe/node
            mooxe/node
      -
        name: deno
        uses: docker/build-push-action@v2
        with:
          context: ./Docker/deno
          push: true
          tags: |
            localhost:5000/mooxe/deno
            mooxe/deno

      -
        name: Inspect
        run: |
          docker buildx imagetools inspect localhost:5000/mooxe/base:prd
          docker buildx imagetools inspect localhost:5000/mooxe/base:dev
          docker buildx imagetools inspect localhost:5000/mooxe/node
          docker buildx imagetools inspect localhost:5000/mooxe/deno
```
