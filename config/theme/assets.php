<?php
$theme = Theme::getInstance();
$theme->setAssetsJson(get_theme_file_path(THEME_BUILD_DIR . '/' . THEME_MANIFEST), 'vite');



add_action('wp_enqueue_scripts', 'theme_init_assets');
function theme_init_assets() {

    if( ! is_admin() ){
        wp_deregister_script('jquery');
        wp_register_script('jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", false, null, true);

        wp_enqueue_script('jquery');
        wp_enqueue_script('wp-api');

        $theme = Theme::getInstance();

        $theme->injectViteAssets();
    }
}

//wp_add_inline_script( 'wp-api-request', "try { sessionStorage.removeItem( 'wp-api-schema-model' + wpApiSettings.root + wpApiSettings.versionString ); } catch ( err ) {}" );

