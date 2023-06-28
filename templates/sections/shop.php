<?php $post_id = $args ?>

<section class="container mb-12 xl:mb-24">
    <div class="px-5 xl:px-20">
        <div>
            <div class="flex justify-between items-center mb-6 xl:mb-8">
                <h2 class="text-3xl xl:text-6xl font-medium tracking-tight">
                    <?php the_field('products_title', $post_id); ?>
                </h2>
                <a class="mr-auto ml-2 xl:mr-0" href="#">
                    <svg
                        class="fill-primary-black-80 xl:fill-primary-hover-100 w-[21px] h-[21px] xl:w-[31px] xl:h-[31px]"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.93464 30.9998L0.667969 27.7332L23.068 5.33317H3.0013V0.666504H31.0013V28.6665H26.3346V8.59984L3.93464 30.9998Z"
                        />
                    </svg>
                </a>
                <span class="opacity-40 xl:hidden">перейти</span>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-12">
            <?php $products_list = get_field('products_list') ?>
            <?php foreach ($products_list as $product_id): ?>
            <article class="group cursor-pointer">
                <a href="#">
                    <img class="w-full mb-2 rounded-xl xl:rounded-3xl xl:mb-5"
                         src="<?php the_field('kitchen_image', $product_id) ?>" alt="<?php the_field('kitchen_name', $product_id) ?>" />
                    <div class="px-2 xl:px-5">
                        <h3 class="group-hover:text-primary-hover-100 text-lg leading-5 font-medium mb-1 xl:text-3xl xl:font-semibold">
                            <?php echo get_the_title($product_id); ?>
                        </h3>
                        <p class="line-clamp-2 mb-3 xl:text-xl xl:mb-8">
                            <?php the_field('kitchen_description', $product_id) ?>
                        </p>
                        <p class="text-lg leading-5 font-medium xl:font-semibold xl:text-3xl"><?php the_field('kitchen_price', $product_id) ?>&nbsp;₽</p>
                    </div>
                </a>
            </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
