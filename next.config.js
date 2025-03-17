const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
});
