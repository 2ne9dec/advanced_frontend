import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildBabelLoader, buildCssLoader, buildSvgLoader, buildUrlLoader } from './loaders';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;
  const cssLoader = buildCssLoader(isDev);
  const svgLoader = buildSvgLoader();
  const urlLoader = buildUrlLoader();
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  return [urlLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
}
