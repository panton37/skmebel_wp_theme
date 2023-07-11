<header id="header" class="container">
    <nav class="hidden lg:flex px-5 xl:px-20 lg:h-20 h-0 justify-between items-center">
        <div class="uppercase text-[1.625rem] leading-none font-medium">
            <?php
                the_field('logo_text', 'option') ? the_field('logo_text', 'option') : the_field('logo_img', 'option');
            ?>
        </div>
        <div class="mx-5 mr-auto relative group">
            <div class="flex items-center xxl:hidden pt-[0.625rem] pb-2 mr-[0.5rem] cursor-pointer">
                <svg class="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8346 7.5H2.16797V9.16667H18.8346V7.5ZM14.668 10.8333H2.16797V12.5H14.668V10.8333Z" fill="black"/>
                </svg>
                <span class="lg:text-xl">Меню</span>
            </div>
            <ul class="group-hover:flex hidden items-start flex-col xxl:flex xxl:items-center xxl:flex-row
            py-7 px-7 pt-[1.563rem] rounded-xl xxl:rounded-none hover:flex absolute z-20 top-[2.5rem] left-[-1.375rem]
            bg-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] xxl:relative xxl:top-0 xxl:left-0 xxl:bg-transparent
            lg:text-xl space-y-2 xxl:space-y-0 xxl:shadow-none">
                <li class="">
                    <a href="<?php echo get_permalink( 110 ); ?>" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Проекты</a>
                </li>
                <li class="">
                    <a href="<?php echo get_permalink( 165 ); ?>" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Производство</a>
                </li>
                <li class="">
                    <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">О&nbsp;нас</a>
                </li>
                <li class="">
                    <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Акции</a>
                </li>
                <li class="">
                    <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">3D&nbsp;дизайн</a>
                </li>
                <li class="">
                    <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Контакты</a>
                </li>
            </ul>
        </div>
        <ul class="flex items-center gap-10 shrink-0">
            <li class="flex items-center group">
                <a class="flex gap-x-2 items-center lg:text-xl shrink-0 group-hover:text-primary-hover-100 transition-colors ease-in-out duration-300" href="<?php the_field('main_phone', 'option') ?>">
                    <svg class="icon-svg footer-svg">
                        <use href="#icon-skelwatsapp"></use>
                    </svg>    
                    <?php the_field('main_phone', 'option') ?>
                </a>
            </li>
            <li class="primary-btn">
                <a class="" href="#">Заказать&nbsp;кухню </a>
            </li>
        </ul>
    </nav>
</header>