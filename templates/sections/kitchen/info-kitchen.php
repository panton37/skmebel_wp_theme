<section class="container mb-12 lg:mb-24">
    <div class="catalog_main grid grid-cols-12 px-5 xl:px-20 lg:gap-x-12">
        <div class="col-span-12 lg:col-span-8">
            <div class="">
                <?php the_field('kitchen_full_description', $post); ?>
            </div>
        </div>
        <!-- RIGHT SECTION      -->
        <div class="col-span-12 lg:col-span-4 hidden lg:flex">
            <img class="rounded-[40px] h-fit object-cover aspect-square" 
            src="<?php the_field('kitchen_image_in_description', $post); ?>" alt="Happy family">
        </div>                    
    </div>                
</section>