module.exports = function (api) {
  api.cache(true);
  // Extensions
  const extensions = [
    '.ts',
    '.tsx',
    '.js',
    '.jsx',
    '.json',
    '.android.js',
    '.ios.js',
    '.web.js',
  ];
  // Compile alias array
  const path = require('path');
  const { readdirSync } = require('fs');
  const sourceDir = path.resolve(__dirname, 'src');
  const alias = {
    '@': sourceDir,
    '@images': path.resolve(sourceDir, 'assets/images'),
  };
  readdirSync(sourceDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter(
      (dirname) =>
        !dirname.startsWith('.') &&
        !dirname.startsWith('_') &&
        !(dirname == 'node_modules')
    )
    .forEach(
      (dirname) => (alias['@' + dirname] = path.resolve(sourceDir, dirname))
    );

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ['@babel/plugin-transform-runtime'],
      [
        'module-resolver',
        {
          extensions: extensions,
          root: ['.'],
          alias: alias,
        },
      ],
    ],
  };
};
