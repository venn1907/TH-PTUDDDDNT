// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
// If you ever need to use expo-router/metro directly, you can also do:
// const { withExpoMetro } = require('expo-router/metro');
// module.exports = withExpoMetro(getDefaultConfig(__dirname));

const config = getDefaultConfig(__dirname);

// Tell Metro how to hash & bundle Expo assets (images, fonts, etc.)
config.transformer = {
  ...config.transformer,
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
};

// Ensure Metro knows where AssetRegistry lives, so `?as=asset-registry-path` works
config.transformer.assetRegistryPath =
  require.resolve('react-native/Libraries/Image/AssetRegistry');

// (Optional) Add/remove extensions if you use SVG, custom fonts, etc.
// e.g. to support .svg via react-native-svg-transformer:
//   const ext = config.resolver.assetExts;
//   config.resolver.assetExts = ext.filter(e => e !== 'svg');
//   config.resolver.sourceExts.push('svg');

module.exports = config;
