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
    <h2 class="module-title">Модуль 2. Изучение макета сайта.</h2>
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
      
    </div>
    <div class="main-module__stage st-active">
      <p
        class="main-module__stage-text"
      >Большую роль в создании сайта является его правильная оценка. Имея опыт, фронтэнд-разработчик “на лету” видит, как будет выглядеть HTML-код этого сайта. Делается это очень просто. Видели когда-нибудь матрешку? Она состоит из неких слоев, которые вкладываются друг в друга. Так работает и вложенность DOM-дерева нашего будущего сайта. Основой HTML-документа являются теги.</p>
      <p class="main-module__stage-text">
        В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.
        Все эти объекты доступны при помощи JavaScript, мы можем использовать их для изменения страницы. Теперь нужно научиться определять вложенность по макету.
      </p>
      <div class="st-img__block"></div>
      <div class="next-btn__block">
       <router-link :to="{name: 'vModuleOne'}" class="back-module__router">
       <img class="st-img" v-bind:src="nextModuleArrow" alt />
        <p>Модуль 1. Сборка проекта</p>
        
        </router-link>
        <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st1" alt />
      </div>
      <p class="main-module__stage-text">
        Обратите внимание на рисунок выше. Это тренировочный макет, приготовленный дизайнером нашей студии. В данном макете много хитростей, которые нужно будет учесть при работе с CSS. CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML.
        Как правило, большинство сайтов состоит из трех основных логических частей – хэдэра, секций и футэра. Под секциями понимается основной контент страницы, находящийся между хэдэром и футэром.
      </p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Хэдэр – это шапка сайта. От слова “хэд” (с англ. Head - голова), данный раздел сайта находится в самом верху. В хэдэре чаще всего располагают навигационное меню по сайту, состоящее из ссылок, списков со ссылками и (или) логотипом.</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st2" alt />
      </div>
      <p
        class="main-module__stage-text"
      >Как видно на рисунке выше, в этом хэдэре присутствуют ссылки на другие страницы сайта.</p>
      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Основная часть – секции сайта включает в себя главную информацию – то, зачем пользователь заходит на сайт.</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st3" alt />
      </div>
      <p
        class="main-module__stage-text"
      >В данном случае дизайнер предоставил нам абстрактное расположение блоков и их наполнение “дочерними” элементами.</p>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st4" alt />
      </div>
      <p
        class="main-module__stage-text"
      >На рисунке выше показан футэр – подвал сайта. Назван от английского foot – нога. Данный раздел сайта предназначен для удобности эксплуатации сайта в случае, если на странице много контента, и пользователь долистал сайт до конца вниз, но ему нужно срочно перейти на другую страницу или найти какой-то другой раздел. В футэре, как и в хэдэре, расположены основные ссылки на страницы сайта, как привило, в футэре их чуть больше, чем в хэдэре. Также в футэре иногда располагают нормативные акты организации, акты об авторских правах и правилах пользования сайтом.</p>
      <p
        class="main-module__stage-text"
      >Итого – сайт представляет собой человека, у которого есть голова (хэдэр), туловище (контент) и футэр (ноги). Но для чего же был приведен пример матрешки? Вернемся к началу.</p>
      <p
        class="main-module__stage-text"
      >Полезным навыком в разработке сайтов является определение вложенности при просмотре макета.</p>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
     
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st5" alt />
      </div>
       <p class="main-module__stage-text">
        Добавив на макет 12-полосную сетку, можно заметить, что все блоки, несущие в себе какую-либо смысловую нагрузку, находятся в пределах определенной области, имеющей боковые отступы. Такая область называется областью контента. Обычно при написании html-кода, таким блокам присваивается одноименный класс (class=”content”). 
      </p>
       
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
       Пойдем по порядку. Чтобы получить такой же хэдэр, нужно обратить внимание на то, что он состоит из двух частей
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st6" alt />
      </div>
      <p class="main-module__stage-text">
       Самая большая, первая ступень вложенности, имеет максимальную ширину – по всей ширине окна браузера. В этот блок будет вложен блок поменьше, как было уже сказано выше, который будет иметь класс “content”. 
      </p>
      <p class="main-module__stage-text">
       И уже в этот блок будут вложены ссылки, которые будут отделены внешними отступами. Итог, взглянув на хэдэр, сразу видна вложенность, которая будет выглядеть следующим образом:
      </p>
      <p class="lang-name">HTML:</p>
    <div class="st-img__block">
        <img class="st-img" v-bind:src="st10" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">
        Вложенность следующего блока так же проста.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st7" alt />
      </div>
       <p class="main-module__stage-text">
        У нас есть самый большой блок, в который вложены два блока поменьше:
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st8" alt />
      </div>
      <p class="main-module__stage-text">
        Эти блоки отмечены голубым и фиолетовым цветами. Углубляемся дальше. Смотрим на блок слева. Этот блок пустой, у него нет дочерних блоков, на этом вложенность данного блока заканчивается. Смотрим на правый блок. Этот блок не пустой, у него есть два дочерних блока, отмеченных салатовым и голубым цветами:
      </p>
      
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st9" alt />
      </div>
      <p class="main-module__stage-text">
        Если взглянуть на последние два блока, можно заметить, что они пустые, тем самым, на этом вложенность заканчивается.


      </p>
       <p class="main-module__stage-text">Итого – вложенность данного блока будет выглядеть следующим образом:    </p>
        <div class="st-img__block">
        <img class="st-img" v-bind:src="st11" alt />
      </div>
     <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
     <div class="main-module__stage">
     
        <p class="lang-name">Задание к модулю 2.</p>
       <p class="main-module__stage-text">
    
Напишите вложенность для остальных блоков. В случае возникновения сложности написания html-кода, напишите логику словами.

      </p>
       
      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
      <router-link :to="{name: 'vModuleThree'}" class="next-module__router">
        <p>Модуль 3. Таблицы стилей</p>
        <img class="st-img" v-bind:src="nextModuleArrow" alt />
        </router-link>
      </div>
    </div>
    
  </div>
</template>
 
<script>
import st1 from "@/assets/M-2/2-1.png";
import st2 from "@/assets/M-2/2-2.png";
import st3 from "@/assets/M-2/2-3.png";
import st4 from "@/assets/M-2/2-4.png";
import st5 from "@/assets/M-2/2-5.png";
import st6 from "@/assets/M-2/2-6.png";
import st7 from "@/assets/M-2/2-7.png";
import st8 from "@/assets/M-2/2-8.png";
import st9 from "@/assets/M-2/2-9.png";
import st10 from "@/assets/M-2/2-10.png";
import st11 from "@/assets/M-2/2-11.png";
import backArrow from "@/assets/back-arrow.svg";
import nextModuleArrow from "@/assets/next-module-arrow.svg";

export default {
  name: "v-module-two",
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