import { defineConfig, loadEnv } from 'vite'
import { viteConfig } from "./config/vite/config";
import { ViteOptions } from "./config/vite/types/vite";
import * as path from "path";
const { resolve } = require('path');
export default defineConfig(({command, mode, ssrBuild}) => {
    const env = loadEnv(mode, process.cwd(), '')
    const dirName = path.basename(__dirname);

    const options: ViteOptions = {
        command: command,
        mode: mode,
        isDev: mode === 'development',
        host: env.DEV_HOST || 'localhost',
        port: +env.DEV_PORT || 3000,
        domain: env.DOMAIN || null,
        manifestName: env.MANIFEST || 'assets.json',
        define: {
            __IS_DEV__: mode === 'development',
        },
        paths: {
            root:  resolve(__dirname),
            build: resolve(__dirname, env.BUILD_DIR || 'dist'),
            src:   resolve(__dirname, 'src'),
            public: resolve(__dirname, env.PUBLIC_DIR || 'public'),
            base: env.PATH_TO_THEME + dirName + `/${env.BUILD_DIR}/`
        },
    }

    return viteConfig(options)
})
