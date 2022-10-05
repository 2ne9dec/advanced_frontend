import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildBabelLoaders, buildCssLoaders, buildSvgLoaders, buildTypescriptLoaders, buildUrlLoaders } from './loaders';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader = buildTypescriptLoaders();
  const cssLoader = buildCssLoaders(isDev);
  const svgLoader = buildSvgLoaders();
  const urlLoader = buildUrlLoaders();
  const babelLoader = buildBabelLoaders();

  return [urlLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
