const { i18n } = require("./next-i18next.config");

// add hostname cdn-images-1.medium.com

module.exports = {
  i18n,
  images: {
    domains: ["cdn-images-1.medium.com"],
  },
};
