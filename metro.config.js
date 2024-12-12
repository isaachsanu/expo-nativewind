// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require("nativewind/metro");
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const tailwindPath = path.resolve(__dirname, 'assets/tailwind/global.css');

module.exports = withNativeWind(config, { input: tailwindPath });