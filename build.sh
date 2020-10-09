#!/bin/sh
# set -e reports the failure of any command as a shell error
set -e
# installs node_modules based on what is in package-lock.json
npm install
npx parcel build index.html
# while creating the file first time, run in command prompt chmod +x build.sh to give executable rights