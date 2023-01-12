# Build App with mqtt library

I was able to build mqtt for React following these steps:

inside of node_modules/mqtt create webpack.config.js:
const webpack = require('webpack')

module.exports = {

    entry: "./lib/connect/index.js",

    //mode: "development",

    output: {
        library:  {
            type: "commonjs2"
        },
        filename: "mqtt.browser.js"
    },

    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: [ 'buffer', 'Buffer' ],
        }),
    ],

    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            console: require.resolve('console-browserify'),
            constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            domain: require.resolve('domain-browser'),
            events: require.resolve('events'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            punycode: require.resolve('punycode'),
            process: require.resolve('process/browser'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            string_decoder: require.resolve('string_decoder'),
            sys: require.resolve('util'),
            timers: require.resolve('timers-browserify'),
            tty: require.resolve('tty-browserify'),
            url: require.resolve('url'),
            util: require.resolve('util'),
            vm: require.resolve('vm-browserify'),
            zlib: require.resolve('browserify-zlib'),
        }
    }

}
inside of node_modules/mqtt/package.json
add "type": "commonjs" (not sure if this is necessary)
under "browser" change ./mqtt.js": "./lib/connect/index.js" to "./mqtt.js": "./dist/mqtt.browser.js"
result:

{
...
"type": "commonjs",
"browser": {
"./mqtt.js": "./dist/mqtt.browser.js"
...
}
...
}
inside of node_modules/mqtt execute
npm i
npm i buffer process
npm i webpack webpack-cli
npx webpack

---

important!!! clean npm cache

delete node_modules/.cache folder
npm cache clean --force

rebuild your app

note: you can consume mqtt this way:

import { connect } from 'mqtt';

---
