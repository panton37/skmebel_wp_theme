import { ServerOptions } from "vite";

export default function viteServer(options: any): ServerOptions {
    return {
        cors: true,
        strictPort: true,
        port: 3000,
        https: false,
        hmr: {
            host: 'localhost',
        },
    }
}
