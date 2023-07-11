<?php $page_title = $wp_query->post->post_title; ?>

<div class="container mb-6 lg:mb-7">
    <div class="px-5 xl:px-20 overflow-hidden">
        <div class="text-primary-black-55 flex w-max">
            <span class="after:content-['·'] after:mx-2 first-of-type:text-primary-black-45">
                <a href="/">СК Мебель</a>
            </span>
            <span><?= $page_title ?></span>
        </div>
    </div>
</div>