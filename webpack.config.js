/* @flow */
/* eslint import/no-nodejs-modules: off, import/no-default-export: off */

import { getWebpackConfig, getNextVersion } from 'grumbler-scripts/config/webpack.config';
import { argv } from 'yargs';

import pkg from './package.json';
import globals from './globals';

const zoidGlobals = {
    ...globals.__ZOID__,
    __GLOBAL_KEY__:  `__zoid_${ getNextVersion(pkg, argv.level) }__`
};


export const FILE_NAME = 'zoid';
export const MODULE_NAME = 'zoid';

export const WEBPACK_CONFIG = getWebpackConfig({
    filename:   `${ FILE_NAME }.js`,
    modulename: MODULE_NAME,
    vars:       globals,
    minify:     false
});

export const WEBPACK_CONFIG_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       globals
});

export const WEBPACK_CONFIG_FRAME = getWebpackConfig({
    filename:   `${ FILE_NAME }.frame.js`,
    modulename: MODULE_NAME,
    minify:     false,
    vars:       {
        ...globals,

        __POST_ROBOT__: {
            ...globals.__POST_ROBOT__,
            __IE_POPUP_SUPPORT__: false
        },

        __ZOID__: {
            ...zoidGlobals,
            __POPUP_SUPPORT__: false
        }
    }
});

export const WEBPACK_CONFIG_FRAME_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.frame.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        ...globals,

        __POST_ROBOT__: {
            ...globals.__POST_ROBOT__,
            __IE_POPUP_SUPPORT__: false
        },

        __ZOID__: {
            ...zoidGlobals,
            __POPUP_SUPPORT__: false
        }
    }
});

export const WEBPACK_CONFIG_FRAMEWORK = getWebpackConfig({
    filename:   `${ FILE_NAME }.frameworks.js`,
    modulename: MODULE_NAME,
    minify:     false,
    vars:       {
        ...globals,

        __POST_ROBOT__: {
            ...globals.__POST_ROBOT__,
            __IE_POPUP_SUPPORT__: false
        },

        __ZOID__: {
            ...zoidGlobals,
            __POPUP_SUPPORT__:     false,
            __FRAMEWORK_SUPPORT__: true
        }
    }
});

export const WEBPACK_CONFIG_FRAMEWORK_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.frameworks.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        ...globals,

        __POST_ROBOT__: {
            ...globals.__POST_ROBOT__,
            __IE_POPUP_SUPPORT__: false
        },

        __ZOID__: {
            ...zoidGlobals,
            __POPUP_SUPPORT__:     false,
            __FRAMEWORK_SUPPORT__: true
        }
    }
});

export const WEBPACK_CONFIG_TEST = getWebpackConfig({
    test:           true,
    entry:          './test/zoid.js',
    libraryTarget:  undefined,
    vars:           {
        ...globals,

        __ZOID__: {
            ...zoidGlobals,
            __POPUP_SUPPORT__:     true,
            __FRAMEWORK_SUPPORT__: true
        }
    }
});

export default [ WEBPACK_CONFIG, WEBPACK_CONFIG_MIN, WEBPACK_CONFIG_FRAME, WEBPACK_CONFIG_FRAME_MIN, WEBPACK_CONFIG_FRAMEWORK, WEBPACK_CONFIG_FRAMEWORK_MIN ];
