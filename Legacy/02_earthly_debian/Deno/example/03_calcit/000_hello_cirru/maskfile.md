# calcit

## hello

```sh
echo Hello World!!!
```

## build

```sh
rm -rf ./build
mkdir -p ./build
bundle_calcit -o ./build
cr ./build/compact.cirru --emit-js --emit-path ./build/mjs -1
sed -i 's/@calcit\/procs/https:\/\/esm.sh\/&/' ./build/mjs/calcit.core.mjs
echo 'import { main_$x_ } from "./mjs/app.main.mjs";' >> ./build/main.js
echo 'main_$x_();' >> ./build/main.js
```

## run

```sh
deno run --unstable --allow-env ./build/main.js
```

## bundle

```sh
deno bundle --unstable --allow-env ./build/main.js ./build/main.bundle.js
```

## compile

```sh
deno compile -o ./build/main ./build/main.bundle.js
```

## run-native

```sh
./build/main
```
