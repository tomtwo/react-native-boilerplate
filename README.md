# react-native-boilerplate

React Native boilerplate with `redux`, `react-navigation`, `antd-mobile` pre-configured. Based on [CRNA](#create-react-native-app).

## Installation
```
# fetch this boilerplate
git clone https://github.com/tomtwo/react-native-boilerplate

# wipe out current git folder
cd react-native-boilerplate
rm -rf .git

# install dependencies
yarn # or npm install
```

## Development

- Preferred: use [XDE](https://github.com/expo/xde).
- Alternatively: `npm run start`

## dotenv support

Configuration is loaded from `.env` using `react-native-dotenv`. Create a `.env` file, populate with `KEY=VAL` entries, then use `import { KEY } from 'react-native-dotenv` (not `process.env`!). Variables are inlined at build time.

## create-react-native-app

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can see the original guide for CRNA [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).
