#!/bin/sh
# set -e reports the failure of any command as a shell error
set -e
# installs node_modules based on what is in package-lock.json
npm install
npx parcel build index.html
# mkdir -p dist/mp3s
# cp mp3s/* dist/mp3s
# mkdir -p dist/audio
# cp audio/* dist/audio
# mkdir -p dist/images
# cp images/* dist/images
# while creating the file first time, run in command prompt chmod +x build.sh to give executable rights