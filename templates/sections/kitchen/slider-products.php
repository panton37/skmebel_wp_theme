<?php 
// args
$args = array(
    'post_type'        => 'kitchen',
    'posts_per_page' => 16,
);
$kitchens = new WP_Query( $args );
?>

<section class="container mb-12 lg:mb-0">
    <div class="pl-5 lg:px-20 min-w-full grid grid-cols-1">
        <h2 class="mb-4 lg:mb-12 text-3xl font-medium lg:text-6xl">Похожие проекты</h2>
        <!-- Slider main container -->
        <div class="relative w-full h-full swiper products-swiper">
            <!-- Navigation buttons -->
            <div class="slider-prev hidden lg:block absolute z-20 top-[calc(50%-40px)] left-[calc(10px-28px)]
                        bg-white rounded-2xl py-5 px-7 cursor-pointer">
                <img src="<?php echo get_theme_file_uri('src/app/assets/img/slider_arrow.svg') ?>" alt="Далее" />
            </div>
            <div class="slider-next hidden lg:block absolute z-20 top-[calc(50%-40px)] right-[calc(10px-28px)]
                        rotate-180 bg-white rounded-2xl py-5 px-7 cursor-pointer">
                <img src="<?php echo get_theme_file_uri('src/app/assets/img/slider_arrow.svg') ?>" alt="Далее" />
            </div>

            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <?php foreach ($kitchens->posts as $post) : ?>
                    <article class="swiper-slide group cursor-pointer max-w-[40%]">
                        <a href="#">
                            <img class="h-[219px] lg:h-[450px] w-full mb-2 rounded-xl xl:rounded-3xl xl:mb-5 object-cover"
                                src="<?php the_field('kitchen_image', $post); ?>" alt="<?php the_field('kitchen_name', $post); ?>" />
                            <div class="px-2 xl:px-5">
                                <h3 class="group-hover:text-primary-hover-100 transition-colors duration-300 ease-in-out text-lg leading-5 font-medium mb-1 xl:text-3xl xl:font-semibold">
                                    <?php the_field('kitchen_name', $post); ?>
                                </h3>
                                <p class="line-clamp-2 mb-3 xl:text-xl xl:mb-8">
                                    <?php the_field('kitchen_description', $post); ?>
                                </p>
                                <p class="text-lg leading-5 font-medium xl:font-semibold xl:text-3xl">
                                    <?php the_field('kitchen_price', $post); ?>&nbsp;₽
                                <span class="text-xs">- <?php the_field('kitchen_sale', $post); ?>%</span>
                                </p>
                            </div>
                        </a>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>