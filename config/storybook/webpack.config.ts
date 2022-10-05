import path from 'path';
import { Configuration } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    output: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};
