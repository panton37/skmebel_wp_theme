<?php
use function Env\env;

/*
|--------------------------------------------------------------------------
| Получение данных из .env файла
|--------------------------------------------------------------------------
*/
$env_files = file_exists(get_theme_file_path('.env.local'))
    ? [ '.env', '.env.local' ]
    : [ '.env' ];

$dotenv = Dotenv\Dotenv::createUnsafeImmutable(get_template_directory(), $env_files, false);

if (file_exists(get_theme_file_path('.env'))) {
    $dotenv->load();
}

/*
|--------------------------------------------------------------------------
| Объявление переменных темы
|--------------------------------------------------------------------------
*/
define('THEME_MOD', env('MODE') ?? 'production');
define('THEME_HOST', env('HOST') ?? 'localhost');
define('THEME_PORT', env('PORT') ?? '3000');
define('THEME_BUILD_DIR', env('BUILD_DIR') ?? 'dist');
define('THEME_PUBLIC_DIR', env('PUBLIC_DIR') ?? 'public');
define('THEME_MANIFEST', env('MANIFEST') ?? 'assets.json');
