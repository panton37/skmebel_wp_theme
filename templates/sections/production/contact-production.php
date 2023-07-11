<section class="mb-36 xl:mb-24">
    <div class="container px-0 lg:px-0">
        <div class="bg-primary-black-20 xl:overflow-hidden rounded-xl px-5 pt-5 xl:pt-0 xl:px-20
                    xl:grid xl:grid-cols-2 xl:rounded-[3.75rem]">
            <div class="xl:py-20">
                <h2 class="hidden xl:flex text-3xl font-medium mb-6 xl:text-6xl xl:leading-[110%] xl:mb-10">
                    Закажите кухню прямо сейчас и получите ее уже через 2,5 недели
                </h2>
                <h2 class="flex xl:hidden text-3xl font-medium mb-6 xl:text-6xl xl:leading-[110%] xl:mb-10">
                    Запись на индивидуальный расчёт
                </h2>
                <form action="">
                    <label for="client-name">
                        <input class="py-6 xl:py-4 xl:text-xl xl:tracking-tighter w-full text-primary-black-50 outline-0 border-b border-b-primary-black-25 bg-primary-black-20"
                               name="client-name"
                               id="client-name"
                               type="text"
                               placeholder="Ваше имя" />
                    </label>
                    <label for="client-phone">
                        <input class="py-6 xl:py-4 xl:text-xl xl:tracking-tighter w-full text-primary-black-50 outline-0 border-b border-b-primary-black-25 bg-primary-black-20"
                               name="client-phone"
                               id="client-phone"
                               type="text"
                               placeholder="Телефон" />
                    </label>
                    <div class="mt-12 xl:mt-20 flex flex-col xl:items-center xl:flex-row">
                        <button type="submit" class=" mb-5 w-fit xl:mb-0 xl:mr-7 xl:items-center secondary-btn">
                            <span class="xl:hidden block">Записаться</span>
                            <span class="xl:block hidden">Заказать</span>
                        </button>
                        <p class="opacity-40 mb-7 xl:mb-0 ">
                            Согласен с обработкой персональных данных в соответствии с
                            Лицензионным соглашением
                        </p>
                    </div>
                </form>
            </div>
            <div class="xl:flex xl:flex-col xl:justify-end">
                <img src="<?php echo get_theme_file_uri('src/app/assets/img/contact_kitchen.png') ?>" alt="Кухня"
                     class="ml-auto -mr-5 xl:-mr-20 translate-y-24 -mt-24 xl:translate-y-0 xl:mt-0
                            w-11/12 h-full object-cover object-left"/>
            </div>
        </div>
    </div>
</section>
