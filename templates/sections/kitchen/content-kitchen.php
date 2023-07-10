<section class="container mb-12 lg:mb-24">
    <div class="catalog_main grid grid-cols-12 px-5 xl:px-20 lg:gap-x-12">
        <div class="col-span-12 lg:col-span-4">
            <h1 class="mb-4 lg:mb-11 text-3xl font-medium lg:text-6xl">
            <?php the_field('kitchen_name', $post); ?>
            </h1>
            <a class="mb-12 secondary-btn w-full block" href="#">Заказать кухню Teramo</a>
            
            <dl class="mb-12">
                <h3 class="mb-2 lg:mb-6 lg:text-4xl text-2xl font-medium">Характеристики</h3>
                
                <?php 
                $taxes = get_object_taxonomies( $post, $output = 'objects' ); 
                foreach( $taxes as $tax ):
                    $terms = get_the_terms( $post, $tax->name );
                    echo '<div class="flex items-center justify-between relative after:content:\'\' after:absolute
                    after:block after:w-full after:h-[1px] after:bg-primary-black-10 after:t-[50%] z-0">';
                        echo '<dt class="pr-2 shrink-0 font-medium lg:text-lg text-primary-black-15 bg-white z-10">'
                            . $tax->label . '</dt>';
                        echo '<dd class="flex gap-x-5 w-min justify-end flex-wrap pl-2 font-medium lg:text-lg text-primary-black-95 bg-white z-10 text-right">';
                        
                        foreach( $terms as $single_term ):
                            echo '<span class="flex shrink-0 text-right after:content:\'•\'">' . $single_term->name . '</span>';
                        endforeach;
                        
                        echo '</dd>';
                    echo '</div>';
                endforeach;
                ?>


            </dl>
        </div>
        <!-- RIGHT SECTION      -->
        <div class="col-span-12 lg:col-span-8">
            <div class="mb-12">
                <p class="lg:text-xl"><?php the_field('kitchen_description', $post); ?></p>
            </div>
            <?php get_template_part('templates/sections/kitchen/contact-kitchen'); ?>
        </div>                    
    </div>                
</section>


<?php get_template_part('templates/sections/kitchen/slider', 'basic'); ?>

<?php get_template_part('templates/sections/kitchen/info-kitchen'); ?>

<?php get_template_part('templates/sections/kitchen/slider-products'); ?>
