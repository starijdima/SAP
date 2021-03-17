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
    <h2 class="module-title">Модуль 1. Сборка проекта.</h2>
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
      <p class="main-module__stage-text">
       Для начала обучения, посмотрите следующее видео:
      </p>
      <div class="st-img__block">
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/357_BAchn4w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div id="audio" class="player-wrapper">
              <audio-player file="http://hipmack.co/wp-content/uploads/2018/02/Kendrick_Lamar_Ft_Travis_Scott_-_Big_Shot.mp3"></audio-player>
          </div>
      </div>
      <div class="next-btn__block">
      
        <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
      </div>
     
    </div>
      <div class="main-module__stage">
          <p class="main-module__stage-text">
              Итак, после просмотра видео о введении в верстку, приступим к практике. Чтобы создать сайт, нужно провести несколько подготовительных манипуляций. В данном примере будет показана сборка чистого проекта без использования фрэймворков.
              Итак, для начала создадим папку с проектом на рабочем столе.
          </p>
          <div class="st-img__block">
              <img class="st-img min-img" v-bind:src="st1" alt />
          </div>
          <div class="next-btn__block">
              <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
              <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
          </div>
      </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Далее – заходим в папку и создаем несколько дополнительных папок: fonts, styles, scripts, img.</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st2" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >И в конце этой же папки создаем сначала текстовый документ (блокнот), который переименовываем в index.html. Чтобы включить возможность смены расширения документа, находясь в папке, необходимо в верхнем меню выбрать вкладку «Вид» и найти флажок «Расширения имен файлов». Если данная функция у вас выключена, то нужно ее включить.</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st3" alt />
      </div>
    <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Убедившись в том, что данная функция включена, создаем html-файл.
        При смене расширения файла, покажется диалоговое окно с уведомлением о смене расширения файла.
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
      <p
        class="main-module__stage-text"
      >Итого на начальном этапе сборки вашего веб-проекта, он будет выглядеть следующим образом:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st5" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Теперь перейдем в среду разработки. Рекомендуемая среда разработки – “Microsoft Visual Code”, которую можно скачать по ссылке: https://code.visualstudio.com/download .
        Открыв данный редактор кода, нужно будет произвести его настройку.
      </p>
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
        На прошлом слайде был показан интерфейс редактора кода Microsoft Visual Code с установленным русификатором.
        Чтобы установить русификатор и некоторые другие нужные плагины, нужно обратить внимание на левое вертикальное меню.
      </p>
      <div class="st-img__block">
        <img class="st-img min-min-img" v-bind:src="st7" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Данный пункт меню приведет в обозреватель плагинов редактора.
        Для удобной и корректной работы с редактором кода, ниже представлен список плагинов, которые необходимо установить:
      </p>
      <div class="st-img__block">
        <img class="st-img min-img" v-bind:src="st8" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">Переходим в верхний пункт вертикального меню.</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st9" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Нажимаем на кнопку «Открыть папку» и ищем созданную папку с проектом.</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st10" alt />
      </div>
    <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">Нашли – нажимаем внизу на «Выбор папки» и вуоля!</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st11" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Наш проект открылся в редакторе кода. Осталось создать обязательный HTML-каркас, без которого наш сайт не будет работать. Для этого нажимаем на файл index.html. В открывшемся окне введем “html:5”:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st12" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">И получим следующий результат:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st13" alt />
      </div>
    <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Поздравляем! Каркас вашего проекта готов, теперь попробуем что-то написать в пределы тэга body и посмотреть, что произойдет.
        Не поскупившись на креатив, напишем следующую строку:
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st14" alt />
      </div>
    <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Но как теперь посмотреть результат изменения html-документа? Для удобства включим автосохранение файлов в проекте, перейдя в верхнем горизонтальном меню во вкладку «файл» и найдем в нем пункт «автосохранение». Одиночное нажатие левой кнопкой мыши на этот пункт позволит включить автосохранение любых изменений в проекте, что значительно сохранит вам нервы и время. Осталось запустить локальный сервер и посмотреть плоды нашего творения.
        В списке предложенных плагинов для установки был плагин под названием “Live Server”:
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st15" alt />
      </div>
    <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Чтобы им воспользоваться, нужно, находясь в открытом html-документе, найти в нижней синей панеле справа кнопку “Go Live”.
        Нажатие на эту кнопку произведет запуск локального сервера для данного проекта.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st16" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Готово! Написанное нами сообщение в html-документе отобразилось на странице.<p>


        <p class="main-module__stage-text">
        Создав свой первый веб-проект, вы начали свой путь в программировании. Этот путь будет сложным, но безумно интересным, который подарит вам удивительные знакомства, исключительную логику, ясность мыслей и повысит уровень вашего интеллекта.  Пора перейти к следующему модулю – изучению макета сайта.

      </p>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <router-link :to="{name: 'vModuleTwo'}" class="next-module__router">
        <p>Модуль 2. Изучение макета сайта</p>
        <img class="st-img" v-bind:src="nextModuleArrow" alt />
        </router-link>
       
      </div>
      
    </div>
  </div>
</template>

 
<script>



import st1 from "@/assets/M-1/1-1.png";
import st2 from "@/assets/M-1/1-2.png";
import st3 from "@/assets/M-1/1-3.png";
import st4 from "@/assets/M-1/1-4.png";
import st5 from "@/assets/M-1/1-5.png";
import st6 from "@/assets/M-1/1-6.png";
import st7 from "@/assets/M-1/1-7.png";
import st8 from "@/assets/M-1/1-8.png";
import st9 from "@/assets/M-1/1-9.png";
import st10 from "@/assets/M-1/1-10.png";
import st11 from "@/assets/M-1/1-11.png";
import st12 from "@/assets/M-1/1-12.png";
import st13 from "@/assets/M-1/1-13.png";
import st14 from "@/assets/M-1/1-14.png";
import st15 from "@/assets/M-1/1-15.png";
import st16 from "@/assets/M-1/1-16.png";
import backArrow from "@/assets/back-arrow.svg";
import nextModuleArrow from "@/assets/next-module-arrow.svg";




export default {

  name: "v-module-one",
  components: {},


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
      st14,
      st15,
      st16,
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