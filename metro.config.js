const path = require("path");
const blacklist = require("metro-config/src/defaults/blacklist");
module.exports = {
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  },
  resolver: {
    //ignore scripts folder, too large files
    blacklistRE: blacklist([/scripts\/.*/]),
  },
};
