<?php
    get_header();
        while(have_posts()) : the_post();
            get_template_part('templates/sections/hero', '', $post->ID);
            get_template_part('templates/sections/info');
            get_template_part('templates/sections/cta');
            get_template_part('templates/sections/slider', 'main');
            get_template_part('templates/sections/features');
            get_template_part('templates/sections/shop');
            get_template_part('templates/sections/quiz');
            get_template_part('templates/sections/about');
            get_template_part('templates/sections/contact');
        endwhile;
    get_footer();