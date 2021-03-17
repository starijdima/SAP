<template>
    <div class="module">
        <div v-on:click="darkTheme" class="dark-theme__block">
            <div class="dark-theme__block-item">
                <div class="dark-theme__block-item__thumb"></div>
                <div class="dark-theme__block-item__ring"></div>
            </div>
            <p class="dark-theme__block-text">Темная тема</p>
        </div>
        <router-link :to="{name: 'vModules'}" class="to-modules__link">
            <img class="to-modules__link-img" v-bind:src="backArrow" alt /><p class="to-modules__link-text">Вернуться к списку модулей</p></router-link>
        <h2 class="module-title">Модуль 5. CSS Отступы.</h2>
        <div class="pagination-block">
            <div class="pagination-block__item pag-active"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>
            <div class="pagination-block__item"></div>


        </div>
        <div class="main-module__stage st-active">
            <p
                    class="main-module__stage-text"
            >В предыдущих модулях уже упоминалось об отступах в CSS, но не так подробно, как пойдет речь в данном модуле. </p>
            <p
                    class="main-module__stage-text"
            >Для чего нужны отступы? В процессе верстки сайтов или веб-приложений возникают разные ситуации, в которых нужны отступы. </p>
            <p
                    class="main-module__stage-text"
            >Для начала нужно знать, что отступы делят на 3 вида:</p>
            <ul class="main-module__stage-list">
                <li class="main-module__stage-list-item">Внутренний отступ – <span class="text-link">padding</span></li>
                <li
                        class="main-module__stage-list-item"
                >Внешний отступ – <span class="text-link">margin</span></li>
                <li
                        class="main-module__stage-list-item"
                >Рамка – <span class="text-link">border</span></li>
            </ul>
            <p
                    class="main-module__stage-text"
            >Все эти отступы повсеместно используются при верстке сайтов. Перейдем к описанию каждого вида отступов.</p>

            <div class="next-btn__block">
                <router-link :to="{name: 'vModuleFour'}" class="back-module__router">
                    <img class="st-img" v-bind:src="nextModuleArrow" alt />
                    <p>Модуль 4. CSS Flexbox</p>

                </router-link>
                <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Изначально при создании проекта некоторым тэгам по умолчанию заданы внешние и внутренние отступы. Убрать их можно путем обращения к селектору “*”, как уже мы знаем из предыдущих модулей.
            </p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st1" alt />
            </div>
            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Для демонстрации применения отступов создадим и стилизуем пустой блок:
            </p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st2" alt />
            </div>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st3" alt />
            </div>

            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Для удобности зададим для селектора “body” необходимые flex-свойства для размещения данного блока по центру страницы. Результат:
            </p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st4" alt />
            </div>


            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Зададим блоку рамку, используя свойство “border”:
            </p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st5" alt />
            </div>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st6" alt />
            </div>


            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Теперь давайте наблюдать, как будет изменяться блок при присваивании внешних и внутренних отступов. Зададим внешний отступ (margin) в размере 5rem и внутренний отступ (padding) в размере 2rem:
            </p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st7" alt />
            </div>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st8" alt />
            </div>
            <p class="main-module__stage-text">
                Обратите внимание, что за счет присваивания внутреннего отступа, данный блок стал больше с каждой стороны на 2rem. Синей областью обозначен наш блок, зеленой областью обозначен внутренний отступ, а оранжевой областью обозначен внешний отступ.             </p>




            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Обратившись к консоли разработчика (F12), можно увидеть все отступы в правом нижнем углу:</p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st9" alt />
            </div>
            <p class="main-module__stage-text">
                На схеме обозначены все уровни данного блока. Цветовые обозначения были прокомментированы ранее. </p>


            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>
        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Так же существует несколько способов присваивания значений отступам. Посмотрим примеры с использованием margin:</p>
            <p class="main-module__stage-text">
                <span class="property-name">margin</span>:
                <span class="property-value">2rem</span> |

                <span
                        class="property-description"
                >//в данном случае с каждой стороны блока, начиная сверху по часовой стрелке будет заданы внешние отступы размером в 2rem;</span>
            </p>
            <p class="main-module__stage-text">
                <span class="property-name">margin</span>:
                <span class="property-value">5rem 1rem </span> |

                <span
                        class="property-description"
                >//при данном обозначении отступов важной особенностью будет то, что сверху и снизу данному блоку будет задан отступ 5rem, а справа и слева будет задан отступ в 1rem;</span>
            </p>

            <p class="main-module__stage-text">
                <span class="property-name">margin</span>:
                <span class="property-value">1rem 2rem 10rem 6rem </span> |

                <span
                        class="property-description"
                >//в таком случае присваивания отступов, значения будут присваиваться в порядке от верхней границы блока до левой границы блока по часовой стрелке (top, right, bottom, left);</span>
            </p>

            <p class="main-module__stage-text">
                <span class="property-name">margin-top: </span>:
                <span class="property-value">1rem </span>;
                <span class="property-name">margin-right: </span>:
                <span class="property-value">2rem </span>;
                <span class="property-name">margin-bottom: </span>:
                <span class="property-value">10rem </span>;
                <span class="property-name">margin-left: </span>:
                <span class="property-value">6rem </span>

                <span
                        class="property-description"
                >//в таком случае каждой границе блока каждый отступ можно задать по-отдельности.</span>
            </p>

            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>

        <div class="main-module__stage">
            <p class="main-module__stage-text">
                Данные способы обозначения отступов распространяются на margin, padding и border.</p>
            <p class="main-module__stage-text">
                Иногда случаются такие моменты, когда вам нужно задать внутренние отступы для блока, но после того, как вы это сделали, блок выехал за пределы контента. Это происходит из-за того, что ширина вашего блока суммируется с отступами. Чтобы исправить данный баг, используйте для ширины или высоты данного блока встроенную в CSS функцию calc(). </p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st11" alt />
            </div>
            <p class="main-module__stage-text">
                Обратите внимание на то, что вместо 2rem мы указали 4rem. Дело в том, что в данном случае при определении ширины блока, слева и справа имеется внутренний отступ по 2rem, тем самым мы суммируем эти значения и их вычитаем из нужной нам ширины блока. Та же самая процедура распространяется на высоту блока. Для внешних отступов данные операции делать не нужно. </p>


            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
                <div class="next-btn">Далее</div>
            </div>
        </div>

        <div class="main-module__stage">
            <p class="main-module__stage-text"></p>
            <p class="lang-name">Вывод:</p>
            <p
                    class="main-module__stage-text"
            >В данном модуле мы разобрали предназначение и примеры использования отступов в CSS.</p>
            <p class="main-module__stage-text">
                Ссылка на примеры, используемые в данном модуле:
                <a
                        href="https://drive.google.com/drive/folders/1m2bCLMfloo9ABA10N1MhepH5NF00vQok?usp=sharing"
                        target="_blank"
                        class="text-link"
                >https://drive.google.com/drive/folders/1m2bCLMfloo9ABA10N1MhepH5NF00vQok?usp=sharing</a>
            </p>
            <p class="lang-name">	Задания к модулю 5:</p>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st12" alt />
            </div>
            <div class="st-img__block">
                <img class="st-img" v-bind:src="st13" alt />
            </div>
            <p class="main-module__stage-text">
                На рисунке представлен список заданий и то, как должны будут выглядеть блоки при выполнении всех заданий. Соблюдение цветовой палитры обязательно.

            </p>
            <div class="next-btn__block">
                <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>

            </div>
        </div>
    </div>
</template>

<script>
    import st1 from "@/assets/M-5/5-1.png";
    import st2 from "@/assets/M-5/5-2.png";
    import st3 from "@/assets/M-5/5-3.png";
    import st4 from "@/assets/M-5/5-4.png";
    import st5 from "@/assets/M-5/5-5.png";
    import st6 from "@/assets/M-5/5-6.png";
    import st7 from "@/assets/M-5/5-7.png";
    import st8 from "@/assets/M-5/5-8.png";
    import st9 from "@/assets/M-5/5-9.png";
    import st10 from "@/assets/M-5/5-10.png";
    import st11 from "@/assets/M-5/5-11.png";
    import st12 from "@/assets/M-5/5-12.svg";
    import st13 from "@/assets/M-5/5-13.png";
    import backArrow from "@/assets/back-arrow.svg";
    import nextModuleArrow from "@/assets/next-module-arrow.svg";


    export default {
        name: "v-module-five",
        components: {},
        methods:{
            darkTheme: function(){
                let darkItem = document.querySelector('.dark-theme__block-item')
                let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
                let darkRing = document.querySelector('.dark-theme__block-item__ring')
                let bodyDark = document.querySelector('body')
                let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

                let headerLogo = document.querySelector('.header-logo')

                let moduleTitle = document.querySelector('.module-title')
                let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
                let langName = document.querySelectorAll('.lang-name')

                if(darkRing.style.right=='0%'||darkRing.style.right==''){
                    darkRing.style.right='50%';
                    darkRing.style.background='#707070';
                    darkThumb.style.background='#484848'
                    bodyDark.style.background='#E8E8E8'
                    for(let i=0; i<mainModuleStageText.length;i++){
                        mainModuleStageText[i].style.color='#2D2D2D'
                    }
                    moduleTitle.style.color='#2D2D2D'
                    headerLogo.style.filter='brightness(0.2)'
                    for(let i=0; i<moduleListItem.length;i++){
                        moduleListItem[i].style.color='#5F5F5F'
                    }
                    for(let i=0; i<langName.length;i++){
                        langName[i].style.color='#5F5F5F'
                    }

                }
                else{
                    darkRing.style.right='0%';
                    darkRing.style.background='#AAEC92';
                    darkThumb.style.background='#C4C4C4'
                    bodyDark.style.background='#2D2D2D'
                    for(let i=0; i<mainModuleStageText.length;i++){
                        mainModuleStageText[i].style.color='#FFFFFF'
                    }
                    moduleTitle.style.color='#FFFFFF'
                    headerLogo.style.filter='brightness(1)'
                    for(let i=0; i<moduleListItem.length;i++){
                        moduleListItem[i].style.color='#C1C1C1'
                    }
                    for(let i=0; i<langName.length;i++){
                        langName[i].style.color='#C1C1C1'
                    }

                }
            },
            moduleSwipeNext: function(){
                let mainModuleStage = document.querySelectorAll(".main-module__stage");
                let nextBtn = document.querySelectorAll(".next-btn");
                let paginationItem = document.querySelectorAll(".pagination-block__item");

                for (let i = 0; i < nextBtn.length; i++) {
                    nextBtn[i].onclick = function () {

                        mainModuleStage[i].classList = "main-module__stage st-complete";
                        mainModuleStage[i + 1].classList = "main-module__stage st-active";
                        paginationItem[i].classList = "pagination-block__item pag-compl";
                        paginationItem[i + 1].classList = "pagination-block__item pag-active";
                    };
                }
            },
            moduleSwipePrev: function(){
                let mainModuleStage = document.querySelectorAll(".main-module__stage");
                let prevBtn = document.querySelectorAll('.prev-btn')
                let paginationItem = document.querySelectorAll(".pagination-block__item");

                for (let k = 0; k < prevBtn.length; k++) {
                    prevBtn[k].onclick = function () {

                        mainModuleStage[k].classList = "main-module__stage st-active";
                        mainModuleStage[k + 1].classList = "main-module__stage";
                        paginationItem[k + 1].classList = "pagination-block__item pag-compl";
                        paginationItem[k].classList = "pagination-block__item pag-active";
                    };
                }
            },


        },
        data: function () {
            return {
                st1,
                st2,
                st3,
                st4,
                st5,
                st6,
                st7,
                st8,
                st9,
                st10,
                st11,
                st12,
                st13,
                backArrow,
                nextModuleArrow
            };
        },
        methods:{
            darkTheme(){
                let darkItem = document.querySelector('.dark-theme__block-item')
                let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
                let darkRing = document.querySelector('.dark-theme__block-item__ring')
                let bodyDark = document.querySelector('body')
                let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

                let headerLogo = document.querySelector('.header-logo')

                let moduleTitle = document.querySelector('.module-title')
                let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
                let langName = document.querySelectorAll('.lang-name')

                if(darkRing.style.right=='0%'||darkRing.style.right==''){
                    darkRing.style.right='50%';
                    darkRing.style.background='#707070';
                    darkThumb.style.background='#484848'
                    bodyDark.style.background='#E8E8E8'
                    for(let i=0; i<mainModuleStageText.length;i++){
                        mainModuleStageText[i].style.color='#2D2D2D'
                    }
                    moduleTitle.style.color='#2D2D2D'
                    headerLogo.style.filter='brightness(0.2)'
                    for(let i=0; i<moduleListItem.length;i++){
                        moduleListItem[i].style.color='#5F5F5F'
                    }
                    for(let i=0; i<langName.length;i++){
                        langName[i].style.color='#5F5F5F'
                    }

                    localStorage.dark = false

                }
                else{
                    darkRing.style.right='0%';
                    darkRing.style.background='#AAEC92';
                    darkThumb.style.background='#C4C4C4'
                    bodyDark.style.background='#2D2D2D'
                    for(let i=0; i<mainModuleStageText.length;i++){
                        mainModuleStageText[i].style.color='#FFFFFF'
                    }
                    moduleTitle.style.color='#FFFFFF'
                    headerLogo.style.filter='brightness(1)'
                    for(let i=0; i<moduleListItem.length;i++){
                        moduleListItem[i].style.color='#C1C1C1'
                    }
                    for(let i=0; i<langName.length;i++){
                        langName[i].style.color='#C1C1C1'
                    }
                    localStorage.dark = true

                }

            },
            moduleSwipeNext(){
                let mainModuleStage = document.querySelectorAll(".main-module__stage");
                let nextBtn = document.querySelectorAll(".next-btn");
                let paginationItem = document.querySelectorAll(".pagination-block__item");

                for (let i = 0; i < nextBtn.length; i++) {
                    nextBtn[i].onclick = function () {

                        mainModuleStage[i].classList = "main-module__stage st-complete";
                        mainModuleStage[i + 1].classList = "main-module__stage st-active";
                        paginationItem[i].classList = "pagination-block__item pag-compl";
                        paginationItem[i + 1].classList = "pagination-block__item pag-active";
                    };
                }
            },
            moduleSwipePrev(){
                let mainModuleStage = document.querySelectorAll(".main-module__stage");
                let prevBtn = document.querySelectorAll('.prev-btn')
                let paginationItem = document.querySelectorAll(".pagination-block__item");

                for (let k = 0; k < prevBtn.length; k++) {
                    prevBtn[k].onclick = function () {

                        mainModuleStage[k].classList = "main-module__stage st-active";
                        mainModuleStage[k + 1].classList = "main-module__stage";
                        paginationItem[k + 1].classList = "pagination-block__item pag-compl";
                        paginationItem[k].classList = "pagination-block__item pag-active";
                    };
                }
            },
            checkTheme(){
                let darkItem = document.querySelector('.dark-theme__block-item')
                let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
                let darkRing = document.querySelector('.dark-theme__block-item__ring')
                let bodyDark = document.querySelector('body')
                let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

                let headerLogo = document.querySelector('.header-logo')

                let moduleTitle = document.querySelector('.module-title')
                let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
                let langName = document.querySelectorAll('.lang-name')





                if (localStorage.getItem('dark')==='false'){

                    darkRing.style.right='50%';
                    darkRing.style.background='#707070';
                    darkThumb.style.background='#484848'
                    bodyDark.style.background='#E8E8E8'
                    for(let i=0; i<mainModuleStageText.length;i++){
                        mainModuleStageText[i].style.color='#2D2D2D'
                    }
                    moduleTitle.style.color='#2D2D2D'
                    headerLogo.style.filter='brightness(0.2)'
                    for(let i=0; i<moduleListItem.length;i++){
                        moduleListItem[i].style.color='#5F5F5F'
                    }
                    for(let i=0; i<langName.length;i++){
                        langName[i].style.color='#5F5F5F'
                    }
                }
                else{

                    darkRing.style.right='0%';
                    darkRing.style.background='#AAEC92';
                    darkThumb.style.background='#C4C4C4'
                    bodyDark.style.background='#2D2D2D'
                    for(let i=0; i<mainModuleStageText.length;i++){
                        mainModuleStageText[i].style.color='#FFFFFF'
                    }
                    moduleTitle.style.color='#FFFFFF'
                    headerLogo.style.filter='brightness(1)'
                    for(let i=0; i<moduleListItem.length;i++){
                        moduleListItem[i].style.color='#C1C1C1'
                    }
                    for(let i=0; i<langName.length;i++){
                        langName[i].style.color='#C1C1C1'
                    }

                }
            }
        },
        mounted() {
            this.moduleSwipeNext()
            this.moduleSwipePrev()
            this.checkTheme()
        }
    };
</script>