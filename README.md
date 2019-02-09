## Setup

**This is the only setup I've found that allows development on both Android and IOS without needing XCode on the machine.**

1. Install the expo cli on your machine
```bash
sudo npm i -g exp
```
2. Download the expo app on your phone
3. Install dependencies
```bash
npm install
```
4. Start the mobile app
```bash
exp start
```

## General Notes

* *Redux Devtools can be found at the following url after starting the project:*
  http://remotedev.io/local/
* There is no webpack for this project.
* Absolute import paths are created by adding `package.json` files in directories and giving them names.
* I didn't use `create-react-native-app` because the packager never starts on my machine.

## Specific Notes

* When using styled-components, you can't just use `padding` or `margin`, you must specify the side like `padding-top` or `margin-left` 