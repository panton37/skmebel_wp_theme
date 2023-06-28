<?php
/*
* Template name: Страница каталога
*/

get_header();
    get_template_part('templates/sections/catalog_page/banner');
    get_template_part('templates/sections/catalog_page/breadcrumbs');
    ?>
    <section class="container mb-12 lg:mb-24">
        <div class="grid grid-cols-12 px-5 xl:px-20 lg:gap-x-12">
            <?php get_template_part('templates/sections/catalog_page/filter'); ?>
            <?php get_template_part('templates/sections/catalog_page/products'); ?>
        </div>
        <?php get_template_part('templates/sections/catalog_page/contact-products'); ?>
    </section>
    <?php

get_footer();