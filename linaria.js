const __PROD__ = process.env.NODE_ENV === 'production';
const matches = ({test}) => test instanceof RegExp && test.source.includes('ts');
const babel = ({presets}) => ({
    // [["node_modules/babel-preset-react-app/index.js",{"runtime":"automatic"}]]
    presets: presets.map(([preset, options]) => [preset, {
        ...options,
        useESModules: false,
    }]),
});
const pipeline = ({loader, options}) => [
    {loader, options},
    {
        loader: '@linaria/webpack5-loader',
        options: {
            babelOptions: babel(options),
            sourceMap: !__PROD__,
            cacheDirectory: false,
        }
    },
];

export function inject(rule) {
    if (!matches(rule)) return;
    rule.use = pipeline(rule);
    delete rule.loader;
    delete rule.options;
    return true;
}