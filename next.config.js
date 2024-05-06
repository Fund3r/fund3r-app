/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   basePath: "",
// };

// module.exports = nextConfig;

const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  webpack: (config, { isServer }) => {
    // 添加對 YAML 文件的支持
    config.module.rules.push({
      test: /\.ya?ml$/,
      // type: 'json', // 讓 webpack 將 YAML 處理為 JSON
      use: 'yaml-loader' // 使用 yaml-loader 來處理文件
    });

    return config;
  }
};

module.exports = nextConfig;

