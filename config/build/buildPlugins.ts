import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(props: BuildOptions): WebpackPluginInstance[] {
  const { paths, isDev } = props;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
