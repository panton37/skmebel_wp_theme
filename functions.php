<?php
use Idleberg\WordpressViteAssets\WordpressViteAssets;

/*
|--------------------------------------------------------------------------
| Регистрация авто загрузчика composer
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our theme. We will simply require it into the script here so that we
| don't have to worry about manually loading any of our classes later on.
|
*/
if (! file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    wp_die(__('Ошибка загрузки. Пожалуйста выполните <code>composer install</code> в папке активной темы', 'sage'));
}

require_once $composer;

/**
 * Включение расширенного ответа API
 */
add_filter( 'acf/settings/rest_api_format', function () {
    return 'standard';
} );

/**
 * Custom rest API endpoints
 */
// Filters&sorting API
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/custom_kitchen', [
        'methods'  => 'GET',
        'callback' => 'custom_kitchen',
        'permission_callback' => '__return_true',
        'args' => [
            'page' => [
                'type' => 'integer',
                'default' => 1,
            ],
            'category' => [
                'type' => 'array'
            ],
            'material' => [
                'type' => 'array'
            ],
            'size' => [
                'type' => 'array'
            ],
            'color' => [
                'type' => 'array'
            ],
            'meta_key' => [
                'type' => 'string'
            ],
            'order' => [
                'type' => 'string'
            ],
            'price_from' => [
                'type' => 'integer'
            ],
            'price_to' => [
                'type' => 'integer'
            ],
            'per_page' => [
                'type' => 'integer',
                'default' => 999
            ]
        ]
    ]);
});

function get_template_response($args, string $item_slug) : WP_REST_Response
{
    $query = new WP_Query($args);

    $response_template = '';

    if ($query->have_posts()) {
        $posts = $query->get_posts();

        ob_start();

        foreach ($posts as $post) :
            get_template_part('templates/sections/catalog_page/item', $item_slug, [
                'post' => $post
            ]);
        endforeach;


        $response_template = ob_get_clean();
    }

    return new WP_REST_Response($response_template, 200, [
        'Content-Type' => 'text/plain; charset=utf-8',
        'X-WP-Total' => $query->found_posts,
        'X-WP-TotalPages' => $query->max_num_pages,
    ]);
}

// Filters API Callback
function custom_kitchen(WP_REST_Request $request) : WP_REST_Response
{
    $per_page = $request->get_param('per_page');

    $term_id = $request->get_param('category');
    $term_size_id = $request->get_param('size');
    $term_color_id = $request->get_param('color');
    $term_material_id = $request->get_param('material');

    $term_meta = $request->get_param('meta_key');
    $term_order = $request->get_param('order');

    $price_from = $request->get_param('price_from');
    $price_to = $request->get_param('price_to');

    function get_tax_query($term_id, $term_size_id, $term_color_id, $term_material_id) {
        $taxes = ['relation' => 'AND'];
        $term_id ? array_push($taxes, [
            'taxonomy' => 'style',
            'field' => 'term_id',
            'terms' => $term_id,
            'operator' => 'IN'
        ]) : [];
        $term_material_id ? array_push($taxes, [
            'taxonomy' => 'material',
            'field' => 'term_id',
            'terms' => $term_material_id,
            'operator' => 'IN'
        ]) : [];
        $term_size_id ? array_push($taxes, [
            'taxonomy' => 'size',
            'field' => 'term_id',
            'terms' => $term_size_id,
            'operator' => 'IN'
        ]) : [];
        $term_color_id ? array_push($taxes, [
            'taxonomy' => 'color',
            'field' => 'term_id',
            'terms' => $term_color_id,
            'operator' => 'IN'
        ]) : [];

        return $taxes;
    }

    $args = array_merge([
        'post_type' => 'kitchen',
        'paged' => $request->get_param('page'),
        'posts_per_page' => 1,
//        'posts_per_page' => $per_page,
    ], $term_meta ? [
            'meta_key'          => $term_meta,
            'orderby'           => 'meta_value_num',
            'order'             => $term_order
    ] : [],
        ($term_id || $term_size_id || $term_color_id || $term_material_id) ? [
            'tax_query' => get_tax_query(
                $term_id,
                $term_size_id,
                $term_color_id,
                $term_material_id),
        ] : [],
        ($price_from || $price_to) ? [
            'meta_query' => [
                'relation' => 'AND',
                [
                    'key' => 'kitchen_price',
                    'value' => [$price_from, $price_to],
                    'compare' => 'BETWEEN',
                    'type' => 'NUMERIC'
                ],
            ],
        ] : []);

    return get_template_response($args, 'kitchen');
}