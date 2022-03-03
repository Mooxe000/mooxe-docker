# Base Img

- Earthly

```bash
>> yay -S earthly
>> earthly config global.container_frontend podman-shell
>> cat ~/.earthly/config.yml
>> podman pull earthly/buildkitd
>> podman pull earthly/buildkitd:0.6.7
```

- alpine-glibc
  - alpine 3.15
    ```bash
    >> podman pull alpine:3.15
    ```
  - https://github.com/Docker-Hub-frolvlad/docker-alpine-glibc/blob/master/Dockerfile
  - https://hub.docker.com/r/frolvlad/alpine-glibc

- rust
  - https://github.com/rust-lang/docker-rust/blob/76c10aa123/1.58.1/alpine3.15/Dockerfile

- deno
  - https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile

- CN Mirror
  - https://mirror.tuna.tsinghua.edu.cn/help/alpine/
