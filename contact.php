<?php
/*
* Template name: Страница контактов
*/

    get_header();?>    
        <main class="lg:mt-11">
                <div div class="lg:mb-12 mt-6 lg:mt-0">
                        <?php get_template_part('templates/sections/catalog_page/breadcrumbs');?>
                </div>
                <?php get_template_part('templates/sections/contact/contact-info'); ?>
                <?php get_template_part('templates/sections/contact/contact-contact'); ?>
                
                <?php get_template_part('templates/sections/contact/map-contact'); ?>
        </main>
    <?php get_footer(); ?>