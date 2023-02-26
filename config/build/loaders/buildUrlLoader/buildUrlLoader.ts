export const buildUrlLoader = () => {
  return {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
        },
      },
    ],
  };
};
