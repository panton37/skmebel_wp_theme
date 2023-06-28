import liveReload from 'vite-plugin-live-reload'
import {ViteOptions} from "./types/vite";
import devManifest from 'vite-plugin-dev-manifest'
import tsconfigPaths from 'vite-tsconfig-paths'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import { resolve } from "path";
import { PluginOption } from "vite";
export default function vitePlugins(options: ViteOptions): PluginOption[] {
    return [
        devManifest({
            manifestName: options.manifestName.replace('.json','')
        }),
        liveReload(options.paths.root + '/**/*.php'),
        tsconfigPaths(),
        createSvgIconsPlugin({
            iconDirs: [resolve(options.paths.src, 'assets', 'icons')],
            symbolId: 'icon-[name]',
            svgoOptions: {
                plugins:
                    [
                        {
                            name: 'removeAttrs', params: {
                                attrs: ['class', 'data-name', 'fill', 'stroke'],
                            },
                        },
                    ],
            },
        }),
    ]
}
