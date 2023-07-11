<?php
/*
* Template name: Страница производство
*/

    get_header();?>    
        <main class="lg:mt-11">
                <div div class="lg:mb-12">
                        <?php get_template_part('templates/sections/catalog_page/breadcrumbs');?>
                </div>
                <div class="container px-5 xl:px-20">
                    <h1 class="mb-4 text-4xl lg:tetx-6xl lg:mb-7 font-medium">Производство</h1>
                </div>
                <?php get_template_part('templates/sections/production/slider', 'production');
                get_template_part('templates/sections/production/content-production');?>
        </main>
    <?php get_footer(); ?>