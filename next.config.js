const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps");
const withImages = require("next-images");

module.exports = withImages(
  withCSS(
    withSourceMaps({
      webpack(config /*, options*/) {
        return config;
      }
    })
  )
);
