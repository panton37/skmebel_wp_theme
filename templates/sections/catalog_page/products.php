<?php
$props = $args ?? null;
$post_id = $props['post_id'] ?? null;

$per_page = intval(get_field('products_per_page', $post_id)) ?? 14;

$products_page = new WP_Query([
    'post_type' => 'kitchen',
    'page' => 1,
    'posts_per_page' => $per_page
]);

//$categories = get_terms([
//    'taxonomy' => 'vacancy_category',
//    'hide_empty' => false
// ]);
?>

<div class="products-block col-span-12 lg:col-span-8">
    <h1 class="text-3xl tracking-tight font-medium mb-4 lg:mb-9 lg:text-6xl">Готовые кухонные гарнитуры и комплекты</h1>
    <button class="xl:hidden group flex items-center justify-center space-x-4 primary-btn py-5 bg-primary-black-40
                   text-primary-black-50 w-full mb-8">
        <span class="">По популярности</span>
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="group-hover:fill-white" d="M0.199219 1.69999L1.59922 0.299988L6.19922 4.89999L10.7992 0.299988L12.1992 1.69999L6.19922 7.69999L0.199219 1.69999Z" fill="#737D8C"/>
        </svg>
    </button>
    <div class="hidden xl:flex gap-x-7 mb-9">
        <div class="cursor-pointer text-xl">
            По популярности
        </div>
        <div class="cheap-first cursor-pointer text-xl text-primary-black-50">
            Сначала дешевле
        </div>
        <div class="expensive-first cursor-pointer text-xl text-primary-black-50">
            Сначала дороже
        </div>
        <div class="sale-first cursor-pointer text-xl text-primary-black-50">
            По скидке
        </div>
    </div>
    <div class="mb-12 relative">
        <div class="loading_spinner hidden transition-all bg-white/50 w-full h-full absolute left-0 right-0 top-0 bottom-0">
            <div class="flex w-full h-full justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#e90c59" stroke-width="2">
                        <animate attributeName="r" repeatCount="indefinite" dur="2.272727272727273s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="2.272727272727273s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#46dff0" stroke-width="2">
                        <animate attributeName="r" repeatCount="indefinite" dur="2.272727272727273s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-1.1363636363636365s"></animate>
                        <animate attributeName="opacity" repeatCount="indefinite" dur="2.272727272727273s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-1.1363636363636365s"></animate>
                    </circle>
                </svg>
            </div>
        </div>
        <div class="products grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-12 mb-8">
            <!--Products container-->
            <?php if ($products_page->have_posts()) : ?>
                <?php get_template_part('templates/sections/catalog_page/item', 'kitchen', $products_page->posts) ?>
            <?php endif; ?>
        </div>
        <div class="w-full flex justify-center">
            <button class="xl:hidden group flex items-center justify-center space-x-4 primary-btn py-5
                   text-primary-hover-100 w-fit bg-transparent mb-8 border-2 border-primary-hover-50">
                <span class="">Показать больше</span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-primary-hover-100 group-hover:fill-white" d="M0.199219 1.69999L1.59922 0.299988L6.19922 4.89999L10.7992 0.299988L12.1992 1.69999L6.19922 7.69999L0.199219 1.69999Z" fill="#737D8C"/>
                </svg>
            </button>
        </div>
        <?php get_template_part('templates/sections/catalog_page/pagination'); ?>
    </div>
    <?php get_template_part('templates/sections/catalog_page/promo-banner'); ?>
    <?php get_template_part('templates/sections/catalog_page/info-block'); ?>
</div>