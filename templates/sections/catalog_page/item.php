<?php foreach ($args as $post) : ?>
    <article class="group cursor-pointer">
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