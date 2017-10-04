# Yet another TS starter kit

An opinionated starter kit for TypeScript projects that contains Jest, TSLint and Travis CI configs

## Getting started

```sh
# Clone this starter kit
$ mkdir yet-another-app && cd $_
$ git init
$ git fetch --depth=1 -n https://github.com/hstkk/yet-another-ts-starter-kit.git
$ git reset --hard $(git commit-tree FETCH_HEAD^{tree} -m "Initial commit")
# Change author
$ sed -i "" -e "s/{{whoami}}/$(git config user.name) <$(git config user.email)>/g" LICENSE package.json
# Install dependencies
$ yarn install
# Start doing stuff
$ yarn run watch
```

## Commands

| Command | Description                       |
| ------- | --------------------------------- |
| `build` | Compiles TypeScript to JavaScript |
| `clean` | Removes compiled code             |
| `fix`   | Tries to fix linting errors       |
| `lint`  | Checks code for errors            |
| `test`  | Executes tests                    |
| `watch` | Executes tests when code changes  |
