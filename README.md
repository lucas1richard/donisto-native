# donisto-native
This is the repo for the react-native app of Donisto.

# Donisto
Donisto is a project with the goal of encouraging more donations to non-profits by enabling increased transparency of how the funds are used. Donisto will also help non-profits with their outreach efforts by enabling them to post a story or news item and have it be distributed across social media networks.

## Setup

**This is the only setup I've found that allows development on both Android and iOS without needing XCode on the machine.**

1. Install the expo cli on your machine
```bash
sudo npm i -g exp
```
2. Download the expo-client app on your phone
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
* I didn't use `create-react-native-app` because the packager never starts on my machine.
