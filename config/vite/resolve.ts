import { ViteOptions } from "./types/vite";

export default function viteResolve(options: ViteOptions) {
    return {
        alias: [
            {
                find: 'vue',
                replacement: 'vue/dist/vue.min.js'
            },
            {
                find: '@',
                replacement: options.paths.src,
            },
            {
                find: '@public',
                replacement: options.paths.public,
            },
        ],
        extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.jsx',
            '.css',
            '.scss',
            '.jpg',
            '.jpeg',
            '.png',
            '.svg',
            '.vue'
        ]
    }
}
