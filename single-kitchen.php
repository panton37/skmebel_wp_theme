<?php
    get_header();?>    
        <main>
                <div div class="mt-5">
                        <?php get_template_part('templates/sections/catalog_page/breadcrumbs');?>
                </div>
                <?php get_template_part('templates/sections/kitchen/slider', 'kitchen');
                get_template_part('templates/sections/kitchen/content-kitchen');?>
        </main>
    <?php get_footer(); ?>