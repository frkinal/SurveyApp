module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@assets': './src/assets/index.ts',
          '@components': './src/components/index.ts',
          '@components/types': './src/components/types/index.ts',
          '@navigators': './src/navigators/index.ts',
          '@navigators/types': './src/navigators/types/index.ts',
          '@screens': './src/screens/index.ts',
          '@utils': './src/utils/index.ts',
          '@languages': './src/i18n/index.ts',
          '@services': './src/api/index.ts',
          '@services/types': './src/api/types/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@slices': './src/redux/slices',
        },
      },
    ],
  ],
};
