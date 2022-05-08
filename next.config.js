const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    disableStaticImages: true,
  },
};

const optimizedImagesConfig = {
  optimizeImagesInDev: true,
  handleImages: ["jpeg"],
  defaultImageLoader: "responsive-loader",
  responsive: {
    adapter: require("responsive-loader/sharp"),
    format: "webp",
    sizes: [128, 256, 320, 640, 960, 1080, 1200, 1920, 2048, 3840],
    // min: 128,
    // max: 3840,
    // steps: 10,
    quality: 70,
  },
};

module.exports = withPlugins(
  [[optimizedImages, optimizedImagesConfig]],
  nextConfig
);
