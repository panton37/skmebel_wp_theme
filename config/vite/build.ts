import { resolve } from "path";
import { ViteOptions } from "./types/vite";
import { BuildOptions } from "vite";

export default function viteBuild(options: ViteOptions): BuildOptions {
    return {
        manifest: options.manifestName,
        emptyOutDir: true,
        write: true,
        cssMinify: !options.isDev,
        minify: !options.isDev,
        outDir: options.paths.build,
        sourcemap: options.isDev,
        target: 'es2018',
        commonjsOptions: {
            sourceMap: options.isDev,
        },
        rollupOptions: {
            input: {
                main: resolve(options.paths.src, 'main.ts')
            },
            output: {
                entryFileNames: `[name].[hash].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.')[1];

                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }

                    if (/css|scss/i.test(extType)) {
                        extType = 'css';
                    }

                    if (extType === 'css') {
                        return `${extType}/[name].[hash][extname]`;
                    }

                    return `assets/${extType}/[name].[hash][extname]`;
                },
            }
        },
    }
}
