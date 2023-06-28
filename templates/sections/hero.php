<?php $post_id = $args ?>

<section class="container mb-12">
    <div class="pt-5 lg:pt-0 px-5 xl:relative lg:pl-20">
        <div>
            <img class="xl:max-h-[820px] mb-6 xl:object-cover xl:rounded-[30.9512px] xl:max-w-[80%] xl:min-h-[80vh] xl:ml-auto xl:object-right"
                    src="<?php the_field('hero_image', $post_id); ?>" alt="СК Мебель">
        </div>
        <div class="xl:absolute xl:left-0 md:top-[20%]">
            <div class="bg-white xl:pl-20 xl:py-20 xl:pr-24 xl:rounded-r-[2.5rem]
                        xl:grid">
                <h1 class="text-4xl tracking-tight font-medium mb-2.5 xl:mb-11 xl:text-7xl">
                    <?php the_field('hero_title', $post_id); ?>
                </h1>
                <p class="mb-5 xl:order-2">
                    <?php the_field('hero_subtitle', $post_id); ?>
                </p>
                <a href="<?php the_field('hero_buttonlink', $post_id); ?>"
                   class="secondary-btn w-full xl:order-1 xl:w-fit xl:text-xl inline-block text-center
                xl:tracking-tighter xl:absolute xl:right-[42px] xl:top-[167px]"><?php the_field('hero_button', $post_id); ?></a>
            </div>
        </div>
    </div>
</section>