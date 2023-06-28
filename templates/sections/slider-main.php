<?php $images = get_field('slider_imgs'); ?>

<section class="container mb-12 lg:mb-24">
    <div class="pl-5 lg:pl-0 min-w-full grid grid-cols-1">
        <!-- Slider main container -->
        <div class="relative w-full h-full swiper main-swiper">
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
                <?php foreach( $images as $image ): ?>
                <div class="swiper-slide lg:min-h-[368px] h-[214px] max-w-[90%]">
                    <img class="w-full max-h-[214px] lg:min-w-full lg:min-h-full lg:rounded-[40px] rounded-xl object-cover"
                         src="<?php echo $image; ?>" alt="Кухня" />
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>