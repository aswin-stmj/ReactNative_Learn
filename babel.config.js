module.exports = {
  presets: ['module:metro-react-native-babel-preset',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-class-properties', { loose: true}],
    ['@babel/plugin-proposal-private-methods', { loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true}],
  ],
  exclude: /node_modules\/realm\//,
};
