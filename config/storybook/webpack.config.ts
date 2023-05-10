import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    output: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
  };

  config!.resolve!.modules = [paths.src, 'node_modules'];
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.resolve!.alias = { '@': paths.src };

  config.module?.rules?.push(buildCssLoader(true));

  config?.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
