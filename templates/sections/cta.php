<?php $post_id = $args ?>

<section class="container mb-12 lg:mb-24">
    <div class="">
        <img class="lg:rounded-[3.75rem]"
             src="<?php the_field('cta_image', $post_id); ?>" alt="">
        </img>
        <div class="grid px-5 pt-4 lg:px-20 lg:pt-20 rounded-xl -translate-y-3 -mb-3 bg-white
                    lg:mx-20 lg:rounded-[3.75rem] lg:translate-y-[-14.438rem] lg:mb-[-14.438rem]">
            <h2 class="text-3xl tracking-tight mb-6 lg:text-5xl lg:mb-12">
                <?php the_field('cta_title', $post_id); ?>
            </h2>
            <p class="lg:text-xl mb-8 lg:mb-12">
                <?php the_field('cta_description', $post_id); ?>
            </p>
            <a href="<?php the_field('cta_btnurl', $post_id); ?>" class="secondary-btn w-full lg:w-fit mx-auto">
                <?php the_field('cta_btntext', $post_id); ?>
            </a>
        </div>
    </div>
</section>
