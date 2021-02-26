const {
  getDefaultConfig,
} = require("@expo/react-native-vector-icons/Ionicons");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("db");

module.exports = defaultConfig;
