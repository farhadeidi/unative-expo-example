const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withUnative } = require("unative/theme/with-unative");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withUnative(
  withNativeWind(config, { input: "./global.css" }),
  {
    css: "./global.css",
    outputDir: "./src/lib/unative",
  }
);
