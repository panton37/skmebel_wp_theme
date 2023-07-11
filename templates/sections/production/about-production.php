<section class="container mb-12 lg:mb-24">
    <div class="px-5 xl:px-20">
        <div class="mb-12 lg:mb-24">
            <img class="w-full rounded-xl lg:rounded-[40px] object-cover h-32 lg:h-[576px]"
            src="<?php the_field('production_about_image'); ?>" alt="About company">
        </div>
        <div class="mb-8">
            <?php the_field('production_about_content'); ?>
        </div>
        <div class="w-full mb-12"">
            <img class="lg:hidden rounded-xl object-cover w-full h-[257px]"
            src="<?php the_field('img_bottom_production'); ?>" alt="">
        </div>
    </div>                
</section>