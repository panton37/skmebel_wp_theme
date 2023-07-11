<?php $blocks = get_field('prod_features'); ?>

<section class="container mb-12 lg:mb-24">
    <div class="xl:px-20 px-5 grid grid-cols-1">
        <h3 class="text-2xl font-medium lg:text-4xl mb-4 lg:mb-6">Наши конкурентные преимущества</h3>
        <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-y-6 gap-x-0">
     <?php foreach($blocks as $block):
                echo '<div>';
                echo    '<img class="rounded-3xl h-40 w-full object-cover lg:h-56 mb-4" src="' . $block['prod_feature_image'] . '" />';
                echo    '<h3 class="text-2xl font-medium">' . $block['prod_feature_title'] . '</h3>';
                echo '</div>';
            endforeach; ?>
        </div>
    </div>
</section>