import { UserConfig, splitVendorChunkPlugin, SplitVendorChunkCache } from "vite";
import { ViteOptions } from "./types/vite";
import vitePlugins from "./plugins";
import viteBuild from "./build";
import viteServer from "./server";
import viteResolve from "./resolve";

export function viteConfig(options: ViteOptions): UserConfig {
    return {
        root: options.paths.root,
        base: options.isDev ? '/' : options.paths.base,
        define: options.define,
        publicDir: options.paths.public,
        resolve: viteResolve(options),
        plugins: vitePlugins(options),
        build: viteBuild(options),
        server: viteServer(options),
        css: {
            devSourcemap: options.isDev,
        },
    }
}

