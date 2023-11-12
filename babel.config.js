module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          alias: {
            src: "./src",
            "@assets": "./src/assets",
            "@constants": "./src/constants",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@utils": "./src/utils"
          }
        }
      ]
    ]
  };
};
