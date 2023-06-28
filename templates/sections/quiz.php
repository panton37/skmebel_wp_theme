<section class="mb-12 lg:mb-24 bg-primary-black-20">
    <div class="container pt-6 pb-12 px-5 lg:px-40 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
            <div class="flex flex-col justify-between">
                <div class="mb-12">
                    <h3 class="text-3xl font-medium mb-4">
                        Рассчитать стоимость вашей кухни
                    </h3>
                    <p class="text-2xl font-medium mb-10">
                        Какую кухню рассматривайте?
                    </p>
                    <form class="form text-2xl">
                        <fieldset class="border-0 flex flex-wrap flex-col">
                            <label class="group relative w-fit">
                                <input
                                    class="absolute left-[-9999px] peer/draft"
                                    type="radio"
                                    name="type"
                                    value="straight"
                                    id="straight"
                                />
                                <span class="peer-checked/draft:before:shadow-[inset_0px_0px_0px_2px_#2086E4,_inset_0px_0px_0px_4px_#fff,_inset_0px_0px_0px_12px_#2086E4]
                                            flex items-center cursor-pointer rounded-full ease-in-out duration-300 p-1.5 pr-3
                                            hover:text-primary-hover-100 before:group-hover:shadow-primary-hover-100
                                            before:flex before:shrink-0 before:content-[''] before:bg-primary-black-20
                                            before:w-[21px] before:h-[21px] before:rounded-full before:mr-1.5 before:shadow-[inset_0_0_0_2px]
                                            before:shadow-primary-black-90 before:transition-colors before:ease-in-out before:duration-300">
                                    Прямая
                                </span>
                            </label>
                            <label class="group relative w-fit">
                                <input
                                    class="absolute left-[-9999px] peer/draft"
                                    type="radio"
                                    name="type"
                                    value="straight"
                                    id="corner"
                                    checked
                                />
                                <span class="peer-checked/draft:before:shadow-[inset_0px_0px_0px_2px_#2086E4,_inset_0px_0px_0px_4px_#fff,_inset_0px_0px_0px_12px_#2086E4]
                                            flex items-center cursor-pointer rounded-full ease-in-out duration-300 p-1.5 pr-3
                                            hover:text-primary-hover-100 before:group-hover:shadow-primary-hover-100
                                            before:flex before:shrink-0 before:content-[''] before:bg-primary-black-20
                                            before:w-[21px] before:h-[21px] before:rounded-full before:mr-1.5 before:shadow-[inset_0_0_0_2px]
                                            before:shadow-primary-black-90 before:transition-colors before:ease-in-out before:duration-300">
                                    Угловая
                                </span>
                            </label>
                            <label class="group relative w-fit">
                                <input
                                    class="absolute left-[-9999px] peer/draft"
                                    type="radio"
                                    name="type"
                                    value="straight"
                                    id="individual"
                                />
                                <span class="peer-checked/draft:before:shadow-[inset_0px_0px_0px_2px_#2086E4,_inset_0px_0px_0px_4px_#fff,_inset_0px_0px_0px_12px_#2086E4]
                                            flex items-center cursor-pointer rounded-full ease-in-out duration-300 p-1.5 pr-3
                                            hover:text-primary-hover-100 before:group-hover:shadow-primary-hover-100
                                            before:flex before:shrink-0 before:content-[''] before:bg-primary-black-20
                                            before:w-[21px] before:h-[21px] before:rounded-full before:mr-1.5 before:shadow-[inset_0_0_0_2px]
                                            before:shadow-primary-black-90 before:transition-colors before:ease-in-out before:duration-300">
                                    Индивидуальная
                                </span>
                            </label>
                        </fieldset>
                    </form>
                </div>
                <div class="grid grid-areas-quiz-control-mob lg:grid-areas-quiz-control-desktop gap-x-5">
                    <button disabled class="grid-in-prev w-full secondary-btn lg:w-fit">
                        Назад
                    </button>
                    <button class="grid-in-next w-full secondary-btn ml-auto lg:w-fit">
                        Далее
                    </button>
                    <div class="grid grid-in-pagination mt-9">
                        <div class="flex justify-center space-x-8">
                            <span class="cursor-pointer text-primary-black-50 opacity-10">1</span>
                            <span class="cursor-pointer text-primary-hover-100 hover:text-primary-hover-100 hover:font-bold lg:hover:font-medium">2</span>
                            <span class="cursor-pointer text-primary-black-50 lg:text-primary-black-90 hover:text-primary-hover-100 hover:font-bold lg:hover:font-medium">3</span>
                            <span class="cursor-pointer text-primary-black-50 lg:text-primary-black-90 hover:text-primary-hover-100 hover:font-bold lg:hover:font-medium">4</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img class="hidden w-full h-full lg:block object-cover rounded-[2.5rem]" src="<?php echo get_theme_file_uri('src/app/assets/img/quiz_img.jpg') ?>" alt="calc" />
            </div>
        </div>
    </div>
</section>

