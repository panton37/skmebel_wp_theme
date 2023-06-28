export interface VitePaths {
    build: string;
    src: string;
    root: string;
    public: string;
    base: string;
}

export interface ViteOptions {
    paths: VitePaths,
    isDev: boolean,
    mode: string,
    port: number,
    host: string,
    domain: string,
    define: Record<string, any>,
    manifestName: string,
    command: 'build' | 'serve',
    theme?: string,
}

