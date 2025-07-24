const nextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
  webpack(config: {
    module?: {
      rules?: Array<unknown>;
    };
    [key: string]: unknown;
  }) {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: { and: [/\.(?:tsx?|jsx?)$/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      });
    }

    return config;
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
