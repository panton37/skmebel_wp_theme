<div class="filter-block hidden lg:flex absolute z-30 lg:relative z-90 top-0 left-0 right-0 col-span-12 lg:col-span-4 lg:mr-6">
    <aside class="flex flex-col bg-white">
        <div class="lg:hidden flex justify-between items-center px-8 py-6 mb-6 border-b border-primary-black-25">
            <span class="opacity-40">Фильтр</span>
            <svg class="close-filter-btn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.22225 0L20 17.7778L17.7778 20L2.97837e-05 2.22222L2.22225 0Z" fill="#17191C"/>
                <path d="M20 2.22222L2.22222 20L0 17.7778L17.7778 2.24783e-06L20 2.22222Z" fill="#17191C"/>
            </svg>
        </div>
        <form class="flex flex-col px-5 lg:px-0 gap-y-10 lg:gap-y-0 pb-44" onsubmit="event.preventDefault();">
            <div class="lg:mb-6">
                <h3 class="text-2xl px-2 font-medium mb-2 lg:mb-4 lg:text-3xl lg:font-semibold">Цена&nbsp;₽</h3>
                <div class="prices grid grid-cols-2">
                    <input type="number" placeholder="От"
                           class="from-price outline-0 rounded-l-2xl border-2 border-gray-200 px-6 py-4
                           lg:px-5 lg:py-4 lg:text-2xl tracking-tight">
                    <input type="number" placeholder="До"
                           class="to-price outline-0 rounded-r-2xl border-2 border-gray-200 border-l-0 px-6 py-4
                           lg:px-5 lg:py-4 lg:text-2xl tracking-tight">
                </div>
            </div>
            <details class="group/details border-b border-primary-black-25 pb-6" open>
                <summary class="flex justify-between items-center cursor-pointer">
                    <h3 class="text-2xl px-2 font-medium lg:text-3xl lg:font-semibold">Размер</h3>
                    <svg class="group-open/details:rotate-180 transition-transform duration-200 ease-in-out" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12L20 1.79494L18.2411 -2.25185e-07L10 8.41011L1.75888 -2.25185e-07L0 1.79494L10 12Z" fill="#252528"/>
                    </svg>
                </summary>
                <div class="sizes pt-4">
                    <?php
                    $args_size = array(
                        'taxonomy' => 'size',
                        'hide_empty' => false
                    );
                    $terms = get_terms($args_size);

                    if( $terms ) :
                        foreach ( $terms as $term ) :
                            echo '<label for="size-checkbox-' . $term->slug . '" class="last-of-type:mb-0 w-fit mb-4 cursor-pointer flex items-center text-neutral-600 text-[18px] font-medium leading-normal">
                                     <input id="size-checkbox-' . $term->slug . '" data-id=' . $term->term_id . ' type="checkbox" value=""
                                            class="size-checkbox check mr-4">
                                     ' . $term->name . '
                                 </label>';
                        endforeach;
                    endif;
                    ?>
                </div>
            </details>
            <details class="group/details pb-6 border-b border-primary-black-25" open>
                <summary class="flex justify-between items-center cursor-pointer">
                    <h3 class="text-2xl px-2 font-medium pt-4 lg:mb-4 lg:text-3xl lg:font-semibold">Стиль</h3>
                    <svg class="group-open/details:rotate-180 transition-transform duration-200 ease-in-out" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12L20 1.79494L18.2411 -2.25185e-07L10 8.41011L1.75888 -2.25185e-07L0 1.79494L10 12Z" fill="#252528"/>
                    </svg>
                </summary>
                <div class="styles pt-4">
                    <?php
                    $args = array(
                        'taxonomy' => 'style',
                        'hide_empty' => false
                    );
                    $terms = get_terms($args);

                    if( $terms ) :
                        foreach ( $terms as $term ) :
                            echo '<label for="big-checkbox-' . $term->slug . '" class="last-of-type:mb-0 mb-4  w-fit cursor-pointer flex items-center text-neutral-600 text-[18px] font-medium leading-normal">
                                     <input id="big-checkbox-' . $term->slug . '" data-id=' . $term->term_id . ' type="checkbox" value=""
                                            class="style-checkbox check mr-4">
                                     ' . $term->name . '
                                 </label>';
                        endforeach;
                    endif;
                    ?>
                </div>
            </details>
            <button class="reset-filter secondary-btn w-full text-primary-black-50 bg-primary-black-40">
                Сбросить всё
            </button>
        </form>
    </aside>
</div>