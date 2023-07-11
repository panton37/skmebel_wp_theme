<?php $images = get_field('production_slider_top'); ?>

<section class="container mb-12 lg:mb-24">
    <div class="xl:px-20 pl-5 lg:pl-0 min-w-full grid grid-cols-1">
        <!-- Slider 40/60 container -->
        <div class="slider-6040 relative w-full h-full swiper">
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
            <div class="swiper-wrapper min-h-[190px] lg:min-h-[600px]">
                <!-- Slides -->
                <?php foreach( $images as $image ): ?>
                <div class="max-w-[90%] w-full swiper-slide lg:w-full lg:even:w-[calc(40%-25px/2)] lg:odd:w-[calc(60%-25px/2)] h-full">
                    <img class="w-full h-full max-h-[214px] lg:min-w-full lg:min-h-full lg:rounded-[40px] rounded-xl object-cover"
                         src="<?php echo $image; ?>" alt="Производство" />
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>