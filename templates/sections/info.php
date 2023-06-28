<?php
$post_id = $args;
$tab1 = get_field('tab1');
$tab2 = get_field('tab2');
$tab3 = get_field('tab3');
?>

<section class="container mb-12 xl:mb-24">
    <div class="">
        <h1 class="px-5 xl:px-20 text-4xl tracking-tight font-medium mb-4 xl:text-[5rem] xl:leading-none xl:tracking-tight xl:mb-11">Кухни на заказ в Ставрополе</h1>
        <!--INFO TABS-->
        <div class="tabs grid xl:grid-cols-3 xl:pr-20 xl:grid-areas-tabs-desktop xl:gap-x-16 mb-12 xl:mb-24 px-5 xl:px-0"
            data-breakpoint="xl">
            <img class="tabs-img w-full rounded-xl object-cover order-1 mb-4 xl:mb-0 xl:grid-in-images xl:order-2 xl:rounded-none
                        xl:rounded-tl-[2.5rem] xl:h-full transition-opacity duration-[0.3s] xl:z-hide"
                 src="<?php echo esc_url($tab1['tab1_image']); ?>" alt="kitchen_1">
            <img class="tabs-img w-full rounded-xl object-cover order-3 mb-4 xl:mb-0 xl:grid-in-images xl:order-2 xl:rounded-none
                        xl:rounded-tl-[2.5rem] xl:h-full transition-opacity duration-[0.3s] xl:z-show"
                 src="<?php echo esc_url($tab2['tab2_image']); ?>" alt="kitchen_2">
            <img class="tabs-img w-full rounded-xl object-cover order-5 mb-4 xl:mb-0 xl:grid-in-images xl:order-1 xl:rounded-none
                        xl:rounded-tl-[2.5rem] xl:h-full transition-opacity duration-[0.3s] xl:z-hide"
                 src="<?php echo esc_url($tab3['tab3_image']); ?>" alt="kitchen_3">
            <div class="tabs-info order-2 mb-8 xl:grid-in-info-1 xl:order-4 xl:first-of-type:mt-8 xl:mb-7
                        xl:border-b xl:border-primary-black-30 xl:pb-7 xl:cursor-pointer group">
                <h2 class="tabs-header text-2xl font-medium mb-2 xl:text-4xl xl:leading-[3rem] xl:group-hover:text-primary-hover-100
                            transition-colors duration-[0.3s]">
                    <a href="#" class="" data-index="0">
                        <?php echo $tab1['tab1_title']; ?>
                    </a>
                    <span class="text-primary-black-50 flex shrink-0">
                        <?php echo $tab1['tab1_subtitle']; ?>
                    </span>
                </h2>
                <p class="xl:text-xl xl:tracking-tighter">
                    <?php echo $tab1['tab1_description']; ?>
                </p>
            </div>
            <div class="tabs-info order-4 mb-8 xl:grid-in-info-2 xl:order-5 xl:mb-7
                        xl:border-b xl:border-primary-black-30 xl:pb-7 xl:cursor-pointer group">
                <h2 class="tabs-header text-2xl font-medium mb-2 xl:text-4xl xl:leading-[3rem] xl:group-hover:text-primary-hover-100
                            transition-colors duration-[0.3s] xl:z-active">
                    <a href="#" class="" data-index="0">
                        <?php echo $tab2['tab2_title']; ?>
                    </a>
                    <span class="text-primary-black-50 flex shrink-0">
                        <?php echo $tab2['tab2_subtitle']; ?>
                    </span>
                </h2>
                <p class="xl:text-xl xl:tracking-tighter">
                    <?php echo $tab2['tab2_description']; ?>
                </p>
            </div>
            <div class="tabs-info order-6 mb-8 xl:grid-in-info-3 xl:order-6 xl:last-of-type:mb-8 xl:cursor-pointer group">
                <h2 class="tabs-header text-2xl font-medium mb-2 xl:text-4xl xl:leading-[3rem] xl:group-hover:text-primary-hover-100
                            transition-colors duration-[0.3s]">
                    <a href="#" class="" data-index="0">
                        <?php echo $tab3['tab3_title']; ?>
                    </a>
                    <span class="text-primary-black-50 flex shrink-0">
                        <?php echo $tab3['tab3_subtitle']; ?>
                    </span>
                </h2>
                <p class="xl:text-xl xl:tracking-tighter">
                    <?php echo $tab3['tab3_description']; ?>
                </p>
            </div>
        </div>
        <!--INFO PRODUCTION-->
        <div class="grid xl:grid-cols-3 xl:pl-20 xl:gap-x-16">
            <div class="px-5 xl:px-0">
                <h2 class="text-3xl tracking-tight mb-6 xl:text-5xl">
                    <?php the_field('video_title', $post_id); ?>
                </h2>
                <p class="mb-8 xl:mb-11 xl:text-xl">
                    ДОДЕЛАТЬ CLAMP</p>
                <p class="hidden xl:block xl:mb-11 xl:text-xl">Продумать ее дизайн,
                    изготовить гарнитур на заказ с современной начинкой и использовать
                    встроенную технику. </p>
                <p class="hidden xl:block xl:mb-11 xl:text-xl">
                    Красивой и функциональной если хорошо продумать ее
                    дизайн, изготовить гарнитур на заказ с современной начинкой и
                    использовать встроенную технику. Маленькая кухня может стать удобной,
                    красивой и функциональной если хорошо продумать ее дизайн.
                </p>
            </div>
            <video class="rounded-xl xl:col-span-2 xl:rounded-none xl:rounded-br-[2.5rem] xl:object-cover xl:h-full px-5 xl:px-0"
                   src="<?php the_field('video_file', $post_id); ?>"
                   poster="<?php the_field('video_poster', $post_id); ?>">
            </video>
    </div>
</section>
