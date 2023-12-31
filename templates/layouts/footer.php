<footer class="container lg:px-20 lg:pt-9">
    <div class="pt-10 flex flex-col lg:flex-row lg:justify-between lg:border-t lg:border-t-primary-black-25">
        <div class="flex justify-between items-center px-5 lg:px-0 pr-5 mb-5 lg:items-start lg:justify-start">
            <div class="uppercase text-[1.625rem] leading-none font-medium">
                <?php
                    the_field('logo_text', 'option') ? the_field('logo_text', 'option') : the_field('logo_img', 'option');
                ?>
            </div>
            <a href="#" class="flex items-center space-x-2 lg:hidden">
                Наверх&nbsp;
                <img src="<?php echo get_theme_file_uri('src/app/assets/img/arrow_up.svg') ?>" alt="Наверх"/></a>
        </div>
        <div class="mb-6 lg:flex lg:flex-col-2 lg:-mt-2">
            <div>
                <div class="cursor-pointer px-5 py-4 w-full border-b border-b-primary-black-25 hover:text-primary-hover-100
                       lg:border-0 lg:px-4 lg:py-2 lg:w-fit">
                    <a href="<?php echo get_permalink( 110 ); ?>" class="flex justify-between items-center lg:justify-start">
                        Наши проекты
                        <svg class="mr-1 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#9DA4AF"/>
                        </svg>
                    </a>
                </div>
                <div class="cursor-pointer px-5 py-4 w-full border-b border-b-primary-black-25 hover:text-primary-hover-100
                       lg:border-0 lg:px-4 lg:py-2 lg:w-fit">
                    <a href="<?php echo get_permalink( 165 ); ?>" class="flex justify-between items-center lg:justify-start">
                        Производство
                        <svg class="mr-1 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#9DA4AF"/>
                        </svg>
                    </a>
                </div>
                <div class="cursor-pointer px-5 py-4 w-full border-b border-b-primary-black-25 hover:text-primary-hover-100
                       lg:border-0 lg:px-4 lg:py-2 lg:w-fit">
                    <a href="#" class="flex justify-between items-center lg:justify-start">
                        О компании
                        <svg class="mr-1 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#9DA4AF"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                <div class="cursor-pointer px-5 py-4 w-full border-b border-b-primary-black-25 hover:text-primary-hover-100
                       lg:border-0 lg:px-4 lg:py-2 lg:w-fit">
                    <a href="#" class="flex justify-between items-center lg:justify-start">
                        Акции
                        <svg class="mr-1 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#9DA4AF"/>
                        </svg>
                    </a>
                </div>
                <div class="cursor-pointer px-5 py-4 w-full border-b border-b-primary-black-25 hover:text-primary-hover-100
                       lg:border-0 lg:px-4 lg:py-2 lg:w-fit">
                    <a href="#" class="flex justify-between items-center lg:justify-start">
                        3D Дизайн
                        <svg class="mr-1 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#9DA4AF"/>
                        </svg>
                    </a>
                </div>
                <div class="cursor-pointer px-5 py-4 w-full border-b border-b-primary-black-25 hover:text-primary-hover-100
                       lg:border-0 lg:px-4 lg:py-2 lg:w-fit">
                    <a href="#" class="flex justify-between items-center lg:justify-start">
                        Контакты
                        <svg class="mr-1 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z" fill="#9DA4AF"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="px-5">
            <div class="mb-5">
                <a class="hover:text-primary-hover-100 ease-in-out transition-colors duration-300" href="tel:+79195557755">
                    <?php the_field('main_phone', 'option') ?>
                </a>
            </div>
            <div class="hover:text-primary-hover-100 ease-in-out transition-colors duration-300">
                <a href="mailto:ceo@wehaveanidea.ru" class=""><?php the_field('main_email', 'option') ?></a>
            </div>
            <div class="my-10 xl:my-4">
                <div class="flex gap-x-4">
                    <!-- TELEGRAM -->
                    <a href="<?php the_field('main_telegram', 'option'); ?>">
                        <svg class="icon-svg footer-svg">
                            <use href="#icon-telegram"></use>
                        </svg>
                    </a>
                    <!-- WHATSAPP -->
                    <a href="<?php the_field('main_whatsapp', 'option'); ?>">
                        <svg class="icon-svg footer-svg">
                            <use href="#icon-whatsapp"></use>
                        </svg>
                    </a>
                    <!-- VK -->
                    <a href="<?php the_field('main_vk', 'option'); ?>">
                        <svg class="icon-svg footer-svg">
                            <use href="#icon-vk"></use>
                        </svg>
                    </a>
                    <!-- HH -->
                    <a href="<?php the_field('main_hh', 'option'); ?>">
                        <svg class="icon-svg footer-svg">
                            <use href="#icon-hh"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="hidden xxl:block"><?php the_field('main_address', 'option') ?></div>
        <div class="pl-5 mb-16 text-primary-black-50 lg:flex lg:flex-col lg:text-end">
            <a href="#header" class="group hover:text-primary-hover-100 ml-auto lg:mb-4 text-primary-black-80 lg:flex
                               items-center space-x-2 hidden ease-in-out transition-colors duration-300">
                Наверх&nbsp;
                <svg class="group-hover:stroke-primary-hover-100" width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6" d="M5.5 0.907146C5.59649 0.907146 5.68695 0.923576 5.77138 0.956436C5.85581 0.988775 5.93421 1.04406 6.00658 1.1223L10.7829 6.28603C10.9276 6.44251 11 6.62846 11 6.84387C11 7.05877 10.9276 7.24445 10.7829 7.40093C10.6382 7.55741 10.4693 7.63565 10.2763 7.63565C10.0833 7.63565 9.91447 7.55741 9.76974 7.40093L6.22368 3.56725V12.3299C6.22368 12.5516 6.15421 12.7342 6.01526 12.8776C5.8768 13.0211 5.70504 13.0928 5.5 13.0928C5.29496 13.0928 5.12296 13.0179 4.98401 12.8682C4.84555 12.718 4.77632 12.5321 4.77632 12.3104V3.56725L1.23026 7.40093C1.08553 7.55741 0.916666 7.63565 0.723684 7.63565C0.530702 7.63565 0.361843 7.55741 0.217106 7.40093C0.0723686 7.24445 0 7.05877 0 6.84387C0 6.62846 0.0723686 6.44251 0.217106 6.28603L4.99342 1.1223C5.06579 1.04406 5.14419 0.988775 5.22862 0.956436C5.31305 0.923576 5.40351 0.907146 5.5 0.907146Z" fill="black"/>
                </svg>
            </a>
            <p class="mb-1"><?php the_field('main_copy', 'option') ?></p>
            <a href="#" class="w-fit hover:text-primary-hover-100 ease-in-out transition-colors duration-300">Политика конфиденциальности</a>
        </div>
    </div>
    <div class="flex justify-between lg:hidden fixed z-40 bottom-0 left-0 right-0 border-t border-primary-black-25">
        <?php if(is_page('catalog')): ?>
        <div class="absolute bottom-full w-full flex justify-center">
            <a class="show-filter-btn primary-btn block mb-6 w-fit" href="#">Фильтр</a>
        </div>
        <?php endif ?>
        <a class="flex items-center justify-center w-full bg-primary-black-44 border-r border-primary-black-25 py-4" href="<?php the_field('main_phone', 'option') ?>">
            <svg class="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7407 14.2833L14.3532 11.2033C14.1931 11.0578 13.9827 10.9802 13.7664 10.9869C13.5501 10.9935 13.3449 11.084 13.194 11.2392L11.1999 13.29C10.7199 13.1983 9.75487 12.8975 8.76154 11.9067C7.7682 10.9125 7.46737 9.945 7.3782 9.46833L9.42737 7.47333C9.58271 7.32261 9.67332 7.11735 9.68001 6.90101C9.68669 6.68466 9.60894 6.4742 9.4632 6.31417L6.38404 2.9275C6.23824 2.76696 6.0356 2.66959 5.81916 2.65605C5.60273 2.64251 5.38954 2.71388 5.22487 2.855L3.41654 4.40583C3.27246 4.55043 3.18647 4.74287 3.17487 4.94667C3.16237 5.155 2.92404 10.09 6.7507 13.9183C10.089 17.2558 14.2707 17.5 15.4224 17.5C15.5907 17.5 15.694 17.495 15.7215 17.4933C15.9253 17.4819 16.1176 17.3956 16.2615 17.2508L17.8115 15.4417C17.9532 15.2775 18.0251 15.0645 18.0119 14.8481C17.9986 14.6317 17.9013 14.429 17.7407 14.2833Z" fill="#17191C"/>
            </svg>
            Звонок
        </a>
        <a class="mob-menu-reveal-btn flex items-center justify-center w-full bg-primary-black-44 border-r border-primary-black-25 py-4" href="#">
            <svg class="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8346 7.5H2.16797V9.16667H18.8346V7.5ZM14.668 10.8333H2.16797V12.5H14.668V10.8333Z" fill="black"/>
            </svg>
            Меню
        </a>
        <a class="flex items-center justify-center w-full bg-primary-black-44 py-4" href="<?php the_field('main_whatsapp', 'option'); ?>">
            <svg class="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6509 4.69C14.9588 3.99363 14.1355 3.44149 13.2285 3.06557C12.3215 2.68965 11.349 2.49742 10.3672 2.5C6.25156 2.5 2.89844 5.85 2.89844 9.96562C2.89532 11.2761 3.23904 12.5641 3.89469 13.6987L2.83594 17.5681L6.79594 16.5281C7.89093 17.1246 9.11777 17.4377 10.3647 17.4387H10.3678C14.4841 17.4387 17.8334 14.0894 17.8359 9.97062C17.8359 7.97625 17.0597 6.10125 15.6509 4.68937V4.69ZM10.3672 16.1769H10.3647C9.25316 16.1769 8.16203 15.8783 7.20531 15.3125L6.97844 15.1781L4.62719 15.7937L5.25469 13.5031L5.10844 13.2687C4.48631 12.2795 4.15695 11.1343 4.15844 9.96562C4.15844 6.54562 6.94406 3.7625 10.3697 3.7625C11.1849 3.76046 11.9925 3.92016 12.7456 4.23235C13.4988 4.54454 14.1825 5.00302 14.7572 5.58125C15.3347 6.1567 15.7926 6.84088 16.1042 7.59427C16.4158 8.34766 16.5751 9.15533 16.5728 9.97062C16.5728 13.3937 13.7878 16.1769 10.3672 16.1769ZM13.7703 11.5281C13.5847 11.4356 12.6666 10.9844 12.4959 10.9231C12.3253 10.8594 12.2003 10.83 12.0759 11.0156C11.9509 11.2031 11.5947 11.6237 11.4853 11.7481C11.3778 11.87 11.2678 11.8875 11.0822 11.7944C10.8947 11.7019 10.2941 11.5037 9.58094 10.8669C9.02656 10.3731 8.65094 9.76062 8.54344 9.575C8.43344 9.3875 8.53094 9.2875 8.62406 9.19375C8.70906 9.11125 8.81156 8.97687 8.90469 8.86687C8.99719 8.76 9.02969 8.68187 9.09219 8.55687C9.15344 8.4325 9.12219 8.3225 9.07531 8.23C9.02906 8.1375 8.65594 7.21687 8.49969 6.84312C8.34781 6.47937 8.19406 6.53062 8.07969 6.52375C7.97219 6.51875 7.84781 6.51875 7.72344 6.51875C7.59844 6.51875 7.39594 6.565 7.22469 6.75312C7.05406 6.93875 6.57281 7.39062 6.57281 8.30812C6.57281 9.22625 7.24156 10.1144 7.33531 10.2394C7.42781 10.3612 8.65094 12.2456 10.5228 13.0544C10.8697 13.2044 11.2243 13.3356 11.5853 13.4475C12.0322 13.5887 12.4397 13.5694 12.7622 13.5225C13.1209 13.4694 13.8653 13.0712 14.0216 12.6344C14.1759 12.2 14.1759 11.8262 14.1291 11.7481C14.0828 11.67 13.9584 11.6231 13.7703 11.5281Z" fill="#38CD61"/>
            </svg>
            Написать
        </a>
    </div>
    <div class="mob-menu-reveal hidden fixed z-30 l-0 r-0 top-0 bottom-0 w-full h-full items-center justify-center bg-white flex-col">
        <svg class="icon-svg close-mob-menu absolute right-5 top-5 w-5 h-5">
            <use href="#icon-cross"></use>
        </svg>
        <div class="pb-14 flex flex-col text-center">
            <a href="<?php echo get_permalink( 110 ); ?>" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Проекты</a>
            <a href="<?php echo get_permalink( 165 ); ?>" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Производство</a>
            <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">О&nbsp;нас</a>
            <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Акции</a>
            <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">3D&nbsp;дизайн</a>
            <a href="#" class="p-3 hover:text-primary-hover-100 transition-colors ease-in-out duration-300">Контакты</a>
        </div>
    </div>
</footer>
